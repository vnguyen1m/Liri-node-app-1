console.log('this is loaded');

var twitterKeys = {
  consumer_key: '9gn6cN80HjhF6dZDm9NAO6kZj',
  consumer_secret: 'Uey6fN9mOoMBeOr3FKtTy4nkj0jPmhZxDBR0Z52W3ECBVOCC3w',
  access_token_key: '956234575113478144-QMzKih8TS3BDB9o7vTHqY5yOwnVM736',
  access_token_secret: '31u4O7HKVUdoCELpgFpnvDml0kuZd4hiVOPRLChUMQM3h',
}

var spotify = new Spotify({
	id: '47e49ac4e18449b5b7db8580d72c6312',
	secret: 'ca0531b5fdce4ed892b621e755642651',
});

module.exports = {
	twitterKeys: twitterKeys,
	spotify: spotify,
}
