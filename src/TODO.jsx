import React from 'react'

const TODO = (props) => {
    const inputEvent = (event) => {
        if(event.nativeEvent.key === 'Enter'){
          props.setData([...props.data,event.target.value]);
          event.target.value = '';
        }
    };

  return (
    <div>
        <input type="text" placeholder='Enter your task! Plese click on task to delete them' onKeyDown={inputEvent}></input>
    </div>
  )
}

export default TODO;