'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('getDescendingNumbers', function (){
    it('should return string with numbers separated by spaces', function ()    {
        expect(app.getDescendingNumbers(15, 1)).to.eql('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
    });
});
describe('volumeOfCylinder', function (){
    it('should return volume of cylinder', function ()    {
        expect(app.volumeOfCylinder(2, 2)).to.eql(6.283185307179586);
    });
    it('should return false, argument not number', function ()    {
        expect(app.volumeOfCylinder("e", "q")).to.eql(false);
    });
    it('should return false argument lower than 0', function ()    {
        expect(app.volumeOfCylinder(1, -2)).to.eql(false);
    });
});
