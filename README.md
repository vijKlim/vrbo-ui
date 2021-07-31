# holiday-hotel-booking-ui
An UI app to search hotels online

## Authors
Karthik

## Installation

```
rm -rf node_modules
npm install

```

Fire up with `npm start` to start the server navigate to http://localhost:8080 to see the components in action.

## Packages

1. React 16.8.x
2. Axios
3. Material UI
4. Webpack

## Features

1. The web app should have a search box (input field), so that travelers can key in location as search terms to perform a search for hotels.

2. The search box should include a `search` button. Upon clicking the search button, search results should display with 20 listings per page.

3. A “No results found” message should be shown when there is no available listing from the search results.

4. Page url should be updated to reflect the search term.

5. There should be pagination to navigate to the next or previous 20 results.

6. Search results can be sorted based on average daily price when price filter is on.

7. Search results can be filtered based on number of bedrooms when bedroom filter is on.

8. For each listing, the following information should be displayed:

○ Listing images ○ Listing title ○ Property type ○ Number of bedrooms ○ Number of bathrooms ○ Number of guests ○ Average nightly price

9. Upon clicking on the listing, user will be redirected to the listing details page on Vrbo site.

The app is running in EC2 instance. http://18.219.86.136:4000/. 

## Bonus Points

1. Build tools / task runners such as webpack are used

2. Application is deployed to cloud instances - http://18.219.86.136:4000/

3. Internalization is easily supported

4. Proper error handling

5. High speed page rendering

## Improvements
1. The app should be covered with test cases. Test cases are missing. (react-testing-library)

## Code WalkThrough
1. The app has a custom webpack configuration.
2. It contains folders actions, componenents, constants, containers, context, reducers, routes, sagas, selectors and styles
3. Actions contains redux actions.
4. Constants has the app constants
5. Containers are connected to the store to drill down the props to child components
6. Context uses React Context API to hold onto values which are consistent throughout the app and can be used by the children components directly by consuming it
7. Reducers are store chunks
8. Routes carry the react router routes
9. Sagas are for async code handling
10. Selectors are reselect to use memoized function values
11. Styles are material UI styles used accross the application
