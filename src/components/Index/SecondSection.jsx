import perfil from  '../../imagenes/carnet.jpg'

export default function SecondSection(){
    return(
        <>
        <div className="profile_image-container">
            <img src={perfil} alt="" />
        </div>
        <button type="button" className="cv_button"> <span> DESCARGA MI CV </span> </button>
        </>
    )
}