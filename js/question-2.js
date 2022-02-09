const corsUrl = "https://noroffcors.herokuapp.com/";
const gameUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f6dd075d81db416fbb289fc9d3726038";

const URL = corsUrl + gameUrl;

const apiResult = document.querySelector("#apiResult");

setTimeout(() => {
  async function getGame() {
    const responds = await fetch(URL);

    const result = await responds.json();

    const gameObject = result.results;

    const games = await gameObject;

    const gameFilter = games.filter(function (game) {
      if (!gameObject.rating) {
        // Game has no rating
        return false; // Exclude it
      } else if (gameObject.rating.id === 388568) {
        return false; // Exclude it
      } else {
        return true; // Include it
      }
    });

    for (var i = 0; i < gameObject.length; i++) {
      const gameName = gameObject[i].name;
      const gameRate = gameObject[i].rating;
      const gameTags = gameObject[i].tags.length;
      const gameImage = gameObject[i].background_image;

      apiResult.innerHTML += `
  <div class="game-card">
  <div class="ratio-box">
  <img src="${gameImage}" class="image" alt="image missing" />
  </div>
  <h3> ${gameName} </h3>
  <p>Rating: ${gameRate} </p>
  <p>Tags: ${gameTags} </p>
  </div>
`;
    }
  }
  getGame();
}, 1000);
