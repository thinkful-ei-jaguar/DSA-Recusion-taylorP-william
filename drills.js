//counting sheep

const countingSheep = (num) => {
  if(num === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log('Another sheep jumps over the fence')
  countingSheep(num-1)
}

//Power calculator

const pow = (x, n) => {
  if (n < 0 ) {
    return 'Exponent should be greater than 0'
  } else if ( n === 1 ) {
    return x;
  } else {
    return x * pow(x, n - 1)
  }
}

//Reverse String
const reverseString = (str) => {
  if(!str.length) {
    return "";
  }
  let newStr = str[0]
  return reverseString(str.slice(1)) + newStr
}

reverseString('taylor');