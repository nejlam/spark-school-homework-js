// Zadatak 1.
// Napraviti funkciju za dohvat podataka koja ima 2 parametra "url" i "callback".
// Dohvatiti podatke sa https://api.myjson.com/bins/gnte0 i pozvati callback (fukcija za obradu podataka).

function loadDoc(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (callback) callback(JSON.parse(xhttp.response))
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  
  function parseData(data) {
    sortSongs(data);
    sortLength(data);
    checkGenre(data);
    songDebut(data);
  }
  
  // Zadatak 2.
  // Napraviti funkciju koja će sortirati dobivene podatke ("songs") po id-u (od najvećeg id-a prema najmanjem) i nakon sortiranja
  // ispisati podatke u obliku "id - songName - artist" ("artist" se nalazi u property-ju "artists"). 
  
  function sortSongs(data) {
    var songs = data.songs.map(function(song) {
      return song
    }).sort(function(a, b) {
      return a.id - b.id
    })
  
    songs.forEach(function(song) {
      Object.keys(data.artists).forEach(function(artist) {
        if (song.artist_id == artist)
          console.log(song.id + ' - ' + song.songName + ' - ' + data.artists[artist])
      })
    })
  }
  
  // Zadatak 3.
  // Napraviti funkciju koja će sortirati dobivene podatke ("songs") po "songLength" (format songLength-a je minutes:seconds),
  // sortirati od najduže pjesme prema najkraćoj i nakon sortiranja ispisati 3 najduže pjesme. 
  
  function sortLength(data) {
    var songs = data.songs.map(function(song) {
      return song
    }).sort(function(a, b) {
      return convert(b.songLength) - convert(a.songLength)
    })
  
    var theLongest = songs.slice(0, 3)
    theLongest.forEach(function(song) {
      console.log(song.songName + ' - ' + song.songLength)
    })
  }
  
  function convert(minutes) {
    var parsed = parseInt(60 * minutes.split(':')[0]) + parseInt(minutes.split(':')[1])
    return parsed
  }
  
  // Zadatak 4.
  // Napraviti funkciju koja provjerava koji se žanr glazbe najviše ponavlja među navedenim pjesmama i ako se ponavlja
  // u bar 3 pjesme, ispišite taj žanr. 
  
  function checkGenre(data) {
  
    var genres = {};
    data.songs.map(function(song) {
      song.genre.map(function(genr) {
        if (!genres[genr]) genres[genr] = 0;
            genres[genr]++
      }) 
    }) 
    Object.keys(genres).forEach(function(genr){
          if(genres[genr] >= 3)
          console.log ('Zanr koji se ponavlja najmanje 3 puta je ' + genr)
      })
  }
  
  // Zadatak 5.
  // Napraviti funkciju koja će iz "debut" property-ja izvući datum objavljivanja pjesme te ispisati za svaku pjesmu
  // na koji je dan u tjednu izašla. Zatim ispisati dane koji se ponavljaju više od jednog puta i napisati
  // koliko se puta ponavljaju ti dani. 
  
  function songDebut(date){
  var weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  var debutDays = {}
      date.songs.forEach(function(song){
          var d = new Date(song.debut);
          var day = weekDays[d.getDay()]
          if(!debutDays[day])debutDays[day]=0;
              debutDays[day]++
      }) 
      Object.keys(debutDays).forEach(function(dan){
          if(debutDays[dan] > 1) console.log('Dan izdavanja koji se ponavlja vise puta je ' + dan)
          
      })
      
  }
  
  
  
  loadDoc('https://api.myjson.com/bins/gnte0', parseData)
  