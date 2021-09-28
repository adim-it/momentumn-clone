const quotes =[
    {quote:"A man that hath no virtue in himself, ever envieth virtue in others", author:"Francis Bacon"},
    {quote:"Chop your own wood and it will warm you twice.", author:"Henry Ford"},
    {quote:"Experience is a good school, but the fees are high.", author:"Heinrich Heine"},
    {quote:"Learn as if you would live forever, live as if you would die tomorrow.", author:"Mahatma Gandhi"},
    {quote:"Life is either a daring adventure, or nothing.", author:"Hellen Keller"},
    {quote:"Time is flying never to return.", author:"Vergilius"}
];


const quote = document.querySelector("#quote span:first-child");   
const author = document.querySelector("#quote span:last-child");   

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todayQuote.quote}"`;
author.innerText = `- ${todayQuote.author}`;