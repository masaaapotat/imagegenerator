import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'

const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
      <div className='header'>Ai <span>ImageGenerator</span></div>
      <div>Image Loading</div>
      <div className='image'>
        <img src={default_image} alt='image'/>
      </div>
    </div>
  )
}

export default ImageGenerator