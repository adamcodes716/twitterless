import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  console.log ("signing out");
  //return () => {
   // return firebase.auth().signOut();
   //};
   return firebase.auth()
    .signOut()
    .then(() => {
      window.location.href = '/login';
    });
  
};
