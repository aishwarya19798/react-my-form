import useChange from 'use-change';
const ViewForm = () => {
    // eslint-disable-next-line
    const [data,setData] = useChange((store)=>store,'store')
    
    return ( 
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
     );
}
 
export default ViewForm;