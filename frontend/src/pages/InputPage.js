import React from 'react'
import '../styles/styles.scss';
import { useState } from "react";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import {useNavigate} from 'react-router-dom';


function InputPage() {
  const [file, setFile] = useState();
  const [styled, setStyle] = useState();
  const navigate = useNavigate();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleClick(e, name) {
    if(name === 'style1')
    setStyle(img1)
    if(name === 'style2')
    setStyle(img2)
    if(name === 'style3')
    setStyle(img3)
    if(name === 'style4')
    setStyle(img4)
    if(name === 'style5')
    setStyle(img5)
    if(name === 'style6')
    setStyle(img6)
  }

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/Output', {state: {
      s: styled,
      f: file}
    });
  };

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
          <form onSubmit={handleSubmit}>
            <div className='left'>
              <div className='step1'>
                <div className='title'>Step 1</div>
                <div className='action'>Upload Image</div>
                <input type="file" onChange={handleChange} />
              </div>
              <div className='step2'>
                <div className='title'>Step 2</div>
                <div className='action'>Choose a style</div>
                <div className='row'>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style1" onClick={(event) => handleClick(event, 'style1')}/>
                    <div className="image image1"></div>
                  </label>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style2" onClick={(event) => handleClick(event, 'style2')}/>
                    <div className="image image2"></div>
                  </label>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style3" onClick={(event) => handleClick(event, 'style3')}/>
                    <div className="image image3"></div>
                  </label>
                </div>
                <div className='row'>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style4" onClick={(event) => handleClick(event, 'style4')}/>
                    <div className="image image4"></div>
                  </label>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style5" onClick={(event) => handleClick(event, 'style5')}/>
                    <div className="image image5"></div>
                  </label>
                  <label className="radio-img">
                    <input type="radio" name="style" value="style6" onClick={(event) => handleClick(event, 'style6')}/>
                    <div className="image image6"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='selected'>
                <div className='title'>Image Selected</div>
                <div className='selectedimg'>
                  <img src={file} alt='upload-file'></img>
                </div>
              </div>
              <div className='style'>
                <div className='title'>Style Image</div>
                <div className='styleimg'>
                  <img id='styled' src={styled} alt='style-type'></img>
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

export default InputPage;
