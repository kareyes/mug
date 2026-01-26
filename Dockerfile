FROM node:22-slim AS builder

WORKDIR /app

ARG NPM_TOKEN

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

RUN echo "@kareyes:registry=https://npm.pkg.github.com" > .npmrc && \
    echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> .npmrc

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:22-slim AS runner

WORKDIR /app

ARG NPM_TOKEN

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./

RUN echo "@kareyes:registry=https://npm.pkg.github.com" > .npmrc && \
    echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> .npmrc

RUN pnpm install --prod --frozen-lockfile

# Remove .npmrc after install to not leak token in final image
RUN rm -f .npmrc

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["node", "build"]
