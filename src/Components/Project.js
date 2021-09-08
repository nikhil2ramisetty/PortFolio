import React, { useState } from 'react'
import './Project.css'
const Project = (props) => {
    return (
        <>  
        {props.curr===parseInt(props.object.id)  && 
        <div className={props.curr===parseInt(props.object.id)? 'Project-item active':'Project-item'} id={props.object.id}>
        <i class="fa fa-chevron-left left" onClick={props.leftClick} ></i>
        <i class="fa fa-chevron-right right" onClick={props.rightClick}></i>
        <div className='overlay'></div>
        <img className="Pro-image" src={props.object.image}></img>
        <div className="context">
            <h1>{props.object.name}</h1>
            <p>{props.object.description}</p>
        </div>
    </div>}
            
        </>
        
    )
}

export default Project;
