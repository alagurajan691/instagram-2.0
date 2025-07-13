import React from 'react'
import { useNavigate } from 'react-router-dom';

function Sidebar() {


  
const navigate = useNavigate();




  return (
    <div className='m-3 position-fixed'>
      <div className="d-flex flex-column gap-3">
        <img className="logo-text" src="./src/assets/IMS.svg" alt="" />
        <div><i className="bi bi-house"></i>Home</div>
        <div onClick={() => {navigate ('/Profile')}}><i className="bi bi-person"></i>Profile</div>
        <div><i className="bi bi-search"></i>Search</div>
      <div><i className="bi bi-compass"></i>Explore</div>
      <div><i className="bi bi-heart"></i>Notification</div>
      <div><i className="bi bi-chat"></i>Messages</div>
      <div><i className="bi bi-plus-square"></i>Create</div>
    </div>

    <div className="position-fixed bottom-0  d-flex flex-column gap-3 mb-3">
        <div>
            threads <i className="bi bi-threads"></i>
        </div>
        <div>
            more <i className="bi bi-three-dots"></i>
        </div>
    </div>
    </div>
  )
}

export default Sidebar


