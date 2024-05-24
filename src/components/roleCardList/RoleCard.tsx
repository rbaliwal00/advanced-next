import React from 'react';
import Image from 'next/image';
import { RoleProps } from '@modules/users/components/RoleCardList';

const RoleCard = ({backgroundColor='#002351',hoverColor='#FE8B4C',...props}:RoleProps) => {
  return (
    <div 
        className={`main grid justify-items-center  w-[17rem] h-[17rem] grid-rows-[9fr_2fr] rounded-2xl shadow-[0px_5px_20px_0px_#00000066]`}
        onClick={props.onClick}
        >
        <div className='speed  w-full h-full grid justify-items-center rounded-t-2xl'>
            <Image 
                src={props.banner} 
                // width={100} 
                // height={100} 
                alt={'role image'} 
                className={`cursor-pointer h-full `}
                // style={{width:'12rem'}}
                />
        </div>
        <style jsx>{`
        .speed:hover {
          background-color: ${hoverColor};
        }
        .main{
            background-color: ${backgroundColor};
        }
        .strongstay:img{
          width: 10%;
        }
      `}</style>
        <h1 className='text-[white]  rounded-b-2xl cursor-pointer shadow-[0px_-5px_20px_0px_rgba(11,11,11,0.4)] w-full text-center text-xl font-semibold content-evenly'>{props.title}</h1>
    </div>
  )
}

export default RoleCard