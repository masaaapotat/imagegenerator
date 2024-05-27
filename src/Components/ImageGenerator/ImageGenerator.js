import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'

const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
      <div className='header'>Ai <span>ImageGenerator</span></div>
      <div className='image-loading'></div>
      <div className='image'>
        <img src={default_image} alt='image'/>
      </div>
      <div className='search-box'>
        <input type='text' className='search-input' placeholder='Describe what you want the AI to create'/>
        <div className="generate-button">Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator