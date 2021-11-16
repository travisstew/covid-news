import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import '../../src/index.css'

function Footer() {
  return (
    <>
       <section className="footer">
          <div className="social">
              <a href="/"><FaInstagram/></a>
              <a href="/"><FaTwitter/></a>
              <a href="/"><FaFacebook/></a>
              <a href="/"><FaFacebook/></a>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright">
            Covid-19 News @ 2021 
          </p>
       </section>
    </>
  )
}

export default Footer



