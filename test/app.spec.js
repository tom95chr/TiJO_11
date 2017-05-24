'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('getDescendingNumbers', function (){
    it('should return string with numbers separated by spaces', function ()    {
        expect(app.getDescendingNumbers(15, 1)).to.eql('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
    });
});


describe('volumeSphera', function (){
    it('should return field sphere', function ()    {
        expect(app.volumeSphera(3)).to.eql('50');
    });
});

describe('volumeSphera', function (){
    it('should return false', function ()    {
        expect(app.volumeSphera(f)).to.eql(false);
    });
});

describe('volumeSphera', function (){
    it('should return false', function ()    {
        expect(app.volumeSphera(-3)).to.eql(false);
    });
});
