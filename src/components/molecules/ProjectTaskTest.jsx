import React from 'react'
import { useTranslation } from 'react-i18next';
import ProjectTaskItem from './ProjectTaskItem';

function ProjectTaskTest({ project }) {
    const { t, i18n } = useTranslation()

    console.log();

    return (
        <div className='container'>
            <div className='flex items-start flex-wrap justify-between gap-x-[200px] gap-y-[60px]  py-[75px] '>
                <div className='w-full md:w-[calc((100%-200px)/2)]'>
                    <h3 data-aos="fade-right" className='text-[28px] font-semibold md:text-[36px]'>{t("task")}</h3>
                    <hr data-aos="fade-right" className='w-[40%] border-0 mt-[10px] mb-[26px]   bg-[#afff2c] h-[11px]' />
                    <p data-aos="fade-up" className='mb-[20px]'>
                        ABIS® SUN Beynəlxalq Məktəbi (SABIS® SUN), 1 sentyabr 2015-ci il tarixində qapılarını məktəbəqədər təhsil səviyyəsindən 8-ci sinfə qədər olan şagirdlərin üzünə açmışdır. Məktəb, Xəyal Adası inkişaf layihəsi daxilində 67 000 kvadrat metr sahəyə malik şəhərcikdə yerləşir.
                    </p>
                    <p data-aos="fade-up" className='mb-[20px]'>
                        İnzibati korpus və xidmət binaları ilə yanaşı ilkin mərhələdə ultra-müasir şəhərcikdə məktəbəqədər təhsil və ibtidai məktəbə aid tədris binaları, kiçik idman zalı, üzgüçülük hovuzu və oyun meydançası mövcuddur. Xüsusi yol cığırı, oyun meydançası, oyun otağı və xüsusilə məktəbəqədər şagirdlərin istifadəsi üçün tərtib edilmiş İT otağı, şagirdlərimiz üçün müxtəlif təlim imkanları yaradır.
                    </p>
                </div>
                <div className='w-full md:w-[calc((100%-200px)/2)]'>
                    <h3 data-aos="fade-right" className='text-[28px] font-semibold md:text-[36px]'>{t("task_well")}</h3>
                    <hr data-aos="fade-right" className='w-[40%] border-0 mt-[10px] mb-[26px]   bg-[#afff2c] h-[11px]' />
                    <p data-aos="fade-up" className='mb-[20px]'>
                        SABIS® SUN Beynəlxalq Məktəbi müxtəlif imkanlara malik şagird heyətinə yüksək keyfiyyətli təhsil təminatçısı olaraq tanınacaqdır. Məktəb şagirdləri universitetlərdə müvəffəqiyyət qazanmağa hazırlamaqla yanaşı, onları daim öyrənmə bacarığı və arzusu ilə təmin edəcək və onların sivil, etik və əxlaqi dəyərlərini möhkəmləndirəcəkdir. Məktəb fəaliyyət göstərdiyi müddət ərzində səmərəlilik və öhdəçilik baxımından yüksək standartları qoruyub saxlayacaqdır.</p>
                    <p data-aos="fade-up" className='mb-[20px]'>
                        SABIS® SUN Beynəlxalq Məktəbi tədris ili ərzində valideynlərin və şagirdlərin maraqla gözlədiyi bir sıra önəmli tədbirlər təşkil edir. Şagirdlər istedadlarını göstərmək, maraqlarını və biliklərini genişləndirmək və eyni zamanda həm yerli, həm də beynəlxalq səviyyədə təşkil olunan bir sıra akademik və idman tədbirlərindən təcrübə qazanmaq üçün unikal imkana malikdirlər.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default ProjectTaskTest