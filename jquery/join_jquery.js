if( !$('#signup').validate({
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
   }

})) {
    event.preventDefault();
}

else {
    $('#signup').attr('action','gallery.html')
}


   



