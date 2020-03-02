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

//triangle thingy

const triNth = (n, x = 1) => {
  if(n === x ) {
    return x;
  } else {
    return x + triNth(n, x + 1);
  }
}

//string splitter

const splitter = (str, char) => {
  if(str.indexOf(char) === -1) {
    return [str]
  }
  let split = str.indexOf(char)
  let firstPart = str.slice(0, split)
  // console.log(str.slice(split+1))
  return [firstPart, ...splitter(str.slice(split+1), char)]
}

//fib

const fib = n => n <= 2 ? 1 : fib(n - 1) + fib(n - 2);

//factorial

const factorial = num => num === 1 ? 1 : num * factorial(num-1);

//anagrams

const anagram = str => {
  let perms = [];
  
  if (str.length === 1) {
    return [str];
  }
  for (let i = 0; i < str.length; i++) {
    let pre = str.substring(0, i);
    let post = str.substring(i + 1);
    let results = anagram(pre + post);
    for (let j = 0; j < results.length; j++) {
      perms.push(str[i] + results[j]);
    }
  }
  return perms;
};

//org chart
const chart = [
  'Zuckerberg',[
    'Schroepfer',
    [
      'Bosworth',
        [
          'Steve',
          'Kyle',
          'Andra'
        ],
      'Zhao',
        [
          'Richie',
          'Sofia',
          'Jen'
        ]
    ],
    'Schrage',
    [
      'VanDyck',
        [
          'Sabrina',
          'Michelle',
          'Josh'
        ],
      'Swain',
        [
          'Blanch',
          'Tom',
          'Joe'
        ]
    ],
    'Sandberg',
    [
      'Goler', 
        [
          'Eddie',
          'Julie',
          'Annie'
        ],
      'Hernandez',
         [
          'Rowi',
          'Inga',
          'Morgan'
         ],
      'Moissinac', 
         [
           'Amy',
           'Chuck',
           'Vinni'
         ],
      'Kelley', 
         [
           'Eric',
           'Ana',
           'Wes'
         ]
    ]
]
]

const orgChart = (arr) => {
  if(!arr.length){
    return [];
  }
  const next =  arr[0]
  const rest = arr.slice(1)
  console.log(next)
  return [next, ...orgChart(rest)]
}

orgChart(chart)