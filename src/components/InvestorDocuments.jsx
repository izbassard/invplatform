import React, { useState, useEffect } from "react";
import { Settings, LogOut, Search, Upload } from "lucide-react"; // Assuming you're using react-feather for icons

const InvestorDocuments = ({ sector }) => {
  // Map sectors to their respective documents
  const sectorDocuments = {
    agrarian: [
      {
        name: "Лицензия на сельскохозяйственную деятельность",
        authority: "Министерство сельского хозяйства",
        duration: "14 дней",
        lastUpdated: "12.01.2025",
        status: "Требует действий",
      },
      {
        name: "Разрешение на использование земельного участка",
        authority: "Министерство сельского хозяйства",
        duration: "7 дней",
        lastUpdated: "10.01.2025",
        status: "Требует действий",
      },
      {
        name: "Экологическая экспертиза для сельского хозяйства",
        authority: "Министерство экологии, геологии и ПР",
        duration: "21 день",
        lastUpdated: "11.01.2025",
        status: "Требует действий",
      },
    ],
    it: [
      {
        name: "Лицензия на IT-деятельность",
        authority: "Министерство цифрового развития",
        duration: "10 дней",
        lastUpdated: "12.01.2025",
        status: "Требует действий",
      },
      {
        name: "Регистрация программного обеспечения",
        authority: "Министерство юстиции",
        duration: "5 дней",
        lastUpdated: "10.01.2025",
        status: "Требует действий",
      },
      {
        name: "Сертификация кибербезопасности",
        authority: "Комитет национальной безопасности",
        duration: "30 дней",
        lastUpdated: "11.01.2025",
        status: "Требует действий",
      },
    ],
    renewableEnergy: [
      {
        name: "Лицензия на строительство солнечной электростанции",
        authority: "Комитет индустрии и инфраструктуры",
        duration: "14 дней",
        lastUpdated: "12.01.2025",
        status: "Требует действий",
      },
      {
        name: "Разрешение на использование земельного участка",
        authority: "Министерство сельского хозяйства",
        duration: "7 дней",
        lastUpdated: "10.01.2025",
        status: "Требует действий",
      },
      {
        name: "Экологическая экспертиза",
        authority: "Министерство экологии, геологии и ПР",
        duration: "21 день",
        lastUpdated: "11.01.2025",
        status: "Требует действий",
      },
    ],
    deepGrainProcessing: [
      {
        name: "Лицензия на глубокую переработку зерна",
        authority: "Министерство сельского хозяйства",
        duration: "14 дней",
        lastUpdated: "12.01.2025",
        status: "Требует действий",
      },
      {
        name: "Сертификация качества продукции",
        authority: "Комитет технического регулирования",
        duration: "10 дней",
        lastUpdated: "10.01.2025",
        status: "Требует действий",
      },
      {
        name: "Экологическая экспертиза",
        authority: "Министерство экологии, геологии и ПР",
        duration: "21 день",
        lastUpdated: "11.01.2025",
        status: "Требует действий",
      },
    ],
  };

  // Map sectors to their respective businesses
  const sectorBusinesses = {
    agrarian: [
      {
        name: "АлиаАгро-БИО",
        description: "Фермерское хозяйство по выращиванию органических яблок. Есть земли, орошение, склады.",
        location: "Алматинская область",
        investment: "$5 млн",
        level: "Level 3",
      },
      {
        name: "Зеленый Урожай",
        description: "Производство органических овощей и фруктов.",
        location: "Туркестанская область",
        investment: "$3 млн",
        level: "Level 2",
      },
      {
        name: "Эко-Ферма",
        description: "Выращивание экологически чистых зерновых культур.",
        location: "Акмолинская область",
        investment: "$4 млн",
        level: "Level 2",
      },
      {
        name: "Био-Поля",
        description: "Производство органической пшеницы и ячменя.",
        location: "Костанайская область",
        investment: "$6 млн",
        level: "Level 3",
      },
    ],
    it: [
      {
        name: "TechSolutions",
        description: "Разработка программного обеспечения для бизнеса.",
        location: "Нур-Султан",
        investment: "$2 млн",
        level: "Level 2",
      },
      {
        name: "CodeCraft",
        description: "Создание мобильных приложений и веб-платформ.",
        location: "Алматы",
        investment: "$1.5 млн",
        level: "Level 1",
      },
      {
        name: "DataSecure",
        description: "Услуги по кибербезопасности и защите данных.",
        location: "Шымкент",
        investment: "$3 млн",
        level: "Level 3",
      },
      {
        name: "CloudNet",
        description: "Облачные решения для хранения и обработки данных.",
        location: "Актобе",
        investment: "$2.5 млн",
        level: "Level 2",
      },
    ],
    renewableEnergy: [
      {
        name: "Green Valley Solar Park",
        description: "Проект по строительству солнечной электростанции мощностью 50 МВт.",
        location: "Алматинская область",
        investment: "$15 млн",
        level: "Level 2",
      },
      {
        name: "WindPower Kazakhstan",
        description: "Строительство ветряных электростанций в Жамбылской области.",
        location: "Жамбылская область",
        investment: "$20 млн",
        level: "Level 3",
      },
      {
        name: "SolarTech",
        description: "Разработка и установка солнечных панелей для частного сектора.",
        location: "Карагандинская область",
        investment: "$10 млн",
        level: "Level 2",
      },
      {
        name: "EcoEnergy",
        description: "Производство биотоплива из сельскохозяйственных отходов.",
        location: "Павлодарская область",
        investment: "$12 млн",
        level: "Level 3",
      },
    ],
    deepGrainProcessing: [
      {
        name: "GrainPro",
        description: "Переработка зерна в муку и другие продукты.",
        location: "Северо-Казахстанская область",
        investment: "$8 млн",
        level: "Level 3",
      },
      {
        name: "BioFlour",
        description: "Производство органической муки и круп.",
        location: "Акмолинская область",
        investment: "$7 млн",
        level: "Level 2",
      },
      {
        name: "GoldenGrain",
        description: "Переработка зерна в корма для животных.",
        location: "Костанайская область",
        investment: "$6 млн",
        level: "Level 2",
      },
      {
        name: "AgroMill",
        description: "Производство муки и макаронных изделий.",
        location: "Алматинская область",
        investment: "$9 млн",
        level: "Level 3",
      },
    ],
  };

  const sectorFullNames = {
    agrarian: "Аграрный сектор",
    it: "IT/Цифровые технологии",
    renewableEnergy: "Возобновляемая энергетика",
    deepGrainProcessing: "Глубокая переработка зерна",
  };
  

  // Get the documents for the selected sector
  const [documents, setDocuments] = useState(sectorDocuments[sector] || []);
  const [loading, setLoading] = useState(false);
  const [uploadedDoc, setUploadedDoc] = useState(null);
  const [allDocumentsUploaded, setAllDocumentsUploaded] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  // Simulate document upload
  const handleUpload = (index) => {
    setLoading(true);
    setUploadedDoc(null);

    // Simulate a 2-second loading delay
    setTimeout(() => {
      const updatedDocuments = [...documents];
      updatedDocuments[index].status = "В обработке"; // Update status
      setDocuments(updatedDocuments);

      setLoading(false);
      setUploadedDoc(documents[index].name); // Show success message

      // Check if all documents are uploaded
      if (updatedDocuments.every((doc) => doc.status === "В обработке")) {
        setAllDocumentsUploaded(true);
      }
    }, 2000);
  };

  // Filter businesses by sector
  const filteredBusinesses = sectorBusinesses[sector] || [];
  

  // Render the catalog if all documents are uploaded and the user clicks the button
  if (showCatalog) {
    return (
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Каталог</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100">
              <LogOut className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex items-center bg-white rounded-lg shadow-sm p-3">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Поиск проектов..."
              className="flex-1 outline-none"
            />
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredBusinesses.map((business, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                <h2 className="text-xl font-semibold text-gray-800">
                {business.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                {sectorFullNames[sector]}
                </p>
                </div>
                <span className={`bg-${business.level === "Level 3" ? "green" : "blue"}-100 text-${business.level === "Level 3" ? "green" : "blue"}-600 px-3 py-1 rounded-full text-sm font-semibold`}>
                  {business.level}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">
                  {business.description}
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{business.location}</span>
                  <span className="text-sm text-gray-600">{business.investment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render the documents table if not all documents are uploaded
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Список требуемых разрешений для сектора: {sectorFullNames[sector]}
        </h2>


      {/* Success message */}
      {uploadedDoc && (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
          Документ "{uploadedDoc}" успешно загружен!
        </div>
      )}

{/* Loading overlay */}
{loading && (

    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
      {/* Spinner animation */}
      <div className="spinner-border animate-spin border-t-4 border-blue-600 border-solid rounded-full w-16 h-16 mb-4"></div>
      <p className="text-lg font-semibold text-blue-600">Загрузка документа...</p>
    </div>
  
)}


      {/* Show message and button when all documents are uploaded */}
      {allDocumentsUploaded && (
        <div className="bg-blue-100 text-blue-700 p-4 rounded-lg mb-4">
          <p className="text-lg font-semibold">
            Все документы успешно загружены!
          </p>
          <button
            onClick={() => setShowCatalog(true)}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Перейти в каталог
          </button>
        </div>
      )}

      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <th className="py-3 px-6">Название разрешения</th>
            <th className="py-3 px-6">Госорган</th>
            <th className="py-3 px-6">Срок исполнения</th>
            <th className="py-3 px-6">Последнее обновление</th>
            <th className="py-3 px-6">Статус</th>
            <th className="py-3 px-6">Действия</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {documents.map((doc, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-6">{doc.name}</td>
              <td className="py-3 px-6">{doc.authority}</td>
              <td className="py-3 px-6">{doc.duration}</td>
              <td className="py-3 px-6">{doc.lastUpdated}</td>
              <td className="py-3 px-6">
                <span
                  className={`px-3 py-1 rounded-full ${
                    doc.status === "В обработке"
                      ? "text-yellow-500 bg-yellow-100"
                      : "text-red-500 bg-red-100"
                  }`}
                >
                  {doc.status}
                </span>
              </td>
              <td className="py-3 px-6">
              <button
  onClick={() => handleUpload(index)}
  className="text-blue-600 hover:text-blue-800"
  disabled={loading || doc.status === "В обработке"}
>
  <Upload className="w-5 h-5" /> {/* Add the Upload icon */}
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestorDocuments;