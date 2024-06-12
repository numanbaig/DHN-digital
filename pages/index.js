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
import { useEffect, useRef, useState } from "react";
import Slideshow from "./Components/Slideshow";
import DocumentSlider from "./Components/DocumentSlider";
import StepsSlider from "./Components/StepsSlider";
import LottieAnimation from "./Components/LottieAnimation";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";
import steps1 from "../public/assist/image/6steps1.png"
import steps2 from "../public/assist/image/6steps2.png"
import steps3 from "../public/assist/image/6steps3.png"
import steps4 from "../public/assist/image/6steps4.png"
import steps5 from "../public/assist/image/6steps5.png"
import steps6 from "../public/assist/image/6steps6.png"
import beratungIcon from "../public/assist/image/meeting.png"
import workshopIcon from "../public/assist/image/Workshop.png"
import chatbotsIcon from "../public/assist/image/messages.png"




const SIMPLE_STEPS = [
  {
    title: 'Ideenfindung',
    icon: steps1,
    dec: 'Zusammen <span style="color:#407BFF">analysieren  </span>wir Ihre Aufgaben und Prozesse und finden Anwendungsfälle mit echtem Mehrwehrt'
  },
  {
    title: 'Lösungskonzept',
    icon: steps2,
    dec: 'Wir erarbeiten <span style="color:#407BFF"> gemeinsam  Lösungsideen </span> für die Anwendungsfälle.'
  },
  {
    title: 'Prototyp & PoC',
    icon: steps3,
    dec: 'Mit schnellen  <span style="color:#407BFF"> Prototypen und Proof </span> of Concepts prüfen wir die Lösungsideen.'
  },
  {
    title: 'MVP & Tests',
    icon: steps4,
    dec: 'Vielversprechende <span style="color:#407BFF"> Prototypen entwickeln </span> wir zügig zu funktionierenden, echten Lösungen.'
  },
  {
    title: 'Inbetriebnahme',
    icon: steps5,
    dec: 'Gemeinsam <span style="color:#407BFF"> integrieren wir die fertige </span> Lösung in die bestehenden Abläufe und Prozesse.'
  },
  {
    title: 'Skalierung',
    icon: steps6,
    dec: 'Erfolgreiche Lösungen  bringen wir in die <span style="color:#407BFF">  breite Anwendung. </span>'
  }
]
const WORKSHOPS = [
  {
    heading: 'Beratung',
    title: 'Wir helfen Ihnen dabei, echten Mehrwert aus dem KI-Hype zu ziehen.<span style="color:#407BFF"> Gemeinsam finden wir die besten Einsatzmöglichkeiten für KI in Ihrem Unternehmen, </span> um Sie auch weiterhin wettbewerbsfähig in der Zukunft aufzustellen.',
    icon: beratungIcon

  },
  {
    heading: 'KI Workshops',
    title: 'Wir klären Ihr Team über <span style="color:#407BFF"> Chancen, Risiken und den richtigen Umgang mit KI-Technologien </span> auf und verschaffen Ihnen einen ganzheitlichen Überblick. Live und mit individuellen, praxisbezogenen Beispielen schulen wir Ihre Mitarbeiter in der direkten Anwendung von KI-Lösungen im Arbeitsalltag.',
    icon: workshopIcon

  }, {
    heading: 'Individuelle Chatbots',
    title: 'Erleichtern Sie Ihre interne sowie externe Kommunikation und steigern Sie Ihre Produktivität. <span style="color:#407BFF"> Arbeiten Sie effizient mit Ihren eigenen Daten. </span>',
    icon: chatbotsIcon

  }
]

export default function Home() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    message: Yup.string().required('Required'),
  });
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [reCaptchaValue, setReCaptchaValue] = useState('')
  const [loading, setLoading] = useState(false)
  const menuRef = useState(null)
  const faqsRef = useRef(null);
  const aiRef = useRef(null);
  const contactRef = useRef(null)
  const recaptcha = useRef()
  
  const SITE_KEY = "6Lfrb_EpAAAAAB8qB_GEpn8hvbZRZY1fW0zS6ol3"


  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleCancelClick = (event) => {
    event.stopPropagation();
    setMenuOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false)
  };

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
      }, 0);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);
  const onSubmit = async (values, { resetForm }) => {

    // const captchaValue = recaptcha.current.getValue()
    setLoading(true)
    const captchaValue = reCaptchaValue;
    if (!captchaValue) {
      alert('Please verify the reCAPTCHA!')
    } else {
      const res = await fetch('/api/verifyCaptcha', {
        method: 'POST',
        body: JSON.stringify({ captchaValue }),
        headers: {
          'content-type': 'application/json',
        },
      })
      const data = await res.json()
      if (data.success) {
        // make form submission

        recaptcha.current.reset()
        try {
          const response = await fetch('/api/handelForm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
          setFormSubmitted(true);
          alert('Form submission successful!')
          resetForm()
        } catch (error) {
          console.error('An error occurred:', error);
        }
      } else {
        alert('Captcha not verified')
      }
      setLoading(false)

    };
  };


  // const SITE_KEY="6Lfrb_EpAAAAAB8qB_GEpn8hvbZRZY1fW0zS6ol3"
  const onChange = (value) => {
    setReCaptchaValue(value)
  }


  return (
    <>
      <section className="header-container" >
        <div className="spacer">
          <header className="header flex" style={{ position: 'relative' }}>
            <div>
              <Image src={logo} alt="Logo" className="logo" width={170} height={48} />
            </div>
            <div className="header-btn-container">
              <button className="btn-secondary1 login-button">Log in</button>
              <button onClick={() => scrollToSection(contactRef)} className="btn-primary">Contact Us</button>

              <div ref={menuRef}>
                {!menuOpen ? (
                  <Image
                    onClick={handleMenuClick}
                    height={24}
                    width={24}
                    style={{ marginLeft: '14px', cursor: 'pointer' }}
                    src={menuIcon}
                    alt="Menu Button"
                  />
                ) : (
                  <Image
                    onClick={handleCancelClick}
                    height={20}
                    width={20}
                    style={{ marginLeft: '14px', cursor: 'pointer' }}
                    src={cancelIcon}
                    alt="Cancel Button"
                  />
                )}
              </div>

            </div>
          </header>
        </div>

      </section>
      <section className="section1" id="section">
        <div className="sec1-container spacer">
          <div style={{ maxWidth: '658px' }}>
            <h1 className="heading" style={{ color: '#fff' }}>
              Automatisierung für KMU mit individuellen KI-Lösungen.
            </h1>
            <p className="paragraph" style={{ color: '#fff' }}>
              Der deutsche Mittelstand ist das Rückgrat unserer Gesellschaft und steht mehr denn je vor der Herausforderung, effizient zu arbeiten. Wir haben uns zusammengeschlossen und helfen KMU aus Überzeugung dabei, Prozesse mit individuellen KI-Lösungen zu automatisieren.
            </p>
            <div className="sec1-button">
              <Image className="left-arrow" src={arrow1} alt="Arrow Left" width={50} height={50} />
              <Image className="left-arrow-mob" src={arrow} alt="Arrow Left" width={30} height={30} />

              Jetzt unverbindlich Kontakt aufnehmen
            </div>
          </div>
          <LottieAnimation />
        </div>
      </section>
      <div className="background">
        <section ref={aiRef} className="sec2-container spacer">
          <div className="sec2-inner-container">
            <div className="sec2-card">
              <h1 className="heading">Automatisierung durch KI</h1>
              <p className="paragraph" style={{ paddingTop: '30px', paddingBottom: '16px' }}>
                Zeit ist Geld.<br /> Automatisieren Sie Ihre Prozesse und sparen Sie beides.
              </p>
              <p className="sab-paragraph">
                Wir entwickeln Lösungen für ihre Aufgaben, die wie ein intelligenter Assistent arbeiten. Dieser Assistent kann z.B. große Datenmengen aus verschiedenen Dokumenten lesen und in die gewünschten Ergebnisse weiterverarbeiten. Arbeit, die normalerweise Stunden dauert, kann so in Sekundenschnelle erledigt werden.
                Automatisieren Sie Ihre Arbeitsabläufe, sparen Sie Zeit und Geld und konzentrieren Sie sich auf Ihre wichtigsten Aufgaben.

              </p>
              <div className="sec2-bnt-container">
                <button onClick={() => scrollToSection(contactRef)} className="btn-secondary1">Kontaktieren Sie uns </button>
                <button onClick={() => scrollToSection(contactRef)} className="btn-primary">Demo buchen</button>
              </div>
            </div>
            <Slideshow />
          </div>
          <div className="sec2-buttons flex">
            <div className="slide-item">Lieferdokumente</div>
            <div className="slide-item">Rechnungen</div>
            <div className="slide-item">Bestellungen</div>
            <div className="slide-item">Verträge</div>
            <div className="slide-item">…und vieles mehr</div>
          </div>
          <DocumentSlider />
        </section>
        <section className="section3 spacer">
          <h1 className="heading text-center">6 Einfache Schritte</h1>
          <p className="paragraph text-center" style={{ paddingTop: '8px' }}>6 Einfache Schritte von der Idee zur Realität. Gemeinsam machen wir Künstliche Intelligenz nutzbar und schaffen echten Mehrwert.</p>
          <div className="section3-container grid3">
            {SIMPLE_STEPS.map((step, index) => (
              <div className="section3-cards" key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Image src={step.icon} width={30} height={30} />
                  <div className="section3-button">{index + 1}</div>
                </div>
                <h1>{step.title}</h1>
                <p className="paragraph"
                  dangerouslySetInnerHTML={{ __html: step.dec }}
                />

                <div className="section3-button-container ">
                  {/* <button className="btn-secondary">Lorem ipsum</button>
                  <button className="btn-secondary">Lorem ipsum</button>
                  <button className="btn-secondary">Lorem ipsum</button> */}
                </div>
              </div>
            ))}
          </div>
          <StepsSlider />

        </section>

        <section className="section4 spacer">
          <h1 className="heading text-center">KI Beratung, Workshops & Individuelle Chatbots</h1>
          <p className="paragraph text-center" style={{ paddingTop: '8px' }}>Ihr KI-Partner für weitere Potenziale </p>

          <div className="section4-container grid3">
            {WORKSHOPS.map((items, index) => (
              <div className="section4-cards shadow" key={index}>
                <div > <Image src={items.icon} width={30} height={30} /> </div>
                <h2 className="heading" style={{ fontSize: '30px', marginTop: "20px" }}>{items.heading}</h2>
                <p className="sab-paragraph" dangerouslySetInnerHTML={{ __html: items.title }} />

              </div>
            ))}
          </div>
        </section>
        <section class="section5 spacer">
          <h1 class="heading text-center">Unsere weitere Leistungen</h1>
          <p class="paragraph text-center" style={{ paddingTop: '8px' }}>Web Design, Web Development, UI & UX Design
          </p>
          <div class="section5-container grid3">

            <div class="section5-card" style={cardStyle}>
              <div className="overlay">

              </div>
              <div class="section5-button">
                Web Design
              </div>

              <div className="show-hover">
                <p style={{ fontSize: '28px', fontWeight: 700, color: '#fff', paddingBottom: '8px' }}> Web Design</p>
                <p style={{ fontSize: '16px', fontWeight: 400, color: '#fff', width: '291px' }}>Konzeption & Planung, Wireframing, Design-Entwurf, Responsive Design </p>
              </div>
            </div>
            <div class="section5-card" style={cardStyle2}>
              <div class="section5-button">
                Web Development
              </div>
              <div className="show-hover">
                <p style={{ fontSize: '28px', fontWeight: 700, color: '#fff', paddingBottom: '8px' }}> Web Development</p>
                <p style={{ fontSize: '16px', fontWeight: 400, color: '#fff', width: '291px' }}> Frontend- & Backend-Entwicklung, Content-Management-Systeme (CMS), SEO-Optimierung, Security & Datenschutz, Leistungsoptimierung, Wartung & Updates </p>
              </div>
            </div>
            <div class="section5-card" style={cardStyle1}>
              <div class="section5-button">
                UI &UX Design
              </div>

              <div className="show-hover">
                <p style={{ fontSize: '28px', fontWeight: 700, color: '#fff', paddingBottom: '8px' }}> UI &UX Design</p>
                <p style={{ fontSize: '16px', fontWeight: 400, color: '#fff', width: "251px" }}>Benutzererfahrung (UX), Benutzeroberfläche (UI), Grafikdesign und Multimedia-Elemente, Prototypin </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section6 spacer">
          <h1 className="heading text-center">Wir helfen KMU aus Überzeugung</h1>
          <p className="sab-paragraph text-center" style={{ paddingTop: '6px' }}>
            Als zwei junge und digital affine Köpfe aus Norddeutschland stehen wir dem deutschen Mittelstand im digitalen Zeitalter mit Rat und Tat zur Seite. Dies gelingt uns mit unserer Expertise und einem umfangreichen Netzwerk an digitalen Spezialisten.
          </p>
          <div className="section6-container ">
            {[
              {
                name: 'Nils Espey',
                title: 'Geschäftsführer',
                dec: "Ihr Ansprechpartner & Berater für alles rund um Ihre Projekte. Ein echter Macher!",
                image: hauke
              },
              
              {
                name: 'Hauke ​​Kay Pleß',
                title: 'Geschäftsführer',
                dec: 'Ihr pragmatischer Lösungsarchitekt im Hintergrund. Ein echter Stratege!',
                image: dJark
              },
            ].map((person, index) => (
              <div className="section6-card" key={index}>
                <p className="paragraph" style={{ fontWeight: 700 }}>{person.name}</p>
                <p className="sab-paragraph" style={{ fontSize: '16px' }}>{person.title}</p>
                <p className="sab-paragraph" style={{ paddingTop: '10px' }}>
                  {person.dec}
                </p>
                <div style={{ paddingTop: '47px' }}>
                  <Image src={person.image} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section ref={faqsRef} class="seaction-FAQs spacer">
          <h1 class="heading text-center"> FAQs</h1>
          <p class="sab-paragraph text-center" style={{ fontSize: '34px', paddingTop: '2px' }}>Frequently asked questions</p>

          <div class="FAQs-Container grid3">
            <div class=" FAQs-card shadow">
              <div>
                <p class="sab-paragraph" style={{ color: '#567bd9', fontWeight: '700' }}> What does working with you start?</p>
              </div>
              <div class="sab-paragraph faq-text">
                <p style={{ paddingTop: "6px" }}>
                  Personal contact is particularly important to us. Therefore, we first explore your potential and the
                  possibilities for collaboration in a detailed discussion. Please contact us if you would like to have a
                  non-binding initial consultation to find out whether we are a good fit and how we could help you. Should
                  a collaboration arise,personal contact and uncomplicated, pragmatic collaboration are the top priority.
                </p>
              </div>

            </div>
            <div class="FAQs-card shadow">
              <p class="sab-paragraph" style={{ color: '#567bd9', fontWeight: '700' }}> What benefits do I get from working with
                you? </p>
              <ul class="sab-paragraph faq-text" style={{ padding: "6px 15px 0px 15px" }}>
                <li class="sab-paragraph-li">Personal support from start to finish</li>
                <li class="sab-paragraph-li"> Trusting, long-term relationship</li>
                <li class="sab-paragraph-li">Constant availability – We are available at any time for urgent concerns and problems</li>
                <li class="sab-paragraph-li">Fair, transparent costs and services</li>

              </ul>
            </div>
            <div class="FAQs-card shadow">
              <p class="sab-paragraph" style={{ color: '#567bd9', fontWeight: '700' }}> Can you do everything yourself?</p>
              <p class="sab-paragraph faq-text" style={{ paddingTop: "6px" }}>
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
              <p class="sab-paragraph faq-text" style={{ color: '#C9C9C9', marginBottom: "60px" }} > Please leave us your contact details for
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
            <div ref={contactRef}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="grid2 froms-container">
                      <div>
                        <label className="contect-label">First Name</label><br />
                        <Field className="contect-input" type="text" id="firstName" name="firstName" />
                        <ErrorMessage className="error-message" name="firstName" component="div" />
                      </div>
                      <div>
                        <label className="contect-label">Last Name</label><br />
                        <Field className="contect-input" type="text" id="lastName" name="lastName" />
                        <ErrorMessage className="error-message" name="lastName" component="div" />
                      </div>
                      <div>
                        <label className="contect-label">Email</label><br />
                        <Field className="contect-input" type="text" id="email" name="email" />
                        <ErrorMessage className="error-message" name="email" component="div" />
                      </div>
                      <div>
                        <label className="contect-label">Phone Number</label><br />
                        <Field className="contect-input" type="text" id="phoneNumber" name="phoneNumber" />
                        <ErrorMessage className="error-message" name="phoneNumber" component="div" />
                      </div>
                    </div>
                    <div style={{ marginTop: '40px', width: '100%' }}>
                      <label className="contect-label">Message</label><br />
                      <Field className="contect-input" type="text" id="message" name="message" style={{ maxWidth: "100%" }} />
                      <ErrorMessage className="error-message" name="message" component="div" />
                    </div>
                    <div style={{ marginTop: '40px' }}>

                      <ReCAPTCHA
                        sitekey={SITE_KEY}
                        onChange={onChange}
                        ref={recaptcha}
                      />
                    </div>

                    <div className="contact-btn">
                      <button type="submit"
                      //  disabled={ loading} 
                      //  style={{
                      //    backgroundColor: ( loading) ? '#EBEBE4' : '#567BD9'
                      //  }}
                      >
                        Send Message
                      </button>
                    </div>

                  </Form>
                )}
              </Formik>
            </div>
          </div>

        </section>
        <div style={{ height: '125px' }}>

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
      {menuOpen && <div className="menu-container" ref={menuRef}>
        <ul>
          <li>Home</li>
          <li onClick={() => scrollToSection(aiRef)}>Automatic (AI)</li>
          <li>Advice</li>
          <li>Website</li>
          <li>SEO & SEA</li>
          <li>Web Analytics</li>
          <li onClick={() => scrollToSection(faqsRef)}>FAQs</li>
        </ul>



      </div>}






    </>
  );
}
