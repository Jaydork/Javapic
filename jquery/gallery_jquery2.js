var images = []
var imgs= $('#image_show');
function pic() { // assigns source name to each item in images array
    if (i <10){
        images.push("<li><img src =images/pdxcg_0" + i + ".jpg class = 'pic'></li>"); 
    }
    else {
        images.push("<li><img src =images/pdxcg_" + i + ".jpg class = 'pic'></li>");
    }
}

for (i = 1; i <60; i++) {
  pic(i)  
}

$.each(images, function(i,v) {
    $('#gallery').append(v);
});

$('.gallery').on('click', function(event) {
    if (event.target.className === 'pic') {
        imgs.attr('class','display_img');
        imgs.children().first().attr('src', event.target.src);
    }
});

imgs.on('click', function(event) {
    if(event.target != imgs.children().first()[0]) {
        imgs.attr('class', 'display_none');
    };
});

 