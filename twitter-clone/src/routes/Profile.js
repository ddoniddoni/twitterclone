import { authService, dbService } from "fbase";
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const getMyNweets = async () => {
    const nweets = await dbService
      .collection("tweets")
      .where("creatorId", "==", userObj.uid);
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <>
      <button onClick={onLogOutClick}>Logout</button>
    </>
  );
};

export default Profile;
