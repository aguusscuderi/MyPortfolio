import React, { useState, useEffect } from "react";

export default function Button(){
    const [animate, setAnimate] = useState()

    useEffect(()=> {
      console.log('montado')
    }, [animate])

    const animated = () => {
        const butt = document.querySelector('.cv_button')
        const span = document.querySelector('.cv_span')
        if(butt){
            butt.classList.add('cv_buttonAnimated')
            butt.classList.remove('cv_butt') 
            span.innerHTML = `<i class="fas fa-download"></i>`
            setTimeout(function(){
                butt.classList.remove('cv_buttonAnimated')
                butt.classList.add('cv_butt') 
                span.innerHTML = 'DESCARGA MI CV'
            }, 4000)
        }else{
           
        }
    }

    return(
        <>
            <button onClick={() => setAnimate(
            animated
            )} type="button" className="cv_button"> <span className="cv_span">  DESCARGA MI CV </span> </button>
        </>
    )
} 