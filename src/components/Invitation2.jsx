import React, { useState } from 'react'

const Invitation2 = ({ person: { img, title, text, question }, control2 }) => {
  const [selectedValue, setSelectedValue] = useState('');



  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    // setSelectedValue('si');
  };

  return (
    <div className={`flex flex-col items-center gap-2 relative ${control2 ? 'hidden' : ''}`}>
      <p>{title}</p>
      <p className='w-[250px]'>{text}</p>
      <img className='w-40 h-60 rounded-full' src={img} alt="" />
      <p>{question}</p>
      <i className={ selectedValue == 'no' ?`absolute fa-solid fa-heart-crack fa-2xl text-9xl text-red-700` : ''}></i>
      <div className={!selectedValue.length  || selectedValue == 'no' ? 'hidden' : '' }>
        <div className="bubble"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">' +
          ' <path d="M16.1315 3.71436C14.4172 3.71436 12.9029 4.57721 12 5.8915C11.0972 4.57721 9.58289 3.71436 7.86861 3.71436C5.10289 3.71436 2.85718 5.96007 2.85718 8.72578C2.85718 14.8344 12 20.3258 12 20.3258C12 20.3258 21.1429 14.8344 21.1429 8.72578C21.1429 5.96007 18.8972 3.71436 16.1315 3.71436Z" fill="red"></path>' +
          '</svg></div>
        <div className="bubble"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">' +
          '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.75-3.4 6.86-8.55 11.53L12 21.35z" fill="red"></path>' +
          '</svg></div>
        <div className="bubble"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">' +
          '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.75-3.4 6.86-8.55 11.53L12 21.35z" fill="red"></path>' +
          '</svg></div>
        <div className="bubble"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">' +
          '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.75-3.4 6.86-8.55 11.53L12 21.35z" fill="red"></path>' +
          '</svg></div>
        <div className="bubble"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">' +
          '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.75-3.4 6.86-8.55 11.53L12 21.35z" fill="red"></path>' +
          '</svg></div>
        <div className="bubble"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">' +
          '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.75-3.4 6.86-8.55 11.53L12 21.35z" fill="red"></path>' +
          '</svg></div>
        <div className="bubble"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">' +
          '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.75-3.4 6.86-8.55 11.53L12 21.35z" fill="red"></path>' +
          '</svg></div>
        <div className="bubble"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">' +
          '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.75-3.4 6.86-8.55 11.53L12 21.35z" fill="red"></path>' +
          '</svg></div>
        <div className="bubble"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">' +
          '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.75-3.4 6.86-8.55 11.53L12 21.35z" fill="red"></path>' +
          '</svg></div>
      </div>
      <div className={`flex gap-10 ${title ? '' : 'hidden'}`}>
        <div className='flex gap-1'>
          <label htmlFor="si">Si</label>
          <input onChange={handleRadioChange} className='w-6' type="radio" name="si" id="no" value='si' />
        </div>
        <div className='flex gap-1'>
          <label htmlFor="si">No</label>
          <input onChange={handleRadioChange} className='w-6' type="radio" name="si" id="no" value='no' />
        </div>
      </div>
      <div className={`${!selectedValue.length ? 'hidden' : ''}`}>{selectedValue == 'si' ? 'Graciaaaas' : ''}</div>

    </div>
  )
}

export default Invitation2