import React from "react";
import ProfileCard from "../components/ProfileCard"; // Pastikan path sudah benar

export default function Profile() {
  return (
    <div className="profile-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 className="profile-title" style={{ color: "white" }}>Profile</h1>
      <ProfileCard githubUsername="adjudicati0r" />
    </div>
  );
}

