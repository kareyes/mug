#!/bin/bash
set -e

echo "Building project..."
pnpm build

echo "Deploying to Firebase Hosting..."
node /home/katsu/.proto/tools/node/23.11.0/lib/node_modules/firebase-tools/lib/bin/firebase.js deploy --only hosting

echo "Deploy complete!"
