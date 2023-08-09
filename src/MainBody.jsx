import './MainBody.css'

function MainBody() {
    return (
        <>
        <div className="main-body image">
            <h3 className="body-heading">Hey there, I am</h3>
            <h2 className="main-heading tracking-in-expand">Rasayan Chakraborty</h2>
            <p className="mainRole">JUNIOR <span className="text_shadows">FRONT-END DEVELOPER</span></p>
        </div>
        <div className="buttons image">
            <button className='mainButton slide-bck-center'>HIRE ME</button>
            <button className='mainButton'>GET CV</button>
        </div>

        <div className="followIcons image">
            <ul className="listIconsMain">
                <li className="icon-list"><a href="#" className='linkedin-logo'><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li className="icon-list"><a href="#" className='reddit-logo'><ion-icon name="logo-reddit"></ion-icon></a></li>
                <li className="icon-list"><a href="#" className='facebook-logo'><ion-icon name="logo-facebook"></ion-icon></a></li>
            </ul>
        </div>
        </>
    )
}

export default MainBody