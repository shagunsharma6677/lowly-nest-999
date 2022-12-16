
import React from "react"
import { Button } from '@chakra-ui/react'
import "../Navbar/Navbar.css"
import mailpanda1 from "../Images/mailpanda1.png"

export default function Navbar() {

  return <>
    <div className="navbar_container">
      <div className="navbar">
        <div className="logo">
          <img src={mailpanda1} alt="logo" />
          <p className="logos">MailPanda</p>

        </div>
        <div>
          <ul className="navbar_tag">
            <li>Home</li>
            <li>Product</li>
            <li>Inspiration</li>
            <li>Articles</li>
            <li>Community</li>
            <li>Help</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="Buttons">
          <Button colorScheme='teal' variant='outline'>
            Login
          </Button>
          <Button colorScheme='yellow' variant='outline'>
            SighUp
          </Button>

        </div>

      </div>

    </div>



  </>
}