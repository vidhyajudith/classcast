import React from "react";
import "./Card.css";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Card =(props) =>{
    return (
        <div className={props.cname}>
            <div className="card-element inline-div">
                <span className="card-title">{props.title}</span>
                <p className="card-sub-title">{props.subtitle}</p>
                <p className="time">{props.time}</p>
            </div>
            <div className="card-element inline-div">
                <p className="timer">{props.warmupTime}</p>
                <p>min</p>
                <h4 style={{fontWeight:"500"}}>Warm-up</h4>
            </div>
            <div className="card-element inline-div">
                <p className="timer">{props.timer}</p>
                <p>min</p>
                <h4 style={{fontWeight:"500"}}>{props.exercise}</h4>
            </div>

            <div className="card-element inline-div card-icon">
            <MoreVertIcon/>
            </div>
        </div>
    );
}

export default Card;