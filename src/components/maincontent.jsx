// src/components/MainContent.js
import { useState } from 'react';
import FormStep from './investor_steps'; // Import the FormStep component
import InvestorDocuments from './investor-documents'; // Import the InvestorDocuments component

function MainContent() {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);  // Track form submission status
  const [formData, setFormData] = useState({
    companyName: 'Global Invest Partners Ltd.',
    contactPerson: 'Иван Петров',
    investorType: '',
    position: 'Региональный директор по инвестициям',
    registrationCountry: '',
    email: 'Lpertov@gb.com',
    phone: '+65 6123 4567',
    legalAddress: '10 Anson Road, #18-04, Singapore 079803',
    investmentPriorities: '',
    cooperationPreferences: '',
    documents: null,
    settlementQuestions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: e.target.files[0] });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Set the form as submitted
  const handleConfirm = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="flex-1 bg-white shadow-lg rounded-xl m-4 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Регистрация инвестора</h1>
      <div className="flex justify-between mb-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ${
              step === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            Шаг {index + 1}
          </div>
        ))}
      </div>

      <div className="mb-6">
        {/* Conditional rendering based on form submission */}
        {formSubmitted ? (
          <InvestorDocuments />
        ) : (
          <FormStep
            step={step}
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            nextStep={nextStep}
            prevStep={prevStep}
            handleConfirm={handleConfirm}
            formSubmitted={formSubmitted}
          />
        )}
      </div>
      
    </div>
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
          {step > 1 && !formSubmitted && (
            <button onClick={prevStep} className="btn-secondary">
              Назад
            </button>
          )}
          {step < 6 && !formSubmitted && (
            <button onClick={nextStep} className="btn-primary">
              Далее
            </button>
          )}
          {step === 6 && !formSubmitted && (
            <button
              onClick={handleConfirm}
              className="btn-primary bg-green-600 hover:bg-green-700"
            >
              Подтвердить
            </button>
          )}
        </div>
  );
}

export default MainContent;
