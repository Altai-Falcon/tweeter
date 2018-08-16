$(document).ready(function() {

	console.log("hello");
  $(".tweetInput").keypress(function(event){
  	var inputLength = $(this).val().length;
  	var result = 140 - inputLength;
  	console.log(inputLength);
  	console.log(result);

  	
  })













});


// composer-char-counter.js  $(this).val()