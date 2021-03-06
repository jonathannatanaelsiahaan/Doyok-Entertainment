'use strict';

/* Controllers */

angular.module('app.controllers', ['ngMaterial']).
  controller('AppCtrl', function ($scope, Service, $compile, $interval, $mdToast, $mdSidenav) {

    //--------------------------------------------

    window.mobilecheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    window.mobileAndTabletcheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    
    function detectmob() {
       if(window.innerWidth <= 800 && window.innerHeight <= 600) {
         return true;
       } else {
         return false;
       }
    };

    
    //-------------------------------------------------------------------------------------------
    
    var self = this, j= 0, counter = 0;

    self.mode = 'query';
    self.activated = true;

    self.showList = [ ];

    self.toggleActivation = function() {
        if ( !self.activated ) self.showList = [ ];
        if (  self.activated ) {
          j = counter = 0;
          self.determinateValue = 30;
          self.determinateValue2 = 30;
        }
    };

    $interval(function() {
      self.determinateValue += 1;
      self.determinateValue2 += 1.5;

      if (self.determinateValue > 100) self.determinateValue = 30;
      if (self.determinateValue2 > 100) self.determinateValue2 = 30;

        if ( (j < 2) && !self.showList[j] && self.activated ) {
          self.showList[j] = true;
        }
        if ( counter++ % 4 === 0 ) j++;

        if ( j == 2 ) self.contained = "indeterminate";

    }, 100, 0, true);

    $interval(function() {
      self.mode = (self.mode == 'query' ? 'determinate' : 'query');
    }, 7200, 0, true);


    //---------- INITIAL VALUE ---------------------

    $scope.loading = false;
    $scope.indeterminate = false;
    $scope.radius = 500;
    $scope.zoom = 10;
    $scope.clicked = false;
    $scope.circularActivated = false;

    $scope.isFromMobile = false;

    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;

    var firstVisit = true;

    // ----------- INITIAL VALUE ----------------------

    $scope.isFromMobile = window.mobilecheck();
    if(window.mobilecheck()){

      $mdToast.show({
        hideDelay   : 3000,
        position    : 'buttom left',
        templateUrl : 'mobile.html'
      });
      
      document.getElementById("container").style.width = "100%";
      document.getElementById("container").style.left = "0";

      document.getElementById("map").style.height = "1200px";

      document.getElementById("search").value = "Type Something";
    } else {
      document.getElementById("search").value = "Ex : Show me any coffee shop | Powered by IBM Watson";
    }

    document.getElementById("popup").style.visibility = "hidden";

    $scope.price = [];
    $scope.time = [];

    $scope.selectedCategory = 'night_club';
    $scope.selectedCategoryName = 'Night Club';

    $scope.categories = [
      {
        name: 'Night Club', value: 'night_club'
      },
      {  
        name: 'Bar', value: 'bar' 
      },
      { 
        name: 'Salon', value: 'beauty_salon'
      },
      {
        name: 'Shopping Mall', value: 'shopping_mall'
      },
      {
        name: 'Store', value: 'store'
      },
      {
        name: 'Shoe Store', value: 'shoe_store'
      },
      {
        name: 'Spa', value: 'spa'
      },
      {
        name: 'Camp', value: 'campground'
      },
      {
        name: 'Book Store', value: 'book_store'
      },
      {
        name: 'Art Galery', value: 'art_gallery'
      },
      {
        name: 'Restaurant', value: 'restaurant'
      }
    ];

    $(window).resize(function(){
        if(window.innerWidth <= 800 && window.innerHeight <= 600) {
           document.getElementById("map").style.width = "100%";
           document.getElementById("map").style.height = "1200px";

           document.getElementById("container").style.width = "100%";
           document.getElementById("container").style.left = "0";

           document.getElementById("container-1").style.width = "100%";
        } else {
           document.getElementById("map").style.width = "100%";
           document.getElementById("map").style.height = "1200px";

           document.getElementById("container").style.width = "18%";
           document.getElementById("container").style.left = "35%";

           document.getElementById("container-1").style.width = "30%";
        }     
    });

    $scope.openNav = function() {
      if(window.mobilecheck()){
        document.getElementById("mySidenav").style.width = "45%";
      } else {
        document.getElementById("mySidenav").style.width = "15%";
      }

    }

    $scope.closeNav = function() {
      document.getElementById("mySidenav").style.width = "0";
    }

    var map;

    $scope.sendSocket = function(message){
         if(detectmob()){
          document.getElementById("map").style.width = "100%";
         } 
         $scope.clicked = true;
         $scope.closeNav();
         self.toggleActivation();
         $scope.loading = true;
         Service.getEntityWatson(message).success(function(result) {
            if(result["result"] ==  404){
              $scope.loading = false;
              self.toggleActivation();
              $scope.clicked = false;
              $mdToast.show({
                hideDelay   : 5000,
                position    : 'buttom left',
                templateUrl : 'toast-template.html'
              });
            } else {
              $scope.getLocationByKeyword(result["result"]); 
            }
         });
         
    };

    function getName(value){
      for(var i =0;i<$scope.categories.length;i++){
        if($scope.categories[i].value == value){
          return $scope.categories[i].name;
        }
      }
    }

    $scope.openCreditPopUp = function(){
      document.getElementById("popup").style.visibility = "visible";
    };

    $scope.closeCreditPopUp = function(){
      document.getElementById("popup").style.visibility = "hidden";
    };

    $scope.getByCategory = function(){
      if($scope.selectedCategory == 'shopping_mall' || $scope.selectedCategory == 'bar'){
        $scope.getLocationByKeyword(getName($scope.selectedCategory));  
      } else {
        $scope.getLocation($scope.selectedCategory);
      }
    };


    $scope.getLocation = function(criteria){
        if(detectmob()){
          document.getElementById("map").style.width = "100%";
        } 
        $scope.clicked = true;
        $scope.loading = true;
        $scope.closeNav();
        self.toggleActivation();
        if (navigator.geolocation) {
            
          navigator.geolocation.getCurrentPosition(function(position) {
            
            var myLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map = new google.maps.Map(document.getElementById('map'), {
              center: myLocation,
              zoom: $scope.zoom
            });
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
              location: myLocation,
              radius: $scope.radius,
              types: [criteria]
            }, callback);
          }, function(error) {
            console.log(error);
            Service.getCurrentLocation().success(function(result) {
                var loc = result.loc.split(",");
                map = new google.maps.Map(document.getElementById('map'), {
                  center: {lat: parseInt(loc[0]), lng: parseInt(loc[1])},
                  zoom: 10
                });
                handleLocationError(true, map.getCenter());
            });
          });
        } else {
          Service.getCurrentLocation().success(function(result) {
                var loc = result.loc.split(",");
                map = new google.maps.Map(document.getElementById('map'), {
                  center: {lat: parseInt(loc[0]), lng: parseInt(loc[1])},
                  zoom: 10
                });
                handleLocationError(false, map.getCenter());

          });
        }
    };

    function handleLocationError(browserHasGeolocation, pos) {
        if(!pos){
          pos = {lat: -34.397, lng: 150.644};
        }
        var infoWindow = new google.maps.InfoWindow;
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed. Please check your geolocation service' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
        $scope.clicked = false;
        $scope.loading = false;
        $scope.closeNav();
        self.toggleActivation();
    }
    

    $scope.getLocationByKeyword = function(keywords){
      if(detectmob()){
          document.getElementById("map").style.width = "100%";
      } 
      $scope.closeNav();
      $scope.clicked = true;
      if($scope.loading == false){
        $scope.loading = true;
        self.toggleActivation();
      }

      navigator.geolocation.getCurrentPosition(function(position) {
        var myLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
      
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLocation,
          zoom: $scope.zoom
        });

        var service = new google.maps.places.PlacesService(map);
        var request = {
          location: myLocation,
          radius: '100',
          query: keywords
        };

        service.textSearch(request, callback);
      });
    };

    $scope.getByCategory($scope.selectedCategory);


    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMarkers(results);
      } else {
        $scope.clicked = false;
        $scope.loading = false;
        self.toggleActivation();
        $mdToast.show({
          hideDelay   : 5000,
          position    : 'buttom left',
          templateUrl : 'notfound.html'
        });
      }
    }

    $scope.getDirection = function(){
      if(detectmob()){
          document.getElementById("map").style.width = "100%";
      } 
      $scope.price = [];
      $scope.time = [];
      $scope.circularActivated = true;

      $scope.openNav();
      var place = $scope.end;
      navigator.geolocation.getCurrentPosition(function(position) {
          var myLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          directionsDisplay = new google.maps.DirectionsRenderer();
          var mapOptions = {
            zoom:$scope.zoom,
            center: myLocation
          }

          Service.getUberPriceEstimation(myLocation, place).success(function(result) {
            for(var i = 0;i<result.prices.length;i++){
              var p = {
                display_name: result.prices[i].display_name,
                estimate: result.prices[i].estimate
              };

              $scope.price.push(p);
            }

          });

          Service.getUberTimeEstimation(place).success(function(result) {
            for(var i =0;i<result.times.length;i++){
              var p = {
                display_name: result.times[i].display_name,
                estimate: result.times[i].estimate
              };
              $scope.time.push(p);
            }
          });


          map = new google.maps.Map(document.getElementById('map'), mapOptions);
          directionsDisplay.setMap(map);
          calcRoute(myLocation, place);
      });
    };

    function calcRoute(start, end) {
      var request = {
        origin: start,
        destination: end,
        provideRouteAlternatives: true,
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL
      };
      directionsService.route(request, function(result, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
          $scope.circularActivated = false;
        } else {
          $scope.clicked = false;
          $scope.loading = false;
          $scope.circularActivated = false;
          $mdToast.show({
            hideDelay   : 5000,
            position    : 'buttom left',
            templateUrl : 'notfound.html'
          });
        }
      });
    }

    function addMarker(place, isOpenInfoWindow) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: {
          url: 'http://images.clipartpanda.com/location-icon-vector-location_map_pin_black5.png',
          anchor: new google.maps.Point(60, 60),
          scaledSize: new google.maps.Size(45, 67)
        }
      });

      if(firstVisit){
        $mdToast.show({
          hideDelay   : 10000,
          position    : 'buttom right',
          templateUrl : 'markerClick.html'
        });

        $mdToast.show({
          hideDelay   : 10000,
          position    : 'buttom left',
          templateUrl : 'watson.html'
        });
      }
      if(isOpenInfoWindow && firstVisit){
        var service = new google.maps.places.PlacesService(map);
        service.getDetails(place, function(result, status) {
          if (status !== google.maps.places.PlacesServiceStatus.OK) {
            return;
          }

          var end = {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng()
          };
          $scope.end = end;

          var contentString = '<CENTER><div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+result.name+'</h1><BR>'+
            '<div id="bodyContent">';

          if(result.formatted_address != undefined) contentString += '<p>'+result.formatted_address+'</p>'+'<br>';

          if(result.formatted_phone_number != undefined) contentString += '<p>'+result.formatted_phone_number+'</p>';

          if(result.rating != undefined) contentString += '<p> Rating '+result.rating+'</p>';

          if(result.url != undefined) contentString += '<a href="'+result.url+'"><button class="md-primary md-raised md-button md-ink-ripple" type="button" ">See On Gmap</button></a>';

          contentString += '<button class="md-primary md-raised md-button md-ink-ripple" type="button" ng-click="getDirection();">Get Direction</button>'+'<br>'+
            '</div>'+
            '</div></CENTER>';

          var elTooltip = $compile(contentString)($scope);
          var infowindow = new google.maps.InfoWindow({
            content: elTooltip[0]
          });

          infowindow.open(map, marker);
          firstVisit =  false;

        });
      }
      google.maps.event.addListener(marker, 'click', function() {
        var service = new google.maps.places.PlacesService(map);
        service.getDetails(place, function(result, status) {
          if (status !== google.maps.places.PlacesServiceStatus.OK) {
            return;
          }
          var end = {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng()
          };
          $scope.end = end;

          var contentString = '<CENTER><div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+result.name+'</h1><BR>'+
            '<div id="bodyContent">';

          if(result.formatted_address != undefined) contentString += '<p>'+result.formatted_address+'</p>'+'<br>';

          if(result.formatted_phone_number != undefined) contentString += '<p>'+result.formatted_phone_number+'</p>';

          if(result.rating != undefined) contentString += '<p> Rating '+result.rating+'</p>';

          if(result.url != undefined) contentString += '<a href="'+result.url+'"><button class="md-primary md-raised md-button md-ink-ripple" type="button" ">See On Gmap</button></a>';

          contentString += '<button class="md-primary md-raised md-button md-ink-ripple" type="button" ng-click="getDirection();">Get Direction</button>'+'<br>'+
            '</div>'+
            '</div></CENTER>';

          var elTooltip = $compile(contentString)($scope);
          var infowindow = new google.maps.InfoWindow({
            content: elTooltip[0]
          });
          $scope.clicked = true;
          $scope.loading = true;

          infowindow.open(map, marker);
          $scope.clicked = false;
          $scope.loading = false;
          self.toggleActivation();

        });
      });
    }


    function createMarkers(places) {
      var bounds = new google.maps.LatLngBounds();
      var placesList = document.getElementById('places');
      var length = (places.length > 30)? 30 : places.length; 
      for(var i = 0; i < length; i++){
        var place = places[i];
        var isHealthPlace = false;
        for(var j = 0;j < place.types.length;j++){
          if(place.types[j] == "shopping_mall" || place.types[j] == "point_of_interest" || place.types[j] == "store"
             || place.types[j] == "cafe" || place.types[j] == "food" || place.types[j] == "night_club"
             || place.types[j] == "bar" || place.types[j] == "movie_theater" || place.types[j] == "beauty_salon" || place.types[j] == "hair_care"
            ){
            if(i >= length-1){
              addMarker(place, true);  
            } else {
              addMarker(place, false);  
            }
            break;  
          }    
        }
        bounds.extend(place.geometry.location);
      }
      $scope.loading = false;
      $scope.clicked = false;
      map.fitBounds(bounds);
      self.toggleActivation();
    }
      
  }).
  controller('controller1', function ($scope) {

  }).
  controller('controller2', function ($scope) {
    // write Ctrl here
  });
