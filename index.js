
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://dummyjson.com/quotes";

async function getquote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // The full response object
        const quotesArray = data.quotes; // Extract the quotes array
        const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)]; // Pick a random quote

        // Update the DOM with the fetched quote and author
        quote.innerHTML = randomQuote.quote;
        author.innerHTML = `- ${randomQuote.author}`;
    } catch (error) {
        console.error("Error fetching the quote:", error);
        quote.innerHTML = "Failed to load quote.";
        author.innerHTML = "";
    }
}

// Fetch a new quote on page load
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " --By "  + author.innerHTML,"Tweet Window", "width=600, height=300");
}

