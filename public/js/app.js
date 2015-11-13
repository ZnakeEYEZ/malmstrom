/**
 * Created by James on 2015-11-13.
 */
var images;
var imagesIndex;

window.onload = function () {
    app.start();
};

var app = {
    start: function(){
        images = ['1.jpg', '2.png', '3.png', '4.jpg', '5.jpg', '6.jpg'];
        imagesIndex = images.length -1;
        var src = "images/" + images[imagesIndex];
        document.getElementsByClassName('image')[0].setAttribute("src", src);
        document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:none");
    },
    back: function(){
        imagesIndex = imagesIndex - 1;
        if(imagesIndex >= 0)
        {
            var src = "images/" + images[imagesIndex];
            document.getElementsByClassName('image')[0].setAttribute("src", src);

            if(imagesIndex == 0)
                document.getElementsByClassName('backControl')[0].setAttribute("style", "display:none");

            if(imagesIndex == images.length -2)
            document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:block");
        }
        else
        {
            imagesIndex = 0;
            document.getElementsByClassName('backControl')[0].setAttribute("style", "display:none");
        }

    },
    forward: function () {
        imagesIndex = imagesIndex + 1;

        if(imagesIndex <= images.length -1)
        {
            var src = "images/" + images[imagesIndex];
            document.getElementsByClassName('image')[0].setAttribute("src", src);

            if(imagesIndex == images.length -1)
                document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:none");

            if(imagesIndex == 1)
                document.getElementsByClassName('backControl')[0].setAttribute("style", "display:block");
        }
        else
        {
            document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:none");
        }
    }
};