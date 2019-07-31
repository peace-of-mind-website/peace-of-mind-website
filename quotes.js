var quotes = [[





function get_random()
{
    var ranNum= Math.floor(Math.random()*quotes.length);
    return ranNum;
}

function getaQuote()
{
   var whichQuote=get_random();

   alert(quotes[whichQuote][0]);
}

$('#fortuneButton').on('click', getaQuote());
