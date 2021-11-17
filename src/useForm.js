import {useState} from 'react';
import useChange from 'use-change';

const useForm = (ValidateInfo) => {
    const [values, setValues] = useChange((store)=>store, 'store')

    const [isError, setError] = useState({})
    // eslint-disable-next-line
    const [isSubmit, setSubmit] = useState(false)

    const handleChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        });
    }

    const handleSubmitDefault = (e) => {
        e.preventDefault();
        setError(ValidateInfo(values));
        setSubmit(true)
    }
    console.log(values)
    return ({handleChange,values,handleSubmitDefault, isError});
}
 
export default useForm;