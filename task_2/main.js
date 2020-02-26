
// 1. Zadan je objekt 'phonebook'.
// Napraviti funkciju printProperties() za ispis svojstava objekta i njihovih vrijednosti, poslati joj objekt 'phonebook' te ispisati za svaki kontakt njegovo ime, broj i grad stanovanja. 

// 2. Objektu dodati metodu search() koja prima ime kontakta i vraća sve podatke traženog 
// kontakta ili 0 ako nije pronađen. U glavnom programu zatražiti od korisnika unos 
// imena kontakta, pozvati metodu te ispisati podatke nađenog kontakta ili 
// odgovarajuću poruku. 

// 3. Napisati funkciju addNewContact() za dodavanje novog, petog kontakta u imenik koja 
// od korisnika traži unos podataka (ime, prezime, broj telefona i adresu - ulica, broj 
// ulice, grad i poštanski broj grada). Pozvati funkciju i dodati novi kontakt. 

// 4. Napisati funkciju deleteContact() koja prima ime kontakta i briše ga iz imenika. 
// Zatražiti od korisnika unos imena korisnika kojega želi ukloniti zatim to i učiniti.
// Ponovno ispisati objekt koristeći funkciju printProperties().

var phonebook = {
    contact1: {
      firstName: "Ana",
      lastName: "Anic",
      phoneNumber: "063/111-111",
      address: ['Ante Starcevica', '9', 'Mostar', '88000']
    },
    contact2: {
      firstName: "Ante",
      lastName: "Antic",
      phoneNumber: "063/222-111",
      address: ['Hrvatske mladezi', '7', 'Mostar', '88000']
    },
    contact3: {
      firstName: "Marko",
      lastName: "Markic",
      phoneNumber: "063/222-333",
      address: ['Kraljice Katarine', '10', 'Grude', '88340']
    },
    contact4: {
      firstName: "Hrvoje",
      lastName: "Horvat",
      phoneNumber: "098/2522-111",
      address: ['Jarunska ulica', '12', 'Zagreb', '10000']
    }
  };
  
  //print properties
  function printProperties(obj) {
    for (var prop in obj) {
      if (typeof obj[prop] !== 'function') {
         console.log ('Name: '+ obj[prop].firstName + '\n' + 'Phone number: ' + obj[prop].phoneNumber + '\n' + 'City: ' + obj[prop].address[2])
      }
    }
  }
  printProperties(phonebook)
  
  
  //search contacts
  phonebook.search = function(inputSrc) {
    for (var prop in this) {
      if (this[prop].firstName === inputSrc && typeof this[prop] !== 'function') {
        return ('Name: '+ this[prop].firstName + '\n' + 'Phone number: ' + this[prop].phoneNumber + '\n' + 'City: ' + this[prop].address[2])
      }
    }
    return 0
  }
  var inputSearch = prompt('Enter a contact\'s name for search:');
  console.log(phonebook.search(inputSearch))
  
  //add contacts
  function addNewContact() {
    phonebook.contact5 = {}
    phonebook.contact5.firstName = (prompt('New contact\'s name:'))
    phonebook.contact5.lastName = (prompt('New contact\'s surname: '))
    phonebook.contact5.phoneNumber = (prompt('New contact\'s phone number: '))
    phonebook.contact5.address = []
    phonebook.contact5.address.push(prompt('New contact\'s adress - street:'))
    phonebook.contact5.address.push(prompt('New contact\'s adress - street number:'))
    phonebook.contact5.address.push(prompt('New contact\'s adress - city:'))
    phonebook.contact5.address.push(prompt('New contact\'s adress - zip code:'))
  }
  
  addNewContact()
  
  //delete contact
  function deleteContact(inputDlt) {
    for (var prop in phonebook) {
      if (phonebook[prop].firstName === inputDlt && typeof phonebook[prop] !== 'function') {
        delete phonebook[prop]
              return('Contact ' + inputDlt + ' is removed.')
      }
    } return ('Requested contact is not hereee.')
  }
  
  var inputDelete = prompt('Enter the name of the contact you want to remove :')
  console.log(deleteContact(inputDelete))
  
  printProperties(phonebook)
  