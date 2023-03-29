import React from 'react'
import facebook from './../../assets/images/icon facebook.png';
import linkedIn from './../../assets/images/icon linkedin.png';
import tweeter from './../../assets/images/icon tweet.png';
import instagram from './../../assets/images/icon ig.png';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <p className='dh'>©2023 Rent 4 Cars</p>
      <div className='redes'>
        <img className='icon' src={facebook} alt='Facebook' />
        <img className='icon' src={linkedIn} alt='LinkedIn' />
        <img className='icon' src={tweeter} alt='Tweeter' />
        <img className='icon' src={instagram} alt='Instagram' />
      </div>
    </footer>
  )
}

export default Footer