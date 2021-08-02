import perfil from  '../../imagenes/carnet.jpg'

export default function SecondSection(){
    return(
        <>
        <div className="profile_image-container">
            <img src={perfil} alt="" />
        </div>
        </>
    )
}