
// Create Try/Catch
const getStrainInfo = async (inputValue) => {
  const searchByNameUrl = "http://strainapi.evanbusse.com/jqekE0U/strains/search/name"
  const url = `${searchByNameUrl}/${inputValue}` //Setting URL to ex. "url/what the user types in"
  try {
    removeStrainSearch()
    const response = await axios.get(url)
    const grabData = response.data
    grabData.forEach(grabData => {
      displayStrainInfo(grabData) //This line fetches the name, species, and description. Also the ID that we use for the second api call
      const button = document.querySelector(`#seeEffects${grabData.id}`) //Grab our medical button
      button.addEventListener('click', (e) => {
          e.preventDefault()
          const effects = getEffects(grabData.id) //This is using the ID from first api call and adding it to this button (button#seeEffects${id})
          const medicalUl = document.querySelector(`#medical${grabData.id}`) //Grab our UL (medical list) we made in displayStrainInfo function
          medicalUl.insertHTML(effects) //Here we are inserting our effects variable, which runs the id through the get effects function, into that empty UL
        })
    })
    return response
  } catch (err) {
    console.error(err)
  }
}
// getStrainInfo('blue dream')

// Create 2nd Try/Catch for effects by ID
const getEffects = async (id) => {
  const effectsUrl = `http://strainapi.evanbusse.com/jqekE0U/strains/data/effects/${id}`
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

// Used this to prevent button from running more than once https://stackoverflow.com/questions/19053917/enable-the-button-to-be-clicked-only-to-once-exception/19053960
// Append the strain data to the div ('.search-results')
function displayStrainInfo(grabData) {
  const strainList = document.querySelector('.results-container')
  const strainInfo = `
  <div id = "strainStuff">
    <h1 class = "strainName">${grabData.name}</h1>
    <h3 class = "race">Species: ${grabData.race}</h3>    
    <p class = "description"><strong>Description:</strong> ${grabData.desc}</p>
    <button  id="seeEffects${grabData.id}" onClick="this.disabled = true;">Click here for medicinal use!</button>
    <ul id = "medical${grabData.id}"></ul>
  </div>
  ` // Here we have to add grabData.id to the button and UL so that each button only goes with its specific ID.
  strainList.insertAdjacentHTML("beforeend", strainInfo)
}

// Event Listener for "GO" Button
const searchBtn = document.querySelector('#go')
searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const userInput = document.querySelector('input').value
  getStrainInfo(userInput)
  document.querySelector('input').value = ""
})

// Enter button event listener
const userInput = document.querySelector('input')
userInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) { 
    e.preventDefault();
    document.getElementById("go").click()
  }
})

// Remove the strain search from html
function removeStrainSearch() {
  const strainContainer = document.querySelector('.results-container')
  while (strainContainer.lastChild) {
    strainContainer.removeChild(strainContainer.lastChild)
  }
}

// If/Else for description = null
// function removeEmptyDescription() {
//   const description = document.querySelector('.description') //from line 65 p we make
//   const value = `${grabData.desc}`
//   value.each(description, function (key, value)){
//     if (value === "" || value === null) {
//       delete description[key]
//     } else {
//       `${grabData.desc}`
//     }
//   }
// }

  // function removeEmptyDescription() {
  //   const value = `${grabData.desc}`
  //   if (value === null || value === "") {
  //     const description = document.querySelector('.description')
  //     description.insertHTML('No description available')
  //   } else {
  //     `${grabData.desc}`
  //   }
  // }


// If/Else for no results found @displayStraininfo(grabData)

// if (displayStrainInfo(grabData) === null) {
//   console.log("No results found. Please try again.")
    // let errorMessage = document.createElement('h1')
    // errorMessage.textContent = "No results found. Please try again."
    // let results = document.querySelector(".results-container")
    // document.results.append(errorMessage)
// } else {
//   IF WE GOT THE DATA, SHOW THE DATA
// }