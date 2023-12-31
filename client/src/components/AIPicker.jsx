import React from 'react'

import CustomButton from './CustomButton'


const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea className='aipicker-textarea' placeholder='AI Doesnt Work Unfortunately.. Please use a custom image from your PC using the icon above' rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
    <div className='flex flex-wrap gap-3'>
    </div>
    </div>
  )
}

export default AIPicker