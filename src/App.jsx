import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from './components/sidebar';
import FormStep from './components/FormStep';
import InvestorDocuments from './components/InvestorDocuments';
import BusinessFormStep from './components/BusinessFormStep';

// Importing icons used in InvestorCatalog
import { Search, Settings, LogOut} from "lucide-react"; 

import './App.css';

function App() {
  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar /> {/* Fixed Sidebar */}
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto"> {/* Add ml-64 and overflow-y-auto */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/investor" element={<InvestorForm />} />
            <Route path="/business" element={<BusinessForm />} />
            <Route path="/investor-catalog" element={<InvestorCatalog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
      <h1 className="text-2xl font-bold mb-8"></h1>
      <div className="flex space-x-4">
        <Link to="/investor">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
          Для инвесторов
          </button>
        </Link>
        <Link to="/business">
          <button className="bg-green-600 text-white px-6 py-3 rounded-md">
          Для бизнеса
          </button>
        </Link>
      </div>
    </div>
  );
}

function InvestorForm() {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: e.target.files[0] });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleConfirm = () => {
    setFormSubmitted(true);
  };

  const stepNames = [
    "Основные сведения",
    "Инвестиционные приоритеты",
    "Предпочтения в сотрудничестве",
    "Загрузка документов",
    "Сегментационные вопросы",
    "Подтверждение",
  ];

  return (
    <div className="flex-1 bg-white shadow-lg rounded-xl m-4 p-8">
      {!formSubmitted && (
        <div className="flex justify-between mb-6">
          {stepNames.map((name, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                step === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setStep(index + 1)}
            >
              {name}
            </div>
          ))}
        </div>
      )}

      <div className="mb-6">
        {formSubmitted ? (
          <InvestorDocuments sector={formData.investmentSectors} />
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

      {!formSubmitted && (
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
            >
              Назад
            </button>
          )}
          {step < stepNames.length && (
            <button
              onClick={nextStep}
              className="bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Далее
            </button>
          )}
          {step === stepNames.length && (
            <button
              onClick={handleConfirm}
              className="bg-green-600 text-white px-6 py-2 rounded-md"
            >
              Подтвердить
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function BusinessForm() {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [scoringResult, setScoringResult] = useState("");
  const [typewriterText, setTypewriterText] = useState("");
  const [showTypewriter, setShowTypewriter] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: e.target.files[0] });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleConfirm = () => {
    setIsLoading(true);
    setFormSubmitted(true);
  
    const scoringMessages = [
      "Анализ финансовых показателей...",
      "Оценка рисков...",
      "Проверка документации...",
      "Анализ команды...",
      "Оценка инфраструктуры...",
      "Расчет рейтинга...",
    ];
  
    let currentMessageIndex = 0;
  
    const interval = setInterval(() => {
      if (currentMessageIndex < scoringMessages.length) {
        setLoadingText(scoringMessages[currentMessageIndex]);
        currentMessageIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1500); // Change message every 1.5 seconds
  
    setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
      setScoringResult("75/100 (Level 2)");
      setShowTypewriter(true); // Start typewriter effect
    }, 10000); // Stop loading after 10 seconds
  };
  
  

  // Typewriter effect for scoring explanation
  useEffect(() => {
    if (showTypewriter) {
      const scoringExplanation = `
Ваш проект получил оценку 75 из 100, что соответствует Level 2.

Основные результаты скоринга:

Финансовые показатели: Ваши финансовые данные демонстрируют стабильность и умеренный потенциал роста. Однако, есть возможности для улучшения в области рентабельности и управления затратами.

Команда: Ваша команда обладает необходимым опытом и навыками для реализации проекта. Уровень квалификации участников оценивается как высокий.

Риски: Выявлены умеренные риски, связанные с рыночной конкуренцией и внешними экономическими факторами. Эти риски находятся в допустимых пределах, но требуют внимания.

Инфраструктура: Инфраструктура проекта соответствует заявленным целям, но есть возможности для оптимизации и расширения.

Документация: Предоставленные документы полны и соответствуют требованиям, однако некоторые разделы требуют более детальной проработки.

Итог: Ваш проект обладает хорошим потенциалом и соответствует Level 2. Это означает, что проект привлекателен для инвесторов, но может потребовать дополнительной проработки для достижения более высокого рейтинга.
      `;

      let index = 0;
      const typewriterInterval = setInterval(() => {
        if (index < scoringExplanation.length) {
          setTypewriterText((prev) => prev + scoringExplanation[index]);
          index++;
        } else {
          clearInterval(typewriterInterval);
        }
      }, 30); // Adjust speed of typing here

      return () => clearInterval(typewriterInterval);
    }
  }, [showTypewriter]);

  const stepNames = [
    "Общая информация",
    "Описание проекта",
    "Документация",
    "Финансовые показатели",
    "Инфраструктура",
    "Команда",
    "Риски и факторы успеха",
  ];

  return (
    <div className="flex-1 bg-white shadow-lg rounded-xl m-4 p-8">
      {!formSubmitted && (
        <div className="flex justify-between mb-6">
          {stepNames.map((name, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                step === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setStep(index + 1)}
            >
              {name}
            </div>
          ))}
        </div>
      )}

      <div className="mb-6">
        {formSubmitted ? (
          isLoading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-lg text-gray-700">{loadingText}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              {/* Stunning Scoring Result UI */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Скоринг завершен
                </h2>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full inline-block">
                  <span className="text-2xl font-bold">75/100</span>
                  <span className="ml-2 text-lg font-semibold">(Level 2)</span>
                </div>
              </div>

              {/* Typewriter Effect for Scoring Explanation */}
              {showTypewriter && (
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl w-full text-left animate-slide-up">
                  <p className="text-gray-700 whitespace-pre-line">
                    {typewriterText}
                  </p>
                </div>
              )}

              {/* Button to Proceed */}
              <Link to={`/investor-catalog?industry=${formData.industry}`}>
                <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                  Перейти в каталог инвесторов
                </button>
              </Link>
            </div>
          )
        ) : (
          <BusinessFormStep
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

      {!formSubmitted && (
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
            >
              Назад
            </button>
          )}
          {step < stepNames.length && (
            <button
              onClick={nextStep}
              className="bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Далее
            </button>
          )}
          {step === stepNames.length && (
            <button
              onClick={handleConfirm}
              className="bg-green-600 text-white px-6 py-2 rounded-md"
            >
              Подтвердить
            </button>
          )}
        </div>
      )}
    </div>
  );
}


import { useLocation } from "react-router-dom";

function InvestorCatalog() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedIndustry = queryParams.get("industry");

  const industrySectorMapping = {
    agrarian: "Аграрный сектор",
    it: "IT/Цифровые технологии",
    renewableEnergy: "Возобновляемая энергетика",
    deepGrainProcessing: "Глубокая переработка зерна",
  };

  const investors = [
    // Agrarian Sector
    {
      name: "АО «Казахстанские инвестиции»",
      sector: "agrarian",
      description: "Крупный инвестор, специализирующийся на сельскохозяйственных проектах. Инвестирует в органическое земледелие и переработку сельхозпродукции.",
      region: "Алматинская область",
      investmentAmount: "$20 млн",
      level: "Level 3",
    },
    {
      name: "ТОО «Агро-Инвест»",
      sector: "agrarian",
      description: "Инвестирует в проекты по выращиванию зерновых и животноводству. Имеет опыт работы с крупными фермерскими хозяйствами.",
      region: "Акмолинская область",
      investmentAmount: "$15 млн",
      level: "Level 2",
    },
    // IT/Digital Technologies
    {
      name: "ИП «Цифровые решения»",
      sector: "it",
      description: "Инвестор в сфере IT-стартапов и цифровых технологий. Поддерживает проекты в области искусственного интеллекта и блокчейна.",
      region: "Нур-Султан",
      investmentAmount: "$10 млн",
      level: "Level 1",
    },
    {
      name: "ТОО «TechVentures»",
      sector: "it",
      description: "Инвестирует в стартапы, связанные с облачными технологиями, SaaS и кибербезопасностью.",
      region: "Алматы",
      investmentAmount: "$25 млн",
      level: "Level 2",
    },
    // Renewable Energy
    {
      name: "ТОО «GreenTech Ventures»",
      sector: "renewableEnergy",
      description: "Инвестирует в проекты солнечной и ветровой энергетики. Имеет опыт реализации проектов мощностью до 100 МВт.",
      region: "Туркестанская область",
      investmentAmount: "$50 млн",
      level: "Level 2",
    },
    {
      name: "АО «Эко-Энергия»",
      sector: "renewableEnergy",
      description: "Специализируется на проектах в области гидроэнергетики и биотоплива.",
      region: "Восточно-Казахстанская область",
      investmentAmount: "$40 млн",
      level: "Level 3",
    },
    // Deep Grain Processing
    {
      name: "АО «Эко-Агро»",
      sector: "deepGrainProcessing",
      description: "Специализируется на проектах глубокой переработки зерна и производства биотоплива. Имеет собственные мощности для переработки.",
      region: "Актюбинская область",
      investmentAmount: "$30 млн",
      level: "Level 2",
    },
    {
      name: "ТОО «Зерно-Инвест»",
      sector: "deepGrainProcessing",
      description: "Инвестирует в проекты по переработке зерна в муку, крупы и другие продукты.",
      region: "Северо-Казахстанская область",
      investmentAmount: "$20 млн",
      level: "Level 1",
    },
  ];

  // Filter investors based on the selected industry
  const filteredInvestors = selectedIndustry
    ? investors.filter((investor) => investor.sector === selectedIndustry)
    : investors;

  return (
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Каталог инвесторов</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100">
            <LogOut className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center bg-white rounded-lg shadow-sm p-3">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Поиск инвесторов..."
            className="flex-1 outline-none"
          />
        </div>
      </div>
      <div className="space-y-6">
        {filteredInvestors.map((investor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {investor.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {industrySectorMapping[investor.sector]}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  investor.level === "Level 1"
                    ? "bg-green-100 text-green-600"
                    : investor.level === "Level 2"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                {investor.level}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">{investor.description}</p>
              <div className="mt-4 flex items-center space-x-4">
                <span className="text-sm text-gray-600">{investor.region}</span>
                <span className="text-sm text-gray-600">
                  {investor.investmentAmount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;