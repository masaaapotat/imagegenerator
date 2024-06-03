import React from 'react';
import './ImageGenerator.css';
import default_image from '../Assets/default_image.svg';

const ImageGenerator = () => {
  // Define an array of prompt examples
  const promptExamples = [
    "A peaceful sunset over the mountains",
    "A futuristic cityscape with flying cars",
    "A magical forest with fairies and unicorns",
  ];

  // Function to handle click on prompt example
  const handlePromptClick = (prompt) => {
    // Logic to handle the click, such as setting the prompt text in the search input field
    console.log("Clicked on prompt:", prompt);
  };

  return (
    <div className='ai-image-generator'>
      <div className='header'>AI <span>ImageGenerator</span></div>
      <div className='image-loading'></div>
      <div className='image'>
        <img src={default_image} alt=''/>
      </div>
      {/* Prompt examples displayed outside the search box */}
      <div className="prompt-examples">
        <p>Prompt Examples:</p>
        <div className="example-buttons">
          {promptExamples.map((example, index) => (
            <button key={index} onClick={() => handlePromptClick(example)}>{example}</button>
          ))}
        </div>
      </div>
      <div className='search-box'>
        <input type='text' className='search-input' placeholder='Describe what you want the AI to create'/>
        <div className="generate-button">Generate</div>
      </div>
    </div>
  );
}

export default ImageGenerator;
