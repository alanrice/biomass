# biomass

> Generate bio data from sunlight and alphabets

Install
-------

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
=> 'catagggaccaagctctggggagcaacccataagcacgacaatcgcgataatacgtagtacgccgcttggttcgtgccttcccgcgcgagt'
biomass.rna();
=> 'gaguaggcuaggcauagc'
biomass.dna({length: 15});
=> 'ttttgtatgcgtacg'
biomass.rna({length: 3});
=> 'uac'
```

Contacts
--------
Alan Rice <[alanmrice@gmail.com](mailto:alanmrice@gmail.com)> [@alanmrice](//twitter.com/alanmrice)

License
--------

biomass is licensed under the [MIT](https://raw.github.com/alanrice/biomass/master/LICENSE) license.  
Check [ChooseALicense.com](http://choosealicense.com/licenses/mit) for details.
