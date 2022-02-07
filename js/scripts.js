fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "cf611a435amshc14f90d10a093bfp196c4ajsn1bf6a524120f"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});