const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const newQuoteBtn = document.querySelector('.newQuote');
const tweetBtn = document.querySelector('.tweet');
const tweetLink = document.querySelector('.tweetLink');

const api_url = 'https://api.quotable.io/random';

getQuote(api_url);

async function getQuote(url) {
  let response = await fetch(url);
  let data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;

  // tweet button
  tweetBtn.addEventListener('click', () => {
    tweetLink.setAttribute(
      'href',
      `https://twitter.com/intent/tweet?text= ${quote.innerHTML}`
    );
  });

  // refresh quote button
  newQuoteBtn.addEventListener('click', () => {
    getQuote(api_url);
  });
}
