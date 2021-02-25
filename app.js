//Endpoint for strain name, id, race, and description: http://strainapi.evanbusse.com/jqekE0U/strains/search/name
//Endpoint for effects by id: http://strainapi.evanbusse.com/jqekE0U/strains/data/effects

// Create Try/Catch
const getStrainInfo = async (inputValue) => {
  const searchByNameUrl = "http://strainapi.evanbusse.com/jqekE0U/strains/search/name"
  const url = `${searchByNameUrl}/${inputValue}` //Setting URL to ex. "url/blue dream"
  try {
    removeStrainSearch()
    const response = await axios.get(url)
    const grabData = response.data
    grabData.forEach(grabData => {
      displayStrainInfo(grabData) //This line fetches the name, species, and description. Also the ID that we use for the second api call
        const button = document.querySelector(`#seeEffects${grabData.id}`) //Grab our medical button
        button.addEventListener('click', (e) => {
          e.preventDefault()
          const effects = getEffects(grabData.id) //This is plugging in our getEffects function and adding the id gathered from first api call
          const medicalUl = document.querySelector(`#medical${grabData.id}`) //Grab our UL (medical list) we made in displayStrainInfo function
          medicalUl.insertHTML(effects) //Here we are inserting our effects variable, which runs the id through the get effects function, into that empty UL
        })

    })
    return response
  } catch (err) {
    console.error(err)
  }
}
getStrainInfo('blue dream')

// Create 2nd Try/Catch for effects by ID
const getEffects = async (id) => {
  const effectsUrl = `http://strainapi.evanbusse.com/jqekE0U/strains/data/effects/${id}`
  try {
    const eResponse = await axios.get(effectsUrl)
    const medical = eResponse.data.medical //Traversing to the medical usage
    const effectUL = document.querySelector(`#medical${id}`) //Selecting the UL
    medical.forEach(medical => { //FOR EACH: create a list item and text node
      const listItem = document.createElement('li') 
      const effectsText = document.createTextNode(`Can aid with ${medical}`)
      listItem.appendChild(effectsText) //Add the text node to our LI
      effectUL.appendChild(listItem) //Add the LI to our effectUL we made above which is the UL
    })
    return effectUL // Return our UL with the updated info after running through for each loop
  } catch (err) {
    console.error(err)
  }
}

// Append the strain data to the div ('.search-results')
function displayStrainInfo(grabData) {
  const strainList = document.querySelector('.results-container')
  const strainInfo = `
  <div id = "strainStuff">
    <h1 class = "strainName">${grabData.name}</h1>
    <h3 class = "race">Species: ${grabData.race}</h3>    
    <p class = "description"><strong>Description:</strong> ${grabData.desc}</p>
    <button id="seeEffects${grabData.id}">Click here for medicinal use!</button>
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

// Remove the strain search from html
function removeStrainSearch() {
  const strainContainer = document.querySelector('.results-container')
  while (strainContainer.lastChild) {
    strainContainer.removeChild(strainContainer.lastChild)
  }
}
