import './index.css';
import emata from './emata.png'
import limu from './limu.jpeg'
import upstart from './Upstart.jpg'
import wsa from './wsa-logo-master-rgb.webp'

function Contact(){
    return(
    <div>


    <div class= "logo-container">
        <img src={emata} alt="Emata" class="logo"/>
        <img src={upstart} alt="Upstart" class="logo"/>
        <img src={wsa} alt="WSA" class="logo"/>
        <img src={limu} alt="Lmndu Fresh" class="logo"/>
    </div>
    
    <div class="contact-section">
        <div class="contact-content">
            <h2>Contact Us On</h2>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=inotaplus@gmail.com" target="_blank">inotaplus@gmail.com</a> 
  </div>
    </div>

    </div>
    )
}
export default Contact;