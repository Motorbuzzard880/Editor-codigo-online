document.getElementById('html').addEventListener('input', updateOutput);
document.getElementById('css').addEventListener('input', updateOutput);
document.getElementById('js').addEventListener('input', updateOutput);

function updateOutput() {
  const html = document.getElementById('html').value;
  const css = document.getElementById('css').value;
  const js = document.getElementById('js').value;
  const output = document.getElementById('output');

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  output.srcdoc = srcDoc;
}

