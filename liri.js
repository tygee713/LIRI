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
        console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].external_urls.spotify);
        console.log(data.tracks.items[0].album.name);
      }
    });
    break;
  case 'movie-this':

    break;
  case 'do-what-it-says':

    break;
  default:
    console.log("Not a valid selection");
}

