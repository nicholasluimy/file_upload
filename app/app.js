'use strict';
(function(){
// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngMaterial',
    'fileUpload'
]);

app.controller('AppController', function($mdSidenav){
    var vm = this;

    vm.toggleSidenav = function(menuId){
      $mdSidenav(menuId).toggle();
    };

});


app.controller('SidebarController', function(){
    this.tab = 1;

    this.isSet = function(checkTab){
        return this.tab === checkTab;
    };

    this.setTab = function(activeTab){
        this.tab = activeTab;
    };
});

app.controller('ViewImageController', function(){
    var view = this;
    view.photos = [
        {
            "title" : "testTitle1",
            "uploadDate" : "12/1/2015",
            "path" : "./test1.jpg" ,
            "fileName" : "test1.jpg"
        },
        {
            "title" : "testTitle2",
            "uploadDate" : "12/2/2015",
            "path" : "./test2.jpg" ,
            "fileName" : "test2.jpg"
        },
        {
            "title" : "testTitle3",
            "uploadDate" : "12/3/2015",
            "path" : "./test3.gif" ,
            "fileName" : "test3.gif"
        },
        {
            "title" : "testTitle4",
            "uploadDate" : "12/4/2015",
            "path" : "./test4.gif" ,
            "fileName" : "test4.gif"
        },
        {
            "title" : "pokemonDance",
            "uploadDate" : "12/20/2015",
            "path" : "./test4.gif" ,
            "fileName" : "test4.gif"
        },
        {
            "title" : "bike",
            "uploadDate" : "12/21/2015",
            "path" : "./test2.jpg" ,
            "fileName" : "test2.jpg"
        },
        {
            "title" : "colours",
            "uploadDate" : "12/22/2015",
            "path" : "./test1.jpg" ,
            "fileName" : "test1.jpg"
        },
        {
            "title" : "lilo&stitch",
            "uploadDate" : "12/23/2015",
            "path" : "./test3.gif" ,
            "fileName" : "test3.gif"
        }

    ];
});

app.controller('ViewVideoController', function(){
    var view = this;
    view.videos = [
        {
            "title" : "testTitle1",
            "uploadDate" : "12/1/2015",
            "path" : "./testv1.mp4" ,
            "fileName" : "testv1.mp4"
        },
        {
            "title" : "testTitle2",
            "uploadDate" : "12/2/2015",
            "path" : "./testv5.mp4" ,
            "fileName" : "testv5.mp4"
        },
        {
            "title" : "testTitle3",
            "uploadDate" : "12/3/2015",
            "path" : "./testv2.mp4" ,
            "fileName" : "testv2.mp4"
        },
        {
            "title" : "testTitle4",
            "uploadDate" : "12/4/2015",
            "path" : "./testv6.mp4" ,
            "fileName" : "testv6.mp4"
        },
        {
            "title" : "rectVideo",
            "uploadDate" : "12/20/2015",
            "path" : "./testv7.mp4" ,
            "fileName" : "testv7.mp4"
        },
        {
            "title" : "squarevid",
            "uploadDate" : "12/21/2015",
            "path" : "./testv3.mp4" ,
            "fileName" : "testv3.mp4"
        },
        {
            "title" : "rect2",
            "uploadDate" : "12/22/2015",
            "path" : "./testv8.mp4" ,
            "fileName" : "testv8.mp4"
        },
        {
            "title" : "square2",
            "uploadDate" : "12/23/2015",
            "path" : "./testv4.mp4" ,
            "fileName" : "testv4.mp4"
        }

    ];
});

})();

