import './js/renderTpl'
import './js/burger'
import destinationScript from './js/destination'
import crewScript from './js/crew'
import technologyScript from './js/technology'
import './sass/app.sass'

const pathname = document.location.pathname
if(pathname.includes('destination')){
    destinationScript()
} else if (pathname.includes('crew')) {
    crewScript()
} else if(pathname.includes('technology')) {
    technologyScript()
}