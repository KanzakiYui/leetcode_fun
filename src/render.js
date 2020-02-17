// register the highlight lib only for javascript
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default (filename, functionName) => {
    import(`./questions/${filename}.js`).then(importedModules => {
        const fileContent = `const ${functionName} = ${String(importedModules.default)}`;
        const codeArea = document.getElementById('code-block');
        codeArea.textContent = fileContent;
        hljs.highlightBlock(codeArea);
    });
};