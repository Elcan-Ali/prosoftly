import React from 'react'
import ApplyModalForm from '../atoms/ApplyModalForm'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '../../store/slices/layoutSlice'
import { TfiClose } from "react-icons/tfi";
import { useTranslation } from 'react-i18next';



function ApplyModalWrapper() {

    const { t } = useTranslation()

    const { applyModal } = useSelector(store => store["layout"])

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(setModal(false))
    }

    return (
        <div onClick={handleClose} className={`overlay overflow-y-auto fixed ${applyModal ? "top-0 bottom-0 opacity-1" : "-top-[150%] opacity-0 bottom-auto"} right-0 left-0  transition-all  duration-[.5s]  py-[70px]`}>
            <div className='flex flex-col text-center items-center container pb-[60px]'>
                <h3 className='text-[28px]  lg:text-[38px] xl:text-[48px] font-medium text-[#fff] '>
                    {t("it-problem-solving")}
                </h3>
                <p className='text-[28px] lg:text-[38px] xl:text-[48px] font-medium text-green'>{t("write-to-us")}</p>
            </div>
            <button onClick={handleClose} className='absolute top-[40px] right-[40px]'>
                <TfiClose size={26} fill='#fff' />
            </button>

            <div onClick={(e) => e.stopPropagation()} className={`max-w-[994px] ${applyModal ? "scale-1" : "scale-0"} transition-all delay-[.5s] duration-[.5s]  mx-auto apply-modal-form  overflow-hidden bg-[#f7f8f9]  rounded-[50px]`} >
                <ApplyModalForm />
            </div>
        </div>
    )
}

export default ApplyModalWrapper