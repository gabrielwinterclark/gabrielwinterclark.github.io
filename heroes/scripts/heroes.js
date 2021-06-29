//grab a reference to the header tag in the HTML file
const header = document.querySelector('header');

//grab a reference to the section tag in the HTML file
const section = document.querySelector('section');

//store the URL of the JSON we want to retrieve in a variable
let requestURL = 'https://gabrielwinterclark.github.io/heroes/superheroes.json';

//create a new request object instance from the XMLHttpRequest constructor
let request = new XMLHttpRequest();

//open the request
request.open('GET', requestURL);

//setting the responseType to JSON
request.responseType = 'json';

//send the request
request.send();

//event listener to wait for the response to return from the server
request.onload = function() {
  //store the JSON object in superHeroes
  const superHeroes = request.response;
  //pass superHeroes to a function to parse the header
  populateHeader(superHeroes);
  // pass superHeroes to a function to parse the individual heroes
  showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
  //create a <h1> HTML element
  const myH1 = document.createElement('h1');
  //set the text value to Super Hero Squad by grabbing the JSON object value that corresponds to squadName
  myH1.textContent = jsonObj['squadName'];
  
  //update the HTML file
  header.appendChild(myH1);
  
  //create a <p> element
  const myPara = document.createElement('p');
  
  //set the text value to Hometown: Metro City Formed: 2016
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  
  //update the HTML file
  header.appendChild(myPara);
}

function showHeroes(jsonObj) {
  //grab the array that contains the squads members
  //once we have the array we can just treat this like an ordinary array just like we did on the page Object, Class, and Array Practice
  const heroes = jsonObj['members'];
  
  //Loop through the heroes object array
  //Add information for each hero one at a time
  for (let i = 0; i < heroes.length; i++) {
    //we need to create the HTML objects that will appear in the HTML file
    //create article element in the HTML file
    //we could use the article element to create a card that will hold all of the hero's information
    const myArticle = document.createElement('article');
    //create a <H2> heading for the hero's name
    const myH2 = document.createElement('h2');
    //create paragraphs for the hero's secret identity, age, and superpowers
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    //create a bulleted list to contain the hero's superpowers
    const myList = document.createElement('ul');
    //grab the hero's secret identity, age, and superpowers from the JSON object and update the HTML elements
    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
    //grab the array that contains the hero's superpowers
    const superPowers = heroes[i].powers;
    //loop through the array grabbing each individual power and adding it to a bulleted list
    for (let j = 0; j < superPowers.length; j++ {
      const listItem = document.createElement('li');
         listItem.textContent = superpowers[j];
         myList.appendChild(listItem);
  }
  //add the HTML objects in the order that they will appear in HTML article
  myArticle.appendChild(myH2);
  myArticle.appendChild(myPara1);
  myArticle.appendChild(myPara2);
  myArticle.appendChild(myPara3);
  myArticle.appendChild(myList);
  //add the article to the HTML file
  section.appendChild(myArticle);
}
}
