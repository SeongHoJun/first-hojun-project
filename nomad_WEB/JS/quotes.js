const quotes = [
    {
        quote : "Number 1",
        author : ",1",
    },
    {
        quote : "Number 2",
        author : ",2",
    },
    {
        quote : "Number 3",
        author : ",3",
    },
    {
        quote : "Number 4",
        author : ",4",
    },
    {
        quote : "Number 5",
        author : ",5",
    },
    {
        quote : "Number 6",
        author : ",6",
    },
    {
        quote : "Number 7",
        author : ",7",
    },
    {
        quote : "Number 8",
        author : ",8",
    },
    {
        quote : "Number 9",
        author : ",9",
    },
    {
        quote : "Number 10",
        author : ",10",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

//Math.round() -> 반올림
//Math.ceil() -> 올림
//Math.floor() -> 내림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;