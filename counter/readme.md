# a simple counter app

## Recommended VS Code extensions

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
  - Description: Editor services for Angular templates
- [Ionic](https://marketplace.visualstudio.com/items?itemName=ionic.ionic)
  - Description: Official extension for Ionic and Capacitor development

## Prerequisites

Download ionic cli (preferably globally) to use ionic actions in the terminal environment

`npm install -g @ionic/cli`

That's it 😁

## Instructions

1. `ionic start`
   1. Say no to the creation wizard
   2. Use angular templates
   3. No starter template (blank)
2. `ionic serve`
3. Change home screen
   1. cd ./src/app/home/home.page.html
   2. Create a page with text and 2 buttons (+-)
4. Add value variable to component class
   1. Add value to monitor button click
   2. Create increment and decrement functions
5. Attach value and functions to page
6. Build project and view in browser [and mobiles]
