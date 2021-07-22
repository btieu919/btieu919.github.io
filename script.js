/* .js files add interaction to your website */

/* variables to be used later on in functions*/
var count = 1;
var button = document.getElementById("factButton");
var factDisplay = document.getElementById("fact");

/* event listener for the fact button */
button.addEventListener("click", displayFact);


var factList = [
  "In 2019, every six seconds our rainforests would lose land that equated to the size of a soccer field.",

  "Everyday, 127 species of organisms become extinct as a result of deforestation.",

  "In the last 50 years, 17% of the 2,300,000 square mile Amazon Rainforest has been lost.",

  "In 2017, the amount of land that the tropics lost was about the size of Bangladesh.",

  "Deforestation accounts for more than 10 percent of the world's human carbon emissions every year.",

  "In 100 years, rainforests could vanish entirely.",

  "The amount of tropical forest loss from 2002 to 2019 averaged to the size of Belgium.",
  
  "Each year, the amount of carbon dioxide released as a result of deforestation is greater than 1.5 billion tons.",

  "Over 210 gigatons of carbon dioxide are stored in our forests, hence why when they are cut tons of carbon are released.",

  "Each minute, about 20 football fields worth of forest land are cut down."
  ];

/* functions that continuously displays a new fact each time the fact button is hit*/
function displayFact () {
  factDisplay.innerHTML = factList [count];
  count += 1
  if (count == factList.length) {
    count = 0;
  }
  }
