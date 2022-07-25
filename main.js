/*https://talaikis.com/api/quotes/random/*/

(function () {

  // New Quote function
  async function getQuote() {
    var req = await fetch('https://api.quotable.io/random')
    var res = await req.json()

    let content, name = ''

    if (req.status === 200) {
      content = res.content
      name = res.author
    } else {
      content = res.message + '. Try a few seconds latter.'
      name = "Error limit"
    }

    document.getElementById("text-quote").innerHTML = content;
    document.getElementById("text-autor").innerHTML = name;
  }

  getQuote();

  // New Quote button
  var newQuote = document.getElementById('change');
  newQuote.addEventListener('click', getQuote);

  // Twitter
  document.getElementById('tweet').addEventListener('click', function () {
    var text = document.getElementById('text-quote').innerHTML;
    var author = document.getElementById('text-autor').innerHTML;
    var textTweet = text + ' - ' + author;
    var linkTwitter = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textTweet);
    window.open(linkTwitter, '_blank');
  });

})();
