// PLEASE DON'T change function name
//jshint esversion:6
module.exports = function makeExchange(currency) {
  result = [0, 0, 0, 0, 0];
  if (currency <= 0) {
    return {};
  }
  if (currency >= 10000){
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }
  var k = 0;

  if (currency>=50){
    k = Math.trunc(currency/50);
    currency = currency%50;
    result[0] = k;
  }

  if ((currency>=25)&(currency<50)) {
    k = Math.trunc(currency/25);
    currency = currency%25;
    result[1] = k;
  }
  if ((currency>=10)&(currency<25)) {
    k = Math.trunc(currency/10);
    currency = currency%10;
    result[2] = k;
  }

  if ((currency>=5)&(currency<10)) {
    k = Math.trunc(currency/5);
    currency = currency%5;
    result[3] = k;
  }
  if (currency<5) {
    result[4] = currency;
  }
  var myObject = {
    "H":result[0],
    "Q":result[1],
    "D":result[2],
    "N":result[3],
    "P":result[4]
  };

  if (myObject.H==0){
    delete myObject.H;
  }
  if (myObject.Q==0){
    delete myObject.Q;
  }
  if (myObject.D==0){
    delete myObject.D;
  }
  if (myObject.N==0){
    delete myObject.N;
  }
  if (myObject.P==0){
    delete myObject.P;
  }

  return myObject;
};
