# christopher-tonnesland-js1-ma3

## Loading svg copied from here

The loading SVG is not my work.

[I found the loading svg here](https://freefrontend.com/css-loaders/)

[The code for the Svg is from this codepen](https://codepen.io/thebabydino/pen/yjoPMJ?editors=0100)

## Filter to remove not friendly content

The image i wanted to remove is on the game called "Play with gwen"
I have added a [image]() that displays the tags that the game is having.


```js
// This filter only got the display for the ID of the game that is nsfw. After that i did not get what to do
    let blockList = [];
    for (let i = 0; i < games.length; i++) {
      const tags = games[i].tags;

      tags.forEach((tag) => {
        if (tag.name.toLowerCase() === "nsfw") {
          console.log(games[i].id);
          blockList.push({
            id: games[i].id,
          });
        }
      });
    }
    console.log(blockList);
```

```js
// This filtering i got from Oliver. I did not understand how to include it in the function to make it work. I worked on it, asked around but i still did not understand how to implement it into my code. 

const games = await getGames();

const filteredGames = games.filter(function(game) {
  if (!game.esrb_rating) {
    // Game has no rating
    return false; // Exclude it
  } else if (game.esrb_rating.id === 5) {
    return false; // Exckude it
  } else {
    return true; // Include it
  }
})

```

```js
// I received this code from a classmate Jonne Martin(discord: mordiinthehouse#9504). I don't understand 100% what it does but i wanted the images to show so i did end up including it in the final delivery.
    gameObject = gameObject.filter(function(id){
        return id.id !== 388568;
      }) 
```