import katex from "katex";

/**
 * Render LaTeX in text.
 * Supports:
 *   - Inline:  $...$   and  \(...\)
 *   - Display: $$...$$ and  \[...\]
 *
 * Delimiters are processed in this order to avoid collisions:
 *   \[...\]  →  $$...$$  →  \(...\)  →  $...$
 *
 * @param {string} text - Text containing LaTeX expressions
 * @returns {string} HTML string with rendered KaTeX
 */
export function renderLatex(text) {
  if (!text) return "";

  const renderDisplay = (_, math) => {
    try {
      return katex.renderToString(math.trim(), {
        displayMode: true,
        throwOnError: false,
      });
    } catch (e) {
      return `<span style="color:red">[latex error: ${e.message}]</span>`;
    }
  };

  const renderInline = (_, math) => {
    try {
      return katex.renderToString(math.trim(), {
        displayMode: false,
        throwOnError: false,
      });
    } catch (e) {
      return `<span style="color:red">[latex error: ${e.message}]</span>`;
    }
  };

  // 1) Display \[...\] (lazy multiline)
  let result = text.replace(/\\\[([\s\S]*?)\\\]/g, renderDisplay);

  // 2) Display $$...$$ (lazy multiline)
  result = result.replace(/\$\$([\s\S]*?)\$\$/g, renderDisplay);

  // 3) Inline \(...\) (single-line)
  result = result.replace(/\\\(([^\n]*?)\\\)/g, renderInline);

  // 4) Inline $...$ (single-line)
  result = result.replace(/\$([^$\n]+)\$/g, renderInline);

  // Lightweight markdown: **bold** and *italic* (outside math, since math
  // was already converted to HTML spans above).
  result = result.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
  result = result.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');

  return result;
}
