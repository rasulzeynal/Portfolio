import basic_contacts from "../assets/img/basic_contacts.png";
import bookfolio from "../assets/img/bookfolio.png";
import foodstore from "../assets/img/foodstore.png";
import manage_employees from "../assets/img/manage_employees.png";
import myschool from "../assets/img/myschhol.png";
import simple_shopping from "../assets/img/simple_shopping.png";





export const projectsImage = (project) => {
    const projectId = project.toLowerCase();
    switch (projectId) {
        case 'basic_contacts':
            return basic_contacts;
        case 'bookfolio':
            return bookfolio;
        case 'foodstore':
            return foodstore;
        case 'manage_employees':
            return manage_employees;
        case 'myschool':
            return myschool;
        case 'simple_shopping':
            return simple_shopping;
        default:
            break;
    }
}