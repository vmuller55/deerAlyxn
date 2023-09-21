import './home.css'
import titleImageRight from '../../assets/stain.png'
import Resume from '../../components/resume/Resume'
import Work from '../../components/work/Work'
import Forma from '../../components/forma/Forma'
import Contact from '../../components/contact/Contact'


const Home = () => {
    return(
        <div className="homeContainer">
            <section className='title'>
                <h1>Deer Alyx Onglerie <br/> Formation</h1>
                <div className='rightSideTitle'>
                    <div className="imageRightSideTitle">
                        
                    </div>
                    <div className="colorSquareRightSideTitle"></div>
                </div>
                <div className='leftSideTitle'>
                    <img src={titleImageRight} alt='red stain'></img>
                </div>
            </section>
            <section className='resume'>
                <Resume/>
            </section>
            <section className='work'>
                <Work/>
            </section>
            <section className='forma'>
                <Forma/>
            </section>
            <section className='contact'>
                <Contact/>
            </section>
        </div>
    )
}

export default Home