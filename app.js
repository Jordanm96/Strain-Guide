const searchByNameUrl = "http://strainapi.evanbusse.com/jqekE0U/strains/search/name"
// const effectsUrl = "http://strainapi.evanbusse.com/jqekE0U/strains/data/effects"

// Create Try/Catch
const getStrainInfo = async (inputValue) => {
  const url = `${searchByNameUrl}/${inputValue}`
  try {
    removeStrainSearch()
    const response = await axios.get(url)
    const grabData = response.data
    grabData.forEach(grabData => {
      console.log(grabData.id)
      displayStrainInfo(grabData)
    })
    return response
  } catch (err) {
    console.error(err)
  }
}
getStrainInfo('blue dream')

// Create 2nd Try/Catch for effects by ID
// async (`${grabData.id}`) the id gained from the for each is what I want to run the function with
const getEffects = async (id) => {
  const effectsUrl = `http://strainapi.evanbusse.com/jqekE0U/strains/data/effects${id}`
  try {
    // const eUrl = `${effectsUrl}/${grabData.id}`
    // const eUrl = `${effectsUrl}/326` //Manually putting in a number here gave me med,neg, and pos effect arrays
    
    const eResponse = await axios.get(effectsUrl)
    console.log(eResponse)
    // const positive = eResponse.data.positive
    // positive.forEach(positive => {
    //   console.log(`Positive: ${positive}`)
    // })
    // const medical = eResponse.data.medical
    // medical.forEach(medical => {
    //   console.log(`Medical: ${medical}`)
    // })
// these for each loops display each element of the positve and medical array for the id number we manually input
  // How can i get the id from the search into that eUrl?
    // I need to retrieve the id of the input value 
  } catch (err) {
    console.error(err)
  }
}
getEffects()

// const strainIDUrl = `${effectsUrl}/${grabData.id}`
// Event Listener for Button

const searchBtn = document.querySelector('#go')
searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const userInput = document.querySelector('input').value
  getStrainInfo(userInput)
  document.querySelector('input').value = ""
})


// Append the strain data to the div ('.search-results')
function displayStrainInfo(grabData) {
  const strainList = document.querySelector('.results-container')

  const strainInfo = `
  <div class = "strainStuff">
    <h1 class = "strainName">${grabData.name}</h1>
    <h3 class = "race">Species: ${grabData.race}</h3>
    <h4 class = "strainID"> ID: ${grabData.id}</h3>
    <p class = "description">Description: ${grabData.desc}</p>
    <button id = "seeEffects">See More Effects</button>
  </div>
  `
  strainList.insertAdjacentHTML("beforeend", strainInfo)
}

// * In my p class I'd like to set a "No description available" if grabData.desc is null
// * In my results class, I want it to read the index NUMBER of the names that were found 
// * Example: Displaying Results (22): grabData.length = undefined



// Remove the strain search from html
// Don't forget to add this function into our try catch
function removeStrainSearch() {
  const strainContainer = document.querySelector('.results-container')
  while (strainContainer.lastChild) {
    strainContainer.removeChild(strainContainer.lastChild)
  }
}
