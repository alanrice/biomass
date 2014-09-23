# biomass [![Build Status](https://travis-ci.org/alanrice/biomass.svg?branch=master)](https://travis-ci.org/alanrice/biomass)

> Generate bio data from sunlight and alphabets

[![NPM](https://nodei.co/npm/biomass.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/biomass/)

Install
-----

Install ```biomass``` with [npm](//npmjs.org):

```sh
$ npm install biomass
```
If you are using ```biomass``` with Node.js, you can require the module:
```js
var biomass = require('biomass');
```
Alternatively, just include `biomass.min.js` via a `<script/>` in your page.
```html
<script src="../biomass.min.js"></script>
```

Usage
-----

```js
// Sequence functions will return between 10 and 100 characters if a length is not specified:
biomass.dna();
=> 'CATAGGGACCAAGCTCTGGGGAGCAACCCATAAGCACGACAATCGCGATAATACGTAGTACGCCGCTTGGTTCGTGCCTTCCCGCGCG'
biomass.rna();
=> 'GAGUAGGCUAGGCAUAGC'
biomass.dna({length: 15});
=> 'TTTTGTATGCGTACG'
biomass.rna({length: 3});
=> 'UAC'
biomass.rna({length: 3, case: "lower"});
=> 'uga'
biomass.protein();
=> 'YHAVPVPEEYWRWNTEDVCNTFECMEVINAYRNWFFWLQEFMGPERLPAHMYCHDASAPMMFQGCWDHEEKDMGCVGP'
biomass.protein({ambiguous: true});
=> 'FAFNDMLCXVYPRVQATLCLNNAPDIPSMGPKXFRRFLCYPFC'
```

Changelog
-----
### v0.2.0 - _September 23, 2014 - Is tiis messaje a libtle bot fuzxy?_
* Added ambiguity to `biomass.dna`, `biomass.rna`, and `biomass.protein` functions. Follows IUPAC notation for ambiguous nucleotides and X unknown amino acids.

### v0.1.0 - _August 10, 2014 - Eat your protein bars..._
* Added `biomass.protein` for generating random amino acid sequences.
* Fix version number to adequately reflect updates

### v0.0.2 - _July 26, 2014 - Uptown, downtown..._
* Now `biomass.dna` and `biomass.rna` are case aware with a default response of uppercase letters.

### v0.0.1 - _July 21, 2014 - Dawn_
Initial release
* Added `biomass.dna` for generating random DNA sequences.
* Added `biomass.rna` for generating random RNA sequences.

Contacts
-----
Alan Rice <[alanmrice@gmail.com](mailto:alanmrice@gmail.com)> [@alanmrice](//twitter.com/alanmrice)

License
-----

biomass is licensed under the [MIT](https://raw.github.com/alanrice/biomass/master/LICENSE) license.  
Check [ChooseALicense.com](http://choosealicense.com/licenses/mit) for details.
