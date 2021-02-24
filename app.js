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
      getEffects(`${grabData.id}`)
      // appendEffects()
    })
    return response
  } catch (err) {
    console.error(err)
  }
}
// getStrainInfo()

// Create 2nd Try/Catch for effects by ID
// async (`${grabData.id}`) the id gained from the for each is what I want to run the function with
const getEffects = async (id) => {
  const effectsUrl = `http://strainapi.evanbusse.com/jqekE0U/strains/data/effects/${id}`
  const strainList = document.querySelector('.results-container')
  const effectsList = document.querySelector('.strainStuff')
  try {
    const eResponse = await axios.get(effectsUrl)
    const positive = eResponse.data.positive
    positive.forEach(positive => {
      effectsList.insertAdjacentHTML("beforeend", positive )
      console.log(`Positive: ${positive}`)
    })
    const medical = eResponse.data.medical
    medical.forEach(medical => {
      effectsList.insertAdjacentHTML("beforeend", medical )
      console.log(`May help with: ${medical}`)
    })
    return eResponse
  } catch (err) {
    console.error(err)
  }
}
// getEffects()

// Append the strain data to the div ('.search-results')
function displayStrainInfo(grabData, positive, medical) {
  const strainList = document.querySelector('.results-container')
  
  const strainInfo = `
  <div class = "strainStuff">
    <h1 class = "strainName">${grabData.name}</h1>
    <h3 class = "race">Species: ${grabData.race}</h3>    
    <h4 class = "positive">Positive: ${positive}</h4>
    <h4 class = "medical">Medical: ${medical}</h4>
    <p class = "description">Description: ${grabData.desc}</p>
    <button id = "seeEffects">See More Effects</button>
  </div>
  `

  strainList.insertAdjacentHTML("beforeend", strainInfo)
}
// Append the effects to the same results-container div (for now). Later append it to the see effects button.
function appendEffects() {
  const effectList = document.querySelector('.results-container')
  const effectInfo = `
  <h4 class = "positive">Positive: ${positive}</h4>
  <h4 class = "medical">Medical: ${medical}</h4>
  `
  effectList.insertAdjacentHTML("beforeend", effectInfo)
}
// function appendEffects {
//   const fragment = new DocumentFragment()
//   const div = document.createElement("div")
//   div.innerHTML = `
//   <h4 class = "positive">Positive: ${positive}</h4>
//   <h4 class = "medical">Medical: ${medical}</h4>
//   `
//   fragment.appendChild(div)
//   document.getElementsByClassName("strainStuff").appendChild(fragment)
// }
// These loops are for gathering the positive/medical effects:
// const positive = eResponse.data.positive
    // positive.forEach(positive => {
    //   console.log(`Positive: ${positive}`)
    // })
    // const medical = eResponse.data.medical
    // medical.forEach(medical => {
    //   console.log(`Medical: ${medical}`)
    // })

// Event Listener for "GO" Button
const searchBtn = document.querySelector('#go')
searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const userInput = document.querySelector('input').value
  getStrainInfo(userInput)
  document.querySelector('input').value = ""
})

// Event Listener for "See More Effects" Button
// const effectsBtn = document.querySelector('#seeEffects')
// effectsBtn.addEventListener('click', (e) => {
//   e.preventDefault()
// })
// Remove the strain search from html
function removeStrainSearch() {
  const strainContainer = document.querySelector('.results-container')
  while (strainContainer.lastChild) {
    strainContainer.removeChild(strainContainer.lastChild)
  }
}
