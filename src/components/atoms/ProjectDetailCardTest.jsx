import React from 'react'
import CardImg from "../../../public/img/project-item1.png"
import sabis from "../../../public/img/sabis.png"
import { useTranslation } from 'react-i18next'

function ProjectDetailCardTest({ project }) {
    console.log(project);


    const { t, i18n } = useTranslation()
    return (
        <div className='project-detail-card bg-[#fff]  rounded-[70px]'>
            <div className='card-top rounded-[70px] overflow-hidden '>
                <img className='min-h-[300px] max-h-[500px] w-full object-cover' src={CardImg} alt="card-img" />
            </div>
            <div className='flex items-center gap-y-[40px] gap-x-[100px] flex-wrap p-[50px]'>
                <div className='w-full lg:w-[calc((100%-100px)/12*9)]'>
                    <h3 className='text-[28px] font-medium mb-[16px]'>{t("customer-info")}</h3>
                    <p>SABIS® SUN Beynəlxalq Məktəbi müxtəlif imkanlara malik şagird heyətinə yüksək keyfiyyətli təhsil təminatçısı olaraq tanınacaqdır. Məktəb şagirdləri universitetlərdə müvəffəqiyyət qazanmağa hazırlamaqla yanaşı, onları daim öyrənmə bacarığı və arzusu ilə təmin edəcək və onların sivil, etik və əxlaqi dəyərlərini möhkəmləndirəcəkdir. Məktəb fəaliyyət göstərdiyi müddət ərzində səmərəlilik və öhdəçilik baxımından yüksək standartları qoruyub saxlayacaqdır.</p>
                </div>
                <div className='w-full lg:w-[calc((100%-100px)/12*3)]'>
                    <img src={sabis} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailCardTest