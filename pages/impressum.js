import Image from 'next/image'
import React from 'react'
import logo from "../public/assist/image/logo-dhn.digital.webp"
import Link from 'next/link'

const impressum = () => {
    const IMPRESSUM_DATA = [ "IMPRESSUM", "DHN Digital UG (haftungsbeschränkt)","Kontaktadresse:",
        "Friedrich-Heddies-Tetens-Straße 9", "25836 Garding",
        "Registernummer: HRB 15611 FL Amtsgericht 24937 Flensburg","Telefon 0173 / 4086041",
        "Email: dhn.agentur@gmail.com","Verantwortliche Geschäftsführer: Hauke Kay Pleß, Djark Andresen"

     ]
  return (
    <div>
            <section className="header-container" style={{boxShadow:" 0px 4px 4px 0px #00000040"}} >
        <div className="spacer">
          <header className="header flex" style={{ position: 'relative' }}>
            <div>
              <Link href="/">
              <Image src={logo} alt="Logo" className="logo" width={170} height={48} />
              </Link>
            </div>
            <div className="header-btn-container">
              <button className="btn-secondary1 login-button">Log in</button>
              <Link href={"/"}>
              
              <button  className="btn-primary">Contact Us</button>
              </Link>

              {/* <div ref={menuRef}>
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
              </div> */}

            </div>
          </header>
        </div>

      </section>
        
        <div className='spacer' style={{height:'84vh'}}>
            <div style={{padding:'60px 30px 60px 30px' }}>
                {IMPRESSUM_DATA.map((e) => {
                    return(
                            <p style={{fontSize:'14px' , fontWeight:'500' , marginBottom:'24px', color:'#4A4A4A'}}>{e}</p>
                    )
                })}

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
      
    </div>
  )
}

export default impressum
