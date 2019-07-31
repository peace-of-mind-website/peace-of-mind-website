unirest.get("https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&t=Wisdom&maxR=1&size=medium")
.header("X-RapidAPI-Host", "healthruwords.p.rapidapi.com")
.header("X-RapidAPI-Key", "SIGN-UP-FOR-KEY")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
