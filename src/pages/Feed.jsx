import React from 'react'
import {FaHandSparkles, FaRetweet, FaComment, FaExternalLinkAlt, FaHeart} from 'react-icons/fa'
import { profile, options, feed } from '../data'
import {Button, Tweet} from '../components/'
import {Link} from 'react-router-dom'

const Feed = () => {
  return (
    <div className='flex flex-col w-full p-2 bg-white dark:bg-black'>
      <div className='flex flex-col gap-5 pb-2' style={{borderBottomWidth: 1, borderBottomColor: "#2F3336"}}>
        <div className='flex justify-between w-full flex-row'>
          <div className='flex items-center'>
            <p className='text-black dark:text-white font-bold text-2xl'>Inicio</p>
          </div>
          <div className='flex items-center'>
            <FaHandSparkles className='text-black dark:text-white'/>
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <Link className='flex w-16 h-16' to="/Perfil">
            <img src={profile.profilePic} alt="Profile Picture" className='rounded-full' />
          </Link>
          <div className='flex items-center'>
            <input type="text" style={{backgroundColor: "transparent"}} placeholder="¿Qué estás pensando?"/>
          </div>
        </div>
        <div className='flex flex-row justify-around'>
          <div className='flex flex-row items-center pl-16 gap-5 '>
            {
              options.map((item,i) => (
                <div className='font-3xl cursor-pointer' key={i} style={{color: "#1D9BF0"}}>
                  {item.icon}
                </div>
              ))
            }
          </div>
          <div className='flex w-1/4'>
            <Button text={"Twittear"} bgColor="#1D9BF0" textStyle={"text-white text-lg font-semibold"} h="10"
              rounded={"xl"}
            />
          </div>
        </div>
      </div>
      {
        feed.map((item, i) => (
          <Tweet data={item}/>
        ))
      }

    </div>
  )
}

export default Feed