
import { useField } from 'formik';

const ApplyModalInput = ({ label, className, ...props }) => {
    const [field, meta, helpers] = useField(props);


    console.log(field);
    const requiredInp = ["name", "sname", "email"]

    return (
        <div className={`${className} `}>
            <label>
                <p className='pb-[8px]'>{label}
                    {requiredInp.includes(field.name) && <span className='text-red-500'>*</span>}
                </p>
                <input  className='w-full apply-input outline-none'  {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className="error text-[red] pt-[3px] text-[12px]">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default ApplyModalInput