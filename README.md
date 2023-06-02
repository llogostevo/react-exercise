# react-exercise

## todo
**Exercise 3: Todo List**

Build a todo list component where users can add new tasks, mark them as completed, and remove them from the list.

### todo
add in a checkbox
add in a filter feature to show all, show complete, show incomplete
add in an feature to order items in alphabetical order, or order of entry

**Exercise 4: Fetching Data**

Create a component that fetches data from an API using the fetch function or a library like Axios. Display the fetched data in your component.

**Exercise 5: Theme Switcher**

Build a theme switcher component that allows users to toggle between light and dark themes. The selected theme should be applied to the entire application.

**Exercise 6: Form Validation**

Create a form component with input fields (e.g., name, email, password) and implement validation logic using React Hooks. Display error messages when the form is submitted with invalid inputs.

**Exercise 7: Timer**

Build a timer component that displays the elapsed time since it started. Include start, pause, and reset buttons to control the timer.

**Exercise 8: Infinite Scroll**

Implement an infinite scroll component that fetches additional data as the user scrolls down the page. Display a loading spinner while fetching data and append it to the existing list.

**Exercise 9: Menu**
- create a menu component
- create a nested route with menu as the upper level component
- create a route to the first exercise in the home page
- create a link to this route via the menu
- recreate routes for each menu item


# PROCESS

- setup react / create react app
- test react app
- convert react boilerplate to functional components
    - App to be converted into arrow function
    - return `<h1>Hello world</h1>`
    - run `npm start` and test output
- install sass
    - rename css to scss
    - update index.js to point to index.scss
    - test sass working by running page again
    - alter CSS if needed, remove any CSS not required

- create first component 
    - create HTML in the return of App
    - provide classNames
    - seperate out into functional component
    - add in Component html to appJs return statement
    - create any required hooks to change the state of the element based upon an action  
        - create hook function
        - in function body provide identifier, function name and the hook it is equal to
            - e.g.  `const [word, setWord] = useState("");`
            - provide function that will perform the action
                - `const hello = () => setWord("Hello");`
            - return the data / html
                - ` <h2 className="SayHello" >{word}</h2>
                    <button className="Hello" onClick={hello}>Say Hi to me :&#41;</button>`
    - repeat this process for each component
        - consider if need to create a container component to contain a portion of the site during this process
        - e.g. a grid container to seperate two components appropriatley 

- pull out component into seperate files
    - create folder structure
    - create file and copy across component code
    - provide export in component file
    - provide import in component file for any states
    - provide import in parent file (appjs?)
    - test
    - pass in any values (not always required)
    - find any css for this component
    - pull it out into a seperate file
    - put imports into component js file
    - repeat this process for each component, until down at the lowest level of components required




## done
**Exercise 1: Counter**

Create a simple counter component that increments or decrements a value when buttons are clicked.

**Exercise 2: Say Hello**

Create a button that when clicked says the word "hello" on in an element above the button
