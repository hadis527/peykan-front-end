import React from 'react';
import PostCreationForm from '../components/PostCreationForm';
import MainLayout from "../components/shared/mainLayout";

import '../app/globals.css'

const CreatePostPage = () => {
  const handlePostCreate = (postData) => {
    console.log(postData);
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <PostCreationForm onPostCreate={handlePostCreate} />
    </MainLayout>
  );
};

export default CreatePostPage;