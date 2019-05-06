export function encode(input) {
  return input.replace(/(.)\1+/g, (chunk, char) => chunk.length + char);
}

export function decode(input) {
  return input.replace(/(\d+)(.)/g, (pair, count, char) => char.repeat(count));
}

// export const encode = (str) => {
//   let cnt = 0;
//   const splitStr = str.split('');
//   const returnStr = [];
//
//   function encodeArray(val, i, arr) {
//     if (val === arr[i + 1]) {
//       cnt += 1;
//     } else {
//       if (cnt !== 0) {
//         cnt += 1;
//         returnStr.push(cnt);
//       }
//       returnStr.push(val);
//       cnt = 0;
//     }
//   }
//   splitStr.forEach(encodeArray);
//   return returnStr.join('');
// };
//
// export const decode = (str) => {
//   const splitStr = str.split('');
//   let returnStr = [];
//   let numArray = [];
//
//  function decodeArray(val) {
//    if(val.match(/[^0-9]/)) {
//        if( numArray.length === 0) {
//          returnStr.push(val);
//        } else {
//          const num = parseInt(numArray.join(''));
//          const varArr = new Array(num);
//          varArr.fill(val);
//          returnStr = returnStr.concat(varArr);
//          numArray = [];
//        }
//    } else {
//      numArray.push(val);
//    }
//  }
//  splitStr.forEach(decodeArray);
//  return returnStr.join('');
// };
