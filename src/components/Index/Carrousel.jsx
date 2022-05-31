import html from '../../imagenes/carrousel/html.png'
import js from '../../imagenes/carrousel/js.png'
import css from '../../imagenes/carrousel/css.png'
import node from '../../imagenes/carrousel/node.png'
import mongo from '../../imagenes/carrousel/mongodb.png'
import npm from '../../imagenes/carrousel/npm.png'
import react from '../../imagenes/carrousel/react.png'

export default function Carrousel () {
    return <>
    <div style={{display: "inline-block"}} className="carrousel">
        <div className="carrousel-items">
            <div style={{marginLeft: "50px"}} className="carrousel-item">
                <img src={html} alt="" />
            </div>
            <div className="carrousel-item">
                <img src={css} alt="" />
            </div>
            <div className="carrousel-item">
                <img src={js} alt="" />
            </div>
            <div className="carrousel-item">
                <img src={react} alt="" />
            </div>
            <div className="carrousel-item">
                <img src={node} alt="" />
            </div>
            <div className="carrousel-item">
                <img src={mongo} alt="" />
            </div>
            <div className="carrousel-item">
                <img src={npm} alt="" />
            </div>
        </div>
    </div>
    </>
}