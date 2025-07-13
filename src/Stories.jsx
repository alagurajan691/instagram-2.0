import React, { useState, useEffect } from 'react'

function Stories() {
  const [Stories, setStories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(data => data.json())
      .then(data => setStories(data))
      .catch(err => console.log(err))
  }, []);

  const handleStoryClick = (index) => {
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < Stories.length - 1 ? prev + 1 : prev));
  };

  return (
    <>
      <div className='story d-flex'>
        {Stories.length > 0 ? Stories.map((story, idx) => (
          <div key={story.id} className='mx-1' onClick={() => handleStoryClick(idx)} style={{cursor: 'pointer'}}>
            <div className='gradient-border d-flex align-items-center justify-content-center'>
              <img src={story.profilePic} alt='db' className='story-db rounded-circle' />
            </div>
            <p className='text-truncate' style={{ width: '50px' }}>{story.username}</p>
          </div>
        )) : (<p>No stories available</p>)}
      </div>
{currentIndex !== null && (
  <div className="story-modal" style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  }}>
    {/* Top left user info */}
    <div style={{
      position: 'absolute',
      top: '30px',
      left: '30px',
      display: 'flex',
      alignItems: 'center',
      color: 'white'
    }}>
      <img
        src={Stories[currentIndex].profilePic}
        alt="profile"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginRight: '10px'
        }}
      />
      <span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>{Stories[currentIndex].username}</span>
    </div>
    {/* Story image and navigation */}
    <button onClick={handlePrev} disabled={currentIndex === 0} style={{position: 'absolute', left: '40px', fontSize: '2rem', background: 'none', color: 'white', border: 'none', cursor: 'pointer'}}>&lt;</button>
    <div style={{textAlign: 'center'}}>
      <img src={Stories[currentIndex].imageUrl} alt="story" style={{maxHeight: '100vh'}} />
    </div>
    <button onClick={handleNext} disabled={currentIndex === Stories.length - 1} style={{position: 'absolute', right: '40px', fontSize: '2rem', background: 'none', color: 'white', border: 'none', cursor: 'pointer'}}>&gt;</button>
    <button onClick={handleClose} style={{position: 'absolute', top: '30px', right: '30px', fontSize: '2rem', background: 'none', color: 'white', border: 'none', cursor: 'pointer'}}>×</button>
  </div>
)}
    </>
  )
}

export default Stories