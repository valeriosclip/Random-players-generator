 // Create the array of quote objects and name it `quotes`.
 
var players = [
  {
    roundImage: "images/Totti.jpg",
    fullName: "Francesco Totti",
    profession: "Attacking Midfielder",
    birthday: "September 1976",
    city: "Rome",
    country: "Italy",
    description: "Francesco Totti holds the most official A.S. Roma appearance record (786). He was captain and legend of A.S. Roma",
    wikipedia: "https://en.wikipedia.org/wiki/Francesco_Totti"
  },
  {
    roundImage: "images/gbuffon.jpg",
    fullName: "Luigi Buffon",
    profession: "Goalkeeper",
    birthday: "January 1978",
    city: "Carrara",
    country: "Italy",
    description: "Buffon was the runner-up for the Ballon d'Or in 2006, and was elected to be part of the FIFPro World XI",
    wikipedia: "https://en.wikipedia.org/wiki/Gianluigi_Buffon"
  },
  {
    roundImage: "images/lucatoni.jpg",
    fullName: "Luca Toni",
    profession: "Striker",
    birthday: "May 1977",
    country: "Italy",
    description: "A prolific goal-scorer, Toni was a traditional centre-forward, who excelled in the air and acrobatically",
    wikipedia: "https://en.wikipedia.org/wiki/Luca_Toni"
  },
  {
    roundImage: "images/cruyff.jpg",
    fullName: "Johan Cruyff",
    profession: "Attacking Midfielder",
    birthday: "April 1947",
    city: "Amsterdam",
    country: "Netherlands",
    description: "Cruyff was the first three-time European Player of the Year winner in a career that brought him from the Netherlands to Spain",
    wikipedia: "https://en.wikipedia.org/wiki/Johan_Cruyff"
  },
  {
    roundImage: "images/pupizanetti.jpg",
    fullName: "Javier Zanetti",
    profession: "Defender/Midfielder",
    birthday: "August 1973",
    city: "Buenos Aires",
    description: "858 games for the Serie A outfit spread across almost two decades has led ‘Il Capitano’ on a fascinating journey",
    wikipedia: "https://en.wikipedia.org/wiki/Javier_Zanetti"
  },
  {
    roundImage: "images/socrates.jpg",
    fullName: "Sócrates",
    profession: "Attacking Midfielder",
    birthday: "February 1954",
    city: "Belém",
    country: "Brazil",
    description: "His medical degree and his political awareness earned him the nickname 'Doctor Socrates'",
    wikipedia: "https://en.wikipedia.org/wiki/S%C3%B3crates"
  },
  {
    roundImage: "images/baggio.jpg",
    fullName: "Roberto Baggio",
    profession: "Second Striker",
    birthday: "February 1967",
    country: "Italy",
    description: "He is the former president of the technical sector of the Italian Football Federation.",
    wikipedia: "https://en.wikipedia.org/wiki/Roberto_Baggio"
  },
  {
    roundImage: "images/raul.jpg",
    fullName: "Raúl González Blanco",
    profession: "Striker",
    birthday: "June 1977",
    country: "Spain",
    description: "Raúl is considered one of the most important players in the history of Real Madrid",
    wikipedia: "https://en.wikipedia.org/wiki/Ra%C3%BAl_(footballer)"
  },
  {
    roundImage: "images/klose.jpg",
    fullName: "Miroslav Klose",
    profession: "Striker",
    birthday: "June 1978",
    city: "Opole",
    country: "Poland",
    description: "Klose is best known for his performances with the Germany national team. ",
    wikipedia: "https://en.wikipedia.org/wiki/Miroslav_Klose"
  },
  {
    roundImage: "images/batistuta.jpg",
    fullName: "Gabriel Omar Batistuta",
    profession: "Striker",
    birthday: "February 1969",
    country: "Argentina",
    description: "Gabriel Batistuta was arguably the deadliest goalscorer in Argentine football history",
    wikipedia: "https://en.wikipedia.org/wiki/Gabriel_Batistuta"
  },
  {
    roundImage: "images/henry.jpg",
    fullName: "Thierry Henry",
    profession: "Forward/Midfielder",
    birthday: "August 1977",
    country: "France",
    description: "He became twice finished runner-up for FIFA World Player of the Year honors while starring for Arsenal FC ",
    wikipedia: "https://en.wikipedia.org/wiki/Thierry_Henry"
  },
  {
    roundImage: "images/cahill.jpg",
    fullName: "Tim Cahill",
    profession: "Forward/Midfielder",
    birthday: "December 1979",
    city: "Sydney",
    country: "Australia",
    description: "Cahill is the all-time leading goalscorer for Australia, having scored 50 goals in 108 caps",
    wikipedia: "https://en.wikipedia.org/wiki/Tim_Cahill"
  }
] 


/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function rgbRandom() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  var color = 'rgb(' + rgbRandom() + ', ' + rgbRandom() + ', ' + rgbRandom() + ')';
  document.body.style.backgroundColor = color;
}

var selectedQuote;

//generate a random quote that is different from the one printed previously

function getRandomPlayer() {
  do {
    var newPlayer = players[Math.floor(Math.random() * players.length)];
  } while (newPlayer === selectedQuote);
  
  return newPlayer;
}


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  changeColor();

  var selectedQuote = getRandomPlayer();

 /**  var string = "";
  string += '<img src="' + selection.roundImage + '"class="roundImage"/>';
  string += '<div id="quote-description">';
  string += '<h2 class="fullName">' + selection.fullName + '</h2>';
  string += '<h3 class="profession">' + selection.profession + '</h3>';
  string += '<h4 class="birthday">' + selection.birthday;
  if (selection.city !== "") {
    string += '<span class="city">' + selection.city + '</span>';
  }
  if (selection.country !== "") {
    string += '<span class="country">' + selection.country + '</span>';
  }
  string += '</h4>';
  string += '<p class="description">' + selection.description + '</p>';
  string += '</div>';

  document.getElementById('quote-box').innerHTML = string;

}
**/

var contentHtml = `
<img src="${selectedQuote.roundImage}" class="roundImage"> 
<div id="quote-description">
  <div class="title">
    <h2 class="fullName"> ${selectedQuote.fullName}</h2>
    <h5><a href="${selectedQuote.wikipedia}" class="wikipedia" target="_blank">Learn More</a></h5>
  </div>
  <h3 class="profession"> ${selectedQuote.profession}</h3>
  <h4 class="birthday"> ${selectedQuote.birthday}
    ${selectedQuote.city ? `<span class="city">${selectedQuote.city}</span>` : ""}
    ${selectedQuote.country ? `<span class="country">${selectedQuote.country}</span>` : ""}
  </h4>
  <p class="description"> ${selectedQuote.description}</p>
</div>
`;

   document.getElementById('quote-box').innerHTML = contentHtml;
 }

// Click "show new profile" button to invoke the `printQuote`function.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.addEventListener("DOMContentLoaded", printQuote, false);

