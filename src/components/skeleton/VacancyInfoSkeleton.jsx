import { Skeleton } from '@mui/material'
import React from 'react'

function VacancyInfoSkeleton() {
    return (
        <div >
            <div className='pb-[30px]'>
                <Skeleton variant='rounded' width={"150px"} height={"30px"} />
            </div>
            <div className='flex flex-col gap-[16px] mb-[70px]'>
                <Skeleton variant='rounded' width={"150px"} height={"18px"} />
                <Skeleton variant='rounded' width={"200px"} height={"18px"} />
                <Skeleton variant='rounded' width={"240px"} height={"18px"} />
                <Skeleton variant='rounded' width={"260px"} height={"18px"} />
            </div>
        </div>
    )
}

export default VacancyInfoSkeleton