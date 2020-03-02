//counting sheep

const countingSheep = (num) => {
  if(num === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log('Another sheep jumps over the fence')
  countingSheep(num-1)
}
countingSheep(3);

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

