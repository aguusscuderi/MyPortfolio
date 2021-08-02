
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

export default function Index(){
    return(
        <>
            <main>
                <div class="row">
                    <div className="section1 in-sm-12 in-md-6 in-lg-6"> 
                        <FirstSection/>
                    </div>
                    <div className="section2 in-sm-12 in-md-6 in-lg-6"> 
                        <SecondSection/>
                    </div>
                </div>
            </main>
        </>
    )
  
}