import React from "react";
import "./Profile.css";
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import TuneIcon from '@material-ui/icons/Tune';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
const Profile =() => {
    return (
        <div>
            <div className="profile-container">
                <Avatar style={{display:"inline-block"}} src="https://i.pinimg.com/originals/27/84/79/278479879bc3ea039825920f264a41f6.png"></Avatar>
                <div className="user-info inline-div">
                    <h3 className="userName">Floyd Miles</h3>
                    <p className="act-type">Free Account</p>
                </div>
                <div className="icon inline-div">
                <Badge badgeContent={3} color="error" overlap="rectangle">
                <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="outlined">
                <NotificationsNoneIcon style={{fill:"#555"}} />
                </Button>
                </Badge>
                </div>
                <div className="icon inline-div">
                <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} size="small" variant="outlined">
                    <TuneIcon style={{fill:"#555"}} />
                </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;
