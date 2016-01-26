const angular = require('angular');
const angularSanitize = require('angular-sanitize');


require('./styles.scss');


angular
  .module('app', [angularSanitize])
  .controller('Redactor', ['$scope', ($scope) => {

    $scope.blocks = [
      {
        type: 'text',
        content: '123'
      },
      {
        type: 'text',
        content: '123<br>456<br>789<br>0'
      }
    ];

  }]);

