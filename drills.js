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