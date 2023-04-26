function encrypt() {
  let text = document.getElementById('input').value;
  text = text.toLowerCase();
  text = text.replace(/e/g, 'enter');
  text = text.replace(/i/g, 'imes');
  text = text.replace(/a/g, 'ai');
  text = text.replace(/o/g, 'ober');
  text = text.replace(/u/g, 'ufat');
  document.getElementById('output').value = text;
}

function decrypt() {
  let text = document.getElementById('input').value;
  text = text.replace(/enter/g, 'e');
  text = text.replace(/imes/g, 'i');
  text = text.replace(/ai/g, 'a');
  text = text.replace(/ober/g, 'o');
  text = text.replace(/ufat/g, 'u');
  document.getElementById('output').value = text;
}

function copyToClipboard() {
  let output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  alert('El texto ha sido copiado al portapapeles.');
}

