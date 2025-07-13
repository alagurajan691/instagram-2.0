import React, { useEffect,useState } from 'react'


function Suggestions() {

  const [Profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/Profile')
      .then((data => data.json()))
      .then((data => setProfile(data)))
      .catch((err => console.log(err)));

      fetch('http://localhost:3000/suggestions')
      .then((data => data.json()))
      .then((data => setSuggestions(data)))
      .catch((err => console.log(err)));


  }, []);
  return (
    <div>
      <div className='suggestion w-75 m-4'>
  {Profile ?
    <>
      <div className='d-flex align-items-center mb-4'>
        <img className="db rounded-circle me-2" src={Profile.profilePic} alt="" />  
        <h5 className="mb-0">{Profile.username}</h5>
        <small className='ms-auto'>Switch</small>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <b>Suggested for you</b>
        <b>see all</b>
      </div>

      {suggestions.map((sugg) => (
        <div className='d-flex align-items-center mb-3' key={sugg.id}>
          <img className="db rounded-circle me-2" src={sugg.profilePic} alt="" />
          <h5 className="mb-0">{sugg.username}</h5>
          <small className='ms-auto'>follow</small>
        </div>
      ))}
    </>
    : <p>Loading</p>}
</div>

      </div>
  )
}

export default Suggestions