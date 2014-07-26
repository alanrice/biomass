//  Biomass.js
//  0.0.2
//  (c) 2014 Alan Rice
//  Biomass may be freely distributed or modified under the MIT license.

(function() {
	var root = this;
	var biomass = function(obj) {
		if (obj instanceof biomass) return obj;
		if (!(this instanceof biomass)) return new biomass(obj);
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

	biomass.VERSION = "0.0.2";

	var dnaBases = ['a', 'c', 'g', 't'];
	var rnaBases = ['a', 'c', 'g', 'u'];

	function initOptions(options) {
		return options || (options = {});
	};

	biomass.dna = function (options) {
		options = initOptions(options);
		var length = options.length || Math.floor(Math.random() * (100 - 10 + 1)) + 10;
		var seqCase = options.case || "upper";
		var letters = [];
		for (var i = 0; i < length; i++) {
			letters.push(dnaBases[Math.floor((Math.random() * dnaBases.length))]);
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
		var letters = [];
		for (var i = 0; i < length; i++) {
			letters.push(rnaBases[Math.floor((Math.random() * rnaBases.length))]);
		}
		if (seqCase === "upper"){
			return letters.join("").toUpperCase();
		}
		else{
			return letters.join("");
		}
	};
}.call(this));
