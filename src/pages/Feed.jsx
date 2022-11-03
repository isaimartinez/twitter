import React from 'react'
import {FaHandSparkles, FaRetweet, FaComment, FaExternalLinkAlt, FaHeart} from 'react-icons/fa'
import { profile, options, feed } from '../data'
import {Button} from '../components/'
import ReactPlayer from 'react-player'

const Feed = () => {
  return (
    <div className='flex flex-col w-full p-2'>
      <div className='flex flex-col gap-5 pb-2' style={{borderBottomWidth: 1, borderBottomColor: "#2F3336"}}>
        <div className='flex justify-between w-full flex-row'>
          <div className='flex items-center'>
            <p className='text-white font-bold text-2xl'>Inicio</p>
          </div>
          <div className='flex items-center'>
            <FaHandSparkles color='white'/>
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <div className='flex w-16 h-16'>
            <img src={profile.profilePic} alt="Profile Picture" className='rounded-full' />
          </div>
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
          <div className='flex flex-col p-3'
            style={{borderBottomWidth: 1, borderBottomColor: "#2F3336"}}
          >
            <div className='flex flex-row items-center gap-2 text-slate-400'>
              {item.info?.icon}
              <p className=' text-sm'>{item.info?.text}</p>
            </div>
            <div className='flex flex-row'>
              <div className='flex w-14 h-14 '>
                <img src={item.profilePic} className="rounded-full"/>
              </div>
              <div className='flex flex-col pl-3 w-full'>
                <div className='flex flex-row gap-1 items-top'>
                  <p className='text-white font-bold'>{item.name}</p>
                  <p className='text-slate-400 text-sm'>@{item.user} | {item.timeAgo}</p>
                </div>
                <div className='flex'>
                  <p className='text-white text-base'>{item.description}</p>
                </div>
                <div className='flex cursor-pointer'>
                  {
                    item.isVideo ? (
                      <>
                        <div className='flex items-center justify-center'>
                          <video controls width="100%" className='rounded'>
                            <source src={item.video.file} type="video/mp4" />
                          </video>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='flex items-center justify-center'>
                          <img src={item.img} className="rounded"/>
                        </div>
                      </>
                    )
                  }
                </div>
                <div className='flex flex-row'>
                  <div className='flex flex-1 text-slate-400 items-center gap-1 cursor-pointer'>
                    <FaComment />
                    <p>{item.comments}</p>
                  </div>
                  <div className='flex flex-1 text-slate-400 items-center gap-1 cursor-pointer'>
                    <FaRetweet />
                    <p>{item.share}</p>
                  </div>
                  <div className='flex flex-1 text-slate-400 items-center gap-1 cursor-pointer'>
                    <FaHeart />
                    <p>{item.likes}</p>
                  </div>
                  <div className='flex flex-1 text-slate-400 items-center gap-1 cursor-pointer'>
                    <FaExternalLinkAlt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Feed