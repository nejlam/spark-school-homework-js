// 1. Zadan je niz 'phonebook'.
// Napraviti funkciju printProperties() za ispis svojstava objekta (kontakata iz niza 'phonebook') i njihovih vrijednosti, poslati joj niz 'phonebook' te ispisati za svaki kontakt njegovo ime, broj i grad stanovanja. 

// 2. Nizu 'phonebook' dodati metodu search() koja prima ime kontakta i vraća sve podatke traženog 
// kontakta ili 0 ako nije pronađen. U glavnom programu zatražiti od korisnika unos 
// imena kontakta, pozvati metodu te ispisati podatke nađenog kontakta ili 
// odgovarajuću poruku. 

// 3. Napisati funkciju addNewContact() za dodavanje novog, petog kontakta u imenik koja 
// od korisnika traži unos podataka (ime, prezime, broj telefona i adresu - ulica, broj 
// ulice, grad i poštanski broj grada). Pozvati funkciju i dodati novi kontakt. 

// 4. Napisati funkciju deleteContact() koja prima ime kontakta i briše ga iz imenika. 
// Zatražiti od korisnika unos imena korisnika kojega želi ukloniti zatim to i učiniti.
// Ponovno ispisati niz koristeći funkciju printProperties().

var phonebook = [{
    firstName: "Ana",
    lastName: "Anic",
    phoneNumber: "063/111-111",
    address: ['Ante Starcevica', '9', 'Mostar', '88000']
  },
  {
    firstName: "Ante",
    lastName: "Antic",
    phoneNumber: "063/222-111",
    address: ['Hrvatske mladezi', '7', 'Mostar', '88000']
  },
  {
    firstName: "Marko",
    lastName: "Markic",
    phoneNumber: "063/222-333",
    address: ['Kraljice Katarine', '10', 'Grude', '88340']
  },
  {
    firstName: "Hrvoje",
    lastName: "Horvat",
    phoneNumber: "098/2522-111",
    address: ['Jarunska ulica', '12', 'Zagreb', '10000']
  }
];


//print properties
function printProperties(obj) {
  console.log('Phonebook:')
  for (i = 0; i < obj.length; i++)
    console.log('Name: ' + obj[i].firstName + '\n' + 'Phone number: ' + obj[i].phoneNumber + '\n' + 'City: ' + obj[i].address[2])
}
printProperties(phonebook);

//search for a contact
phonebook.search = function(inputSrc) {
  for (i = 0; i < this.length; i++) {
    if (this[i].firstName === inputSrc) {
      return (this[i])
    }
  }
  return 0
}

var inputSearch = prompt('Enter a contact\'s name for search:');
console.log(phonebook.search(inputSearch))

//add new contact
function addNewContact() {
  var contact5 = {}
  phonebook.push(contact5)
  phonebook[4].firstName = (prompt('New contact\'s name:'))
  phonebook[4].lastName = (prompt('New contact\'s surname: '))
  phonebook[4].phoneNumber = (prompt('New contact\'s phone number: '))
  phonebook[4].address = []
  phonebook[4].address.push(prompt('New contact\'s address - street:'))
  phonebook[4].address.push(prompt('New contact\'s address - street number:'))
  phonebook[4].address.push(prompt('New contact\'s address - city:'))
  phonebook[4].address.push(prompt('New contact\'s address - zip code:'))
  console.log(phonebook[4])
}

addNewContact()


//delete a contact
function deleteContact(inputDlt) {
  for (i = 0; i < phonebook.length; i++) {
    if (phonebook[i].firstName === inputDlt) {
      phonebook.splice(i, 1)
      return ('Contact ' + inputDlt + ' is removed.')
    }
  }
  return ('Requested contact is not hereee.')
}

var inputDelete = prompt('Enter the name of the contact you want to remove :')
console.log(deleteContact(inputDelete))

//print properties
printProperties(phonebook);
