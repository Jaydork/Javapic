var $jumbo = $('.jumbotron'); // selector for the jumbotron CSS 
images = [] // blank array to load images into
x = 0
var url = function() { // addes images to images array
    for (var i = 1; i < 60; i++) {
        if (i < 10) {
            images.push('url("images/pdxcg_0' + i + '.jpg")') //adds a number 1-9  for those pictures below 10
        }
        else {
            images.push('url("images/pdxcg_' + i + '.jpg")') //adds a number 10+ for pictures past 10
        }
    }
}
picTimer = function() { // sets timer for slideshow 
    $jumbo.css('background-image', images[x]); // image indexed to read each image element
    x++;
    if(x >= images.length) { // if x cycles through the list it restarts
        x = 0;
    }
}

url();
setInterval("picTimer()", 10000); // 10 second interval
