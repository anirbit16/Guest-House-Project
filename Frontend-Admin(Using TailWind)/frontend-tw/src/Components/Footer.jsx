import React from "react"
import "./LandingPage.css"
import { RightOutlined } from '@ant-design/icons'

export const footerData = [
  {
    title: "USEFUL LINKS",
    text: [{ list: "Home" }, { list: "About Us" }, { list: "Contact Us" },{ list: "Our Plans" }],
  },
  {
    title: "OTHER SECTIONS",
    text: [{ list: "Terms & Conditions" }, { list: "Privacy Policy" }],
  }
]

const Footer = () => {
   const date = new Date();
   const year = date.getFullYear();
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex' style={{display:'block',marginLeft:'50px'}}>
            <div className='text'>
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo' style={{lineHeight:'15px', fontFamily:'poppins'}}>
              <img src='../images/logo-light.png' alt='' />
              <h2 style={{fontSize:'25px',}}>VUCS Pvt Ltd</h2>
              <p>in Street No. 1111 (Major Arterial Road Mouza) –</p>
              <p>Noapara</p>
              <p>J.L, Plot No. IID/31/1,, NH12, Newtown, Kolkata,</p>
              <p>Phone: +91 9163227342</p>
              <p>Email: connect@vucspvtltd.com</p>

 
            </div>
          </div>

          {footerData.map((val, index) => (
            <div className='box' key={index} style={{fontFamily:'poppins'}}>
              <h3 style={{ color: val.title === "ALL SECTIONS" ? "#006699" : "#fff" }}>{val.title}</h3>
              <ul>
                {val.text.map((item, idx) => (
                  <li key={idx}><RightOutlined style={{color:'yellow' ,paddingRight:'5px'}}/>{item.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© {year} Designed By VUCS Pvt Ltd.</span>
      </div>
    </>
  )
}

export default Footer
