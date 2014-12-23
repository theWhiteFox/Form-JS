/* @ Stephen O'Connor */
(function () {

   $(function () {
      // console.log("This is ready");
      $('li.fields').filter(':nth-child(n+4)').addClass('hide');

      $('ul').on('click', 'li.title', function() {
      	$(this).next().slideDown(200).siblings('li.fields').slideUp(200);
      });
   });

}());