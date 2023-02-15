function updateCaseNumber(isIncrease){
    const caseQuantity = document.getElementById('case-number');
    const caseQuantityValue = parseInt(caseQuantity.value);
    const caseQuantityCurrentValue = caseQuantityValue;

    let newCaseNumber;

    if(isIncrease === true) {
        // const caseQuantityNewValue = caseQuantityCurrentValue + 1;
        // caseQuantity.value = caseQuantityNewValue;
        newCaseNumber = caseQuantityCurrentValue + 1;
    } else {
        // const caseQuantityNewValue = caseQuantityCurrentValue - 1;
        // caseQuantity.value = newCaseNumber;
        newCaseNumber = caseQuantityCurrentValue - 1;
    }
    caseQuantity.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice (newCaseNumber) {
    const totalCasePrice = newCaseNumber * 59;

    const totalCase = document.getElementById('case-total');
    totalCase.innerText = totalCasePrice;
}

document.getElementById('case-btn-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice (newCaseNumber);
    calculateSubTotal ();

})

document.getElementById('case-btn-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice (newCaseNumber);
    calculateSubTotal ();
})