var form = $('#signup');
var names = $('[name=name');

form.validate({
    rules: {
       name: {
           required: true,
           minlength: 2,
       },

       username: {
           required: true,
           minlength: 5,
       },

       email: {
           required: true,
           email: true,
       }
   },
    submitHandler: function(form) {
      event.preventDefault();
      window.location.href = "gallery.html?" + names.val() + "!"
    }

});




   



