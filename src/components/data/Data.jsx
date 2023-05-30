import React from "react";
import wallet from '../../assets/images/wallet.png'
import './data.css'


const Data = (props) => {

  
  return (
    
      <div className="data-card">
        <div>
        <div className="ellipse">
          <img src={props.img} alt="" />
        </div>
        </div>
        <div className="info">
          <div className="title">{props.title}</div>
          <div className="content">{props.content}</div>
        </div>
      </div>
    
  );
};

export default Data;
