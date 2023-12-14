
import { useField } from 'formik';
import { InputMask } from 'primereact/inputmask';


const ApplyModalInput = ({ label,className, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className={`${className} `}>
            <label>
                <p className='pb-[8px]'>{label} </p> 
                <input className='w-full apply-input outline-none'  {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className="error text-[red]">{meta.error}dsd</div>
            ) : null}
        </div>
    );
};

export default ApplyModalInput