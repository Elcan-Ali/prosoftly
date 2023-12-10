import { Skeleton } from '@mui/material'
import React from 'react'

function OurTeamSkeleton() {
    return (
        <div data-aos="fade-up" className='flex rounded-[20px] border overflow-hidden  w-full lg:w-[calc((100%-20px)/2)]'>
            <div className='w-5/12'>
                <Skeleton variant='rounded' width={"100%"} height={"300px"} />
            </div>
            <div className='w-7/12 flex flex-col justify-between text-green p-[35px]'>
                <div className='flex flex-col gap-[15px]'>
                    <Skeleton variant='rounded' width={"100%"} height={"24px"} />
                    <Skeleton variant='rounded' width={"100%"} height={"16px"} />
                </div>
                <div className='flex items-center gap-[15px]'>
                    <Skeleton variant='rounded' width={"34px"} height={"34px"} />
                    <Skeleton variant='rounded' width={"34px"} height={"34px"} />
                    <Skeleton variant='rounded' width={"34px"} height={"34px"} />
                </div>
            </div>
        </div>
    )
}

export default OurTeamSkeleton