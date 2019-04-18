/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  { quote : 'With the new day comes new strength and new thoughs.',
    source : 'Eleanor Roosevelt'
  },
  { quote : 'It does not matter how slowly you go as long as you do not stop.',
   source : 'Confucius',
   citation : 'https://www.brainyquote.com/quotes/confucius_140908'
  },
  { quote : 'Life is 10% what happens to you and 90% how you react to it.',
   source : 'Charles R. Swindoll'
  },
  { quote : 'Only I can change my life. No one can do it for me.',
   source : 'Carol Burnett'
  },
  { quote : 'Make your life a masterpiece; imagine no limitations on what you can be, have or do.',
   source: 'Brian Tracy',
   year : 1944
  }
];

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(){
  var i = Math.floor( Math.random() * quotes.length );
  return quotes[i];
}


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote(){
  var randomQuote = getRandomQuote(quotes);
  var htmlString = '<p class = "quotes">' + randomQuote.quote + '</p>'
   + '<p class = "source">' + randomQuote.source
  if (randomQuote.citation){
    + '<span class = "citation">' + randomQuote.citation + '</span>'
  } else if (randomQuote.year){
    + '<span class = "year">' + randomQuote.year + '</span>'
  } else {
    + '</p>'
  }
  console.log(htmlString);
  document.getElementById("quote-box").innerHTML = "htmlString";
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
