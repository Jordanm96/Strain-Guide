# Project Overview

## Medical Marijuana Information Website

[My deployed site]('insert url here as a string')
The name of your project with deployed URL.

## Project Description

I will utilize the Marijuana Strain API to allow users to look up any given strain of Marijuana and retrieve information about it. This information should include the name race (indica, sativa, or hybrid), and the origin of the strain. I would also like to add the positve effects and the medical effects, but I need to use an additional query and am not sure how to incorporate that at the moment.

## API and Data Sample

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
Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need

## Wireframes

[My Wireframe](https://wireframe.cc/AoMrsL)


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Explore The Strain API to see what info I can return
- Link this API to my website
- Set up basic HTML and CSS
- Add Search bar with button where users will enter in name of strain
- Display the name, race, origin and effects of any strain containing the keyword the user inputs

#### PostMVP  


- Link additional query in my api that brings more info on strain (effects and flavors)
- I want the single search to bring back the name, race, origin, AND effects and flavors but I'm not sure how to link this
- Link the ID of our search result strain to the URLs below so that it returns the effects
- Example (from api website):
	Additional Queries
	Some of the search queries only return the strain with basic information and not effects. 	     	     These additional queries use the strain id to return its corresponding effect or flavor data.
	strainapi.evanbusse.com/API_KEY/strains/data/effects/STRAIN_ID
- Maybe include drop down. Ex. Search results brings up name only, click on it to see the race, origin, and effects
- 
## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval | Incomplete
|Feb 24| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Feb 24| Pseudocode / actual code | Incomplete
|Feb 25| Initial Clickable Model  | Incomplete
|Feb 26| MVP | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

[Priority Matrix Image](https://imgur.com/a/sdq287Q)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set up basic HTML/CSS borders/JS frame with API | H | 3hrs| hrs | hrs |
| Add Try/Catch/get axios/async/await | H | 3hrs| hrs | hrs |
| Getting API to get data I want | H | 3hrs| hrs | hrs |
| Add remove() to clear past search results | H | 3hrs| 2.5hrs | 2.5hrs |
| Collapse info into Name/Click to see info | H | 3hrs| 2.5hrs | 2.5hrs |
| Add lots of CSS | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 21hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
