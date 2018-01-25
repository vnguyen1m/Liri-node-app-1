var keysFile = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");


//Twitter - Show last 20 tweets and when they were created. node liri.js my-tweets
function lastTweets(){
	var twitterKeys = new Twitter(twitterKeysFile.twitterKeys);
	var params = {vnguyen1m: 'nodejs', count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error){
		console.log(tweets);
	}
});

//Spotify - Show artist(s), song name, preview link of song, album. node lira.js spotify-this-song.
function spotifyMe(songName){
	spotify.search({type: 'track', query: songName}, function(err, data) {
	if (err) {
		return console.log('Error occurred: ' + err);
	}
	console.log(data);
	var artistResults = data.tracks.item[0].album.artists;
	var findArtist = [];
	for (var i = 0; i < findArtist.length; i++){
		findArtist.push()(artistResults[i].name);
	}
	var artistString = findArtist.join(",");
	console.log("Artist(s): " + artistResults);
	console.log("Song Name: " + data.tracks.items[0].name);
	console.log("Preview Link from Spotify: " + data.tracks.items[0].preview_url);
	console.log("Album that the Song is From: " + data.tracks.items[0].album.name);
});
}

//OMDB - Output movie title, year, rating, rotten tomatoes, country, language, plot, actors. node liri.js movie-this '<movie>'.
function movieLookup(movieName){
	event.preventDefault();
    var title = "mr+nobody";
    var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";
    console.log("Title of Movie: " + movie.Title);
    console.log("Year Movie Came Out: " + movie.Year);
    console.log("IMDB Rating: " + movie.imdbRating);
    console.log("Rotten Tomatoes Rating: " + movie.tomatoURL);
    console.log("Country Where Movie Was Produced: " + movie.Country);
    console.log("Language of Movie: " + movie.Language);
    console.log("Plot of Movie: " + movie.Plot);
    console.log("Actors in Movie: " + movie.Actors);
}

//Spotify - using fs node package, take text from random.txt and call liri commands. node liri.js do-what-it-says.
function doWhatItSays(){
	fs.readFile("random.txt", function(err, data){
		if(err) {
			console.error('Something went wrong!');
		} else {
			console.log(data.body);
		}
	});
}
