import './contactme.css'

function Contact() {

  return (
    <>
    <div className="contactMe" id="contact">
        <div className="contact">
        <div className="phoneNo">
            <h2 className="contactIcon"><ion-icon name="call-outline"></ion-icon></h2>
            <h2 className="contactHead">BY PHONE</h2>
            <p id="contactTimings">[Monday to Saturday 9am to 7pm]</p>
            <p id="contactLocation">India Toll-Free</p>
            <p id="contactNumber">+91-905-168-8993</p>
        </div>

        <div className="eMail">
            <h2 className="contactIcon"><ion-icon name="mail"></ion-icon></h2>
            <h2 className="contactHead">BY MAIL</h2>
            <p id="mailDescription">Just send us your questions or concerns by starting a new chat and I will give you the help you need</p>
            <button className="contactButton"><a href="mailto:rascheez2004@gmail.com">Mail Me</a><ion-icon name="send-outline" className="Contact"></ion-icon></button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Contact