var keys = require('./keys.js');

var consumer_key = keys.twitterKeys.consumer_key;
var consumer_secret = keys.twitterKeys.consumer_secret;
var access_token_key = keys.twitterKeys.access_token_key;
var access_token_secret = keys.twitterKeys.access_token_secret;

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token_key: access_token_key,
  access_token_secret: access_token_secret
});

var spotify = require('spotify');
var request = require('request');

var command = process.argv[2];
var name = process.argv[3];

switch (command) {
  case 'my-tweets':
    client.get('statuses/user_timeline', {count: 20}, function(error, tweets, response) {
      for (i=0; i<tweets.length; i++) {
        console.log(tweets[i].text);
      }
    });
    break;
  case 'spotify-this-song':
    spotify.search({type: 'track', query: name}, function(err, data) {
      if (err) {
        console.log("song not found");
      }
      else {
        for (i=0;i<data.tracks.items[0].artists.length;i++) {
          console.log("Artist: " + data.tracks.items[0].artists[i].name);
        }
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Spotify URL: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album Name: " + data.tracks.items[0].album.name);
      }
    });
    break;
  case 'movie-this':
    if (name == undefined || name == "") {
          name = 'Mr. Nobody';
        }
    var queryUrl = 'http://www.omdbapi.com/?t=' + name +'&y=&plot=short&r=json&tomatoes=true';
    request(queryUrl, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
        console.log("URL: " + JSON.parse(body).tomatoURL);
      }
    });
    break;
  case 'do-what-it-says':

    break;
  default:
    console.log("Not a valid selection");
}