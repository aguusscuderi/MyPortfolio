import codinglaptop from '../../imagenes/codinglaptop.png'

export default function FirstSection(){
    return(
        <>
            <div className="presentation-container">
                    Hola! mi nombre es
                    <h1>Agustin Scuderi</h1>
                    <ul className="dynamic-texts">
                        <li><span className="lines">Javascript Fullstack Developer</span></li>
                    </ul>
                    <p>😁</p>
                <img src={codinglaptop} alt="" />
            </div>
        </>
    )
}