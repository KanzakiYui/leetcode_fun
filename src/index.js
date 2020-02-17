import data from './constant';

// register the highlight lib only for javascript
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);



// preparation
data.sort((a, b)=> a.localeCompare(b));
const names = data.map(info => info.name);
const filenames = data.map(info => info.filename);
const functionNames = data.map(info => info.functionName);

// Setup initial UI
const defaultValue = names[0];
const selectElement = document.getElementById('select-topic');
names.forEach((name, index) => {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', index);
    newOption.textContent = name;
    selectElement.appendChild(newOption);
});
selectElement.setAttribute('defaultValue', defaultValue);

// Setup initial Content
import(`./questions/${filenames[0]}.js`).then(importedModules => {
    const functionName = functionNames[0];
    const fileContent = `const ${functionName} = ${String(importedModules.default)}`;
    const codeArea = document.getElementById('code-block');
    codeArea.textContent = fileContent;
    hljs.highlightBlock(codeArea);
});
