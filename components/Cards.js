// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup [for each card inside the articles arrays]:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create [cards] for each of the articles, and append [the cards] to the DOM.

// store URL
const URL = 'https://lambda-times-api.herokuapp.com/articles';
// grab the card container in the html
const container = document.querySelector('div.cards-container');

// write component function taking article object as a param
const Card = articles => {
    // create div.card element
    const cardDiv = document.createElement('div');
    // add 'card' class
    cardDiv.classList.add('card');
    // create div.headline
    const hlDiv = document.createElement('div');
    // add 'headline' class
    hlDiv.classList.add('headline');
    // add text content
    hlDiv.textContent = articles.headline;
    // append to div.card
    cardDiv.appendChild(hlDiv);
    // create div.author
    const authorDiv = document.createElement('div');
    // add 'author' class
    authorDiv.classList.add('author');
    // append to div.card
    cardDiv.appendChild(authorDiv);
    // create elements inside of div.author
    const divImg = document.createElement('div');
    // add 'img-container' class
    divImg.classList.add('img-container');
    // append to div.author
    authorDiv.appendChild(divImg);
    // create the image to append to div.img-container
    const image = document.createElement('img');
    // manipulate the image src
    image.src = articles.authorPhoto;
    // append to div.img-container
    divImg.appendChild(image);
    // create span and append to div.author
    const span = document.createElement('span');
    // add text
    span.textContent = `By ${articles.authorName}`;
    // append to div.author
    authorDiv.appendChild(span);

    // return div.card
    return cardDiv;
}

// axios GET request
axios.get(URL)
    .then(res => {
        // cycle through the keys in the article object - layer 1
        for(let x in res.data.articles) {
            // use forEach method with x array
            res.data.articles[x].forEach(el => {
                // the el is an object containing 3 or 4 cards
                const card = Card(el);
                // append card element to container
                container.appendChild(card);
                // add event listener to each card
                card.addEventListener('click', () => {
                    console.log(`${el.headline} was clicked`)
                });
            })
        }
    })
    .catch(err => {
        debugger
    });

// res.data.articles[0], ... etc

// articles is the object we are accessing using axios.get(URL)

// the keys inside the articles object are arrays - bootstrap, javascript, jquery, node, technology

// each key is an array of 2, 3, or 4 objects

// must use 'let key in res.data.articles' to cycle through the keys every time the function is called

// each key will then use a forEach method to make each card

// with forEach method I used bracket notation to access the array