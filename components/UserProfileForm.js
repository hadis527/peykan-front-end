import React, { useState , useEffect } from 'react';

const UserProfileForm = ({ initialProfile, onSave }) => {
  const [profile, setProfile] = useState(initialProfile);
  // useEffect(() => {

  // },[profile])
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(profile);
  };

  return (
    <form className="flex flex-col items-center justify-center w-2/4" onSubmit={handleSubmit} >
      <img
        className="w-24 h-24 rounded-full mb-4"
        src={profile.profilePicture}
        alt="Profile Picture"
      />
      <div className="mb-4 w-full">
        <label className="mb-2 block">
          Profile Picture:
        </label>
        <input
          className="border border-gray-300 p-2 rounded w-full"
          // type="file"
          name="profilePicture"
          value={profile.profilePicture}
          onChange={(e) => handleChange(e)}
          id="profilePicture"

        />
      </div>
      <div className="mb-4 w-full">

        <label className="mb-2 block">
          Username:
        </label>
        <input
          className="border border-gray-300 p-2 rounded w-full"
          name="username"
          id="username"
          value={profile.username}
           onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-4 w-full">
        <label className="mb-4 block">
          Bio:
        </label>
        <textarea
          className="border border-gray-300 p-2 rounded w-full"
          name="bio"
          value={profile.bio}
          onChange={(e) => handleChange(e)}
          id="bio"
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Save
      </button>
    </form>
  );
};

export default UserProfileForm;