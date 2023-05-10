function encrypt() {
  let text = document.getElementById('input').value;
  text = text.toLowerCase();
  text = text.replace(/e/g, 'enter');
  text = text.replace(/i/g, 'imes');
  text = text.replace(/a/g, 'ai');
  text = text.replace(/o/g, 'ober');
  text = text.replace(/u/g, 'ufat');
  document.getElementById('output').value = text;
  toggleDivVisibility();
}

function decrypt() {
  let text = document.getElementById('input').value;
  text = text.replace(/enter/g, 'e');
  text = text.replace(/imes/g, 'i');
  text = text.replace(/ai/g, 'a');
  text = text.replace(/ober/g, 'o');
  text = text.replace(/ufat/g, 'u');
  document.getElementById('output').value = text;
  toggleDivVisibility();
}

function copyToClipboard() {
  let output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  alert('El texto ha sido copiado al portapapeles.');
}

function toggleDivVisibility() {
  let outputText = document.getElementById('output').value;
  let ocultarDiv = document.getElementById('ocultar');
  let btnCopiar = document.getElementById('btnCopiar');

  if (outputText === "") {
    ocultarDiv.style.display = "block";
    btnCopiar.style.display = "none";
  } else {
    ocultarDiv.style.display = "none";
    btnCopiar.style.display = "block";
  }
}




let output = document.getElementById('output');

output.addEventListener('input', () => {
  output.style.height = 'auto';
  output.style.height = output.scrollHeight + 'px';
  toggleDivVisibility();
});

let input = document.getElementById('input');

input.addEventListener('input', () => {
  input.style.height = 'auto';
  input.style.height = input.scrollHeight + 'px';
});