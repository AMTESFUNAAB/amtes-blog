if (typeof renderMathInElement !== 'undefined') {
  renderMathInElement(document.body);
} else if (document.getElementById("katex-render")) {
  document.getElementById("katex-render").addEventListener("load", () => {
    renderMathInElement(document.body);
  });
}
