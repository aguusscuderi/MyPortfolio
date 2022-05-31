import perfil from  '../../imagenes/carnet.jpg'
import Button from './ButtonCV'

export default function SecondSection(){
    return(
        <>
        <Button/>
        <div className="profile_image-container">
            <img src={perfil} alt="" />
        </div>
        </>
    )
}