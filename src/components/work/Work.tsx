import './work.css'
import StainWork from '../../assets/stainFive.png'

const Work = () => {

    const data = [
        '../../assets/ongle1.jpg',
        '../../assets/ongle2.jpg',
        '../../assets/ongle3.jpg',
        '../../assets/ongle4.jpg',
        '../../assets/ongle5.jpg',
        '../../assets/ongle6.jpg',
        '../../assets/ongle7.jpg',
        '../../assets/ongle8.jpg',
    ]

    return(
        <div className="workContainer">
            <div className="workColorBloc">
                <h2>Mon travail</h2>
                <div className="photoTab">
                    {data.map((image, index) => {
                        return <img src={image} key={index} className='workImg'></img>
                    })}
                </div>
            </div>
            <div className="workStain">
                <img src={StainWork} alt="stain for style" />
            </div>
        </div>
    )
}

export default Work