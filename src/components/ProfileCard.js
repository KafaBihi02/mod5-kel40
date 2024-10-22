import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileCard = ({ githubUsername }) => {
  const [profileData, setProfileData] = useState({
    name: "",
    followers: 0,
    avatarUrl: "",
    githubUrl: "",
  });

  useEffect(() => {
    // Mengambil data dari GitHub API
    const fetchGitHubProfile = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${githubUsername}`);
        setProfileData({
          name: response.data.login,
          followers: response.data.followers,
          avatarUrl: response.data.avatar_url,
          githubUrl: response.data.html_url,
        });
      } catch (error) {
        console.error("Error fetching GitHub profile", error);
      }
    };

    fetchGitHubProfile();
  }, [githubUsername]);

  return (
    <div style= {styles.cardContainer}className="profile-card">
      <img src={profileData.avatarUrl} alt="profile" style= {styles.profileImage}/>
      <div className="profile-card-content" style= {styles.cardContent}>
        <h2>User Profile</h2>
        <p>Name: {profileData.name}</p>
        <p>Followers: {profileData.followers}</p>
        <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </div>
    </div>
  );
};


// Styling menggunakan objek JavaScript

const styles = {
  cardContainer: {
    width: "250px",
    padding: "20px",
    backgroundColor: "#2C2F33",
    color: "#FFF",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  cardContent: {
    marginTop: "10px",
  },
};

export default ProfileCard;
