import ProgressBar from "@ramonak/react-progress-bar";
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div id="about" className='row hero'>
            <div className="col-2">
                <img src="" alt='image' />
            </div>
            <div className="col-2">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo totam, minima dolorum quos distinctio vero voluptas dolor libero voluptatum earum!</p>
                <div className="skill-progressBar">
                    <h2>UX</h2>
                    <ProgressBar completed={90} bgColor="#fd6f00" />
                </div>
                <div className="skill-progressBar">
                    <h2>Website Design</h2>
                    <ProgressBar completed={80} bgColor="#fd6f00" />
                </div>
                <div className="skill-progressBar">
                    <h2>App Design</h2>
                    <ProgressBar completed={85} bgColor="#fd6f00" />
                </div>
                <div className="skill-progressBar">
                    <h2>Graphics Design</h2>
                    <ProgressBar completed={75} bgColor="#fd6f00" />
                </div>
            </div>

        </div>
    )
}

export default AboutMe