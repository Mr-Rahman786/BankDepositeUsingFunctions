// 1:get withdraw button  using even handler
// 2:get withdraw amount by using getInputFieldValueById functions
// 3:get withdraw previous amount by using getTexElementValueById functions
// 4:calculate new withdraw total and set the value
// 5:set withdraw Total using setTextElementValueById (import utilitis/deposite) functions
// 6:get previous balance total by using getTextElmentValueByID(imporst utilities/deposite) functions
// 7:calculate new balance total

// stepOne
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // stepTwo
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    // stepThree
    const previousWithdrawTotal = getTexElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextELementById('withdraw-total', newWithdrawTotal);

    // step
    const previousBalanceTotal = getTexElementValueById('balance-total');
    const newBalancetotal = previousBalanceTotal - newWithdrawAmount;
    setTextELementById('balance-total', newBalancetotal);
    
})