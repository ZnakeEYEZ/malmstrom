var images;
var story;
var storyIndex;
var intervalId;
var daysToRemove;

window.onload = function () {
    for(var i = 0; i < imageLib.length; i++)
    {
        //console.log("add story object: " + titleLib[i] + " " + imageLib[i] + " " + descriptionLib[i]);
        storyLib.push(stories.buildStory(titleLib[i], imageLib[i], descriptionLib[i]));
    }
    console.log(storyLib);

    app.countdownTimer();
};

var app = {
    start: function(){
        storyIndex = 0;
        images = storyLib;
        story = images.splice(daysToRemove);
        console.log(story);

        document.getElementsByClassName('title')[0].innerHTML = story[0].title;
        document.getElementsByClassName('descriptionText')[0].innerHTML = story[0].description;
        document.getElementsByClassName('image')[0].setAttribute("src", "images/" + story[0].image);
        document.getElementsByClassName('image')[1].setAttribute("src", "images/" + story[0].image);
        document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:none");

        console.log(images.length);
        if(images.length <= 1)
        {
            document.getElementsByClassName('backControl')[0].setAttribute("style", "display:none");
        }
    },
    back: function(){
        storyIndex = storyIndex + 1;
        console.log(storyIndex);

        document.getElementsByClassName('title')[0].innerHTML = story[storyIndex].title;
        document.getElementsByClassName('descriptionText')[0].innerHTML = story[storyIndex].description;
        document.getElementsByClassName('image')[0].setAttribute("src", "images/" + story[storyIndex].image);
        document.getElementsByClassName('image')[1].setAttribute("src", "images/" + story[storyIndex].image);

        if(storyIndex == story.length -1)
        {
            document.getElementsByClassName('backControl')[0].setAttribute("style", "display:none");
            document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:block");
        }
        else if(document.getElementsByClassName('forwardControl')[0].style.display == 'none')
        {
            document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:block");
        }
    },
    forward: function () {
        storyIndex = storyIndex - 1;
        console.log(storyIndex);

        document.getElementsByClassName('title')[0].innerHTML = story[storyIndex].title;
        document.getElementsByClassName('descriptionText')[0].innerHTML = story[storyIndex].description;
        document.getElementsByClassName('image')[0].setAttribute("src", "images/" + story[storyIndex].image);
        document.getElementsByClassName('image')[1].setAttribute("src", "images/" + story[storyIndex].image);

        if(storyIndex == 0)
        {
            document.getElementsByClassName('backControl')[0].setAttribute("style", "display:block");
            document.getElementsByClassName('forwardControl')[0].setAttribute("style", "display:none");
        }
        else
        {
            document.getElementsByClassName('backControl')[0].setAttribute("style", "display:block");
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

        if(daysUntilEnd != daysToRemove)
        {
            daysToRemove = daysUntilEnd;
            app.start();
        }

        intervalId = setInterval(app.countdownTimer, 60000);
    },
    imageClick: function(){
        //$("#myModal").modal();
    }
};
/*
//your code for stuff should go here
$('#Fullscreen').css('height', $(document).outerWidth() + 'px');
//for when you click on an image
$('.myImg').click(function () {
    var src = $(this).attr('src'); //get the source attribute of the clicked image
    $('#Fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
    $('#Fullscreen').fadeIn();
});
$('#Fullscreen').click(function () {
    $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image.
});
    */