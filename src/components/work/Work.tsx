import './work.css'
import StainWork from '../../assets/stainFive.png'
import ongle1 from '../../assets/ongle1.jpg'
import ongle2 from '../../assets/ongle2.jpg'
import ongle3 from '../../assets/ongle3.jpg'
import ongle4 from '../../assets/ongle4.jpg'
import ongle5 from '../../assets/ongle5.jpg'
import ongle6 from '../../assets/ongle6.jpg'
import ongle7 from '../../assets/ongle7.jpg'
import ongle8 from '../../assets/ongle8.jpg'


const Work = () => {

    return(
        <div className="workContainer">
            <div className="workColorBloc">
                <h2>Mon travail</h2>
                <div className="photoTab">
                    <img src={ongle1} className='workImg'></img>
                    <img src={ongle2} className='workImg'></img>
                    <img src={ongle3} className='workImg'></img>
                    <img src={ongle4} className='workImg'></img>
                    <img src={ongle5} className='workImg'></img>
                    <img src={ongle6} className='workImg'></img>
                    <img src={ongle7} className='workImg'></img>
                    <img src={ongle8} className='workImg'></img>
                </div>
            </div>
            <div className="workStain">
                <img src={StainWork} alt="stain for style" />
            </div>
        </div>
    )
}

export default Work