import React, { useState } from 'react';
import { X, Eye, EyeOff, AlertCircle } from 'lucide-react';

const SignUp = () => {
  // Enhanced form data with validation state
  const [formData, setFormData] = useState({
    name: { value: '', error: '' },
    email: { value: '', error: '' },
    mobile: { value: '', error: '' },
    state: { value: '', error: '' },
    city: { value: '', error: '' },
    course: { value: '', error: '' },
    captcha: { value: '', error: '' }
  });

  // Enhanced login data with validation state
  const [loginData, setLoginData] = useState({
    email: { value: '', error: '' },
    password: { value: '', error: '' },
    rememberMe: false
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('register');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sample data
  const states = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu'];
  const cities = {
    Delhi: ['New Delhi', 'Noida', 'Gurgaon'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    Karnataka: ['Bangalore', 'Mysore', 'Hubli'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai']
  };
  const courses = ['React', 'Node.js', 'Python', 'Java'];

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) ? '' : 'Please enter a valid email address';
  };

  const validateMobile = (mobile) => {
    const re = /^[0-9]{10}$/;
    return re.test(mobile) ? '' : 'Please enter a valid 10-digit mobile number';
  };

  const validateRequired = (value, field) => {
    return value.trim() ? '' : `${field} is required`;
  };

  const handleModalClose = () => {
    setIsLoginModalOpen(false);
    setActiveTab('register');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'login') {
      setIsLoginModalOpen(true);
    }
  };

  // Fixed change handlers
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    switch (name) {
      case 'email':
        error = validateEmail(value);
        break;
      case 'mobile':
        error = validateMobile(value);
        break;
      default:
        error = validateRequired(value, name);
    }

    setFormData(prev => ({
      ...prev,
      [name]: { value, error }
    }));

    if (name === 'state') {
      setFormData(prev => ({
        ...prev,
        city: { value: '', error: '' }
      }));
    }
  };

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setLoginData(prev => ({ ...prev, [name]: checked }));
    } else {
      let error = '';
      if (name === 'email') {
        error = validateEmail(value);
      } else if (name === 'password') {
        error = validateRequired(value, 'Password');
      }
      
      setLoginData(prev => ({
        ...prev,
        [name]: { value, error }
      }));
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let hasErrors = false;
    const updatedFormData = { ...formData };
    
    Object.keys(formData).forEach(key => {
      const error = validateRequired(formData[key].value, key);
      if (error) {
        hasErrors = true;
        updatedFormData[key] = { ...formData[key], error };
      }
    });

    if (hasErrors) {
      setFormData(updatedFormData);
      setIsLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Signup successful:', formData);
      setFormData(Object.keys(formData).reduce((acc, key) => ({
        ...acc,
        [key]: { value: '', error: '' }
      }), {}));
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login successful:', loginData);
      setIsLoginModalOpen(false);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fixed FormInput component
  const FormInput = ({ type, name, placeholder, value, error, onChange, className = '' }) => (
    <div className="w-full">
      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value || ''}  // Ensure value is never undefined
          onChange={onChange}
          className={`w-full p-3 bg-gray-50 rounded-lg outline-none transition-colors
            ${error ? 'border-2 border-red-500' : 'border border-gray-200'}
            ${className}`}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
            <AlertCircle size={20} />
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-3xl mt-12 shadow-2xl p-6 sm:p-8">
        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <button 
            type="button"
            className={`pb-2 px-4 transition-colors ${
              activeTab === 'register' 
                ? 'border-b-2 border-black font-semibold' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('register')}
          >
            Register
          </button>
          <button 
            type="button"
            className={`pb-2 px-4 transition-colors ${
              activeTab === 'login' 
                ? 'border-b-2 border-black font-semibold' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('login')}
          >
            Login
          </button>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignupSubmit} className="space-y-4">
          <FormInput
            type="text"
            name="name"
            placeholder="Enter Name *"
            value={formData.name.value}
            error={formData.name.error}
            onChange={handleSignupChange}
          />

          <FormInput
            type="email"
            name="email"
            placeholder="Enter Email Address *"
            value={formData.email.value}
            error={formData.email.error}
            onChange={handleSignupChange}
          />

          <div className="flex gap-2">
            <select className="bg-gray-50 rounded-lg outline-none px-3 py-3 w-[80px] border border-gray-200">
              <option>+91</option>
            </select>
            <FormInput
              type="tel"
              name="mobile"
              placeholder="Enter Mobile Number *"
              value={formData.mobile.value}
              error={formData.mobile.error}
              onChange={handleSignupChange}
              className="flex-1"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="w-full sm:w-1/2">
              <select
                name="state"
                value={formData.state.value}
                onChange={handleSignupChange}
                className={`w-full p-3 bg-gray-50 rounded-lg outline-none transition-colors
                  ${formData.state.error ? 'border-2 border-red-500' : 'border border-gray-200'}`}
              >
                <option value="">Select State*</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {formData.state.error && (
                <p className="mt-1 text-sm text-red-500">{formData.state.error}</p>
              )}
            </div>
            
            <div className="w-full sm:w-1/2">
              <select
                name="city"
                value={formData.city.value}
                onChange={handleSignupChange}
                className={`w-full p-3 bg-gray-50 rounded-lg outline-none transition-colors
                  ${formData.city.error ? 'border-2 border-red-500' : 'border border-gray-200'}`}
                disabled={!formData.state.value}
              >
                <option value="">Select City*</option>
                {formData.state.value && cities[formData.state.value].map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {formData.city.error && (
                <p className="mt-1 text-sm text-red-500">{formData.city.error}</p>
              )}
            </div>
          </div>

          <div className="w-full">
            <select
              name="course"
              value={formData.course.value}
              onChange={handleSignupChange}
              className={`w-full p-3 bg-gray-50 rounded-lg outline-none transition-colors
                ${formData.course.error ? 'border-2 border-red-500' : 'border border-gray-200'}`}
            >
              <option value="">Select Course*</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
            {formData.course.error && (
              <p className="mt-1 text-sm text-red-500">{formData.course.error}</p>
            )}
          </div>

          <div className="flex gap-2">
            <div className="bg-gray-200 rounded-lg p-3 w-[120px] flex items-center justify-center">
              <span className="text-blue-800 font-bold">16qe9o</span>
            </div>
            <FormInput
              type="text"
              name="captcha"
              placeholder="Enter text as shown"
              value={formData.captcha.value}
              error={formData.captcha.error}
              onChange={handleSignupChange}
              className="flex-1"
            />
          </div>

          <button
            type="enter"
            disabled={isLoading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium p-3 rounded-lg transition-colors disabled:bg-orange-300"
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>

          <div className="relative text-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <span className="relative bg-white px-4 text-sm text-gray-500">
              Or With
            </span>
          </div>

          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <img
              src="/api/placeholder/20/20"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-600">Signup with Google</span>
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => setIsLoginModalOpen(true)}
              className="text-blue-500 hover:underline"
            >
              Login
            </button>
          </p>
        </form>

        {/* Login Modal */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 sm:p-8 relative animate-fade-in">
              <button 
                type="button"
                onClick={handleModalClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-semibold mb-6">Login</h2>
              
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={loginData.email.value}
                  error={loginData.email.error}
                  onChange={handleLoginChange}
                />

                <div className="relative">
                  <FormInput
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Your Password *"
                    value={loginData.password.value}
                    error={loginData.password.error}
                    onChange={handleLoginChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={loginData.rememberMe}
                    onChange={handleLoginChange}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                    Check to remember your sign up details
                  </label>
                </div>

                <div className="space-y-4">
                  <button
                    type="enter"
                    disabled={isLoading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium p-3 rounded-lg transition-colors disabled:bg-orange-300"
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </button>

                  <div className="text-center">
                    <button 
                      type="button"
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </div>

                <div className="relative text-center my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <span className="relative bg-white px-4 text-sm text-gray-500">
                    Or Login With
                  </span>
                </div>

                <button
                  type="button"
                  className="w-full border border-gray-300 rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <img
                    src="/api/placeholder/20/20"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-600">Login with Google</span>
                </button>

                <p className="text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="text-blue-500 hover:underline"
                  >
                    Register
                  </button>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Toast Messages */}
      <div className="fixed bottom-4 right-4 space-y-2">
        {/* Success Toast */}
        {isLoading && (
          <div className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing...</span>
          </div>
        )}
      </div>

      {/* Add global styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SignUp;