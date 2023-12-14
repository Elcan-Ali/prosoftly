import React from 'react'
import parser from 'html-react-parser'

function ProjectTaskItem({ title, text }) {
    console.log();


    return (
        <div className='w-full md:w-[calc((100%-200px)/2)]'>
            <h3 data-aos="fade-right" className='text-[28px] font-semibold md:text-[36px]'>{title}</h3>
            <hr data-aos="fade-right" className='w-[40%] border-0 mt-[10px] mb-[26px]   bg-[#afff2c] h-[11px]' />

            {text.split("\n\n").map(item => <p data-aos="fade-up" className='mb-[20px]'>{item}</p>)}
        </div>
    )
}

export default ProjectTaskItem