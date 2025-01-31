import React from 'react'
import Header from './Header'

const Profile = () => {
  return (
    <div>
      <Header />
      {/* cover image */}
      <div className="coverImage ">
        <img src="src\assets\coverImage.jpg" alt="cover-image" className=' w-full h-50' />
      </div>
        {/* profile image */}
        <div className="profileImage  absolute top-60 left-10 flex ">
            <img src="src\assets\profileImage.jpg" alt="profile-image"className='w-50 h-50 rounded-full  border-4 border-white shadow-lg  ' />
            {/* profile info */}
            <div className="profileInfo relative top-15 left-5">
                
                <h1 className='font-bold text-2xl'>YT-PubG</h1>
                <p className='text-gray-700 font-medium'>Web Developer || Gamer || Hustler</p>
                <div className="stats flex mt-3">
                    <div className="flex flex-col">
                        <p className='font-bold'>Followers</p>
                        <p className='text-gray-700'>1.5M</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='font-bold ml-5'>Following</p>                       
                        <p className='text-gray-700 ml-5'>1.5K</p>
                    </div>
                </div>
                

            </div>
            
        </div>
        
    </div>
  )
}

export default Profile
