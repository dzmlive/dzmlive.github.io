@font-face {
  font-family: 'Russo One';
  font-style: normal;
  font-weight: 400;
  src: local('Russo One'), local('RussoOne-Regular'), url(https://cyberspying.eff.org/embed/2013-cispa/russo_one.woff) format('woff');
}

body { 
  background-image: url(https://cyberspying.eff.org/embed/2013-cispa/bg.png); 
  font: 15px/1.33 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  margin: 0; 
  padding: 0; 
  color: #ffffff;
  background-color: #2e2e2e;
  text-align: center;
}

.hidden { 
  display: none; 
}

#header {
  text-align: center;
  padding-top: 10px;
}
#header img {
  max-width: 100%;
}
#header h1 {
  font-family: 'Russo One';
  color: #ffffff;
  margin: 0;
  font-size: 50px;
  line-height: 100%;
  font-weight: normal;
}

#wrapper {
  max-width: 1280px;
  margin: 0 auto;
}

#content {
  padding: 0 10px;
}

a:link.tweet, a:visited.tweet {
  display: block;
  background-image: url('twitter.png');
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-color: #DCEAEF;
  background-size: 30px 30px;
  padding: 5px 5px 5px 40px;
  font-size: 13px;
  color: #0062A0;
  margin-bottom: 20px;
  text-decoration: none;
  text-align: center;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
}
a:hover.tweet, a:active.tweet {
  color: #ffffff;
  background-color: #000000;
}

#suggest {
  color: #21E18D;
  cursor: pointer;
  text-align: center;
  margin-bottom: 0;
}

#twitter-badge {
  width: 200px;
  height: 500px;
  max-height: 100%;
  position: absolute;
  top: 5px;
  right: 5px;
  display: none;
}
#twitter-badge iframe {
  width: 200px;
  height: 500px;
  border: 0;
}

#twitter-opt-in {
  cursor: pointer;
}
#twitter-opt-in #twitter-opt-in-show {
  text-align: center;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 150%;
}
#twitter-opt-in #twitter-opt-in-details {
  text-align: center;
  padding: 10px;
  font-size: 15px;
  line-height: 150%;
}

#privacy {
  text-align: right;
  margin: 0;
  padding: 0;
}
#privacy a {
  color: #999999;
  text-decoration: none;
  font-size: 12px;
  font-family: arial;
  padding: 10px;
}

@media (min-width: 480px) {
  body {
    font: 16px/1.33 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  }

  #header img {
    width: 240px;
    vertical-align: middle;
  }
  #header h1 {
    display: inline-block;
    vertical-align: -40px;
    font-size: 45px;
  }

  a:link.tweet, a:visited.tweet {
    background-size: 60px 60px;
    padding: 15px 15px 15px 80px;
    font-size: 15px;
    min-height: 30px;
  }

  #suggest {
    font-weight: bold;
  }
}

@media (min-width: 768px) {
  #header img {
    width: 384px;
    vertical-align: middle;
  }
  #header h1 {
    display: inline-block;
    vertical-align: -68px;
    font-size: 80px;
  }

  #content {
    max-width: 768px;
    margin: 0 auto;
  }
}

@media (min-width: 1230px) {
  #twitter-badge {
    display: block;
  }
}
