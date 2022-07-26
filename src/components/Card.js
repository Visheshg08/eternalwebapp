import React from 'react';
function Card(props) {
  return (
    <div className="card  card-style">
      <br />
      
      <div className="text-center">
        <img alt="card-img" src={"../img/"+props.img} className="text-center img-fluid img-size" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
           {props.text}
        </p>
      </div>
    </div>
  );
}
export default Card;
