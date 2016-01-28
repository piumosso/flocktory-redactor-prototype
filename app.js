const angular = require('angular');
const angularSanitize = require('angular-sanitize');
const buildExample = require('./build-example');
window.tinycolor = require('tinycolor2');
require('angularjs-color-picker');
require('sortablejs/ng-sortable');


require('./styles.scss');
require('angularjs-color-picker/angularjs-color-picker.css');


angular
  .module('app', [
    angularSanitize,
    'color.picker',
    'ng-sortable'
  ])
  .controller('Redactor', ['$scope', '$rootScope', ($scope, $rootScope) => {

    $scope.build = buildExample.build;
    $rootScope.toggleSettings = targetBlock => {
      const toggle = (build) => {
        build.blocks.forEach(block => {
          if (block === targetBlock) {
            block.$settingsIsOpened = !block.$settingsIsOpened;
          } else {
            block.$settingsIsOpened = false;
          }
          if (block.build) {
            toggle(block.build);
          }
        });
      };
      toggle($scope.build);
    };
    $scope.interface = {
      settings: 'block',
      adder: 'centred'
    };

  }])
  .directive('blockCollection', ['RecursionHelper', (RecursionHelper) => ({
    scope: {
      build: '=',
      setOuterHoverStatus: '='
    },
    templateUrl: 'templates/block-collection.html',
    controller: ['$scope', '$rootScope', ($scope, $rootScope) => {

      $scope.isHover = false;
      $scope.isInnerHover = false;
      $scope.setInnerHoverStatus = (status) => $scope.isInnerHover = status;
      $scope.isActive = () => {
        return $scope.isHover && !$scope.isInnerHover;
      };
      $scope.mouseenter = () => {
        $scope.isHover = true;
        $scope.setOuterHoverStatus && $scope.setOuterHoverStatus(true);
      };
      $scope.mouseleave = () => {
        $scope.isHover = false;
        $scope.setOuterHoverStatus && $scope.setOuterHoverStatus(false);
      };
      $scope.removeBlock = index => {
        $scope.build.blocks.splice(index, 1);
      };
      $scope.addBlock = (type, index) => $scope.build.blocks.splice(index + 1, 0, JSON.parse(JSON.stringify(buildExample.blocks[type])));
      $scope.t = {
        header: 'Заголовок',
        text: 'Текст',
        links: 'Ссылки',
        link: 'Ссылка',
        form: 'Форма',
        popup: 'Попап',
        field: 'Поле формы',
        input: 'Поле ввода',
        checkbox: 'Галочка',
        error: 'Сообщение об ошибке',
        button: 'Кнопка',
        screen: 'Состояние'
      };
      $scope.sortableConfig = {};
      $scope.toggleSettings = $rootScope.toggleSettings;
      $scope.newBlocks = buildExample.blocks;

    }],
    compile: function(element) {
      return RecursionHelper.compile(element);
    }
  })])
  .factory('RecursionHelper', ['$compile', function($compile){
    return {
      /**
       * Manually compiles the element, fixing the recursion loop.
       * @param element
       * @param [link] A post-link function, or an object with function(s) registered via pre and post properties.
       * @returns An object containing the linking functions.
       */
      compile: function(element, link){
        // Normalize the link parameter
        if(angular.isFunction(link)){
          link = { post: link };
        }

        // Break the recursion loop by removing the contents
        var contents = element.contents().remove();
        var compiledContents;
        return {
          pre: (link && link.pre) ? link.pre : null,
          /**
           * Compiles and re-adds the contents
           */
          post: function(scope, element){
            // Compile the contents
            if(!compiledContents){
              compiledContents = $compile(contents);
            }
            // Re-add the compiled contents to the element
            compiledContents(scope, function(clone){
              element.append(clone);
            });

            // Call the post-linking function, if any
            if(link && link.post){
              link.post.apply(null, arguments);
            }
          }
        };
      }
    };
  }]);

