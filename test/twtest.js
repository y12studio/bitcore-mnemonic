'use strict';
// $ node twtest.js [cn]
var Mnemonic = require('..');
var code = new Mnemonic(process.argv[2]=='cn'? Mnemonic.Words.CHINESE:Mnemonic.Words.TAIWAN);
console.log(code.toString());
var xpriv = code.toHDPrivateKey();
console.log(xpriv);
