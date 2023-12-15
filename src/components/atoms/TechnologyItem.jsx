import { nanoid } from '@reduxjs/toolkit'
import React from 'react'

function TechnologyItem({ name, tag }) {
    const tags = tag.split(" ").filter(item => item.trim() !== "") || []
    return (
        <div className='w-full md:max-w-[80%] xl:max-w-[62%]  hover:translate-x-[20px] transition-all'>
            <div data-aos="fade-right" className='border    cursor-pointer inline-block px-[30px] md:px-[70px] py-[30px] rounded-[10px] border-[#B1B7D2]'>
                <h3 className='text-[24px] mb-[6px] font-semibold'>{name}</h3>
                <ul className='text-[#64930A] flex  gap-x-[20px] gap-y-[2px] flex-wrap'>
                    {tags?.map(item => <li key={nanoid()}>#{item}</li>)}
                </ul>
            </div >
        </div>
    )
}

export default TechnologyItem