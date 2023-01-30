import basic_contacts from "../assets/img/basic_contacts.png";
import bookfolio from "../assets/img/bookfolio.png";
import foodstore from "../assets/img/foodstore.png";
import manage_employees from "../assets/img/manage_employees.png";
import myschool from "../assets/img/myschool.png";
import mymovies from "../assets/img/mymovies.png";
import portfolio from "../assets/img/portfolio.png";
import netflix from "../assets/img/netflixx.png";
import devfinder from "../assets/img/devfinder.png";


export const projectData = [
    {
        id: 1,
        name:"Portfolio",
        url:portfolio,
        lang:['React','SCSS','React-bootstrap'],
        github:"https://github.com/rasulzeynal/Portfolio",
        demo:"https://rasulzeynal.netlify.app/",
        desc:"This project was created in order to give a brief information about myself. You can see my other projects and cv by viewing the portfolio. Here, the main focus is on responsiveness and design."
    },
    {
        id: 2,
        name:"Netflix",
        url:netflix,
        lang:['React','Styled component','Redux','Firebase'],
        github:"https://github.com/rasulzeynal/netflix-app",
        demo:"https://netflixxapp.netlify.app/",
        desc:"A clone of the Netflix page was created in this project. React, Redux, styled components, firebase were used here. Here you can register, enter your account and create your movie list."
    },
    {
        id: 3,
        name:"Developer Finder",
        url:devfinder,
        lang:['React','Sass'],
        github:"https://github.com/rasulzeynal/devfinder",
        demo:"https://developersfinder.netlify.app/",
        desc:"This project provides information about that user's github account based on the information entered in the input part. The project can be used in two modes: dark and light mode."
    },
    {
        id: 8,
        name:"Movies App",
        url:mymovies,
        lang:['React','CSS','Bootstrap'],
        github:"https://github.com/rasulzeynal/Movies",
        demo:"",
        desc:"This project consists of a collection of information about films. Here, the list of movies is stored in a JSON file and a fake json server is created and the movies are displayed on the screen through an api request. Here, it is also possible to add a new movie and edit an existing movie."
    },
    {
        id: 4,
        name:"Course management app",
        url:myschool,
        lang:['React','SCSS','Reactstrap,Node js'],
        github:"https://github.com/rasulzeynal/mektebim",
        demo:"",
        desc:"This project can be used as a management program in courses. Thus, it is possible to create users in three roles: Admin, Teacher and Student. A profile is created for each user's role. Redux, Redux-Thunk, Redux persistent, RBAC, JWT and other technologies were used here."
    },
    {
        id: 5,
        name:"FoodStore",
        url:foodstore,
        lang:['HTML','CSS'],
        github:"https://github.com/rasulzeynal/FoodStore",
        demo:"https://fastfoodstore.netlify.app/",
        desc:"This is the first project I have written to test my skills after learning HTML and CSS. Only HTML and CSS were used in the project. As I do not know about JS, each card was made individually."
    },
    {
        id: 6,
        name:"Manage Employees",
        url:manage_employees,
        lang:['React','CSS','React-bootstrap'],
        github:"https://github.com/rasulzeynal/Employees",
        demo:"https://myemployees.netlify.app/",
        desc:"This project is also designed to compile a list of users. But this project is more functional than the other one. So here, in addition to registering the user, it is possible to edit or delete the user. Context Api is used here."
    },
    {
        id: 7,
        name:"Bookfolio",
        url:bookfolio,
        lang:['React','CSS','Bootstrap'],
        github:"https://github.com/rasulzeynal/Books",
        demo:"https://bookscreative-gnome-facbad.netlify.app/",
        desc:"This is my first project learning React. This project consists of class components and uses the Context API. It is also possible to switch the background to night and day mode here."
    },
    
    

]