import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addToPostList} from "../redux/post/actions";

const PostCreationForm = ({ onPostCreate }) => {
  const dispatch = useDispatch();
  const [postContent, setPostContent] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToPostList({id:5 , profilePicture :"/images/profile.jfif" , content :postContent }))
    // const formData = new FormData();
    // formData.append('content', postContent);
    // formData.append('image', imageFile);
    // onPostCreate(formData);
    setPostContent('');
    setImageFile(null);
  };

  return (
    <form className="flex flex-col items-center justify-center w-2/4" onSubmit={handleSubmit}>
      <textarea
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        rows="4"
        placeholder="Enter your post content"
        value={postContent}
        onChange={handleContentChange}
      />
      <input
        className="border border-gray-300 p-2 mb-4 rounded w-full"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" type="submit">
        Create Post
      </button>
    </form>
  );
};

export default PostCreationForm;