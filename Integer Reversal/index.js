// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Moje resenje
//parseFloat vraca i decimalne
function reverseInt(n) {
    return (
        parseFloat(
            n
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(n)
      )                 
}

// console.log(reverseInt(500));

// Drugo resenje, parseInt
// parseInt vraca intidzer, ne decimalne

function reverseInt(n) {
    return (
        parseInt(
            n
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(n)
      )                 
}

console.log(reverseInt(-500.3232));

module.exports = reverseInt;
