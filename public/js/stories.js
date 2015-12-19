var storyLib = [];
var imageLib = ['6.jpg', '5.jpg', '4.jpg', '3.png', '2.png', '01winter_snow_forest_trees_road.jpg'];
var titleLib = ['Title6', 'Title5', 'Title4', 'Title3', 'Title2', 'Vinter'];
var descriptionLib = ['description6', 'description5', 'description4', 'description3', 'description2', 'kvällspromenad'];

var stories =
{
    buildStory: function (title, image, description) {
        return {
            title: title,
            description: description,
            image: image
        };
    }
};
