document.addEventListener("DOMContentLoaded", function() {


const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const phoneNumber = document.querySelector("#phone-number");
const userEmail = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const emailError = document.querySelector('#email-error');
const telError = document.querySelector('#tel-error');
const pwError = document.querySelector('#password-error');
const pwCError = document.querySelector('#passwordC-error');






password.addEventListener("input", function (event) {
    if (password.validity.patternMismatch){
      const currentValue = password.value;
      const regExpCap = /[A-Z]/g;
      const regExpDig = /[0-9]/g;
      let result = '';
      if (regExpCap.test(currentValue)){
        result += '';
      } else {
        result += `Missing at least 1 capital letter. `;
        result += '\n';
      }


      if (regExpDig.test(currentValue)){
        result += '';
      } else {
        result += 'Missing at least 1 number. ';
        result += '\n';
      }
      
      if (currentValue.length < 9){
        result += 'Password must be at least 8 characters. '
        result += '\n';
      } else {
        result += '';
      }

      console.log(result);
      pwError.textContent = result;


    } else {
      pwError.textContent = '';
    }
  });




  confirmPassword.addEventListener("input", function (event) {
    if (confirmPassword.value !== password.value) {
      pwCError.textContent = 'Passwords do not match';
    } else {
      pwCError.textContent = '';
    }
  });



userEmail.addEventListener("input", function (event) {
    if (userEmail.validity.typeMismatch) {
      emailError.innerHTML = "Please enter in a valid Email.ex(johnSmith@email.com)";
    } else {
      emailError.setCustomValidity = '';
    }
  });


  phoneNumber.addEventListener("input", function (event) {
    if (phoneNumber.validity.patternMismatch) {
      telError.textContent = 'Please enter in a 10 digit phone number';
    } else {
      telError.textContent = '';
    }     
  });

})