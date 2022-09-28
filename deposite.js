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