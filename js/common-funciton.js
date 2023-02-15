function getTextElement (elementid) {
    const phonetotalElement = document.getElementById(elementid);
    const phonetotalElementValue = parseInt(phonetotalElement.innerText);
    return phonetotalElementValue;
}

function setElementTextById(id, value){
    const totalCost = document.getElementById(id);
    totalCost.innerText = value;
}


function calculateSubTotal () {
    const currentPhoneTotal = getTextElement ('phone-total');
    const currentCaseTotal = getTextElement('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setElementTextById('total-cost', currentSubTotal);

    const taxAmountTotal = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountTotal)
    setElementTextById('tax', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setElementTextById('final-amount', finalAmount);
}
