import React from 'react'
import '../styles/styles.scss';
import {useLocation} from 'react-router-dom';

export default function OutputPage() {
  const location = useLocation();
  return (
    <section className='outputsec'>
      <div className='inputContainer'>
        <a href='/Input' className='back'>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 16H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 7L5 16L14 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back
        </a>
        <div className='inputComponents'>
          <form>
            <div className='left'>
              <div className='step1'>
                <div className='title'>Output</div>
                <img className='outputimg'></img>
                <button>Download Image</button>
              </div>
              <div className='step2'>
                
                
              </div>
            </div>
            <div className='right'>
              <div className='selected'>
                <div className='title'>Image Selected</div>
                <div className='selectedimg'>
                  <img src={location.state.f}></img>
                </div>
              </div>
              <div className='style'>
                <div className='title'>Style Image</div>
                <div className='styleimg'>
                  <img src={location.state.s}></img>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
