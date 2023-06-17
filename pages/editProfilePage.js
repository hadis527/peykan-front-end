import React from 'react';
import UserProfileForm from '../components/UserProfileForm';
import MainLayout from "../components/shared/mainLayout";
import '../app/globals.css'
import { useSelector ,useDispatch } from 'react-redux';
import {updateProfileInfo} from "../redux/profile/actions";

const EditProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.profile.user);
  const handleSave = (updatedProfile) => {
    dispatch(updateProfileInfo(updatedProfile));
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <UserProfileForm initialProfile={user} onSave={handleSave} />
    </MainLayout>
  );
};

export default EditProfilePage;