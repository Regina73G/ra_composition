import "./Card.css";
import React from "react";

interface CardProps {
  image?: string;
  children: React.ReactNode;
}

export default function Card({image = "",children}: CardProps) {
  return (
    <div className="card">
      {image?.length > 0  && <img className="card_image" src={image} alt=""/>}
      <div className="card_body">
        {children}
      </div>
    </div>
  )
}