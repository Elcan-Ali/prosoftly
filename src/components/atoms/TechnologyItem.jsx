import { nanoid } from '@reduxjs/toolkit'
import React from 'react'

function TechnologyItem({ name, tag }) {
    return (
        <div data-aos="fade-right" className='border w-full md:max-w-[80%] xl:max-w-[62%]  cursor-pointer inline-block px-[30px] md:px-[70px] py-[30px] rounded-[10px] border-[#B1B7D2]'>
            <h3 className='text-[24px] mb-[6px] font-semibold'>{name}</h3>
            <ul className='text-[#64930A] flex  gap-x-[20px] gap-y-[10px] flex-wrap'>
                {tag.split(" ").filter(item => item.trim() !== "").map(item => <li key={nanoid()}>#{item}</li>)}
            </ul>
        </div >
    )
}

export default TechnologyItem