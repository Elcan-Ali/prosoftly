import React from 'react'
import { useTranslation } from 'react-i18next';
import ProjectTaskItem from './ProjectTaskItem';

function ProjectTask({ project }) {
    const { t, i18n } = useTranslation()

    console.log();

    return (
        <div className='container'>
            <div className='flex items-start flex-wrap justify-between gap-x-[200px] gap-y-[60px]  py-[75px] '>
                <ProjectTaskItem title={t("task")} text={project?.projects_lang[0]?.customer_task[i18n.language] ?? t("nothing")} />
                <ProjectTaskItem title={t("task_well")} text={project?.projects_lang[0]?.task_well[i18n.language] ?? t("nothing")} />
            </div>
        </div>

    )
}

export default ProjectTask