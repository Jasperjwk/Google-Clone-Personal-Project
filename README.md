# Google-Clone-Personal-Project

# Tech in my project build

# Plan of action

1) Context API
2) Material UI
3) React Router
4) Google Custom Search API
5) Make my own custom hook with React - pull information from the servers
6) Firebase to setup the app to connect to google
7) Use firebase hosting to deploy the app

# Hosting URL: 
https://clone-personal-project-15e4e.web.app

# My Personal Notes

npx create-react-app google-clone-personal-project

I use link instead of A tag - A tag is gonna go to that page and refresh. I want to use the link tag so that there will be no refresh

.MuiSvgIcon-root is the className that Material UI gives for every icon

object-fit: contain - The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box. The entire object is made to fill the box, while preserving its aspect ratio

/* Flex 1 is going to take up majority of the space */
flex: 1;

/* Takes up entire row in the column */
flex-direction: column;

/* Use 75% of the screen width */
width: 75vw;

/* Make it horizontally centred */
margin: 0 auto;

/* It nevers go past a certain width, if you have a 
huge screen, you don't want the search bar to be huge  */
max-width: 560px;

/* I want that input field to take up majority of the space */
flex: 1

.search__input > input:focus {
/* Remove the outline  */
outline-width: 0 ;
}

/* Transform it to the text I want*/
text-transform: inherit;

# Simple trick 
Use a form instead of a div and include type = "submit"

InitialState - is what the data layer looks like when the app is loaded
Reducer - is something that is clever which listens to changes

const [{}, dispatch] = useStateValue();
const [state, dispatch] = useStateValue();
AIzaSyCriBA61uS6KKnm28AVTaqZpLJviVRdFfQ
ce0f694cb1b42d9c1

Get API key and google context key

/* Whatever is next to it will not touch it */
margin-right: 50px;


/* When i scroll down, i want it to be basically stick  */
    position: sticky;

/* So that it will stick to the top */
top: 0;

/* When i am scrolling down, it will always stay at the top 
    of the screen */
z-index: 100;

// Remove hyperlink field
text-decoration: none;

# Steps to deploy my project using firebase

1) npm install -g firebase-tools
2) firebase init (hosting > build > y > n)
3) npm run build
4) firebase use "project id"
5) firebase deploy






