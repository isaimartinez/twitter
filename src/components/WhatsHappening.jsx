import React from 'react'
import {FaSearch, FaEllipsisH} from 'react-icons/fa'
import { whData, whoToFollow } from '../data'
import {Button} from './'

const WhatsHappening = () => {
  return (
    <div className='flex flex-col bg-black w-full pr-44 pl-10'>
      <div className='flex flex-col flex-initial justify-around  gap-y-10 mt-5 w-96'>
        <div className='flex flex-row items-center gap-2 rounded-lg w-full h-10 p-2' 
          style={{backgroundColor: "#202327"}}
        >
          <FaSearch color='#64696E'/>
          <input placeholder='Buscar en Twitter' style={{backgroundColor: "#202327", border: 0, boxShadow: 'none'}}
            className="w-full"
          />
        </div>
        <div  style={{backgroundColor: "#202327"}} className="p-3 rounded-xl">
          <p className='text-white font-bold text-2xl'>Qué está pasando</p>
          <div className='flex flex-col gap-2 mt-5'>
            {whData.map((item,i) => (
              <div className='flex flex-row cursor-pointer justify-between p-1' key={i}>
                <div className='flex flex-col'>
                  <p className='text-slate-400 text-sm'>{item.type} {item.live && ("| EN DIRECTO")}</p>
                  <p className='text-white font-bold'>{item.title}</p>
                  <p className='text-slate-400 text-sm'>{item.info}</p>
                </div>
                <div className='flex w-24 h-24 justify-end'>
                  {
                    item.pic ? (
                      <>
                        <div className='flex justify-center items-center'>
                          <img src={item.pic} className="rounded"/>
                        </div>
                      </>
                    ):(
                      <>
                        <div className='flex'>
                          <FaEllipsisH color='rgb(148, 163, 184)'/>
                        </div>
                      </>
                    )
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
        <div  style={{backgroundColor: "#202327"}} className="p-3 rounded-xl">
          <p className='text-white font-bold text-2xl'>A quién seguir</p>
          <div className='flex flex-col gap-2 mt-5'>
            {
              whoToFollow.map((item, i) => (
                <div className='flex flex-row w-full cursor-pointer p-1' key={i}>
                  <div className='w-1/4'>
                    <img src={item.pic} className="rounded-full w-12 h-12"/>
                  </div>
                  <div className='flex flex-col w-2/4'>
                    <p className='text-white font-bold'>{item.name}</p>
                    <p className='text-slate-400 text-sm'>@{item.user}</p>

                  </div>
                  <div className='w-1/4'>
                    <Button text="Seguir" bgColor="white" textStyle={"text-black text-sm font-bold"}
                      h="10" rounded="3xl"
                    />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatsHappening