import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';




function Profile() {

  const [Profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/Profile')
    .then(data => { setProfile(data.data); console.log(data); })

  }, []);

  function HandleOnChange(e) {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

const handleupdate = () => {
  axios.put('http://localhost:3000/Profile', Profile) // Make sure the endpoint matches your GET
    .then(data => {
      console.log(data);
      alert("Profile updated successfully");
      // Re-fetch profile data after update
      axios.get('http://localhost:3000/Profile')
        .then(data => setProfile(data.data));
    })
    .catch(err => {
      console.error(err);
      alert("Error updating profile");
    });
}

  return (
    
<div className='m-5'>
  {Profile ? (
    <div  classname= "profile1">
      <img src={Profile.profilePic} className="rounded-circle mb-3" style={{width: "100px", height: "100px", objectFit: "cover"}} alt="profile" />
      <h5>{Profile.username}</h5>
      <input
        type="text"
        value={Profile.username}
        name="username"
        className="form-control my-4"
        onChange={HandleOnChange}
      />
      <input
        type="text"
        value={Profile.profilePic}
        name="profilePic"
        className="form-control my-4"
        onChange={HandleOnChange}
      />
      <button className="btn btn-primary my-4" onClick={handleupdate}>Edit Profile</button>
    </div>
  ) : (
    <div>loading page</div>
  )}
</div>
    
  )
}

export default Profile