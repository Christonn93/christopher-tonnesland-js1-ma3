const corsUrl = "https://noroffcors.herokuapp.com/";
const gameUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f6dd075d81db416fbb289fc9d3726038";

const URL = corsUrl + gameUrl;

const apiResult = document.querySelector("#apiResult");

const error = `
<div class="error">
<h3>We are sorry</h3>
<p>Looks like something went wrong with the server. Please reload the page</p>
<p>Error code: <u>cx85-gtr-4512d6-69</u></p>
<p>If the error continues, please contact customer service at: <u>555-333-569</u></p>
</div>
`;

// This loader SVG is not mine. I have copied it from codepen. Link to the creator is located in the Readme file. 
const loadingContainer = document.querySelector(".loading");
loadingContainer.innerHTML += `
    <h2>Your games is loading</h2>
    <svg viewBox="-2000 -1000 4000 2000">
    <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
    <use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use></svg>`;
   

setTimeout(() => {
  async function getGame() {
    try {
    const responds = await fetch(URL);

    const result = await responds.json();

    let gameObject = result.results;
      console.log(gameObject);


    // Read about this filtering in the included Readme file.
    gameObject = gameObject.filter(function(id){
        return id.id !== 388568;
      }) 

    for (var i = 0; i < gameObject.length; i++) {
      if (i === 8) {
        break;
      }
      const gameName = gameObject[i].name;
      const gameRate = gameObject[i].rating;
      const gameTags = gameObject[i].tags.length;
      const gameRelease = gameObject[i].released;
      const gameImage = gameObject[i].background_image; // "https://via.placeholder.com/500x500?text=Image+not+found";  
      // I wanted to include the images for the games but due to not friendly content. I tried to find a filter to add to remove the not friendly content. You can read more about it in the included Readme file.

      loadingContainer.innerHTML = "";

      apiResult.innerHTML += `
          <div class="game-card">
          <div class="ratio-box">
          <img src="${gameImage}" class="image" alt="image missing" />
          </div>
          <h3 class="game-title"> <a href="../pages/gamepage.html" class="game-title">${gameName}</a></h3>
          <p>Release date: ${gameRelease}</p>
          <p>Rating: ${gameRate} </p>
          <p>Tags: ${gameTags} </p>
          <a class="cta-btn" href="../pages/gamepage.html">Read more</a>
          </div>`;

    }


} catch (gameObject) {
  loadingContainer.innerHTML = error;
}
  }
  getGame(); 
}, 2000);

