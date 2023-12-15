import { Skeleton } from '@mui/material'
import React from 'react'

function ServicesCardSkeleton() {
    return (
        <div data-aos="fade-up" data-aos-delay={100} className='service-card skeleton group cursor-pointer p-[50px]  rounded-[5px] w-full md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]'>
            <div className='pb-[30px]'>
                <Skeleton variant='rounded' width={45} height={45} />
            </div>
            <div className='pb-[25px]'>
                <div className='pb-[30px]'><Skeleton variant='rounded' width={"100%"} height={"25px"} /></div>
                <div className='flex flex-col gap-[8px]'>
                    <Skeleton variant='rounded' width={"100%"} height={"16px"} />
                    <Skeleton variant='rounded' width={"100%"} height={"16px"} />
                    <Skeleton variant='rounded' width={"100%"} height={"16px"} />
                    <Skeleton variant='rounded' width={"100%"} height={"16px"} />

                </div>
            </div>
            <Skeleton variant='rounded' width={150} height={45} />

        </div>
    )
}

export default ServicesCardSkeleton