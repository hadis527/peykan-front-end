import React from 'react';

const UserProfile = ({ profilePicture, username, bio }) => {
  return (
    <div className="flex flex-col items-center justify-center">
    <img
      className="w-24 h-24 rounded-full mb-4"
      src={profilePicture}
      alt="Profile Picture"
    />
    <h2 className="text-2xl font-bold mb-2">{username}</h2>
    <p className="text-lg text-gray-600 mb-6">{bio}</p>
  </div>
  );
};

export default UserProfile;