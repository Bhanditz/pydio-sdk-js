/**
 * Pydio API V2
 * Access to a Pydio Server. Second version of the API.
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PydioApiV2);
  }
}(this, function(expect, PydioApiV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PydioApiV2.InlineResponse2002();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2002', function() {
    it('should create an instance of InlineResponse2002', function() {
      // uncomment below and update the code to test InlineResponse2002
      //var instane = new PydioApiV2.InlineResponse2002();
      //expect(instance).to.be.a(PydioApiV2.InlineResponse2002);
    });

    it('should have the property USAGE (base name: "USAGE")', function() {
      // uncomment below and update the code to test the property USAGE
      //var instane = new PydioApiV2.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property TOTAL (base name: "TOTAL")', function() {
      // uncomment below and update the code to test the property TOTAL
      //var instane = new PydioApiV2.InlineResponse2002();
      //expect(instance).to.be();
    });

  });

}));