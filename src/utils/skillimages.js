import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import javascript from '../assets/svg/javascript.svg'
import react from '../assets/svg/react.svg'
import bootstrap from '../assets/svg/bootstrap.svg'
import git from '../assets/svg/git.svg'
import materialui from '../assets/svg/materialui.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        default:
            break;
    }
}