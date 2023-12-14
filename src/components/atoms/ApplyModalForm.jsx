import React from 'react';
import { Form, Formik } from 'formik';
import ApplyModalInput from './ApplyModalInput';
import ApplyModalTextArea from './ApplyModalTextArea';
import { useTranslation } from 'react-i18next';
import { postData } from '../../service/postData';
import ApplyModalInputBudge from './ApplyModalInputBudge';
import ApplyModalInputPhone from './ApplyModalInputPhone';
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/slices/layoutSlice';

import * as Yup from 'yup'


const ApplyModalForm = () => {
    const dispatch = useDispatch()


    const { t } = useTranslation()

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required field").min("3", "minimum 3 characters"),
        sname: Yup.string().required("Surname is required field").min("3", "minimum 3 characters"),
        email: Yup.string().required("Email is required field").email(),
        phone: Yup.string().min("3", "minimum 12 characters"),
        budget: Yup.number(),
        description: Yup.string().min("10", "minimum 10 characters"),
        establishment: Yup.string().min("3", "minimum 3 characters"),

    })


    return (

        <div>
            <Formik
                initialValues={{
                    name: "",
                    sname: "",
                    email: "",
                    phone: "",
                    budget: "",
                    description: "",
                    establishment: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                        postData("/application", values)
                        resetForm()
                        dispatch(setModal(false))
                }}
                validationSchema={validationSchema}
            >
                {(props) => (
                    <Form className='p-[60px] flex flex-wrap gap-[20px]'>
                        <div className='w-full md:w-[calc((100%-20px)/2)]'>
                            <ApplyModalInput placeholder="Jonah" name="name" type="text" label={t("name")} />
                        </div>
                        <div className='w-full md:w-[calc((100%-20px)/2)]'>
                            <ApplyModalInput placeholder="Jameson" name="sname" type="text" label={t("sname")} />
                        </div>
                        <div className='w-full md:w-[calc((100%-20px)/2)]'>
                            <ApplyModalInput placeholder="example@gmail.com" name="email" type="text" label={t("form-email")} />
                        </div>
                        <div className='w-full md:w-[calc((100%-20px)/2)]'>
                            <ApplyModalInputPhone name="phone" type="text" label={t("form-phone")} />
                        </div>
                        <div className='w-full md:w-[calc((100%-20px)/2)]'>
                            <ApplyModalInput placeholder="Prosoft" name="establishment" type="text" label={t("organization")} />
                        </div>
                        <div className='w-full md:w-[calc((100%-20px)/2)]'>
                            <ApplyModalInputBudge placeholder="999" name="budget" type="number" label={t("budge")} />
                        </div>
                        <div className='w-full'>
                            <ApplyModalTextArea placeholder="" name="description" type="email" label={t('project-description')} />
                        </div>
                        <button className='apply-btn btn2 p-[10px]  rounded-[22px] font-medium block w-full' type="submit">{t("send")}</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default ApplyModalForm