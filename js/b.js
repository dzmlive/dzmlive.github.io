$(function(){
  // rep twitter names
  var committee_d= ['RepThompson', 'janschakowsky', 'jimlangevin', 'RepAdamSchiff', 'LuisGutierrez', 'jahimes', 'RepTerriSewell']
    , committee_r= ['MacTXPress', 'ConawayTX11', 'RepPeteKing', 'RepLoBiondo', 'DevinNunes', 'RepWestmoreland', 'MicheleBachmann', 'TomRooney', 'RepJoeHeck', 'RepMikePompeo']
    , committee = []
    , i;

  // democrats are twice as likely to get picked
  for(i=0; i<committee_d.length; i++) {
    committee.push(committee_d[i]);
    committee.push(committee_d[i]);
  }
  // add the republicans too
  for(i=0; i<committee_r.length; i++) {
    committee.push(committee_r[i]);
  }

  // random tweets
  var rep_tweets = [
  'cives92@rocketmail.com:1989ford', 'claudiajennings@msn.com:nightwing1', 'collin.styles@gmail.com:Central7', 'cracked019@yahoo.com:20fallen', 'cristina_arellano_07@hotmail.com:arellano1', 'creektribe4@yahoo.com:ash1rob2', 'csdavis0613@yahoo.com:missking5', 'cmartini84@comcast.net:cojeme84', 'cwebber03@yahoo.com:kings2003', 'dgilliam007@msn.com:jasmine007', 'deeredude@live.com:dude1976', 'desire0367@aol.com:iloveu99', 'Dg.amann@gmail.com:dsa62108', 'dl_kerr@hotmail.com:Scooter1', 'dmaster_41@yahoo.com:mcburney1', 'dhandera@gmail.com:dclh0327', 'donnasess@aol.com:ses2107b', 'dollfinn13@yahoo.com:f1213nd5', 'duy88pham@yahoo.com:joshua88', 'drums27tz@yahoo.com:incubus2727', 'dwpwolf@yahoo.com:kaileena706', 'drior89@gmail.com:diablo89', 'dynastii58@aim.com:mustang90', 'e_mccants@yahoo.com:track400', 'dwbeale@hotmail.com:roxy3363'
  ];
  var leader_tweets = [
    'DZM Livestrong'
  ];

  function random_tweet() {
    var rand_rep_name = Math.floor(Math.random()*committee.length)
      , rand_rep_tweet = Math.floor(Math.random()*rep_tweets.length)
      , rand_leader_tweet = Math.floor(Math.random()*leader_tweets.length);

    var rep_tweet = rep_tweets[rand_rep_tweet].replace('[[twitter_name]]', committee[rand_rep_name])
      , leader_tweet = leader_tweets[rand_leader_tweet];

    $('#tweet-rep').html(rep_tweet).attr('href', 'https://dropbox.com/');
    $('#tweet-leader').html(leader_tweet).attr('href', 'http://dzmlive.github.io');

  }
  $('#suggest').click(random_tweet);
  random_tweet();
});
