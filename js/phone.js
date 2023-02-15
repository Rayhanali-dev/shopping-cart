function updatePhoneNumber (isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldValue = parseInt(phoneNumberField.value);

    let newPhoneNumberValue;

    if (isIncrease === true) {
        newPhoneNumberValue = phoneNumberFieldValue + 1;
    } else {
        newPhoneNumberValue = phoneNumberFieldValue - 1;
    }
    phoneNumberField.value = newPhoneNumberValue;
    return newPhoneNumberValue;

}


function updatePhoneTotalPrice (newPhoneNumber) {
    const totalPhone = document.getElementById('phone-total');
    const totalPhoneNumber = newPhoneNumber * 1219;
    totalPhone.innerText = totalPhoneNumber;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber (true);
    updatePhoneTotalPrice(newPhoneNumber);

    // calculate 
    
    calculateSubTotal ();
    
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber (false);
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal ();
})