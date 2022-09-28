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

document.getElementById('btn-deposite').addEventListener('click', function () {
    
    // 
    const depositeAmount = getInputFieldValueById('deposite-field');

    // get privious deposite total by id
    const previousDepositeTotal = getTexElementValueById('deposite-total');
    
    // total
    const newDepositeTotal = previousDepositeTotal + depositeAmount;
    setTextELementById('deposite-total', newDepositeTotal);

    // balance total
    const previousBalanceTotal = getTexElementValueById('balance-total');

    // total balance addede
    const newbalanceTotal = previousBalanceTotal + depositeAmount;  
    setTextELementById('balance-total', newbalanceTotal);
})  