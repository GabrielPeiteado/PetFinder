import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css"
export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
        <div className="conatiner_profile">
           <div className="profileData">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>   
        </div>
    
    )
  );
};
export default Profile;