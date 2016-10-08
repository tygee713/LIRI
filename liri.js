var keys = require('keys.js');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

var consumer_key = keys.consumer_key;
var consumer_secret = keys.consumer_secret;
var access_token_key = keys.access_token_key;
var access_token_secret = keys.access_token_secret;

var command = process.argv[2];

switch (command) {
  case 'my-tweets':
      twitter.get('statuses/list', {count: 20}, function(error, tweets, response) {
        

      });
    break;
  case 'spotify-this-song':

    break;
  case 'movie-this':

    break;
  case 'do-what-it-says':

    break;
  default:
    console.log("Not a valid selection");
}

