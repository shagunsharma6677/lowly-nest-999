import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import mailpanda1 from "../Images/mailpanda1.png"

export default function Navbar() {

  return <>
    <div className="navbar_container">
      <div className="navbar">
        <div className="nav_2">
          <ul className="navbar_tag">
          <div>
              <Link style={{ textDecoration: 'none' }} to="/">
                <li className="li">Home</li>
              </Link>
            </div>

            <div>
              <Link style={{ textDecoration: 'none' }} to="/product">
                <li className="li">Product</li>
              </Link>
            </div>
            <div>
              <Link style={{ textDecoration: 'none' }} to="/inspiration">
                <li className="li">Inspiration</li>
              </Link>
            </div>
            {/* <div>
              <Link style={{ textDecoration: 'none' }} to="pricin">
                <li className="li">Pricing</li>
              </Link>
            </div> */}
          </ul>
        </div>

        <div className="logo">
          <Link style={{ textDecoration: 'none' }} to="/">
            <div className="logo_div">
              <img className="logo_img" src={mailpanda1} alt="logo" />
              <p className="logos">MailPanda</p>
            </div>
          </Link>
        </div>

        <div className="Buttons">
          <div>
            <Link style={{ textDecoration: 'none' }} to="/login">
              <div className="btn_div">
                <button className="button">Login</button>
              </div>
            </Link>
          </div>

          <div>
            <Link style={{ textDecoration: 'none' }} to="/signup">
              <div className="btn_div ">
                <button className="button color">Signup</button>
              </div>

            </Link>
          </div>
        </div>

      </div>

    </div>



  </>
}