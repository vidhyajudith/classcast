import React from "react";
import "./Health.css"
import Button from '@material-ui/core/Button';
import {HealthData} from "./Data/HealthData";
const Health=() => {
    return (
            <div className="user-health">
                <h2>Health</h2>
                {HealthData.map((item) => {
                    return(
                        <div className={item.cname}>
                            <div className="value">{item.value}</div>
                            <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', backgroundColor:`${item.color}`}} variant="contained">
                                {item.icon}
                            </Button> 
                            <span className="title">{item.title}</span>
                            <div className="bar">
                                <div className="progress" style={{width:`${item.progress}`, backgroundColor:`${item.color}`}}></div>
                            </div>
                        </div> 
                    );
                })}
            </div>
    );
}

export default Health;