import React from "react";
import {TrainerData} from "./Data/TrainerData";
import Avatar from '@material-ui/core/Avatar';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import "./Trainers.css";
import { withStyles } from "@material-ui/core/styles";
const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: "green",
    color: "green"
  }
}))(Badge);
const Trainers = () => {
    return (
        <div className="trainer-container">
            <h2>Your trainers</h2>
            {TrainerData.map((item) => {
                return (
                    <div className="profile-container">
                        <StyledBadge overlap="circle" anchorOrigin={{vertical: "bottom",horizontal: "right"}} variant="dot">
                        <Avatar style={{display:"inline-block"}} src="https://i.pinimg.com/originals/27/84/79/278479879bc3ea039825920f264a41f6.png"></Avatar></StyledBadge>
                        
                        <div className="trainer-info inline-div">
                            <h3 className="trainer-name">{item.name}</h3>
                            <p className="trainer-sport">{item.sport}</p>
                        </div>
                        <div className="icon inline-div">
                            <Button className="icon" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="outlined">
                            <SmsOutlinedIcon style={{fill:"#555"}} />
                            </Button>
                        </div>
                </div>
                )
            })}
        </div>

    );
}

export default Trainers;