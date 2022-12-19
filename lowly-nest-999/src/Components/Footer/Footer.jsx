import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
    return <>
        <div className="footer_container">
            <hr />
            <div className="footer">
                
                <div className="links">
                    <div>Related Link:</div>
                    <p>Website Builder</p>
                    <p>Canva</p>
                    <p>The Picture Perfect Guide on How to Use Pintrest</p>

                </div>
              
                <div className="footer_upper">
                    <div className="products">
                        <h2 className="head">Products</h2>
                        <ul>
                            <li className="lis">Why mailPanda?</li>
                            <li className="lis">Product Updates </li>
                            <li className="lis">Email Marketing</li>
                            <li className="lis">Websites</li>
                            <li className="lis">Tractional Email</li>
                            <li className="lis">How We compare</li>
                            <li className="lis">GDPR Compilance</li>
                            <li className="lis">Security</li>
                            <li className="lis">Status</li>
                            <li className="lis">Mobile App</li>

                        </ul>
                    </div>

                    <div className="resources">
                        <h2 className="head">Resources</h2>
                        <ul>
                            <li className="lis">Marketing Library</li>
                            <li className="lis">Free Marketing Tools</li>
                            <li className="lis">Marketing Glossary</li>
                            <li className="lis">Integrations Directory</li>
                        </ul>
                    </div>
                    <div className="community">
                        <h2 className="head">Community</h2>
                        <ul>
                            <li className="lis">Agencies & Freelancers</li>
                            <li className="lis">Developers</li>
                            <li className="lis">Events</li>
                        </ul>

                    </div>

                    <div className="company">
                        <h2 className="head">Company</h2>
                        <ul>
                            <li className="lis">Our Story</li>
                            <li className="lis">Newsroom</li>
                            <li className="lis">Give Where You Live</li>
                            <li className="lis">Annual Report</li>
                            <li className="lis">Career</li>
                            <li className="lis">Accesssibility</li>
                        </ul>

                    </div>
                    <div className="help">
                        <h2 className="head">Help</h2>
                        <ul>
                            <li className="lis">Newsroom</li>
                            <li className="lis">Hire an Expert</li>
                            <li className="lis">Help Center</li>
                            <li className="lis">Career</li>
                            <li className="lis">Talk to Sales</li>
                        </ul>

                    </div>
                    <div className="mailPanda-content">
                        <div>
                            <h3 className="head">MailPanda Presents</h3>
                            <p>Films, podcasts, and original series that celebrate the entrepreneurial spirit </p>
                            <a>Check it out</a>
                        </div>

                        <div>
                            <h3 className="head db">Courier</h3>
                            <p>Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.</p>
                            <a>Learn more</a>
                        </div>


                    </div>
                    

                </div>
                <hr />


                 <div className="footer_lower">
                    <div className="apps">
                        <div className="google">
                        <img src="https://icon-library.com/images/download-our-app-icon/download-our-app-icon-28.jpg" alt="" />
                        </div>
                        <div className="apple">
                        <img src="https://logos-download.com/wp-content/uploads/2016/06/Available_on_the_App_Store_logo.png" alt="" />
                        </div>

                    </div>

                    <div className="social_media">
                        <div>
                        <FacebookIcon />
                        </div>
                        <div><InstagramIcon /> </div>
                        <div>   <TwitterIcon/></div>
                        <div><PinterestIcon/> </div>
                        
                        
                      
                        
                        

                    </div>
                    <p>
                    ©2001-2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. Privacy | Terms 
                    </p>

                </div> 
                
            </div>
            <hr />

        </div>
    </>
}