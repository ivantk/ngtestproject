'use strict';

describe('myApp.about module', function() {

  beforeEach(module('myApp.about'));

  describe('about controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('AboutCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});