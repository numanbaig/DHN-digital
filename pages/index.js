import Image from "next/image";
import logo from "../public/assist/image/logo-dhn.digital.png"
import arrow from "../public/assist/image/arrow-left1.svg"
import arrow1 from "../public/assist/image/arrow-left.svg"

import phone from "../public/assist/image/bxs_phone-call.png"
import cancelIcon from "../public/assist/image/cancel.png"
import dJark from "../public/assist/image/djark.png"
import hauke from "../public/assist/image/hauke.png"
import emailIcon from "../public/assist/image/ic_sharp-email.png"
import menuIcon from "../public/assist/image/tablet icons.png"
import locationIcon from "../public/assist/image/Vector.png"
import webDesign from "../public/assist/image/WebDesign.png"
import webDevelopment from "../public/assist/image/WebDevelopment.png"
import uxUiDesign from "../public/assist/image/UI&UXDesign.png"
import { useState } from "react";
import Slideshow from "./Components/Slideshow";
import DocumentSlider from "./Components/DocumentSlider";
import StepsSlider from "./Components/StepsSlider";
import LottieAnimation from "./Components/LottieAnimation";



export default function Home() {
  const cardStyle = {
    backgroundImage: `url(${webDesign.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'

  };
  const cardStyle1 = {
    backgroundImage: `url(${uxUiDesign.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'

  }; const cardStyle2 = {
    backgroundImage: `url(${webDevelopment.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'

  };
  const [menuOpen, setMenuOpen] = useState(false)
  console.log(menuOpen,"asdas")
  return (
    <>
      <section class="header-section">
      
        <div className="spacer">
          <header className="header flex" style={{ position: 'relative' }}>
            <div>
              <Image src={logo} alt="Logo" className="logo" width={"170px"} height={80} />
            </div>
            <div className="header-btn-container">
              <button className="btn-secondary login-button">Log in</button>
              <button className="btn-primary">Contact Us</button>
             
                  <Image onClick={() => {setMenuOpen(!menuOpen)}} height={24} width={24} style={{ marginLeft: '14px' }} src={ menuOpen ? cancelIcon :menuIcon} alt="Menu Button" />
                
            </div>
          </header>
        </div>
      </section>
      <section className="section1" id="section">
        <div className="sec1-container spacer">
          <div>
            <h1 className="heading" style={{ color: '#fff' }}>
              Digitalization for the self-<br />employed and SEMs.
            </h1>
            <p className="paragraph" style={{ color: '#fff' }}>
              Effizienz mit individuellen KI Lösungen" and then the normal text Deutsche Unternehmen stehen mehr denn je vor der Herausforderung,
              effizienter zu werden. Das erreichen wir durch Automatisierungen mit geeigneten KI Lösungen.
            </p>
            <div className="sec1-button">
              <Image className="left-arrow" src={arrow1} alt="Arrow Left" width={50} height={50} />
              <Image className="left-arrow-mob" src={arrow} alt="Arrow Left" width={30} height={30} />

              Contact is now without obligation
            </div>
          </div>
          <LottieAnimation/>
        </div>
      </section>
      <div className="background">
      <section className="sec2-container spacer">
        <div className="sec2-inner-container">
          <div>
            <h1 className="heading">Automation (AI)</h1>
            <p className="paragraph" style={{ paddingTop: '30px', paddingBottom: '16px' }}>
              Time is money. <br />Automate your processes and save both.
            </p>
            <p className="sab-paragraph">
              DHN provides an Intelligent Document Processing solution that converts imported data from various document types into the desired results.
              Thanks to AI technology, you are able to extract all important data from your documents and process it according to your purpose. This allows
              you to automate your workflows and save both time and costs. This allows you to fully focus on your core tasks.
            </p>
            <div className="sec2-bnt-container">
              <button className="btn-secondary">Contact Us</button>
              <button className="btn-primary">Book a demo</button>
            </div>
          </div>
          <Slideshow/>
        </div>
        <div className="sec2-buttons flex">
          <div className="slide-item">Delivery Documents</div>
          <div className="slide-item">Bills</div>
          <div className="slide-item">Orders</div>
          <div className="slide-item">Contracts</div>
          <div className="slide-item">And much more</div>
        </div>
        <DocumentSlider/>
      </section>
      <section className="section3 spacer">
        <h1 className="heading text-center">6 Simple Steps</h1>
        <p className="paragraph text-center" style={{ paddingTop: '8px' }}>Six simple steps to find your next star performer!</p>
        <div className="section3-container grid3">
          {['Ideation', 'Solution Concept', 'Prototype & Poc', 'MVP & Testing', 'Installations', 'Scaling'].map((step, index) => (
            <div className="section3-cards" key={index}>
              <div className="section3-button">{index + 1}</div>
              <h1>{step}</h1>
              <p className="paragraph">
                Ideation sparks creativity, <span style={{ color: '#567bd9' }}>driving innovation in</span> <span style={{ color: '#FF8310' }}>problem-solving</span> and product development. Ideation sparks creativity, driving innovation in problem-solving and product development.
              </p>
              <div className="section3-button-container ">
                <button className="btn-secondary">Lorem ipsum</button>
                <button className="btn-secondary">Lorem ipsum</button>
                <button className="btn-secondary">Lorem ipsum</button>
              </div>
            </div>
          ))}
        </div>
      <StepsSlider/>

      </section>

      <section className="section4 spacer">
        <h1 className="heading text-center">AI Workshops & Individual Chatbots</h1>
        <div className="section4-container grid2">
          {['AI Workshop', 'Individual chatbots'].map((workshop, index) => (
            <div className="section4-cards shadow" key={index}>
              <h2 className="heading">{workshop}</h2>
              <p className="sab-paragraph">Increase efficiency and make internal/external communication much easier</p>
              <p className="sab-paragraph" style={{ fontWeight: 700, paddingTop: '18px' }}>Work efficiently with your own data</p>
              <p className="sab-paragraph">DHN provides an Intelligent Document Processing solution that converts imported data from various document types into the desired results.</p>
            </div>
          ))}
        </div>
      </section>
      <section class="section5 spacer">
        <h1 class="heading text-center">Services Offered</h1>
        <p class="paragraph text-center" style={{ paddingTop: '8px' }}>Web Design, Web Development, UI & UX Design
        </p>
        <div class="section5-container grid3">

          <div class="section5-card" style={cardStyle}>
            <div class="section5-button">
              Web Design
            </div>
          </div>
          <div class="section5-card" style={cardStyle1}>
            <div class="section5-button">
              Web Development
            </div>
          </div>
          <div class="section5-card" style={cardStyle2}>
            <div class="section5-button">
              UI &UX Design
            </div>
          </div>
        </div>
      </section>

      <section className="section6 spacer">
        <h1 className="heading text-center">We help SMEs out of conviction</h1>
        <p className="sab-paragraph text-center" style={{ paddingTop: '6px' }}>
          As two young and digitally savvy minds from Northern Germany, we have set ourselves the goal of providing German medium-sized businesses with advice and support in the digital age. We achieve this with our expertise and an extensive network of digital specialists.
        </p>
        <div className="section6-container grid2">
          {[
            { name: 'Djark Andresen', title: 'Managing Director', image: dJark },
            { name: 'Hauke ​​Kay Pleß', title: 'Managing Director', image: hauke },
          ].map((person, index) => (
            <div className="section6-card" key={index}>
              <p className="paragraph" style={{ fontWeight: 700 }}>{person.name}</p>
              <p className="sab-paragraph" style={{ fontSize: '16px' }}>{person.title}</p>
              <p className="sab-paragraph" style={{ paddingTop: '30px' }}>
                DHN provides an Intelligent Document Processing solution that converts imported data from various document types into the desired results. Thanks to AI technology, you are able to extract all important data from your documents and process it according to your purpose.
              </p>
              <div style={{ paddingTop: '47px' }}>
                <Image src={person.image} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section class="seaction-FAQs spacer">
        <h1 class="heading text-center"> FAQs</h1>
        <p class="sab-paragraph text-center" style={{ fontSize: '34px', paddingTop: '2px' }}>Frequently asked questions</p>

        <div class="FAQs-Container grid3">
          <div class=" FAQs-card shadow">
            <p class="sab-paragraph" style={{ color: '#567bd9', fontWeight: '700' }}> What does working with you start?</p>
            <p class="sab-paragraph" style={{ fontSize: "16px", paddingTop: "6px" }}>
              Personal contact is particularly important to us. Therefore, we first explore your potential and the
              possibilities for collaboration in a detailed discussion. Please contact us if you would like to have a
              non-binding initial consultation to find out whether we are a good fit and how we could help you. Should
              a collaboration arise,personal contact and uncomplicated, pragmatic collaboration are the top priority.
            </p>

          </div>
          <div class="FAQs-card shadow">
            <p class="sab-paragraph" style={{ color: '#567bd9', fontWeight: '700' }}> What benefits do I get from working with
              you? </p>
            <ul class="sab-paragraph" style={{ fontSize: "16px", padding: "6px 15px 0px 15px" }}>
              <li class="sab-paragraph-li">Personal support from start to finish</li>
              <li class="sab-paragraph-li"> Trusting, long-term relationship</li>
              <li class="sab-paragraph-li">Constant availability – We are available at any time for urgent concerns and problems</li>
              <li class="sab-paragraph-li">Fair, transparent costs and services</li>

            </ul>
          </div>
          <div class="FAQs-card shadow">
            <p class="sab-paragraph" style={{ color: '#567bd9', fontWeight: '700' }}> Can you do everything yourself?</p>
            <p class="sab-paragraph" style={{ fontSize: "16px", paddingTop: "6px" }}>
              No. However, we bring our full expertise to every project. To ensure the best possible performance, we
              also work with partners who are absolute specialists in their fieldand whom we can completely trust.
              This way we can achieve the optimal result for you
            </p>
          </div>

        </div>


      </section>
      <section class="contect-section spacer ">
        <div class="shadow contect-container" style={{ padding: "19px" }}>
          <div class="contect-card">
            <h2 class="heading" style={{ fontSize: '34px', color: "#fff", paddingBottom: '6px' }} >Contact Information </h2>
            <p class="sab-paragraph" style={{ fontSize: "16px", color: '#C9C9C9' ,marginBottom:"60px"}} > Please leave us your contact details for
              a
              non-binding initial consultation.</p>
            <div styles={{ marginTop: '74px' }}>
              <div class="flex1">
                <Image src="/assist/image/bxs_phone-call.png" width={20} height={20} />
                <p class="content-info">+491734086041</p>
              </div>
              <div class="flex1">
                <Image src="/assist/image/ic_sharp-email.png" width={20} height={20} />
                <p class="content-info">info@dhn.digital</p>
              </div>
              <div class="flex1">
                <Image src="/assist/image/Vector.png" width={13} height={17} />
                <p class="content-info">------------</p>
              </div>

            </div>
          </div>
          <div >
            <form>
              <div class="grid2 froms-container">
                <div >
                  <label class="contect-label"> First Name</label><br />
                  <input class="contect-input" type="text" id="firstName" name="firstName" />

                </div>
                <div >
                  <label class="contect-label"> Last Name</label> <br />
                  <input class="contect-input" type="text" id="lastName" name="lastName" />

                </div>
                <div >
                  <label class="contect-label"> Email</label> <br />
                  <input class="contect-input" type="text" id="email" name="email" />

                </div>
                <div >
                  <label class="contect-label"> Phone Number</label><br />
                  <input class="contect-input" type="text" id="phoneNumber" name="phoneNumber" />

                </div>
              </div>
              <div style={{ marginTop: '40px', width: '100%' }} >
                <label class="contect-label"> Message</label><br />
                <input class="contect-input"  type="text" placeholder="Write your message" id="message" style={{maxWidth:"100%"}}/>
              </div>
              <div class="contact-btn"  >
                <button>Send Message </button>
              </div>
            </form>
          </div>
        </div>

      </section>
      <div style={{height:'125px'}}>

      </div>
      </div>
      <footer class="footer">
        <div class=" footer-container">
          <div>
            <p class="sab-paragraph" style={{ color: '#FFFF' }}> Copyright © 2024 dhn.digital</p>
          </div>
          <div style={{ display: 'flex', gap: '41px' }} >
            <p class="sab-paragraph" style={{ color: '#FFFF' }}> Data protection</p>
            <p class="sab-paragraph" style={{ color: '#FFFF' }}> Imprint</p>


          </div>
        </div>

      </footer>
    { menuOpen && <div  className="menu-container">
          <ul>
            <li>Home</li>
            <li>Automatic (AI)</li>
            <li>Advice</li>
            <li>Website</li>
            <li>SEO & SEA</li>
            <li>Web Analytics</li>
            <li>FAQs</li>


          </ul>


        </div>}
      





    </>
  );
}
