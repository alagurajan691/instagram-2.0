import React, { use, useEffect, useState } from 'react'

function Posts() {

const[posts, setposts] = useState([]);

useEffect(() =>{
 fetch('http://localhost:3000/posts').
 then((data => data.json())).
 then((data => setposts(data))).
 catch((err => console.log(err)))
},[]);

  return (
    <div className='d-flex justify-content-center'>
        {posts.length > 0? (
<div>
    {posts.map((post) => (
        <div className='my-3' key={post.id}>
            <div className='d-flex align-items-center'>
                <img className="db rounded-circle" src={post.profilePic} alt="" />
                <h5 className="mb-0 ms-2">{post.username}</h5>
            </div>
            <img className='image' src={post.imageUrl} alt="post" />
            <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
            </div>
            <div>
                <b>{post.likes} likes</b>
            </div>
            <div>
                {post.caption}
            </div>
        </div>
    ))}
</div>

    ) : (
<div>
    loading...
    </div>
    )}
    </div>  
  )
}

export default Posts