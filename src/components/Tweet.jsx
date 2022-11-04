import React from 'react'
import {FaHandSparkles, FaRetweet, FaComment, FaExternalLinkAlt, FaHeart} from 'react-icons/fa'

const Tweet = ({data}) => {
  return (
    <div className='flex flex-col p-3'
      style={{borderBottomWidth: 1, borderBottomColor: "#2F3336"}}
    >
      <div className='flex flex-row items-center gap-2 mb-2 text-slate-400'>
        {data.info?.icon}
        <p className=' text-sm'>{data.info?.text}</p>
      </div>
      <div className='flex flex-row'>
        <div className='flex w-14 h-14 '>
          <img src={data.profilePic} className="rounded-full"/>
        </div>
        <div className='flex flex-col pl-3 w-full'>
          <div className='flex flex-row gap-1 items-top'>
            <p className='text-white font-bold'>{data.name}</p>
            <p className='text-slate-400 text-sm'>@{data.user} | {data.timeAgo}</p>
          </div>
          <div className='flex'>
            <p className='text-white text-base'>{data.description}</p>
          </div>
          <div className='flex cursor-pointer mt-2'>
            {
              data.isVideo ? (
                <>
                  <div className='flex items-center justify-center'>
                    <video controls width="100%" className='rounded'>
                      <source src={data.video.file} type="video/mp4" />
                    </video>
                  </div>
                </>
              ) : (
                <>
                  <div className='flex items-center justify-center'>
                    <img src={data.img} className="rounded"/>
                  </div>
                </>
              )
            }
          </div>
          <div className='flex flex-row mt-2'>
            <div className='flex flex-1 text-slate-400 text-sm items-center gap-1 cursor-pointer'>
              <FaComment />
              <p>{data.comments}</p>
            </div>
            <div className='flex flex-1 text-slate-400 text-sm items-center gap-1 cursor-pointer'>
              <FaRetweet />
              <p>{data.share}</p>
            </div>
            <div className='flex flex-1 text-slate-400 text-sm items-center gap-1 cursor-pointer'>
              <FaHeart />
              <p>{data.likes}</p>
            </div>
            <div className='flex flex-1 text-slate-400 text-sm items-center gap-1 cursor-pointer'>
              <FaExternalLinkAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet