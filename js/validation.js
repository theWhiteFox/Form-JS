/* @ Stephen O'Connor */
(function () {

   validateForm = function () {
      for (var i = 0; i < myform.elements.length; i++) {
         if (myform.elements[i].className === "req" && myform.elements[i].value.length === 0) {
            alert('Please fill in all required fields');
            return false;
         }
      }

      var email = document.getElementById('email').value,
              atPos = email.indexOf('@'),
               dotPos = email.lastIndexOf('.');

      if (atPos < 1 || dotPos + 2 || dotPos + 2 >= x.length) {
         alert('Please enter valid email address');
         return false;
      }
   };
}());