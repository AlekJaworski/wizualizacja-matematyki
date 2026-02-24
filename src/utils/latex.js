import katex from "katex";

/**
 * Render LaTeX in text.
 * Supports:
 *   - Inline: $...$
 *   - Display: $$...$$
 * 
 * @param {string} text - Text containing LaTeX expressions
 * @returns {string} HTML string with rendered KaTeX
 */
export function renderLatex(text) {
  if (!text) return "";

  // Replace display math $$...$$ first (non-greedy)
  let result = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    try {
      return katex.renderToString(math.trim(), {
        displayMode: true,
        throwOnError: false,
      });
    } catch (e) {
      return `<span style="color:red">[latex error: ${e.message}]</span>`;
    }
  });

  // Then replace inline $...$
  result = result.replace(/\$([^$\n]+)\$/g, (_, math) => {
    try {
      return katex.renderToString(math.trim(), {
        displayMode: false,
        throwOnError: false,
      });
    } catch (e) {
      return `<span style="color:red">[latex error: ${e.message}]</span>`;
    }
  });

  return result;
}
