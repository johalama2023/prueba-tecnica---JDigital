import axios from './axios'; // importa tu instancia personalizada

export const registerRequest = (user) => axios.post('/register', user); // ya no necesitas escribir todo el URL

export const loginRequest = (user) => axios.post('/login', user)

export const verifyTokenRequest = () => axios.get('/verify')