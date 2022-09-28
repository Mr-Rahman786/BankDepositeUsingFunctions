function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFielldValueString = inputField.value
    const inputFieldvalue = parseFloat(inputFielldValueString);
    inputField.value = '';  
    return inputFieldvalue;
} 

function getTexElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueSTring = textElement.innerText;
    const textElemetValue = parseFloat(textElementValueSTring)
    return textElemetValue;
}
function setTextELementById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}