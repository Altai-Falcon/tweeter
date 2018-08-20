/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {






const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



//part of the function used from https://gist.github.com/flangofas/714f401b63a1c3d84aaa

function timeStamp(miliseconds) {
  let days, total_hours, total_minutes, total_seconds;
  let currentDate = new Date().getTime();
  let timeSince = currentDate - miliseconds;
  
  total_seconds = parseInt(Math.floor(timeSince / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  
  
  
    return days < 0 ? 0 : days;
  }




function createTweetElement(tweetData) {
	// return a tweet <article> element containing 
	//the entire HTML structure of the tweet.
	let $tweet = $("<article>").addClass("tweet");
	let $header = $("<header>");
	let $img = $("<img>").attr("src", tweetData.user.avatars.small);
	let $divAuthor = $("<div>").addClass("author").text(tweetData.user.name);
	let $divHandle = $("<div>").addClass("handle").text(tweetData.user.handle);
	let $divTweetBody = $("<div>").addClass("tweetBody");
  let $theTweet = $("<p>").text(tweetData.content.text);
	let $footer = $("<footer>");
	let $timeStamp = $("<span>").text(timeStamp(tweetData.created_at) + " days ago");
  let $icons = $("<div>").addClass("icons");
  let $flag = $("<i>").addClass("fas fa-flag");
  let $retweet = $("<i>").addClass("fas fa-retweet");
  let $heart = $("<i>").addClass("fas fa-heart");

	$tweet.append($header);
  $tweet.append($divTweetBody);
  $tweet.append($footer);
  $header.append($img);
	$header.append($divAuthor);
	$header.append($divHandle);

  $divTweetBody.append($theTweet);

	$footer.append($timeStamp);
	$footer.append($icons);
  $icons.append($flag);
  $icons.append($retweet);
  $icons.append($heart);


  return $tweet;
}


function renderTweets(tweets) {
    tweets.forEach((tweetData) => {
    var tweetElement = createTweetElement(tweetData);
    $('#tweets-container').append(tweetElement);
  });
}

renderTweets(data);

});

  
           
           
          
            

































































































// $(document).ready(function() {

// // Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// };

// function createTweetElement (tweetData){
// 	//code here
// 	var name = tweetData.user.name;

// 	var element = `<article class="tweet">
//           <header>
//             <img src="https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png">
//             <div class="author">${name}</div>
//             <div class="handle">@MrFields</div>
//           </header>
//           <div class="tweetBody">
//             <p>little tweet here</p>
//           </div>
//           <footer>
//             <span>10 days ago</span>
//             <time datetime="?"> </time> 
//           </footer>
//         </article> `;
//         return element;
// }
// var $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweetList').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

//  });