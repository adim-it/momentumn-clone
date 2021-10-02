const quotes =[
    {quote:"When you judge others, you do not define them; you define yourself.", author:"Earl Nightingale"},
    {quote:"Do not be afraid to give up the good to go for the great.", author:"John D. Rockefeller"},
    {quote:"Life is either a daring adventure or nothing at all.", author:"Helen Keller"},
    {quote:"Learn as if you would live forever, live as if you would die tomorrow.", author:"Mahatma Gandhi"},
    {quote:"Time is flying never to return.", author:"Vergilius"}
];


const quote = document.querySelector("#quote span:first-child");   
const author = document.querySelector("#quote span:last-child");   

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todayQuote.quote}"`;
author.innerText = `- ${todayQuote.author}`;