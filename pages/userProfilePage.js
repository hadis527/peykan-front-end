import React from 'react';
import UserProfile from '../components/UserProfile';
import UserPosts from '../components/UserPosts';
import '../app/globals.css'
import MainLayout from "../components/shared/mainLayout";
import { useSelector } from 'react-redux';
const UserrofilePage = () => {
  const postSate = useSelector(state => state.post);
  const { postList} = postSate;
  const profileState = useSelector(state => state.profile);
  const {user} = profileState;
  console.log(user ,"user");


  return (
    <MainLayout>
      <UserProfile
        profilePicture={user.profilePicture}
        username={user.username}
        bio={user.bio}
      />
      <UserPosts posts={postList} />

    </MainLayout>
  );
};

export default UserrofilePage;