import './About.css'

function About() {
    return (
        <>
        <div className="about-section bg-pan-bottom" id='about'>
            <div className="about-content">
                <div className="about-heading">
                    <h4 className='about-head text-shadow-pop-top'>What about me?</h4>
                </div>

                <div className="about-description">
                    <div className="content-des">
                        <p id="firstPara">Hi there, my name is Rasayan Chakraborty. I am a Web-Developer and an UI&UX Designer. I am also 
                        a second year undergrad student at The Heritage Academy. Trying to get into freelancing and also 
                        develop some amazing projects.</p>
                        <p id="secondPara">I am experienced in Tailwind, Bootstrap, Node.js, Express, React.js, CSS, HTML and JavaScript. 
                        So, if you are interested in building a new website, a new Web Design( FIGMA or HTML&CSS ), then 
                        feel free to let me know. I will be happy to work with you. </p>
                    </div>

                    <div className="content-pic">
                        <img src="IMG_20230707_014921_328.jpg" alt="" className="content-image tilt-in-fwd-tr" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About