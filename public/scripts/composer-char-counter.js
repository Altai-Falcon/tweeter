$(document).ready(function() {
	console.log("document.result is ready");
  $(".tweetInput").keyup(function(event){
  	var inputLength = $(this).val().length;
  	var result = 140 - inputLength;
  	console.log(inputLength); // Key up is better than keydown as key down will lag by one for some reason.
  	console.log(result);
  	var theCounter = $(this).siblings(".counter");
  	theCounter.text(result);
  	console.log("this is the counter", theCounter.text());
  	if(result < 0) {
  		theCounter.css("color", "red");
  	} else {
  		theCounter.css("color", "black");
  	}



  	
  });




});


