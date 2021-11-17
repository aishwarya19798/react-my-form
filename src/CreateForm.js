import useForm from "./useForm";
import ValidateInfo from "./ValidateInfo";
import useChange from 'use-change';
const CreateForm = () => {
    const {handleChange, values, handleSubmitDefault, isError } = useForm(ValidateInfo);
    // eslint-disable-next-line
    const [data,setData] = useChange((store)=>store,'store')
    return (  
        <div className="parent">
        <div className="CreateForm">
            <form className="form" onSubmit={handleSubmitDefault}>
                <h1>Let's Get Started Today!</h1>
                <div className="form-inputs">
                    <label htmlFor="name"></label>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Enter your Full Name" 
                    value={values.name}
                    onChange={handleChange}
                    />
                    {isError.name && <p>{isError.name}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email"></label>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={values.email}
                    onChange={handleChange}
                    />
                    {isError.email && <p>{isError.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="phnNo"></label>
                    <input 
                    type="number"
                    name="phnNo"
                    placeholder="Enter your Phone Number"
                    value={values.phnNo}
                    onChange={handleChange}
                    />
                    {isError.phnNo && <p>{isError.phnNo}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="designation"></label>
                    <input 
                    type="text"
                    name="designation"
                    placeholder="Enter your Designation"
                    value={values.designation}
                    onChange={handleChange}
                    />
                    {isError.designation && <p>{isError.designation}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="experience"></label>
                    <input 
                    type="text"
                    name="experience"
                    placeholder="Enter your Experience" 
                    value={values.experience}
                    onChange={handleChange}
                    />
                    {isError.experience && <p>{isError.experience}</p>}
                </div>
                <button className="btn-input" type="submit">Submit</button>
            </form>
        </div>
        <div className="showForm">
        <h1>Your Form Details are:</h1>
        <div className="showInput">
            <h2>Applicant's Name: {data.name} </h2>
        </div>
        <div className="showInput">
            <h2>Applicant's Email: {data.email}</h2>
        </div>
        <div className="showInput">
            <h2>Applicant's Phone Number: {data.phnNo}</h2>
        </div>
        <div className="showInput">
            <h2>Applicant's Current Designation: {data.designation}</h2>
        </div>
        <div className="showInput">
            <h2>Applicant's Year of Experience: {data.experience}</h2>
        </div>
    </div>
    </div>
    );
}
 
export default CreateForm;