//  Biomass.js
//  0.2.0
//  (c) 2014 Alan Rice
//  Biomass may be freely distributed or modified under the MIT license.

(function() {
	var root = this;
	var biomass = function(obj) {
		if (obj instanceof biomass) {return obj;}
		if (!(this instanceof biomass)) {return new biomass(obj);}
		this.biomassWrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = biomass;
		}
		exports.biomass = biomass;
	} else {
		root.biomass = biomass;
	}

	biomass.VERSION = "0.2.0";

	var dnaBases = ['a', 'c', 'g', 't'];
	var rnaBases = ['a', 'c', 'g', 'u'];
	var aminoAcids = ['a', 'r', 'n', 'd', 'c', 'e', 'q', 'g', 'h', 'i', 'l', 'k', 'm', 'f', 'p', 's', 't', 'w', 'y', 'v'];
	var ambiguousNucleotideBases = ['w', 's', 'm', 'k', 'r', 'y', 'b', 'v', 'd', 'h', 'n'];
	var ambiguousAminoAcids = ['x'];

	function initOptions(options) {
		return options || (options = {});
	}

	biomass.dna = function (options) {
		options = initOptions(options);
		var length = options.length || Math.floor(Math.random() * (100 - 10 + 1)) + 10;
		var seqCase = options.case || "upper";
		var ambiguous = options.ambiguous || false;
		var letters = [];
		for (var i = 0; i < length; i++) {
			if (ambiguous === true){
				if(Math.random() < 0.05){
					letters.push(ambiguousNucleotideBases[Math.floor((Math.random() * ambiguousNucleotideBases.length))]);
				}
				else{
					letters.push(dnaBases[Math.floor((Math.random() * dnaBases.length))]);
				}
			}
			else if (typeof ambiguous === 'number'){
				if (Math.random() < ambiguous){
					letters.push(ambiguousNucleotideBases[Math.floor((Math.random() * ambiguousNucleotideBases.length))]);
				}
				else{
					letters.push(dnaBases[Math.floor((Math.random() * dnaBases.length))]);
				}
			}
			else {
				letters.push(dnaBases[Math.floor((Math.random() * dnaBases.length))]);
			}
		}
		if (seqCase === "upper"){
			return letters.join("").toUpperCase();
		}
		else{
			return letters.join("");
		}
	};

	biomass.rna = function (options) {
		options = initOptions(options);
		var length = options.length || Math.floor(Math.random() * (100 - 10 + 1)) + 10;
		var seqCase = options.case || "upper";
		var ambiguous = options.ambiguous || false;
		var letters = [];
		for (var i = 0; i < length; i++) {
			if (ambiguous === true){
				if(Math.random() < 0.05){
					letters.push(ambiguousNucleotideBases[Math.floor((Math.random() * ambiguousNucleotideBases.length))]);
				}
				else{
					letters.push(rnaBases[Math.floor((Math.random() * rnaBases.length))]);
				}
			}
			else if (typeof ambiguous === 'number'){
				if (Math.random() < ambiguous){
					letters.push(ambiguousNucleotideBases[Math.floor((Math.random() * ambiguousNucleotideBases.length))]);
				}
				else{
					letters.push(rnaBases[Math.floor((Math.random() * rnaBases.length))]);
				}
			}
			else {
				letters.push(rnaBases[Math.floor((Math.random() * rnaBases.length))]);
			}
		}
		if (seqCase === "upper"){
			return letters.join("").toUpperCase();
		}
		else{
			return letters.join("");
		}
	};

	biomass.protein = function (options) {
		options = initOptions(options);
		var length = options.length || Math.floor(Math.random() * (100 - 10 + 1)) + 10;
		var seqCase = options.case || "upper";
		var ambiguous = options.ambiguous || false;
		var letters = [];
		for (var i = 0; i < length; i++) {
			if (ambiguous === true){
				if(Math.random() < 0.05){
					letters.push(ambiguousAminoAcids[Math.floor((Math.random() * ambiguousAminoAcids.length))]);
				}
				else{
					letters.push(aminoAcids[Math.floor((Math.random() * aminoAcids.length))]);
				}
			}
			else if (typeof ambiguous === 'number'){
				if (Math.random() < ambiguous){
					letters.push(ambiguousAminoAcids[Math.floor((Math.random() * ambiguousAminoAcids.length))]);
				}
				else{
					letters.push(aminoAcids[Math.floor((Math.random() * aminoAcids.length))]);
				}
			}
			else {
				letters.push(aminoAcids[Math.floor((Math.random() * aminoAcids.length))]);
			}
		}
		if (seqCase === "upper"){
			return letters.join("").toUpperCase();
		}
		else{
			return letters.join("");
		}
	};
}.call(this));
