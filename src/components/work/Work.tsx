import './work.css'
import StainWork from '../../assets/stainFive.png'

const Work = () => {

    const data = [
        '/src/assets/ongle1.jpg',
        '/src/assets/ongle2.jpg',
        '/src/assets/ongle3.jpg',
        '/src/assets/ongle4.jpg',
        '/src/assets/ongle5.jpg',
        '/src/assets/ongle6.jpg',
        '/src/assets/ongle7.jpg',
        '/src/assets/ongle8.jpg',
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