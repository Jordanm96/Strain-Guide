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

- Explore The Strain API to see what info I can return
- Link this API to my website
- Set up basic HTML and CSS
- Implement search bar that renders the name, race, and description of strain entered
- Create button for search bar
- Add media-query/breakpoint for responsive CSS
- Styled using Flexbox
---- 


#### PostMVP  

- Add a click event to display the effects of the displayed strain when clicked
- Link additional query in my api that brings more info on strain (effects)
- Incorporate a dropdown effect for our search results (display name of strain only, display additional info when strain is clicked)
- Add additional API call to search for nearby medical dispensaries

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Feb 23| Project Approval | Incomplete
|Feb 23| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Feb 23-24| Pseudocode / actual code | Incomplete
|Feb 25| Initial Clickable Model  | Incomplete
|Feb 26| MVP | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

[Priority Matrix Image](https://imgur.com/HnLxbnU)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set up HTML/CSS borders/JS frame with API | H | 3hrs| hrs | hrs |
| Pseudocode/mapping JS | H | 3hrs| hrs | hrs |
| Create error handling function with try/catch| H | 3hrs| hrs | hrs |
| Link API to JS| H | 3hrs| hrs | hrs |
| Link additional search query using strain ID gathered from first API request to JS | H | 3hrs| hrs | hrs |
| Add event listeners | H | 3hrs| hrs | hrs |
| Create dropdown display of search results | H | 3hrs| hrs | hrs |
| CSS breakpoint | H | 3hrs| hrs | hrs |
| CSS button styling | H | 3hrs| hrs | hrs |
| CSS button animation | H | 3hrs| hrs | hrs |
| Testing | H | 3hrs| hrs | hrs |
| Total | H | 33hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function removeStrain() {
  const strainContainer = document.querySelector('.strain-list')
  while (strainContainer.lastChild) { //We are grabbing the 'lastChild' which is the strain we just looked up
    strainContainer.removeChild(strainContainer.lastChild) //remove child is going to remove the LAST child from that strain container
  }
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
