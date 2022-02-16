import React from 'react'
import '../style/Contact.css'
// import callIcon from './public/images/products/HD-Vegan---Cheddar-block-200g.png'

const Contact = () => {
  return (
    <div className='contactSection' id='contact'>
        <div className='contact__Header'>
            <h1 className='section__Title'>
                <span> Contact</span> Us
            </h1>
        </div>
        <div className='container'>
            <div className='contactGroup'>
                <div className='contact__item__left'>
                    <img src='https://i.ibb.co/ZGwNbyr/logo.png' alt='F__logo' className='F__logo'/>
                    <address>Emmalaan 12 Postbus 143 743 DK Baarn Holland</address>
                </div>
                <div className='contact__item__right'>
                    <p className='section__Title'> Contact Info </p>
                    <ul className='f__social_Link'>
                        <li>
                            <a href='tel:01812217803'>
                                <span>
                                    {/* <img src={callIcon}  /> */}
                                    <i class="uil uil-phone"></i>
                                </span>
                                <span className='plain_text'>Call us</span>
                            </a>
                        </li>
                        <li>
                            <a href='mailto:mahadidev7@gmail.com'>
                                <span>
                                    <i class="uil uil-envelope"></i>
                                </span>
                                <span className='plain_text'>Mail us</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/mahadidev7?tab=repositories' target="_blank">
                                <span>
                                    <i class="uil uil-globe"></i>
                                </span>
                                <span className='plain_text'>Visit us</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact