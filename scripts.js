/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (typeof str !== 'string') return null;
  const words = str.split(' ');

  let longest = '';

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.assert(longest("Ég er forritari og heiti Fjalar") === "forritari", 'Villa longest 1');
console.assert(longest("Glæra grillið glamrar") === "grillið", 'Villa longest 2');

function shortest(str) {
  if (typeof str !== 'string') return null;
  const words = str.split(' ');
  let shortest = words[0] || '';

  for (let word of words) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }
  return shortest;
}
console.assert(shortest("Ég er forritari og heiti Fjalar") === "Ég", 'Villa shortest 1');
console.assert(shortest("Glæra grillið glamrar") === "Glæra", 'Villa shortest 2');

function reverse(str) {
  if (typeof str === 'string') {
    const split = str.split('');
    const reversed = split.reverse();
    return reversed.join('');
  }
  return null;
}
console.assert(reverse('halló') === 'óllah', 'reverse: snýr við einföldum streng');
console.assert(reverse(false) === null, 'reverse: ef ekki strengur, skila null');

function palindrome(str) {
  if (typeof str !== 'string') return null;
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reversedStr = normalizedStr.split('').reverse().join('');

  return normalizedStr === reversedStr;
}
console.assert(palindrome("Bararabbabarab") === false, 'Villa palindrome 1');
console.assert(palindrome("Hahahah") === true, 'Villa palindrome 2');

function vowels(str) {
  if (typeof str !== 'string') return null;
  const vowels = 'aeiouáéíóúæö';
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.assert(vowels("Ég er forritari") === 6, 'Villa vowels 1');
console.assert(vowels("Halló heimur") === 5, 'Villa vowels 2');


function consonants(str) {
  if (typeof str !== 'string') return null;
  const vowels = 'aeiouáéíóúæö';
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.assert(consonants("Ég er forritari") === 7, 'Villa consonants 1');
console.assert(consonants("Halló heimur") === 6, 'Villa consonants 2');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
alert('Hæ! Þetta forrit mun skoða strenginn sem þú setur inn og sýna lengsta og stysta orðið, strenginn öfugan, hvort hann sé samhverfur, fjölda samhljóða, og fjölda sérhljóða.')

let input = prompt('Stimplið inn streng til að skoða:');

if (input === null || input.trim() === '') {
  return; 
}

let longestWord = longest(input);
let shortestWord = shortest(input);
let reversedStr = reverse(input);
let vowelCount = vowels(input);
let consonantCount = consonants(input);
let isPalindrome = palindrome(input);

let resultMessage = 
'Results:\n' +
`Longest word: ${longestWord}\n` +
`Shortest word: ${shortestWord}\n` +
`Reversed string: ${reversedStr}\n` +
`Number of vowels: ${vowelCount}\n` +
`Number of consonants: ${consonantCount}\n` +
`Is palindrome: ${isPalindrome ? 'Já' : 'Nei'}`;

alert(resultMessage);

let tryAgain = confirm('Viltu prófa annan streng?');
if (tryAgain) {
  start();
}
}
