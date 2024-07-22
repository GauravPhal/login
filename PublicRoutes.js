import { lazy } from 'react';
const Login = lazy(()=> import('../../Views/auth/Login'))
const Register = lazy(()=> import('../../Views/auth/Register'))
// import login from './../../Views/auth/login';



const publicRoutes = [
    {
        path : '/login',
        Element : <Login/>
    },

    {
        path : '/register',
        Element : <Register/>
    }
]

export default publicRoutes