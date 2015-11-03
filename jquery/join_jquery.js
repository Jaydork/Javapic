var form = $('#signup'); // shortcut selector for the form
var names = $('[name=name'); // selector to grab the name to be carried over to the gallery.

form.validate({ // jQuery library for form validatoin
    rules: {
       name: { // requires name to have at least 2 characters
           required: true,
           minlength: 2,
       },

       username: { // same as name, but 5 character minimum
           required: true,
           minlength: 5,
       },

       email: { // looks for the @ and .com to validate email
           required: true,
           email: true,
       }
   },
    submitHandler: function(form) {// moves to gallery page after submitting correct information.
      event.preventDefault();
      window.location.href = "gallery.html?" + names.val() + "!"
    }

});




   



