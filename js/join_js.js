var form = document.getElementById("signup");// selector for full form
var names = document.querySelector("[name=name]");// selectors for each field
var usernames = document.querySelector("[name=username]");
var email = document.querySelector("[name=email]");
var submit = document.getElementById("submit") // selector for submit button
var reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
form.noValidate = "novalidate";

function verifyAll() { // checks that all fields pass before running goToGallery(), else does not re direct
    function validate() { // checks name field, if pass, checks username field
        if (names.value.length < 1) {
            alert("Error, invalid name");        return false;
        }

        else {
            if (usernames.value.length < 1) 
                alert("Error, invalid Username");
                return false;
            }
        } 
        return true;
        }
    function emailValidate() { // validates email field
        if (!reg.test(email.value)) {
            alert("Error, invalid Email");
            return false;
        }
        return true;
    }

    function goToGallery() { // changes function of submit button to change pages 
    form.setAttribute("action", "gallery.html" + "?" + names.value);
    }

    if (validate() && emailValidate()) {
        goToGallery();
    } 
    else {
        event.preventDefault();
    }
}

submit.addEventListener('click', function() { verifyAll() });




