//Endpoint for strain name, id, race, and description: http://strainapi.evanbusse.com/jqekE0U/strains/search/name
//Endpoint for effects by id: http://strainapi.evanbusse.com/jqekE0U/strains/data/effects

// Create Try/Catch
const getStrainInfo = async (inputValue) => {
  const searchByNameUrl = "http://strainapi.evanbusse.com/jqekE0U/strains/search/name"
  const url = `${searchByNameUrl}/${inputValue}`
  try {
    removeStrainSearch()
    const response = await axios.get(url)
    const grabData = response.data
    grabData.forEach(grabData => {
      displayStrainInfo(grabData)
      const button = document.querySelector(`#seeEffects${grabData.id}`)
      button.addEventListener('click', (e) => {
        e.preventDefault()
        const effects = getEffects(grabData.id)
        const medicalUl = document.querySelector(`#medical${grabData.id}`)
        medicalUl.insertHTML(effects)
      })
    })
    return response
  } catch (err) {
    console.error(err)
  }
}

// Create 2nd Try/Catch for effects by ID
const getEffects = async (id) => {
  const effectsUrl = `http://strainapi.evanbusse.com/jqekE0U/strains/data/effects/${id}`
  try {
    const eResponse = await axios.get(effectsUrl)
    const medical = eResponse.data.medical
    const effectDiv = document.querySelector(`#medical${id}`)
    medical.forEach(medical => {
      const listItem = document.createElement('li')
      const effectsText = document.createTextNode(`May help with: ${medical}`)
      listItem.appendChild(effectsText)
      effectDiv.appendChild(listItem)
    })
    return effectDiv
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
  `
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
