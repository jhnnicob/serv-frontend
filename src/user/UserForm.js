import React, {useState} from 'react';
import './UserForm.css';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

function isRequired(val) {
    return val.length > 0;
}


const validate = (name, value, errors) => {
    if(name === 'firstName') {
        if(isRequired(value)) {
            console.log("This is the first name validated")
            errors.firstName.hasError =  false;
        }else {
            console.log("This is the first name not validated")
            errors.firstName.hasError =  true;
            errors.firstName.msg = "Cannot be empty";
        }
    }

    if(name === 'lastName') {
        if(isRequired(value)) {
            errors.lastName.hasError =  false;
        }else {
            errors.lastName.hasError =  true;
            errors.lastName.msg = "Cannot be empty";
        }
    }

    if(name === 'title') {
        if(isRequired(value)) {
            errors.title.hasError =  false;
        }else {
            errors.title.hasError =  true;
            errors.title.msg = "Cannot be empty";
        }
    }

    if(name === 'address') {
        if(isRequired(value)) {
            errors.address.hasError =  false;
        }else {
            errors.address.hasError =  true;
            errors.address.msg = "Cannot be empty";
        }
    }

    if(name === 'city') {
        if(isRequired(value)) {
            errors.city.hasError =  false;
        }else {
            errors.city.hasError =  true;
            errors.city.msg = "Cannot be empty";
        }
    }

    if(name === 'province') {
        if(isRequired(value)) {
            errors.province.hasError =  false;
        }else {
            errors.province.hasError =  true;
            errors.province.msg = "Cannot be empty";
        }
    }

    if(name === 'email') {
        if(isRequired(value)) {
            errors.email.hasError =  false;
        }else {
            errors.email.hasError =  true;
            errors.email.msg = "Cannot be empty";
        }
    }

    if(name === 'mobileNumber') {
        if(isRequired(value)) {
            errors.mobileNumber.hasError =  false;
        }else {
            errors.mobileNumber.hasError =  true;
            errors.mobileNumber.msg = "Cannot be empty";
        }
    }

    if(name === 'phoneNumber') {
        if(isRequired(value)) {
            errors.phoneNumber.hasError =  false;
        }else {
            errors.phoneNumber.hasError =  true;
            errors.phoneNumber.msg = "Cannot be empty";
        }
    }


    if(name === 'businessName') {
        if(isRequired(value)) {
            errors.businessName.hasError =  false;
        }else {
            errors.businessName.hasError =  true;
            errors.businessName.msg = "Cannot be empty";
        }
    }

    if(name === 'businessAddress') {
        if(isRequired(value)) {
            errors.businessAddress.hasError =  false;
        }else {
            errors.businessAddress.hasError =  true;
            errors.businessAddress.msg = "Cannot be empty";
        }
    }

    if(name === 'personRole') {
        if(isRequired(value)) {
            errors.personRole.hasError =  false;
        }else {
            errors.personRole.hasError =  true;
            errors.personRole.msg = "Cannot be empty";
        }
    }

    if(name === 'personType') {
        if(isRequired(value)) {
            errors.personType.hasError =  false;
        }else {
            errors.personType.hasError =  true;
            errors.personType.msg = "Cannot be empty";
        }
    }


    return errors;
}


function useForm(initialState) {

    const initialErrors = {
        firstName: {
            hasError: false,
            msg: ''
        },
        lastName: {
            hasError: false,
            msg: ''
        },
        title: {
            hasError: false,
            msg: ''
        },
        address: {
            hasError: false,
            msg: ''
        },
        city: {
            hasError: false,
            msg: ''
        },
        province: {
            hasError: false,
            msg: ''
        },
        email: {
            hasError: false,
            msg: ''
        },
        mobileNumber: {
            hasError: false,
            msg: ''
        },
        phoneNumber: {
            hasError: false,
            msg: ''
        }
        ,
        businessName: {
            hasError: false,
            msg: ''
        },
        businessAddress: {
            hasError: false,
            msg: ''
        },
        personType: {
            hasError: false,
            msg: ''
        },
        personRole: {
            hasError: false,
            msg: ''
        }
        
    }

    const [state, setState] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);

    const handleInputChange = e => {
        setState({...state, [e.target.name]:e.target.value})
    }

    const getAutoCompleteValue = (newValue) => {
        const {city} = newValue;
        setState({...state, city})
    }

    const handleInputBlur = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        const errors = validate(name, value, initialErrors);
        setErrors({...errors, errors});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate(event.target.name, event.target.value, initialErrors)
        setErrors({...errors, errors});
        console.log(errors)
    }
    
    return {
        state, 
        handleInputChange, 
        getAutoCompleteValue,
        handleInputBlur,
        handleSubmit,
        errors
    }
    
}

                
function UserForm({handleOpen}) {
    let spacing = 5;

    const initialState = {
        firstName: "",
        lastName: "",
        title:  "",
        address:  "",
        city:  "",
        province:  "",
        email:  "",
        mobileNumber:  "",
        phoneNumber:  "",
        businessName:  "",
        businessAddress: "",
        personType:  "",
        personRole:  "",
    }
    

    const {
        state, 
        handleInputChange,
        getAutoCompleteValue,
        handleInputBlur,
        handleSubmit,
        errors,
        } = useForm(initialState)

        // console.log("This is the error", errors)

    return (
        <div className="userForm">
            <h3>Add User</h3>
            <form className="" noValidate autoComplete="off">
                <Grid container spacing={spacing}>
                    <Grid item xs={6}>
                        <TextField  
                            id="standard-basic"
                            label="First name" 
                            name="firstName"
                            defaultValue={state.firstName}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            size="small" 
                            fullWidth 
                            error={errors.firstName.hasError}
                            helperText={errors.firstName.msg}
                            />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField  
                            name="lastName"
                            defaultValue={state.lastName.value}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            size="small" 
                            label="Last name" 
                            fullWidth 
                            error={errors.lastName.hasError}
                            helperText={errors.lastName.msg}
                            />
                    </Grid>
                </Grid>
                <Grid container spacing={spacing}>
                    <Grid item xs={6}>
                        <TextField  
                            name="title"
                            defaultValue={state.title.value}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            size="small" 
                            label="Title" 
                            fullWidth 
                            error={errors.title.hasError}
                            helperText={errors.title.msg}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField  
                            name="address"
                            defaultValue={state.address.value}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            size="small" 
                            label="Address" 
                            fullWidth
                            error={errors.address.hasError}
                            helperText={errors.address.msg} />
                    </Grid>
                </Grid>
                <Grid container spacing={spacing}>
                    <Grid item xs={6}>
                        <Autocomplete 
                            name="city"
                            onChange={(event, value) => getAutoCompleteValue(value ? value : "")}
                            onBlur={handleInputBlur}
                            size="small"
                            id="combo-city"
                            options={city}
                            getOptionLabel={(option) => option.city}
                            renderInput={(params) => 
                                <TextField {...params} name="city" label="City" 
                                error={errors.city.hasError}
                                helperText={errors.city.msg}
                            />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField  
                            name="province"
                            defaultValue={state.province.value}
                            onChange={handleInputChange}
                            size="small" 
                            label="Province" 
                            fullWidth 
                            onBlur={handleInputBlur}
                            error={errors.province.hasError}
                            helperText={errors.province.msg}/>
                    </Grid>
                </Grid>
                <Grid container spacing={spacing}>
                    <Grid item xs={6}>
                        <TextField  
                            name="email"
                            defaultValue={state.email.value}
                            onChange={handleInputChange}
                            size="small" 
                            label="Email" 
                            fullWidth 
                            onBlur={handleInputBlur}
                            error={errors.email.hasError}
                            helperText={errors.email.msg}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField  
                            type="number"
                            name="mobileNumber"
                            defaultValue={state.mobileNumber.value}
                            onChange={handleInputChange}
                            size="small" 
                            label="Mobile Number" 
                            fullWidth 
                            onBlur={handleInputBlur}
                            error={errors.mobileNumber.hasError}
                            helperText={errors.mobileNumber.msg}
                            />
                    </Grid>
                </Grid>
                <Grid container spacing={spacing}>
                    <Grid item xs={6}>
                        <TextField  
                            type="number"
                            name="phoneNumber"
                            defaultValue={state.phoneNumber.value}
                            onChange={handleInputChange}
                            size="small" 
                            label="Phone Number" 
                            onBlur={handleInputBlur}
                            error={errors.phoneNumber.hasError}
                            helperText={errors.phoneNumber.msg}
                            fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField  
                            name="businessName"
                            defaultValue={state.businessName.value}
                            onChange={handleInputChange}
                            size="small" 
                            label="Business Name" 
                            fullWidth 
                            onBlur={handleInputBlur}
                            error={errors.businessName.hasError}
                            helperText={errors.businessName.msg}
                            />
                    </Grid>
                </Grid>
                <Grid container spacing={spacing}>
                    <Grid item xs={12}>
                        <TextField  
                            name="businessAddress"
                            defaultValue={state.businessAddress.value}
                            onChange={handleInputChange}
                            size="small" 
                            label="Business Address" 
                            fullWidth 
                            onBlur={handleInputBlur}
                            error={errors.businessAddress.hasError}
                            helperText={errors.businessAddress.msg}/>
                    </Grid>
                </Grid>
                <Grid container spacing={spacing}>
                    <Grid item xs={6}>
                        <Autocomplete 
                            name="personType"
                            onChange={(event, value) => getAutoCompleteValue(value ? value : "")}
                            onBlur={handleInputBlur}
                            size="small"
                            id="combo-person-type"
                            options={personType}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => 
                                <TextField {...params} label="Type"
                                    name="personType" 
                                    error={errors.personType.hasError}
                                    helperText={errors.personType.msg}
                                />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                            name="personRole"
                            onChange={(event, value) => getAutoCompleteValue(value ? value : "")}
                            onBlur={handleInputBlur}
                            size="small"
                            id="combo-person-type"
                            options={personRole}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => 
                                <TextField {...params} label="Role" 
                                    name="personRole"
                                    error={errors.personRole.hasError}
                                    helperText={errors.personRole.msg}
                                />}
                        />
                    </Grid>
                </Grid>
            </form>
                <div className="userForm__buttons">
                    <Button 
                        onClick={handleSubmit}
                        variant="contained" 
                        color="primary" 
                        size="small">Save</Button>
                    <Button size="small" 
                        onClick={handleOpen}>Cancel</Button>
                </div>
        </div>
    )
}

export default UserForm;

const city = [
    {city: 'Manila'},
    {city: 'Quezon City'},
    {city: 'Davao'},
    {city: 'Caloocan City'},
    {city: 'Cebu City'},
    {city: 'Zamboanga City'},
    {city: 'Taguig City'},
    {city: 'Antipolo'},
    {city: 'Pasig City'},
    {city: 'Cagayan de Oro'},
    {city: 'City of Parañaque'},
    {city: 'Dasmariñas'},
    {city: 'Valenzuela'},
    {city: 'Bacoor'},
    {city: 'General Santos'},
    {city: 'Las Piñas City'},
    {city: 'Makati City'},
    {city: 'San Jose del Monte'},
    {city: 'Bacolod'},
    {city: 'Muntinlupa City'},
]

const personType = [
    {name: 'Customer'},
    {name: 'Vendor'},
    {name: 'Employee'},
]

const personRole = [
    {name: 'Sales Agent'},
    {name: 'Sales Manager'},
    {name: 'Admin'},
]

