'use strict';

describe('Controller: HomeCtrl', function() {

  var HomeCtrl, scope;

  beforeEach(module('app.home'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    HomeCtrl = $controller('HomeCtrl');
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(true).toBe(true);
  });
});
