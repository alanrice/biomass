var should = require('should'),
_ = require('underscore'),
biomass = require('../biomass.js');

require('mocha');

describe('biomass.js', function(){
  describe('#dna()', function(){
    it('should be a function', function(done){
      (biomass.dna).should.be.a.Function;
      done();
    });
    it('should return a string', function(done){
      var string = biomass.dna();
      string.should.be.ok;
      string.should.be.a.String;
      done();
    });
    it('should consist of just A\'s, C\'s, G\'s, and T\'s', function(done){
      var string = biomass.dna({length:1000});
      var uniqueArray = _.uniq(string.split(""));
      uniqueArray.should.have.length(4);
      var sortedArray = uniqueArray.sort();
      sortedArray.should.eql(['A', 'C', 'G', 'T']);
      done();
    });
    it('should return about 5% ambiguous when \'ambiguous: true\'', function(done){
      var string = biomass.dna({length:1000, ambiguous: true});
      var numAmbiguous = (string.match(/[^acgt]/gi) || []).length;
      numAmbiguous.should.be.approximately(50, 15);
      done();
    });
    it('should return about 50% ambiguous when \'ambiguous: 0.5\'', function(done){
      var string = biomass.dna({length:1000, ambiguous: 0.5});
      var numAmbiguous = (string.match(/[^acgt]/gi) || []).length;
      numAmbiguous.should.be.approximately(500, 50);
      done();
    });
  });
  describe('#rna()', function(){
    it('should be a function', function(done){
      (biomass.rna).should.be.a.Function;
      done();
    });
    it('should return a string', function(done){
      var string = biomass.rna();
      string.should.be.ok;
      string.should.be.a.String;
      done();
    });
    it('should consist of just A\'s, C\'s, G\'s, and U\'s', function(done){
      var string = biomass.rna({length:1000});
      var uniqueArray = _.uniq(string.split(""));
      uniqueArray.should.have.length(4);
      var sortedArray = uniqueArray.sort();
      sortedArray.should.eql(['A', 'C', 'G', 'U']);
      done();
    });
    it('should return about 5% ambiguous when \'ambiguous: true\'', function(done){
      var string = biomass.rna({length:1000, ambiguous: true});
      var numAmbiguous = (string.match(/[^acgu]/gi) || []).length;
      numAmbiguous.should.be.approximately(50, 15);
      done();
    });
    it('should return about 50% ambiguous when \'ambiguous: 0.5\'', function(done){
      var string = biomass.rna({length:1000, ambiguous: 0.5});
      var numAmbiguous = (string.match(/[^acgu]/gi) || []).length;
      numAmbiguous.should.be.approximately(500, 50);
      done();
    });
  });
  describe('#protein()', function(){
    it('should be a function', function(done){
      (biomass.protein).should.be.a.Function;
      done();
    });
    it('should return a string', function(done){
      var string = biomass.protein();
      string.should.be.ok;
      string.should.be.a.String;
      done();
    });
    it('should consist of amino acids', function(done){
      var string = biomass.protein({length:1000});
      var uniqueArray = _.uniq(string.split(""));
      uniqueArray.should.have.length(20);
      var sortedArray = uniqueArray.sort();
      sortedArray.should.eql([ 'A', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Y' ]);
      done();
    });
    it('should return about 5% ambiguous when \'ambiguous: true\'', function(done){
      var string = biomass.protein({length:1000, ambiguous: true});
      var numAmbiguous = (string.match(/x/gi) || []).length;
      numAmbiguous.should.be.approximately(50, 15);
      done();
    });
    it('should return about 50% ambiguous when \'ambiguous: 0.5\'', function(done){
      var string = biomass.protein({length:1000, ambiguous: 0.5});
      var numAmbiguous = (string.match(/x/gi) || []).length;
      numAmbiguous.should.be.approximately(500, 50);
      done();
    });
  });
});
