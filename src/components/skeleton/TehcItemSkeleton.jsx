import { Skeleton } from '@mui/material'
import React from 'react'

function TehcItemSkeleton() {
  return (
        <div className=' w-full md:max-w-[80%] xl:max-w-[62%]  cursor-pointer h-[160px] inline-block  rounded-[10px] '>
            <Skeleton data-aos="fade-right" variant='rounded' width={"100%"}  height={"100%"}/>
        </div >
  )
}

export default TehcItemSkeleton