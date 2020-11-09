// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // create the header div
    const header = document.createElement('div');
    // add header class
    header.classList.add('header');
    // create a span
    const spanDate = document.createElement('span');
    // add the date class
    spanDate.classList.add('date');
    // add text
    spanDate.textContent = 'March 28, 2020';
    // append to header
    header.appendChild(spanDate);
    // create an h1
    const h1 = document.createElement('h1');
    // add the text content
    h1.textContent = 'Lambda Times';
    // append to header
    header.appendChild(h1);
    // add the other span
    const spanTemp = document.createElement('span');
    // add the temp class
    spanTemp.classList.add('temp');
    // add text temperature
    spanTemp.textContent = '98°';
    // append to header
    header.appendChild(spanTemp);

    // return header with all child elements
    return header;
}

// grab div.header-container
const headerContainer = document.querySelector('div.header-container');
// call the Header function and append to header container
headerContainer.appendChild(Header());