/**
 * Created by James on 2015-11-13.
 *
 */

var imageLib = ['1.jpg', '2.png', '3.png', '4.jpg', '5.jpg', '6.jpg'];
var images;
var imagesIndex;
var intervalId;
var src;
var daysToRemove;

window.onload = function () {
    app.countdownTimer();
};

var app = {
    start: function(){
        images = imageLib;
        images = images.splice(daysToRemove);
        console.log(images);

        imagesIndex = 0;
        src = "images/" + images[0];

        document.getElementsByClassName('image')[0].setAttribute("src", src);
        document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:none");
        if(images < 1)
            document.getElementsByClassName('backControl')[0].setAttribute("style", "display:none");
    },
    back: function(){
        imagesIndex = imagesIndex + 1;
        console.log(imagesIndex);

        var src = "images/" + images[imagesIndex];
        document.getElementsByClassName('image')[0].setAttribute("src", src);

        if(imagesIndex == images.length -1)
        {
            document.getElementsByClassName('backControl')[0].setAttribute("style", "display:none");
            document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:block");
        }

    },
    forward: function () {
        imagesIndex = imagesIndex - 1;
        console.log(imagesIndex);

        var src = "images/" + images[imagesIndex];
        document.getElementsByClassName('image')[0].setAttribute("src", src);

        if(imagesIndex == 0)
        {
            document.getElementsByClassName('backControl')[0].setAttribute("style", "display:block");
            document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:none");
        }
    },
    countdownTimer: function(){
        clearInterval(intervalId);

        var endDate = moment([2015, 11, 16, 23, 59, 59]);
        console.log("endDate: " + endDate);
        var currentTime = moment.utc(); //+ 86400000;//26800000; //+ 28800000; //hour 3600000; //+ day: 86400000; //currentTime = 2015-12-11: 5 dagar kvar till 2015-12-16 = 1 bild i array
        console.log("currentTime: " + currentTime);
        var msUntilStart = endDate.diff(currentTime, 'milliseconds', true);
        console.log(msUntilStart);
        var daysUntilEnd = Math.floor(moment.duration(msUntilStart).asDays());
        console.log("daysUntilEnd: " + daysUntilEnd);

        if(daysUntilEnd !== daysToRemove)
        {
            daysToRemove = daysUntilEnd;
            app.start();
        }

        intervalId = setInterval(app.countdownTimer, 60000);
    }
};