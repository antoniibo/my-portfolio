import React from "react";
import './PrevItem.css'

function PrevItem({item,openModal }){
    const { title, image } = item;
    return(
        <div className="prev-item" onClick={openModal}>
            <img className="prev-image" src={image} alt={{image}+".img"} />
            <h4 className="prev-title">{title}</h4>
        </div>
    )
}
export default PrevItem