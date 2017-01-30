function newQuote() {

	var $quote = $("#quote");
	var $author = $("#author");
	var $twitterLink = $("#twitter-link");

  $.ajax({
  	headers: {
      "X-Mashape-Key": "CJnqEt4klbmsha6TE1fMQXSndmKTp1ceKbejsnZxzTkO9z7K3s",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    type: 'GET',
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
    success: function(data) {
    	//console.log(data);
    	var q = JSON.parse(data);
    	//console.log(q);
    	//console.log(q.quote);
    	//console.log(q.author);
    	$quote.html('<h2 class="quote">' + q.quote + '</h2>');
    	$author.html('<p class="author"> - ' + q.author + '</p>');
    	$twitterLink.prop('href', ('https://twitter.com/intent/tweet?text=' + q.quote + ' - ' + q.author));
    }
  })
}

$(document).ready(function() {
  newQuote();
  $('#newQuote').on('click', function() {
  	newQuote();
  });
})