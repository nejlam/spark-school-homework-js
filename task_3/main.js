// JS2 - 3. Predavanje - Objects I - Domaća zadaća - Zadatak 1 **
// Deklarirati prazan objekt "osoba". Zatražiti od korisnika unos vrijednosti za sljedeća 3
// svojstva objekta: jmbg, ime i prezime.
// Napisati funkciju koja vrši provjeru za ime i prezime - ne smiju biti kraći od 3 znaka i ne smiju sadržavati brojeve te funkciju za JMBG - 
// ne smije sadržavati ništa osim brojeva i mora imati točno 13 brojeva.
// Ukoliko provjera nije prošla, funkcija treba ispisati poruku greške i vratiti 0, ukoliko je 
// provjera prošla, funkcija vraća 1.
// Zatražiti od korisnika unos navedenih vrijednosti. Nakon svakog unosa pozvati odgovarajuću funkciju za provjeru
// i tek ako je provjera prošla, tada treba dodijeliti unesene vrijednosti svojstvima objekta.

var person = {}

function checkLength(userInput) {
  if (userInput.length <= 3) {
    console.log('Not a valid input. Must be more than 3 characters long.')
    return 0
  }
  for (var i = 0; i < userInput.length; i++) {
    if (!isNaN(userInput[i])) {
      console.log('Not a valid input. Must not include numbers.')
      return 0
    }
  }
  return 1
}

function checkJMBG(userJMBG) {
  if (userJMBG.length !== 13) {
    console.log('Not a valid input. Must include 13 digits.')
    return 0
  }
  for (var i = 0; i < userJMBG.length; i++) {
    if (isNaN(userJMBG[i])) {
      console.log('Not a valid input. Must include 13 digits.')
      return 0
    }
  }
  return 1
}

//for the object property 'name'
do {
  var name = prompt('Enter your name:');
}
while (!checkLength(name));

if (checkLength(name)) {
  person.name = name
}
//property 'surname'
do {
  var surname = prompt('Enter your surname:');
}
while (!checkLength(surname));

if (checkLength(surname)) {
  person.surname = surname
}
//property 'jmbg'
do {
  var jmbg = prompt('Enter your ID number (JMBG):');
}
while (!checkJMBG(jmbg));

if (checkJMBG(jmbg)) {
  person.jmbg = jmbg
}

console.log(person)