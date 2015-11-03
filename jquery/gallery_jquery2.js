var images = [] // blank array to load images into 
var imgs= $('#image_show');// to show enlarged images
function pic() { // assigns source name to each item in images array
    if (i <10){
        images.push("<li><img src =images/pdxcg_0" + i + ".jpg class = 'pic'></li>"); 
    }
    else {
        images.push("<li><img src =images/pdxcg_" + i + ".jpg class = 'pic'></li>");
    }
}

for (i = 1; i <60; i++) { // gets all images into image array
  pic(i)  
}

$.each(images, function(i,v) { // for each image, append it to the gallery
    $('#gallery').append(v);
});

$('.gallery').on('click', function(event) { // when item with class "pic" is selected (in this case the images) the image is enlarged
    if (event.target.className === 'pic') {
        imgs.attr('class','display_img');
        imgs.children().first().attr('src', event.target.src);
    }
});

imgs.on('click', function(event) { // click off image to reduce image size after enlarging it. 
    if(event.target != imgs.children().first()[0]) {
        imgs.attr('class', 'display_none');
    };
});

 