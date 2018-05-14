var quote = document.getElementById('quote-text');
var count =0;
var allchar="0123456789ABCDEF";
var quotes = ["Don't cry because it's over, smile because it happened.","Be yourself, everyone else is already taken.","So many books, so little time.","A room without books is like a body without a soul"
,"Be the change that you wish to see in the world.","In three words I can sum up everything I've learned about life: it goes on.","If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","A friend is someone who knows all about you and still loves you.","To live is the rarest thing in the world. Most people exist, that is all.","I am so clever that sometimes I don't understand a single word of what I am saying.","Without music, life would be a mistake.","We accept the love we think we deserve."];
//quote.innerHTML="Raghu";
quote.innerHTML=quotes[count];
var tweetToShare =quote.textContent;
var genRandom = function() {
	if(count!=11){
		count++

	quote.innerHTML=quotes[count];

	
	}
	else {
		count=0;
		quote.innerHTML=quotes[count];
		count++;
	}
	tweetToShare=quote.textContent;

	var randcolor = "";

	for(var i=0;i<6;i++){
		randcolor+= allchar[Math.floor(Math.random()*16)];
	}
	document.body.style.backgroundColor = "#"+randcolor;
	document.body.style.WebkitTransition = "opacity ,1s";
	
	
}
var tweet = document.getElementById('shareTweet');
var share = function () {
	tweet.href="https://twitter.com/intent/tweet?text="+tweetToShare;
}
