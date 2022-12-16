import "../Footer/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';

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
                            <li>Why mailPanda?</li>
                            <li>Product Updates </li>
                            <li>Email Marketing</li>
                            <li>Websites</li>
                            <li>Tractional Email</li>
                            <li>How We compare</li>
                            <li>GDPR Compilance</li>
                            <li>Security</li>
                            <li>Status</li>
                            <li>Mobile App</li>

                        </ul>
                    </div>

                    <div className="resources">
                        <h2 className="head">Resources</h2>
                        <ul>
                            <li>Marketing Library</li>
                            <li>Free Marketing Tools</li>
                            <li>Marketing Glossary</li>
                            <li>Integrations Directory</li>
                        </ul>
                    </div>
                    <div className="community">
                        <h2 className="head">Community</h2>
                        <ul>
                            <li>Agencies & Freelancers</li>
                            <li>Developers</li>
                            <li>Events</li>
                        </ul>

                    </div>

                    <div className="company">
                        <h2 className="head">Company</h2>
                        <ul>
                            <li>Our Story</li>
                            <li>Newsroom</li>
                            <li>Give Where You Live</li>
                            <li>Annual Report</li>
                            <li>Career</li>
                            <li>Accesssibility</li>
                        </ul>

                    </div>
                    <div className="help">
                        <h2 className="head">Help</h2>
                        <ul>
                            <li>Newsroom</li>
                            <li>Hire an Expert</li>
                            <li>Help Center</li>
                            <li>Career</li>
                            <li>Talk to Sales</li>
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
                        <div>google play</div>
                        <div>apple store</div>

                    </div>

                    <div className="social_media">
                        <FacebookIcon />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />

                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur rerum quod suscipit sequi laboriosam dolorem culpa veritatis cum in nobis quisquam laudantium, dolore non dignissimos placeat excepturi impedit quae aut fugit blanditiis voluptas qui facilis.
                    </p>

                </div> 
                
            </div>
            <hr />

        </div>
    </>
}