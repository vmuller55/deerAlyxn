import './resume.css'
import spawnImage from '../../assets/ongle3.jpg'
import StainResume from '../../assets/smoke.png'

const Resume = () => {

    return(
        <div className='resumeContainer'>
            <div className="colorBlocResume">
                <h2>Qui je suis ?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Adipiscing commodo elit at imperdiet dui. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. 
                    Facilisi etiam dignissim diam quis enim lobortis scelerisque. Ac felis donec et odio pellentesque diam volutpat commodo sed. 
                    Et ligula ullamcorper malesuada proin libero nunc. Massa sapien faucibus et molestie ac. 
                    Commodo nulla facilisi nullam vehicula ipsum a. Magna sit amet purus gravida quis blandit turpis cursus. Egestas erat imperdiet sed euismod nisi. 
                    Sit amet cursus sit amet dictum sit amet. Habitant morbi tristique senectus et netus et. Morbi tristique senectus et netus et malesuada fames ac. 
                    In nisl nisi scelerisque eu ultrices. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Viverra nam libero justo laoreet sit amet cursus sit amet. 
                    Mattis enim ut tellus elementum sagittis vitae et leo.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Adipiscing commodo elit at imperdiet dui. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. 
                    Facilisi etiam dignissim diam quis enim lobortis scelerisque. Ac felis donec et odio pellentesque diam volutpat commodo sed. 
                    Et ligula ullamcorper malesuada proin libero nunc. Massa sapien faucibus et molestie ac. 
                    Commodo nulla facilisi nullam vehicula ipsum a. Magna sit amet purus gravida quis blandit turpis cursus. Egestas erat imperdiet sed euismod nisi. 
                    Sit amet cursus sit amet dictum sit amet. Habitant morbi tristique senectus et netus et. Morbi tristique senectus et netus et malesuada fames ac. 
                    In nisl nisi scelerisque eu ultrices. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Viverra nam libero justo laoreet sit amet cursus sit amet. 
                    Mattis enim ut tellus elementum sagittis vitae et leo.
                </p>
            </div>
            <div className="imageSpawnContainer">
                <img src={spawnImage} alt='pose ongles néons' className='imageSpawn'></img>
            </div>
            <div className="resumeStain">
                <img src={StainResume} alt="stain for style" />
            </div>
        </div>
    )
}

export default Resume