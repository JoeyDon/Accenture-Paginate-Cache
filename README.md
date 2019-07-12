

## [Paginate Cache - Material React Redux Saga Template](https://www.linkedin.com/in/joey-dong-032b9013a/) [![sds](https://img.shields.io/static/v1.svg?label=Linkedin&message=JoeyDon&color=blue)](https://www.linkedin.com/in/joey-dong-032b9013a/)

![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues](https://img.shields.io/github/issues/JoeyDon/Accenture-Paginate-Cache.svg)](https://github.com/devias-io/react-material-dashboard/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/JoeyDon/Accenture-Paginate-Cache.svg?maxAge=2592000)](https://github.com/devias-io/react-material-dashboard/issues?q=is%3Aissue+is%3Aclosed) 

![Resolution 1920 x 1080](https://github.com/JoeyDon/Accenture-Paginate-Cache/blob/master/responsiveExample/1920.1080.PNG?raw=true)

> Free React, Redux with Redux-Saga template made with [Material UI's](https://material-ui.com/?ref=devias-io) components, Using [React](https://reactjs.org/?ref=devias-io), [Redex](https://redux.js.org/introduction/getting-started), and  [Redex-Saga](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html) to boost your app development process! Example API feteching, interactions between React Component and Redux are implemented. Rich comments(JSDoc) throught the template will explain more details and intentions.

## Table of Contents

- [Quick Start](#quick-start)
- [Flow Chart](#flow-chart)
- [Implementation](#implementation)
- [File Structure](#file-structure)
- [Responsive Layout](#responsive-layout)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Licensing](#licensing)
- [Contact Me](#contact-me)

## Quick start

- [Download from Github](https://github.com/JoeyDon/Accenture-Paginate-Cache/archive/master.zip)  or clone the repo: 
`git clone https://github.com/devias-io/react-material-dashboard.git`

- Install dependencies: 
`npm install` or `yarn`

- Start the server: 
`npm start` or `yarn start`

- Run the test: ( Jest with Enzyme) 
`npm test` or `yarn test`

- Build the package: 
`npm run build` or `yarn build`

- Views are on(default): 
`localhost:3000`

## Flow Chart
![Flow Chart](https://github.com/JoeyDon/Accenture-Paginate-Cache/blob/master/WorkflowDiagram/Flowchart.png?raw=true)

## Implementation
src/settings/setting.js
`const  PAGE_SIZE  =  12;`
`const  MAX_CACHE_PAGES  =  8;`
`const  INITIAL_CACHE_PAGES  =  5;`

1. `Home.componentDidMount()` initially will load 60 cards which displayed in 5 pages. This is calculated by `PAGE_SIZE  * INITIAL_CACHE_PAGES  ` from the `setting.js`
** User will see a circular loading indication in the middle while fetching data from API.


2. `Saga` will listen to the `onNextPage()` in `Action`, if the current page index reach the end of cached index, then pull more data from the API. e.g.`(paginationReducer  ===  cacheReducer) && getMoreData()`
 ** User will see a linear loading indication on the top showing fetching more data in the backend.

3. In REAL WORLD application, I will prefer implement it `(paginationReducer  ===  cacheReducer -2) && getMoreData()`in `Saga.js`. This will cause more frequent API calls, but offer a smoother User Experience. User will see less loading because we cache 2 pages ahead before reaching the end of cache.
Since `Minimising the number of requests to the backend` is one of the `Judging Criteria`, then I sacrificed a bit of UX. User might see more loading, but this implementation does the minimal API requests.

## File Structure

Within the download you'll find the following directories and files:

```
Accenture-Paginate-Cache
├── .gitignore
├── package.json
├── package-lock.json
├── yarn.lock
├── README.md
├── public
└── src
	├── components
	│	├── cards
	│	│	├── Card.jsx
	│	│	├── CardDetails.jsx
	│	│	└── Cards.jsx
	│	├── home
	│	│	├── Home.test.js
	│	│	└── Home.jsx	
	│	├── loading
	│	│	├── LoadingCircle.jsx
	│	│	└── LoadingLinear.jsx
	│	├── pagination
	│	│	└── Pagination.jsx	
	│	├── App.test.js
	│	└── App.jsx
	├── reducers
	│	├── cacheReducer.js
	│	├── dataReducer.js	
	│	├── index.js	
	│	├── lastpageReducer.js	
	│	└── paginationReducer.js	
	├── settings	
	│	└── settings.js
	├── utils
	│	├── testUtils.js
	│	└── paginate.js
	├── action.js
	├── api.js
	├── index.js
	├── registerServiceWorker.js
	├── saga.js
	└── store.js
```
## Responsive Layout
1920 x 1080 (16:9)
21.5'' monitor / 23'' monitor / 1080p TV
![Resolution 1920 x 1080](https://github.com/JoeyDon/Accenture-Paginate-Cache/blob/master/responsiveExample/1920.1080.PNG?raw=true)
 
1366 x 768 (16:9)
14'' Notebook / 15.6'' Laptop / 18.5'' monitor
![Resolution 1366 x 768](https://github.com/JoeyDon/Accenture-Paginate-Cache/blob/master/responsiveExample/1366.768.PNG?raw=true) 

768 x 1024 (3:4)
IPAD / Tablet
![Resolution IPAD](https://github.com/JoeyDon/Accenture-Paginate-Cache/blob/master/responsiveExample/IPAD.PNG?raw=true)

 375 x 667 (9:19)
 IPHONE 6/7/8 or Similar mobile phones
![Resolution 1366 x 768](https://github.com/JoeyDon/Accenture-Paginate-Cache/blob/master/responsiveExample/IPHONE%20678.PNG?raw=true)

 
## Resources

- Material-UI, the world's most popular React UI framework. : <https://material-ui.com/>
- Udamy, Test Driven Development course on [React Testing with Jest and Enzyme](https://www.udemy.com/gift/react-testing-with-jest-and-enzyme/?couponCode=LEARNTODAY) to follow the best practices of testing.
- Docker, Container Platform : [Learn more](https://www.docker.com/)

## Reporting Issues:

- [Github Issues Page](https://github.com/devias-io/react-material-dashboard/issues?ref=devias-io)

## Design Files

- Licensed under MIT ([https://github.com/JoeyDon/Accenture-Paginate-Cache/blob/master/LICENSE.md](https://github.com/JoeyDon/Accenture-Paginate-Cache/blob/master/LICENSE.md))

## Contact Us

- Email me: Joey.don0905@gmail.com
- [Check me out on Linkedin](https://www.linkedin.com/in/joey-dong-032b9013a/)

