// Create Try/Catch for first API call
// Here I am plugging in the user input value at the end of the API url to gather info specified in my displayStrainInfo function
// Added if and else to handle any invalid inputs so the user gets notified if there are no results for their search if array length < 1 display error message
// I included a button to retrieve the info from my second API call so that the page would load faster and smoother
// Each button gets paired with it's corresponding strain ID so that it only displays the correct strain info #seeEffects${grabData.id}
const getStrainInfo = async (inputValue) => {
  const searchByNameUrl = "https://strainapi.evanbusse.com/jqekE0U/strains/search/name"
  const url = `${searchByNameUrl}/${inputValue}` 
  try {
    removeStrainSearch()
      const response = await axios.get(url)
      const grabData = response.data ?? "No results found, please try again."
        if (grabData.length >= 1) { //we set it to 1 because incorrect values give an array with a length of 0
          grabData.forEach(grabData => {
            displayStrainInfo(grabData) //This line fetches the name, species, and description. Also the ID that we use for the second api call
              const button = document.querySelector(`#seeEffects${grabData.id}`)
                button.addEventListener('click', (e) => {
                  e.preventDefault()
                  const effects = getEffects(grabData.id) //This is using the ID from first api call and adding it to this button (button#seeEffects${id})
                  const medicalUl = document.querySelector(`#medical${grabData.id}`) //Grab our UL (medical list) we made in displayStrainInfo function
                  medicalUl.insertHTML(effects) //Here we are inserting our effects variable, which runs the id through the get effects function, into that empty UL
                })
          })
        } else {
            const resultsContainer = document.querySelector('.results-container')
            const noResults = `
              <div id = "noData">
              <h1>No results found. Please try again.</h1>
              </div>`
            resultsContainer.innerHTML = noResults
    }
    return response
  } catch (err) {
    console.error(err)
  }
}

// Create 2nd Try/Catch for effects by ID (add this function into firs Try/Catch)
// Here, we need to select individual IDs acquired by our first API call and plug it into our second URL
// Using this ID, I made a for each loop to gather the medical purposes per ID and append it to it's corresponding strain 
const getEffects = async (id) => {
  const effectsUrl = `https://strainapi.evanbusse.com/jqekE0U/strains/data/effects/${id}`
  try {
    const eResponse = await axios.get(effectsUrl)
    const medical = eResponse.data.medical //Traversing to the medical usage
    const effectUL = document.querySelector(`#medical${id}`)
      const provideAid = document.createElement('h3')
      const aidText = document.createTextNode("May provide aid for the following:")
        provideAid.appendChild(aidText)
        effectUL.appendChild(provideAid)//Selecting the UL we make in our displayStrainInfo function
        medical.forEach(medical => { //FOR EACH: create a list item and text node
          const listItem = document.createElement('li') 
          const effectsText = document.createTextNode(`${medical}`)
            listItem.appendChild(effectsText) //Add the text node to our LI
            effectUL.appendChild(listItem) //Add the LI to our effectUL we made above which is the UL
        })
    return effectUL // Return our UL with the updated info after running through for each loop
  } catch (err) {
    console.error(err)
  }
}

// Function for onload age verification 
window.addEventListener('load', (e) => {
  function ageVerify() {
    alert("Click OK if you are 21 years or older to proceed.");
  } ageVerify()
})

// Here we are making a function to create and append new DOM elements to our empty results-container
// Display "Unavailable" if the description is null or undefined // https://www.youtube.com/watch?v=v2tJ3nzXh8I&t=41s nullish coalescing (es7)
// Used this to prevent button from running more than once https://stackoverflow.com/questions/19053917/enable-the-button-to-be-clicked-only-to-once-exception/19053960
function displayStrainInfo(grabData) {
  const resultsContainer = document.querySelector('.results-container')
  const strainInfo = `
  <div id = "strainContainer">
    <h1 class = "strainName">${grabData.name}</h1>
    <h3 class = "race">Species: ${grabData.race}</h3>    
    <p class = "description"><strong>Description:</strong> ${grabData.desc ?? "Unavailable"}</p>
    <button  id="seeEffects${grabData.id}" onClick="this.disabled = true;">Click here for medicinal use!</button>
    <ul id = "medical${grabData.id}"></ul>
  </div>
  `
  resultsContainer.insertAdjacentHTML("beforeend", strainInfo)
}

// Crete Event Listener (click) for "GO" Button
const goBtn = document.querySelector('#go')
goBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const userInput = document.querySelector('input').value
  getStrainInfo(userInput)
  document.querySelector('input').value = ""
})

// Create second Event Listener for enter button
// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
const userInput = document.querySelector('input')
userInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) { 
    e.preventDefault();
    document.getElementById("go").click()
  }
})

// Remove the results container from the DOM when we search another value
function removeStrainSearch() {
  const resultsContainer = document.querySelector('.results-container')
  while (resultsContainer.lastChild) {
    resultsContainer.removeChild(resultsContainer.lastChild)
  }
}

