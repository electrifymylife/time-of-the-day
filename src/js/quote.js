const getTheQuote = () => {

  const refreshBtn = document.querySelector(".quote__refresh");

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  }

  const getData = fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((results) => {
      let count = 0;
      results.map(() => {
        count++
      })
      return {count, results}
    });

  const setTheQuote = async () => {
    const quoteText = document.querySelector(".quote__text");
    const quoteAuthor = document.querySelector(".quote__author");
    const quotesData = await getData;
    const randomQuote = getRandomNumber(quotesData.count);
    quoteText.textContent = quotesData.results[randomQuote].text;
    quoteAuthor.textContent = quotesData.results[randomQuote].author;
  };

  refreshBtn.addEventListener('click', setTheQuote);
}

getTheQuote();