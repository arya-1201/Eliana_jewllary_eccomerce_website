import { createContext, useState, useEffect } from "react";

export const UserProfileContext = createContext(null);

export const UserProfileProvider = ({ children }) => {
  const userLocalProfileData = localStorage.getItem("userProfile");
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (userLocalProfileData) setUserProfile(JSON.parse(userLocalProfileData));
  }, []);

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};
