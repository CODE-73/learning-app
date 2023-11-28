import React from 'react';
import LoginView from '../../modules/login/LoginView';
import HomeView from '../../modules/home/HomeView';

// TODO: Replace StageCard with HomeView

const HomePage = () =>
  // Use a ternary operator for conditional rendering
  isLoggedIn ? <HomeView /> : <LoginView />;

// Replace this with your actual authentication logic
const isLoggedIn = true;

export default HomePage;
