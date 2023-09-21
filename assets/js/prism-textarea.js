var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/prism.js';
document.body.appendChild(script);

var csslink = document.createElement('link');
csslink.setAttribute('rel', 'stylesheet');
csslink.setAttribute('type', 'text/css');
// csslink.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/themes/prism-solarizedlight.css');
document.getElementsByTagName('head')[0].appendChild(csslink);


function checkLoadPrism() {
  if (!window.Prism) {
    setTimeout(() => {
      checkLoadPrism();
    }, 100);
  } else {
    renderPrism();
  }
}

function renderPrism() {
  var textareas = document.getElementsByTagName('textarea');
  Array.from(textareas).forEach((textarea) => {
    let preEl = document.createElement('pre');
    preEl.setAttribute('contenteditable', true);
    preEl.setAttribute('class', 'language-html');
    preEl.textContent = textarea.value;
    textarea.parentNode.replaceChild(preEl, textarea);
    
    Prism.highlightElement(preEl);
    
    preEl.addEventListener('input', (e) => {
      preEl = e.target;
      Prism.highlightElement(preEl);
    });
  });
}



checkLoadPrism();