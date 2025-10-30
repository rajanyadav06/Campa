import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS

const ContactCampaCola = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    streetAddress: '',
    landmark: '',
    pincode: '',
    businessType: '',
    investmentPlan: '',
  });
  const [loading, setLoading] = useState(false); // New state for loading/disable button
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // --- EmailJS Configuration ---
    // IMPORTANT: Replace these placeholders with your actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID'; 
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; 
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; 
    // -----------------------------

    // The templateParams object keys MUST match the template variables you set up in EmailJS
    const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`, // A combined name field
        user_email: formData.email,
        user_phone: formData.phone,
        user_city: formData.city,
        user_state: formData.state,
        user_address: formData.streetAddress,
        user_pincode: formData.pincode,
        user_business_type: formData.businessType,
        user_investment_plan: formData.investmentPlan,
        // You can add more fields here if needed
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your partnership application has been submitted successfully! We will contact you shortly.');
        setFormData({ // Clear the form on successful submission
          firstName: '', lastName: '', email: '', phone: '', state: '', city: '',
          streetAddress: '', landmark: '', pincode: '', businessType: '', investmentPlan: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Submission failed. Please try again or contact us directly.');
      })
      .finally(() => {
        setLoading(false); // Stop loading regardless of success or failure
      });
  };
  
  // Custom colors and helper components (rest of your component remains the same)
  const darkPurpleBg = 'bg-[#301934]';
  const inputBg = 'bg-[#3f2844]'; 
  const inputBorder = 'border-purple-600';
  const textWhite = 'text-white';
  const labelColor = 'text-gray-300';
  const businessTypes = ['Dealership', 'Distributorship', 'Super Stockist'];
  const investmentPlans = ['< ₹5 Lakh', '₹5 - ₹15 Lakh', '₹15 - ₹50 Lakh', '> ₹50 Lakh'];
  const states = ['Select your state', 'Maharashtra', 'Karnataka', 'Delhi', 'Uttar Pradesh']; 

  const FormInput = ({ id, label, placeholder, type = 'text', value, onChange, gridClass = 'col-span-1' }) => (
    <div className={gridClass}>
      <label htmlFor={id} className={`block text-sm font-medium mb-1 ${labelColor}`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-3 rounded-lg ${inputBg} ${textWhite} border ${inputBorder} focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150`}
      />
    </div>
  );

  const FormSelect = ({ id, label, options, value, onChange, gridClass = 'col-span-1' }) => (
    <div className={gridClass}>
      <label htmlFor={id} className={`block text-sm font-medium mb-1 ${labelColor}`}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`w-full p-3 rounded-lg appearance-none ${inputBg} ${textWhite} border ${inputBorder} focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 cursor-pointer`}
        >
          {options.map((option, index) => (
            <option 
              key={index} 
              value={option === 'Please choose an option' || option === 'Select your state' ? '' : option}
              disabled={index === 0 && (option === 'Please choose an option' || option === 'Select your state')}
            >
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${darkPurpleBg} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-extrabold text-white text-center mb-12 italic font-serif`}>
          Contact Campa Cola Today!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            
            {/* Form Fields using helper components and formData */}
            <FormInput id="firstName" label="First name" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange}/>
            <FormInput id="lastName" label="Last name" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange}/>
            <FormInput id="email" label="Your email" placeholder="Enter your email" type="email" value={formData.email} onChange={handleChange}/>
            <FormInput id="phone" label="Phone number" placeholder="9811XXXXXX" type="tel" value={formData.phone} onChange={handleChange}/>
            <FormSelect id="state" label="State" options={states} value={formData.state} onChange={handleChange}/>
            <FormInput id="city" label="City" placeholder="Enter your city" value={formData.city} onChange={handleChange}/>
            <FormInput id="streetAddress" label="Street Address" placeholder="Enter your street address (Road, Building, etc.)" value={formData.streetAddress} onChange={handleChange} gridClass="col-span-full"/>
            <FormInput id="landmark" label="Landmark" placeholder="Enter your landmark" value={formData.landmark} onChange={handleChange}/>
            <FormInput id="pincode" label="Pincode" placeholder="Enter your pincode" type="number" value={formData.pincode} onChange={handleChange}/>
            <FormSelect id="businessType" label="Business Types" options={['Please choose an option', ...businessTypes]} value={formData.businessType} onChange={handleChange}/>
            <FormSelect id="investmentPlan" label="Investment Plan" options={['Please choose an option', ...investmentPlans]} value={formData.investmentPlan} onChange={handleChange}/>
          </div>

          {/* Submit Button with Loading State */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={loading} // Disable button while loading
              className={`w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-xl transition duration-200 shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCampaCola;