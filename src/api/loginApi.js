import axios from 'axios';

// export const getLoginInfo = () => {
//   return axios.get('http://localhost:4500/userRole')
// }

export const setCurrentUser = user => {
  return axios.put('http://localhost:4500/currentUser', user);
};

export const getCurrentUser = () => {
  return axios.get('http://localhost:4500/currentUser');
};

export const logout = user => {
  return axios.put('http://localhost:4500/currentUser', user);
};
