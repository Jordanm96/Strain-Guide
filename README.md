# Project Overview

## Project Name

[Medical Marijuna Strain Guide]()

## Project Description

I will utilize the Marijuana Strain API to allow users to look up any given strain of Marijuana and retrieve information about it. This information should include the full name and the race (indica, sativa, or hybrid). Upon clicking one of the results given by the user's search, the effects of that strain will be displayed as well. My website's purpose is to gather medicinal information on various strains of cannabis so the user is able to get the strain they need to help them with various medical conditions. Not everybody knows about cannabis and it is important to recognize the differences between different strains before exploring it as a medical alternative.

## API and Data Sample

strainapi.evanbusse.com/API_KEY/strains/search/all

```
Afpak: {
id: 1,
race: "hybrid",
flavors: [
"Earthy",
"Chemical",
"Pine"
],
effects: {
positive: [
"Relaxed",
"Hungry",
"Happy",
"Sleepy"
],
negative: [
"Dizzy"
],
medical: [
"Depression",
"Insomnia",
"Pain",
"Stress",
"Lack Of Appetite"
]
}
},
```
strainapi.evanbusse.com/API_KEY/strains/data/effects/STRAIN_ID

```
{
    "positive": [
        "Relaxed",
        "Happy",
        "Hungry",
        "Sleepy"
    ],
    "negative": [
        "Dizzy"
    ],
    "medical": [
        "Depression",
        "Stress",
        "Lack Of Appetite",
        "Insomnia",
        "Pain"
    ]
}
```


## Wireframes

[My Wireframe](https://wireframe.cc/AoMrsL)


### MVP/PostMVP

#### MVP 
- Use external API to render data
- Set up basic HTML and CSS
- Implement search bar that renders the name, race, and description of strain entered
- Create button for search bar
- Add media-query/breakpoint for responsive CSS
- Styled using Flexbox
---- 


#### PostMVP  

- Link additional query in my api that brings more info on strain (effects)
- Include a function for null results .Just added this
- Include flavors of strains in my search results
- Incorporate a dropdown/click event for our search results (display name of strain only, display additional info (effects) when strain is clicked)
- Add age verification pop-up
- Add additional API to search for nearby medical dispensaries

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Feb 23| Project Approval | Complete
|Feb 23| Core Application Structure (HTML, CSS, etc.) | Complete
|Feb 23-24| Pseudocode / actual code | Complete
|Feb 25| Initial Clickable Model  | Complete
|Feb 25| MVP | Complete
|Feb 26| PMVP/Finalize CSS | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

[Priority Matrix Image](https://imgur.com/Ym0CawK)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set up HTML | H | .5hrs| hrs | 1hrs |
| Basic CSS skeleton | H | 2hrs| hrs | 2hrs |
| Pseudocode/mapping JS | H | 1.5hrs| hrs | 2hrs |
| Create error handling function with try/catch| H | 3hrs| hrs | 2hrs |
| Working with API| H | 2hrs| hrs | 3hrs |
| Link additional search query using strain ID gathered from first API request to JS | H | 3hrs| hrs | 7hrs |
| Add event listeners | H | 1.5hrs| hrs | 1.5hrs |
| Create button to display medical results | H | 3hrs| hrs | 3hrs |
| CSS breakpoint | H | 3hrs| hrs | 4hrs |
| CSS button styling | H | 1hr| hrs | 2hrs |
| CSS general styling | H | 8hrs| hrs | 10hrs |
| Testing | H | 3hrs| hrs | 5hrs |
| Total | H | 31.5hrs| hrs | hrs |

## Code Snippet

```
function removeStrain() {
  const strainContainer = document.querySelector('.strain-list')
  while (strainContainer.lastChild) { //We are grabbing the 'lastChild' which is the strain we just looked up
    strainContainer.removeChild(strainContainer.lastChild) //remove child is going to remove the LAST child from that strain container
  }
}
```

## Change Log

- Not using a dropdown effect, instead added a button to display medical use.

