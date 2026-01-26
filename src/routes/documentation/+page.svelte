<!-- <script lang="ts">
  import { marked } from "marked";
  import DOMPurify from "dompurify";
//   import docs from "../docs/accordion.md";

  let html = "";

  async function loadMarkdown() {
    const res = await fetch("/docs/accordion.md");
    const text = await res.text();

    html = DOMPurify.sanitize(await marked.parse(text));
  }

  loadMarkdown();
</script>

<div class="markdown" >
   {@html html}
</div> -->