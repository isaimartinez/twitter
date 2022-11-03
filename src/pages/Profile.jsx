import React from 'react'
import {Link} from 'react-router-dom'
import {FaArrowLeft, FaMapMarker, FaGift, FaCalendar} from 'react-icons/fa'
import {profile, tweets} from '../data'
import {Tweet} from '../components'

const Profile = () => {
  return (
    <div className='flex flex-col w-full '>
      <div className='flex flex-row items-center text-white p-2'>
        <Link to="/" className='flex w-14 justify-center text-xl'>
          <FaArrowLeft />
        </Link>
        <div className='flex flex-col'>
          <p className='text-white font-bold'>{profile.name}</p>
          <p className='text-slate-400'>{tweets.length} Tweets</p>
        </div>
      </div>
      <div className='flex w-full relative'>
        <img src={profile.portada} alt="Portada" className='w-full' />
        <img src={profile.profilePic} alt="Profile Picture" className='z-10 absolute w-32 h-32 rounded-full border-4 -bottom-16 left-2 border-black' />
      </div>
      <div className='flex flex-row justify-end p-3'>
        <button type='button' className='flex p-2 text-white font-bold rounded-3xl border-slate-400'
          style={{borderWidth: 1}}
        >
          Editar Perfil
        </button>
      </div>
      <div className='flex flex-col p-4'>
        <div>
          <p className='text-white font-bold text-xl'>{profile.name}</p>
          <p className='text-slate-400'>@{profile.user}</p>
        </div>
        <div className='flex text-white mt-2'>
          {profile.description}
        </div>
        <div className='flex flex-row text-sm gap-2'>
          <div className='flex text-slate-400 items-center gap-1 cursor-pointer'>
            <FaMapMarker />
            <p>{profile.location}</p>
          </div>
          <div className='flex text-slate-400 items-center gap-1 cursor-pointer'>
            <FaGift />
            <p>{profile.nacimiento}</p>
          </div>
          <div className='flex text-slate-400 items-center gap-1 cursor-pointer'>
            <FaCalendar />
            <p>{profile.seUnioen}</p>
          </div>
        </div>
        <div className='flex flex-row text-sm gap-2 mt-2'>
          <p className='text-slate-400'><span className='text-white font-bold'>{profile.following}</span> Siguiendo</p>
          <p className='text-slate-400'><span className='text-white font-bold'>{profile.followers}</span> Seguidores</p>
        </div>
        
      </div>
      {
        tweets.map((item,i) => (
          <Tweet data={item}/>
        ))
      }
    </div>
  )
}

export default Profile