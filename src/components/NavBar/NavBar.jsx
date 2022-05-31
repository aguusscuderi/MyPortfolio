//import { render } from "@testing-library/react"
import '../css/style.css'

function NavBar() {
    const slide = (e) => {
        const menu = document.querySelector('.mobile__nav-container')
        const links = document.querySelectorAll('.navLink')
        const blocked = document.querySelector('.blocked')

                if(blocked){
                    menu.style.transform = "translateY(-900px)"
                    menu.classList.remove('blocked')
                    links.forEach(el => {
                        el.style.animation = ''
                    })
                    e.currentTarget.classList.remove('toggle')
                }else{
                    menu.style.transform = "translateY(11px)"
                    menu.style.opacity = "1"
                    menu.classList.add('blocked')
                    links.forEach((el, index) => { 
                        el.style.animation = `navLinkFade 0.2s ease forwards ${index / 7+1}s`     
                    })
                    e.currentTarget.classList.toggle('toggle')
                }    
    }
    //render()
    return (
        <>
        <nav>
            <div onClick={slide} className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="mobile__nav-container mb__nav-container-visible">
                <ul className="flex__ul">
                    <li className="flex__li-item"> <a href=" " className="navLink"> <i class="fas fa-home"></i> Inicio  </a> </li>
                    <li className="flex__li-item"> <a href=" " className="navLink"> <i className="fas fa-question-circle"></i> Mis trabajos</a> </li>
                    <li className="flex__li-item"> <a href=" " className="navLink"> <i className="fas fa-store"></i> Sobre mi </a></li>
                    <li className="flex__li-item"> <a href=" " className="navLink"> <i className="fas fa-users"></i>  Contactame  </a> </li>
                </ul>
            </div>
        </nav>
        </>          
    )   
}

export default NavBar