import { Skeleton } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'

function CatBtnsSkeleton({ page = "" }) {

  return (
    <div data-aos={page === "projects" ? "fade-left" : "fade-right"} className='gap-[15px] pt-[20px] flex flex-wrap'>
      {Array.from({ length: 4 }).map(_ =>
        <Skeleton key={nanoid()} variant='rounded' height={"40px"} width={"100px"} />
      )}
    </div>
  )
}

export default CatBtnsSkeleton