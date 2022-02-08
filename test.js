var CoinKey = require('coinkey');
var hit = 0;
var tryN = 0;
while(hit < 1)
{
  var wallet = new CoinKey.createRandom();
  var address = wallet.publicAddress;
  var pkey = wallet.privateKey.toString('hex');

  var vanity = address.substring(0,13)
  console.log(tryN + " " + vanity);
  if(vanity == "1amMaxZSwinki"){
    console.log(address + " " + pkey);
    hit = 2
 }
 tryN++;
}
