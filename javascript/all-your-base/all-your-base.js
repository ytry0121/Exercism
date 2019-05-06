export default class {
  // constractor(){
  //   this.base;
  //   this.answer = 0 ;
  //   this.toConvert;
  // }
  convert(num, base, toConvert){
    this.base = base;
    this.toConvert = toConvert;
    this.answer = [];
    resultCalc = 0;
    num.forEach(function(val, index) {
      resultCalc += this.calcInBase(val, index);
    }.bind(this));
   // num.forEach((val, index) => {
   //      this.calcInBase(val, index);
   //  });
   // num.forEach(this.calcInBase.bind(this));

   if(resultCalc >= toConvert){
     this.answer.push(parseInt(resultCalc/toConvert));
   }
    return this.answer;
  }
//Decimal to binary
//Binary to Decimal


  calcInBase(val, index){
    return val*Math.pow(this.base, index);
  }
}
