import axios from 'axios';

export const loginAPI = (user) => {
  axios.post('/apiUser/login', user)
    .then((response) => {
      console.log(response);
    })
    .catch(err => console.log(err));
};

export const signupAPI = () => {

};

