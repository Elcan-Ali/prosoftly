import React from 'react'
import Author from "../../../public/img/acun.png"
import quote from "../../../public/img/quote.svg"
import { useTranslation } from 'react-i18next'

function CustomerCommentTest({ project }) {
    const { t, i18n } = useTranslation()

    return (
        <div className='pt-[66px]'>
            <h3 data-aos="fade-right" className='text-[28px] pb-[23px] font-semibold md:text-[36px]'>{t("customer-comment")}</h3>
            <div data-aos="fade-right" className='bg-[#000]  relative gap-[50px] flex items-center flex-col md:flex-row p-[52px] text-[#fff]'>
                <p>
                    Baxmayaraq ki, 2 övladımız digər məktəbdən SABIS® SUN məktəbinə keçirilmişdir, onlar hər gün məktəbdə öyrəndiklərini və qazandıqları təcrübələri bizimlə həvəslə bölüşürlər. Bu da onu sübut edir ki, SABIS® SUN məktəbini seçməklə onlar üçün ən doğru qərarı vermişik.
                </p>
                <div className='w-[136px] shrink-0 h-[45px]'></div>
                <img className='shrink-0 absolute -bottom-[20px] right-[20px]' src={quote} alt="" />
            </div>

            <div data-aos="fade-right" className='flex items-center pt-[28px] gap-[24px]'>
                <img className='w-[60px] h-[60px] rounded-full' src={Author} alt="" />
                <div>

                    <h3>Camal Cavadzadə</h3>
                    <p>
                        Marketinq direktoru
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CustomerCommentTest