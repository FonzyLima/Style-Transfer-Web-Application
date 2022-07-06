import React from 'react'
import '../styles/styles.scss';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
const axios = require('axios');
export default function OutputPage() {
  const prev = useLocation();
  
  return (
    <section className='outputsec'>
      <div className='inputContainer'>
        <Link to='/Input' className='back'>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 16H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 7L5 16L14 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back
        </Link>
        <div className='inputComponents'>
          <form>
            <div className='left'>
              <div className='step1'>
                <div className='title'>Output</div>
                <img className='outputimg' alt='output' src="https://tbdigimap.herokuapp.com/get/generated_img"></img>
                <button>Download Image</button>
              </div>
              <div className='step2'>
                
                
              </div>
            </div>
            <div className='right'>
              <div className='selected'>
                <div className='title'>Image Selected</div>
                <div className='selectedimg'>
                  <img src={prev.state.f} alt='upload-file'></img>
                </div>
              </div>
              <div className='style'>
                <div className='title'>Style Image</div>
                <div className='styleimg'>
                  <img src={prev.state.s} alt='style-type'></img>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
