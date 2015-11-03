var gallery = document.getElementById('gallery'); // gets each photo 
var images = [];
var enlargedImage = document.getElementById('image_show'); // stores id for the image show ID

function pic(i) { // assigns source name to each item in images array
    if (i <10){
        return("images/pdxcg_0" + i + ".jpg"); 
    }
    else {
        return("images/pdxcg_" + i + ".jpg");
    }
}

function display() { // builds the list of images
    var li;
    for (i = 0; i <images.length; i++) { // runs through each photo, turning it into a list object
        li = document.createElement("li"); 
        li.appendChild(images[i]);
        gallery.appendChild(li); // appends new list item to gallery to be displayed
    }
}

function buildArray() { // creates image object and is assigned a source thorugh pic()
    var img;
    for (i = 1; i < 60; i++) {
        img = document.createElement("img"); 
        img.src = (pic(i));
        img.className = "pics"; // assigns a class name
        images.push(img); // appends image to image array to be displayed
        }
    return images;
}

document.addEventListener('click', function(){ // clicking on photo to enlarge
    if (event.target.className === 'pics'){
        enlargedImage.className = "display_img"; // overrides css default of "none"
        enlargedImage.firstChild.src = event.target.src; 
    }
    else {
        enlargedImage.className = "display_none";
    }
});
    


buildArray();
display();



