
export function validateSignup(values) {
  let errors = {};

  if(!values.username) {
    errors.username = "Username is required";
  }else if(values.username.length < 4) {
    errors.username = "Username must at least 6 characters";
  }
  
  if(!values.email) {
    errors.email = "Email is required";
  } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if(!values.password) {
    errors.password = "Password is required";
  }else if(values.password.length < 6) {
    errors.password = "Password must at least 6 characters";
  }
  return errors;
}

export function validateSignin(values) {
  let errors = {};

  if(!values.username) {
    errors.username = "Username is required";
  }else if(values.username.length < 4) {
    errors.username = "Username must at least 6 characters";
  }


  if(!values.password) {
    errors.password = "Password is required";
  }else if(values.password.length < 6) {
    errors.password = "Password must at least 6 characters";
  }
  return errors;
}