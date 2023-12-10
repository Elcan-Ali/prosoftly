import React from 'react'
import AccardionItem from '../atoms/AccardionItem'
import { nanoid } from '@reduxjs/toolkit'
import { interestingQuestions } from '../../const/interestingQuestions'

function Accardion() {



    return (
        <div className='accardion '>
            {interestingQuestions.map((item,index)=> <AccardionItem key={nanoid()} {...item} index={index} />)}
        </div>
    )
}

export default Accardion