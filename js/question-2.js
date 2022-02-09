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

    let blockList = [];
    for (let i = 0; i < games.length; i++) {
      const tags = games[i].tags;

      tags.forEach((tag) => {
        if (tag.name.toLowerCase() === "nsfw") {
          console.log(games[i].id);
          blockList.push({ id: games[i].id });
        }
      });
    }
    console.log(blockList);

    for (var i = 0; i < gameObject.length; i++) {
      if (i === 8) {
        break;
      }
      const gameName = gameObject[i].name;
      const gameRate = gameObject[i].rating;
      const gameTags = gameObject[i].tags.length;
      const gameImage = "https://via.placeholder.com/500x500?text=Image+not+found"; /* gameObject[i].background_image; */
      const gameID = gameObject[i].id;

      apiResult.innerHTML += `
    <div class="game-card">
    <div class="ratio-box">
    <img src="${gameImage}" class="image" alt="image missing" />
    </div>
    <h3 class="game-title"> ${gameName} </h3>
    <p>Rating: ${gameRate} </p>
    <p>Tags: ${gameTags} </p>
    <a class="cta-btn">Read more</a>
    </div>
  `;
    }
  }
  getGame();
}, 1000);
