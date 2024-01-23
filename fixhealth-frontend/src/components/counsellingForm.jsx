import React, {useEffect, useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CounsellingForm () {

    const apiUrlVite = 'https://fixhealth-backend-omega.vercel.app/api';
    const [doctors, setDoctors] = useState(null);
    const [list, setList] = useState(null);
    const [details, setDetails] = useState({
        name: '',
        age: '',
        city: '',
        phone: '',
        company: '',
        complaint: '',
        doctor: 'Select City',
        experience: ''
    })
    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };
    const handleDoctorChange = (e) => {
        setDetails({
            ...details,
            doctor: e.target.value,
        });
    };

    const updateDetails = (element) => {
        const {name, value} = element;
        setDetails({
            ...details,
            [name]: value
        })    
    }
    const submitDetails = async (e) => {
        const validationChecks = [
            { field: 'Name', value: details.name, message: 'is required' },
            { field: 'Phone', value: details.phone, message: 'is required' },
            { field: 'Age', value: details.age, message: 'is required' },
            { field: 'City', value: details.city, message: 'is required' },
            { field: 'Company', value: details.company, message: 'is required' },
            { field: 'Phone', value: details.phone, message: 'is invalid', validator: validatePhone },
        ];
          
        let isValid = true;
          
        for (const { field, value, message, validator } of validationChecks) {
            if (!value.trim()) {
              toast.error(`${field} ${message}`);
              isValid = false;
              break; // Stop validation on the first error
            } else if (validator && !validator(value)) {
              toast.error(`Invalid ${field} ${message}`);
              isValid = false;
              break; // Stop validation on the first error
            }
        } 
          
        if (isValid) {
            toast.success('Form Submitted');
        }
    }

    const fetchDoctors = async () => {
        const apiUrl = `${apiUrlVite}/doctors`;
        try {
            const response = await fetch(apiUrl, {
              method: 'GET',
            });
            const data = await response.json();
            console.log(data.data.list);
            setList(data.data.list)
        } catch (error) {
            console.error('Error adding Agent:', error.message);
        }
    }

    useEffect(() => {
        console.log(list);
        if(list) {
            function removeSpaces(str) {
                return str.replace(/\s/g, '');
            }
            const filteredDoctors = details.city
            ? list.filter((doctor) => removeSpaces(doctor.city.toLowerCase()) === removeSpaces(details.city.toLowerCase()))
            : list;
          
          console.log(filteredDoctors);
        
          if (filteredDoctors && filteredDoctors.length < 1) {
            setDetails({
              ...details,
              doctor: 'No doctors available for the selected city',
            });
          //   setDoctors('No details');
          } else {
              setDoctors(filteredDoctors);
          }  
        }
    }, [details.city, list]);

    useEffect(() => { 
        fetchDoctors();
        const urlParams = new URLSearchParams(window.location.search);
        const cityParam = urlParams.get('city');
        // Update state with the city parameter
        if (cityParam) {
            console.log(cityParam);
            // Assuming you have a function to update the state, replace it with your actual function
            setDetails({
                ...details,
                city: cityParam
            });
        }
    },[])

    return (
        <div className='counselling-form'>
            <p>Counselling Form</p>
            <div className='form-content'>
                <div>
                    <label>Name: </label>
                    <input name="name" value={details.name} onChange={(e) => updateDetails(e.target)} />
                </div>
                <div>
                    <label>Phone Number: </label>
                    <input name='phone' value={details.phone} onChange={(e) => updateDetails(e.target)} />
                </div>
                <div>
                    <label>Age: </label>
                    <input name="age" value={details.age} onChange={(e) => updateDetails(e.target)} />
                </div>
                <div>
                    <label>City: </label>
                    <input name="city" value={details.city} onChange={(e) => updateDetails(e.target)} />
                </div>
                <div>
                    <label>Company: </label>
                    <input name="company" value={details.company} onChange={(e) => updateDetails(e.target)} />
                </div>
                <div>
                    <label>Doctors: </label>
                    {console.log(details.doctor)}
                    <select id="doctorDropdown" onChange={handleDoctorChange} value={details.doctor}>
                        {doctors ? doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>
                                {doctor.name}
                            </option>
                        )) : <option>Select City</option>}
                    </select>
                </div>
                <div>
                    <label>Chief Complaints: </label>
                    <textarea name="complaint" value={details.complaint} onChange={(e) => updateDetails(e.target)} />
                </div>
                { details.age > 40 &&
                    <div>
                        <label>Any previous experience with physiotherapy: </label>
                        <textarea name="experience" value={details.experience} onChange={(e) => updateDetails(e.target)} />
                    </div>
                }
            </div>
            <div className='button-container'>
                <button onClick={() => submitDetails()}>Submit</button>
            </div>
            <ToastContainer />
        </div>
    )

}
export default CounsellingForm;