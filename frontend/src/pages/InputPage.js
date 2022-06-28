import React from 'react'
import '../styles/styles.scss';

export default function InputPage() {
  return (
    <section className='inputsec'>
      <div className='inputContainer'>
        <a href='/' className='back'>
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
                <div className='title'>Step 1</div>
                <div className='action'>Upload Image</div>
                <input type="file" />
              </div>
              <div className='step2'>
                <div className='title'>Step 2</div>
                <div className='action'>Choose a style</div>
                <div className='row'>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style1" />
                    <div className="image image1"></div>
                  </label>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style2" />
                    <div className="image image2"></div>
                  </label>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style3" />
                    <div className="image image3"></div>
                  </label>
                </div>
                <div className='row'>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style4" />
                    <div className="image image4"></div>
                  </label>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style5" />
                    <div className="image image5"></div>
                  </label>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style6" />
                    <div className="image image6"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='selected'>
                <div className='title'>Image Selected</div>
                <div className='selectedimg'>
                  <img src=''></img>
                </div>
              </div>
              <div className='style'>
                <div className='title'>Style Image</div>
                <div className='styleimg'>
                  <img src=''></img>
                </div>
              </div>
              <input type='submit'/>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
