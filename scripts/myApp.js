/**
 * Created by jharden on 9/2/2015.
 */

//declaration of the angular module
var myApp = angular.module('myApp',[])

//controller declaration - controller handles back end functions and binds them to the 'scope'
.controller('myAppController',function($scope){

    //controller will contain backend functions and variables, but we can set our own variables there too when nessecary:
    //This boolean to tell us whether we are in mobile view or not. We can use it in the template to dynamically show or hide the html
    $scope.isMobile = false;

    $scope.helloWorld = "Hello World!";

//we can bind the responsive directive to any element within the scope of a page. declare it by adding it after the controller declaration
}).directive('responsive',function($window){

       return{

           link: function(scope){

               //inside the link function you can add any functions you want, including resize and scroll events

               var smallWidth  =  768;

               //setSmall will update our isMobile variable which belongs to the myApp module.
               var setSmall = function () {
                   console.log('mobile');

                   //in a directive if we want to change a variable that belongs to the controller you need to force the scope to update using the following:
                   scope.$apply(function(){
                       scope.isMobile = true;
                   })
               };

               //setLarge will update our isMobile variable which belongs to the myApp module.
               var setLarge = function () {
                   console.log('desktop');
                   scope.$apply(function(){
                       scope.isMobile = false;
                   })
               };

               //window events can be created here:
               //window.resize
               angular.element($window).on('resize',function(){
                   if ($window.innerWidth <= smallWidth) {
                       setSmall();
                   } else {
                       setLarge();
                   }
               });
               //window.scroll;
               angular.element($window).on('scroll',function(){
                  console.log('activated scroll');
               });


           }

       }

});
