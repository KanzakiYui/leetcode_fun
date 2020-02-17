import data from './constant';
import render from './render';

// preparation
data.sort((a, b)=> a.name.localeCompare(b.name));
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
selectElement.addEventListener('change', (event) => {
    const value = event.target.value;
    render(filenames[value], functionNames[value])
});

// Setup initial Content
render(filenames[0], functionNames[0]);
