const corsUrl = "https://noroffcors.herokuapp.com/";
const gameUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f6dd075d81db416fbb289fc9d3726038";

const URL = corsUrl + gameUrl;

async function getGames() {
  const fetchResponse = await fetch(URL);
  const fetchResult = await fetchResponse.json();

  console.log(fetchResult);

  const gameTitle = fetchResult.title;
  const gameRating = fetchResult.rating;
  const gameTags = fetchResult.tags;
  const gameImage = fetchResult.image_background;

  const apiResult = document.querySelector("#apiResult");
  apiResult.innerHTML += `
    <div class="game_card">
    <div class="ratio-box">
    <img src="${gameImage}" class="image" alt="image missing" />
    </div>
    <h3> ${gameTitle} </h3>
    <p> ${gameRating} </p>
    <p> ${gameTags} </p>
    </div>
`;
}
getGames(apiResult);
