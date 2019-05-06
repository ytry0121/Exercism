export class Cipher{

   get key(){
     let rArr =[];
     for(let i = 0; i < 100; i++){
       rArr.push(Math.random().toString(36).replace('.','').replace(/[0-9]/g,''));
     }
     let key = rArr.join().replace(/,/g,'');
     return key;
   }

   encode(plaintext){
     let code = this.getCode();
     let textArr = plaintext.split('');
     forEach((textArr,) =>{

     });
     //this.key
   }

   getCode(){
     let code = [];
     for(let i = 0 ; i < 26; i++){
       code.push(toString(i));
     }
     return code;
   }
}
