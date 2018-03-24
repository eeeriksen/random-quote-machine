/*https://talaikis.com/api/quotes/random/*/

(function(){
  
   // New Quote function
   function getQuote(){
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             var objQuote = JSON.parse(this.responseText);
             document.getElementById("text-quote").innerHTML = objQuote.quote;
             document.getElementById("text-autor").innerHTML = objQuote.author;
         }
     };
     xmlhttp.open("GET", "https://talaikis.com/api/quotes/random/", true);
     xmlhttp.send();
   }
   getQuote();
   
   // New Quote button
   var newQuote = document.getElementById('change');
   newQuote.addEventListener('click', getQuote);
   
   // Twitter 
   document.getElementById('tweet').addEventListener('click', function(){
     var text = document.getElementById('text-quote').innerHTML;
     var author = document.getElementById('text-autor').innerHTML;
     var textTweet = text + ' - ' + author;
     var linkTwitter = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textTweet);
     window.open(linkTwitter, '_blank');  
   });
 })();
 
 