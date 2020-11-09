// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const URL = 'https://lambda-times-api.herokuapp.com/topics';

axios.get(URL)
    .then(res => {
        // grab div.topics
        const topicDiv = document.querySelector('div.topics');
        // access the topics array as follows res.data.topics[i]
        res.data.topics.forEach(topic => {
            // create the tab
            const tab = document.createElement('div');
            // add the 'tab' class
            tab.classList.add('tab');
            // add text
            tab.textContent = topic;
            // append the tab to the div.topics element
            topicDiv.appendChild(tab);
        })
    })
    .catch(err => {
        debugger
    });

// res.data.topics[0], res.data.topics[1], ... etc 