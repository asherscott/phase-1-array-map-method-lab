const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased() {
//   const upperTitleArray = [];

//   for(const title of tutorials) {
//     let upperTitle = '';

//     for(const word of title.split(' ')) {
//       const upperWord = word[0].toUpperCase() + word.slice(1);
//       upperTitle += ' ' + upperWord;
//     }
//     upperTitleArray.push(upperTitle.slice(1));
//   }
//   return upperTitleArray;
// }

function titleCased() {
  const upperTitleArray = [];
  const a = tutorials.map(title => {
    let upperTitle = '';
    const b = title.split(' ').map(word => {
      const upperWord = word[0].toUpperCase() + word.slice(1)
      upperTitle += ' ' + upperWord;
    });
    upperTitleArray.push(upperTitle.slice(1));
  });
  return upperTitleArray;
}