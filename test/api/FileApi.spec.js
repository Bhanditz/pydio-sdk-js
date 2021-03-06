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
    instance = new PydioApiV2.FileApi();
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

  describe('FileApi', function() {
    describe('createNode', function() {
      it('should call createNode successfully', function(done) {
        //uncomment below and update the code to test createNode
        //instance.createNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNode', function() {
      it('should call deleteNode successfully', function(done) {
        //uncomment below and update the code to test deleteNode
        //instance.deleteNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('download', function() {
      it('should call download successfully', function(done) {
        //uncomment below and update the code to test download
        //instance.download(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeInfos', function() {
      it('should call getNodeInfos successfully', function(done) {
        //uncomment below and update the code to test getNodeInfos
        //instance.getNodeInfos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNode', function() {
      it('should call updateNode successfully', function(done) {
        //uncomment below and update the code to test updateNode
        //instance.updateNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadStream', function() {
      it('should call uploadStream successfully', function(done) {
        //uncomment below and update the code to test uploadStream
        //instance.uploadStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
