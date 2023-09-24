import { create } from 'zustand';
import axios from 'axios';
import Cookies from 'js-cookie';

const authStore = create((set) => ({
  loggedIn: null,
  loginForm: {
    email: '',
    password: '',
  },
  signupForm: {
    email: '',
    password: '',
  },
  token: null,
  user: null,

  updateLoginForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },
  updateSignupForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },
  login: async (e) => {
    try {
      const { loginForm } = authStore.getState();
      const response = await axios.post('/login', loginForm);
      const token = response.data.token;

      console.log('Received token:', token);

      set({ token });
      Cookies.set('token', token, { expires: 20 });

      set({
        loggedIn: true,
        loginForm: {
          email: '',
          password: '',
        },
        user: 'userInfo',
      });

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  },
  checkAuth: async () => {
    try {
      await axios.get('/check-auth');
      set({ loggedIn: true });
    } catch (error) {
      set({ loggedIn: false });
      console.log(error.message);
    }
  },
  signup: async () => {
    const { signupForm } = authStore.getState();
    const response = await axios.post('/signup', signupForm);
    set({
      signupForm: {
        email: '',
        password: '',
      },
    });
  },
  logout: async () => {
    await axios.get('/logout');
    Cookies.remove('token');
    set({ loggedIn: false });
    localStorage.removeItem('userInfo');
  },
}));
export default authStore;
