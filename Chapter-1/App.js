const element1 = React.createElement("div",{},[React.createElement("h3",{},"Hi"),React.createElement("h3",{},"Hello there")])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(element1)



// # React Notes: Part 1

// ## Introduction to React

// ### What is React?

// React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of developers. React allows you to create reusable UI components and manage their state efficiently.

// ### Why Use React?

// 1. **Component-Based Architecture:** React promotes the creation of modular, reusable components that make it easier to manage complex UIs.

// 2. **Virtual DOM:** React uses a Virtual DOM to optimize updates and minimize direct manipulation of the actual DOM, improving performance.

// 3. **Unidirectional Data Flow:** React follows a one-way data flow, making it easier to understand how data changes affect your UI.

// ### Setting Up a React Project

// #### Using Create React App

// Create React App is a tool that sets up a new React project with a predefined structure and development environment.

// 1. Install Create React App globally:
//    ```sh
//    npm install -g create-react-app
