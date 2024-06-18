import React from "react";
import './footer.css';
import InotaLogo from './InotaLogo.png'
import FacebookLogo from './FacebookLogo.png'
import InstagramLogo from './InstagramLogo.png'
import LinkedinLogo from './LinkedinLogo.png'
import Phone from './Phone.png'
import Email from './Email.png'

function Footer() {
    return (
        <footer id="ff">
            <div class="footer">
                <div class="Logo">
                    <img src={InotaLogo} alt="InotaLogo"></img>
                </div>
                <div class="social-media">
                    <a href="#FacebookLogo"><img src={FacebookLogo} alt="Facebook"></img></a> &nbsp; &nbsp;
                    <a href="#InstagramLogo"><img src={InstagramLogo} alt="Instagram"></img></a> &nbsp;&nbsp;
                    <a href="#LinkedIn"><img src={LinkedinLogo} alt="LinkedIn"></img></a>
                </div>
                <div class="info">
                    <div class="Resources">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#FAQs">FAQs</a></li>
                            <br/>
                            <li><a href="#About">About</a></li>
                            <br/>
                            <li><a href="#Features">Features</a></li>
                        </ul>
                    </div>
                    <div class="Contact">
                        <h4>Contact</h4>
                        <br />
                        <img src={Phone} alt="PhoneIcon"></img>
                        <span>+254112446610</span>
                        <br />
                        <br />
                        {/* <img src={Email} alt="EmailIcon"></img> */}
                        <span>inotaplus@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;