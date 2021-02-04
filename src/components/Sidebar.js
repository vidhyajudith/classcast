import React from "react";
import Profile from "./Profile";
import Card from "./Card";
import Health from "./Health";
import Trainers from "./Trainers"
import SignUpCard from "./SignUpCard";
import "./Sidebar.css";

const Sidebar=() => {
    return (
        <div className="sidebar-container">
            <div className="container">
                <Profile />
                <Health />
                <SignUpCard />
                <h2>Todays Trainings</h2>
                <Card title="Box" cname="blue-card card-container" subtitle="Sports Club" time="10:00" warmupTime="40" timer="20" exercise="Stretch" />
                <Card title="Crossfit" cname="red-card card-container" subtitle="Sports Club" time="12:00" warmupTime="20" timer="20" exercise="Pull-ups" />
            </div>
            <Trainers />     
        </div>
                   

    )
};


export default Sidebar;