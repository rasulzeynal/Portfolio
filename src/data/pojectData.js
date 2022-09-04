import basic_contacts from "../assets/img/basic_contacts.png";
import bookfolio from "../assets/img/bookfolio.png";
import foodstore from "../assets/img/foodstore.png";
import manage_employees from "../assets/img/manage_employees.png";
import myschool from "../assets/img/myschool.png";
import simple_shopping from "../assets/img/simple_shopping.png";
import mymovies from "../assets/img/mymovies.png";
import portfolio from "../assets/img/portfolio.png"


export const projectData = [
    {
        id: 1,
        name:"FoodStore",
        url:foodstore,
        lang:['HTML','CSS'],
        github:"https://github.com/rasulzeynal/FoodStore",
        demo:"https://fastfoodstore.netlify.app/",
        desc:"This is the first project I have written to test my skills after learning HTML and CSS. Only HTML and CSS were used in the project. As I do not know about JS, each card was made individually."
    },
    {
        id: 2,
        name:"My Basic Contacts",
        url:basic_contacts,
        lang:['React','CSS',"Bootstrap"],
        github:"https://github.com/rasulzeynal/BasicContacts",
        demo:"https://basiccontacts.netlify.app/",
        desc:"In this project, a simple user list is created using HTML, Bootstrap and Javascript. Here you can also filter users by name or phone number."
    },
    {
        id: 3,
        name:"Manage Employees",
        url:manage_employees,
        lang:['React','CSS','React-bootstrap'],
        github:"https://github.com/rasulzeynal/Employees",
        demo:"https://myemployees.netlify.app/",
        desc:"This project is also designed to compile a list of users. But this project is more functional than the other one. So here, in addition to registering the user, it is possible to edit or delete the user. Context Api is used here."
    },
    /* {
        id: 4,
        name:"Simple Shopping",
        url:simple_shopping,
        lang:['React','CSS'],
        github:"",
        demo:"",
        desc:"This project functions as a simple shopping cart. By clicking on the products placed here, we can redirect them to the cart. Redux was used to store the goods in the cart."
    }, */
    {
        id: 5,
        name:"Bookfolio",
        url:bookfolio,
        lang:['React','CSS','Bootstrap'],
        github:"https://github.com/rasulzeynal/Books",
        demo:"https://bookscreative-gnome-facbad.netlify.app/",
        desc:"This is my first project learning React. This project consists of class components and uses the Context API. It is also possible to switch the background to night and day mode here."
    },
    {
        id: 6,
        name:"Movies App",
        url:mymovies,
        lang:['React','CSS','Bootstrap'],
        github:"https://github.com/rasulzeynal/Movies",
        demo:"",
        desc:"This project consists of a collection of information about films. Here, the list of movies is stored in a JSON file and a fake json server is created and the movies are displayed on the screen through an api request. Here, it is also possible to add a new movie and edit an existing movie."
    },
    {
        id: 7,
        name:"Course management app",
        url:myschool,
        lang:['React','SCSS','Reactstrap,Node js'],
        github:"https://github.com/rasulzeynal/mektebim",
        demo:"",
        desc:"This project can be used as a management program in courses. Thus, it is possible to create users in three roles: Admin, Teacher and Student. A profile is created for each user's role. Redux, Redux-Thunk, Redux persistent, RBAC, JWT and other technologies were used here."
    },
    {
        id: 8,
        name:"Portfolio",
        url:portfolio,
        lang:['React','SCSS','React-bootstrap'],
        github:"https://github.com/rasulzeynal/Portfolio",
        demo:"https://rasulzeynal.netlify.app/",
        desc:"This project was created in order to give a brief information about myself. You can see my other projects and cv by viewing the portfolio. Here, the main focus is on responsiveness and design."
    }

]