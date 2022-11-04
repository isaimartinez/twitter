import React from 'react'
import {Button} from './'
import { sidebarLinks, profile } from '../data'
import {FaEllipsisH} from 'react-icons/fa'
import {Link, NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-black w-full max-h-screen pl-44'>
      <div className='flex flex-col flex-initial justify-around  gap-y-10 mt-5 w-60'>
        {
          sidebarLinks.map((item,i) => (
            <Link to={item.name.trim()}>
              <div className='flex flex-row text-white text-2xl items-center cursor-pointer' key={i}>
                {item.icon}
                <span className='ml-5'>{item.name}</span>
              </div>
            </Link>
          ))
        }
        <Button text={"Twittear"} bgColor="#1D9BF0" textStyle={"text-white text-lg font-semibold"} h="12"
          rounded={"xl"}
        />
      </div>  
      <Link className='flex flex-auto flex-col justify-end w-60 mb-5' to="/Perfil">
        <div className='flex flex-row cursor-pointer'>
          <div>
            <img src={profile.profilePic} 
              className="w-16 rounded-full"
            />
          </div>
          <div className='flex flex-col ml-4'>
            <p className='text-white font-bold'>{profile.name}</p>
            <p className='text-slate-400'>@{profile.user}</p>
          </div>
          <div className='flex justify-center items-center ml-5'>
            <FaEllipsisH color='white'/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar