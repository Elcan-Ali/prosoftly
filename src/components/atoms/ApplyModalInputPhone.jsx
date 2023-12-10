
import { useField } from 'formik';
import { InputMask } from 'primereact/inputmask';


const ApplyModalInputPhone = ({ label, className, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className={`${className} `}>
            <label>
                <p className='pb-[8px]'>{label} </p>
                <InputMask className='w-full apply-input outline-none' onChange={() => { }} {...field} {...props} mask="+999999999999" placeholder="+994771234567" />
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default ApplyModalInputPhone