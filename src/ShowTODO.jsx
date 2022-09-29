import React from 'react'

const ShowTODO = (props) => {
    const deleteItem = (e) =>{
        console.log(e);
        e.target.classList.add('removed-item');
        setTimeout(()=>{
            props.data.splice(e.target.id,1);
            props.setData([...props.data]);
            e.target.classList.remove('removed-item');
        }, 500);
    }
  return props.data.length > 0 && <div className='ShowTodo'>
    {props.data.map(item => <li className='new-item' key={props.data.indexOf(item)} id={props.data.indexOf(item)}  onClick={deleteItem}>{item}</li>)}
    </div>
  
}

export default ShowTODO