const ValidateInfo = (values) => {
    let errors = {}
    if(!values.name.trim()){
        errors.name = "Name required";
    }
    
    if(!values.designation.trim()){
        errors.designation = "Designation required";
    }

    if(!values.experience.trim()){
        errors.experience = "Experience required";
    }

    if(!values.phnNo){
        errors.phnNo = "Phone Number required";
    }else if(values.phnNo.length < 10){
        errors.phnNo = 'Invalid Phone Number';
    }

    if(!values.email){
        errors.email = "Email required";
    }
    
    return (errors);
}
 
export default ValidateInfo;