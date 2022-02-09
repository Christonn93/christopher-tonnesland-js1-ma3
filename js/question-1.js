/* const corsUrl = "https://noroffcors.herokuapp.com/";
const gameUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f6dd075d81db416fbb289fc9d3726038";
const apiResult = document.querySelector("#apiResult");


const URL = corsUrl + gameUrl;

async function getGames() {
  const fetchResponse = await fetch(URL);
  const fetchResult = await fetchResponse.json();

  console.log(fetchResult);

    const object = data.result;

    console.log(object);
    const gameTitle = object.title;
    const gameRating = object.rating;
    const gameTags = object.tags;
    const gameImage = object.image_background;

    
    apiResult.innerHTML += `
      <div class="game-card">
      <div class="ratio-box">
      <img src="${gameImage}" class="image" alt="image missing" />
      </div>
      <h3> ${gameTitle} </h3>
      <p> ${gameRating} </p>
      <p> ${gameTags} </p>
      </div>
  `;



}
getGames();
 */



const corsUrl = "https://noroffcors.herokuapp.com/";
const gameUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f6dd075d81db416fbb289fc9d3726038";

const URL = corsUrl + gameUrl;

const apiResult = document.querySelector("#apiResult");


async function getGame(){

  const responds = await fetch(URL);

  const result = await responds.json();

  const gameObject = result.results;

  for (var i = 0; i < gameObject.length; i++){
    console.log(gameObject[i].rating);
    console.log(gameObject[i].name);
    console.log(gameObject[i].tags);

    const gameCard = [{
      name: gameObject[i].name,
      rate: gameObject[i].rating,
      tags: gameObject[i].tags,
      image: gameObject[i].background_image
    }
    ]
    const gameName = gameObject[i].name;
    const gameRate = gameObject[i].rating;
    const gameTags = gameObject[i].tags; 
    const gameImage = gameObject[i].background_image; 

    gameObject.forEach(gameCard => {


    apiResult.innerHTML += `
      <div class="game-card">
      <div class="ratio-box">
      <img src="${gameImage}" class="image" alt="image missing" />
      </div>
      <h3> ${gameName} </h3>
      <p> ${gameRate} </p>
      <p> ${gameTags} </p>
      </div>
  `;
    });



  }

 
}

getGame();