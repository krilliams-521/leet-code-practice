/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aPointer = a.length - 1;
  let bPointer = b.length - 1;
  let carry = 0;
  let result = '';

  while (aPointer >= 0 || bPointer >= 0 || carry) {
    let sum = carry;

    if (aPointer >= 0) {
      sum += parseInt(a[aPointer]);
      aPointer--;
    }
    if (bPointer >= 0) {
      sum += parseInt(b[bPointer]);
      bPointer--;
    }
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
};

console.log(addBinary('11', '1'));      // Output: "100"
console.log(addBinary('1010', '1011')); // Output: "10101"