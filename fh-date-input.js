skillsLab.controller('myController', function ($scope){




    $scope.prepopulatedFromDateString = "2017-06-21T00:00:00.000Z";
    $scope.prepopulatedFromDateObject = Date.parse("2018-05-29T00:00:00.000Z");
    $scope.exampleMaximumDate = "2018-05-29T00:00:00.000Z";
    $scope.exampleMinimumDate = "2017-06-21T00:00:00.000Z";

    console.log(new Date($scope.prepopulatedFromDateObject).toISOString());
    
// String Case
    // Converting
    $scope.stringCase = new Date($scope.prepopulatedFromDateString);
    $scope.scase = {
        month: $scope.stringCase.getMonth()+1,
        days: $scope.stringCase.getDate()+1,
        year: $scope.stringCase.getFullYear(),
    }

console.log($scope.scase);

// Object Case

    console.log('object: '+ $scope.prepopulatedFromDateObject);
    // Converting
    $scope.objectCase = new Date($scope.prepopulatedFromDateObject);
    console.log($scope.objectCase);
    $scope.ocase = {
        month: $scope.objectCase.getMonth()+1,
        day: $scope.objectCase.getDate(),
        year: $scope.objectCase.getFullYear(),
    }
    console.log($scope.ocase);
   
})

// passing the dh-data-input to the element, need $watch to update.
skillsLab.directive('fhDateInput', function (){
    return {
        scope: {
            ocase : '='
            
        },
        templateUrl: 'fh-date-input/fh-date-input.tpl.html',
        link: function (scope, elements, attrs, ngModel){

        elements.attr("fh-data-input", "");
        
        console.log(attrs.ngModel);
        var newcase = scope.ocase;
        console.log('here: ' + newcase );
        if (attrs.ngModel="demoCtrl.prepopulatedFromDateObject") {
            
        } 
        },

    }
    
    });

  //Build switch here, for each ng-model case.
/*
skillsLab.directive('fhDataInput', function (){
return {
    templateUrl: 'fh-date-input/fh-date-input.tpl.html',
  
    link: function ($scope, elements, attrs, ngModel){

        console.log(attrs.ngModel);
        switch (attrs.ngModel){

            case 'demoCtrl.prepopulatedFromDateObject':
            console.log('Object case');     
            break; 

            case 'demoCtrl.prepopulatedFromDateString':
            console.log('String case');
            break;

            case '':
            console.log('Null case');
            break;

            case 'undefined':
            console.log('undefined case')


            }
        }        
}

});
*/


/*
 if (attrs.ngModel == 'demoCtrl.prepopulatedFromDateObject'){
        console.log(prepopulatedFromDateString)
        var myDate = new Date();
        console.log(myDate.toUTCString());
        
    }


    scope: {
        objectDate : "="
    },
*/