// FormStep.js
import React from "react";

const FormStep = ({
    step,
    formData,
    handleChange,
    handleFileChange,
    nextStep,
    prevStep,
    handleConfirm,
    formSubmitted,
  }) => {
  switch (step) {
    case 1:
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Основные сведения</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="companyName" className="block font-semibold mb-2">Название компании</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Название компании"
            id="companyName"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="contactPerson" className="block font-semibold mb-2">Контактное лицо</label>
          <input
           type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            placeholder="Контактное лицо"
            id="contactPerson"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="investorType" className="block font-semibold mb-2">Тип инвестора</label>
          <select
            name="investorType"
            value={formData.investorType}
            onChange={handleChange}
            id="investorType"
            className="input-field"
          >
<option value="" disabled selected>Выбрать</option>
<option value="internationalCorporation">Международная корпорация</option>
<option value="familyBusiness">Семейный бизнес</option>
<option value="ventureFund">Венчурный фонд</option>

          </select>
        </div>

        <div>
          <label htmlFor="position" className="block font-semibold mb-2">Должность</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Должность"
            id="position"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="registrationCountry" className="block font-semibold mb-2">Страна регистрации</label>
          <select
            name="registrationCountry"
            value={formData.registrationCountry}
            onChange={handleChange}
            id="registrationCountry"
            className="input-field"
          >
<option value="" disabled selected>Выбрать</option>
<option value="kazakhstan">Казахстан</option>
<option value="usa">США</option>
<option value="germany">Германия</option>
<option value="china">Китай</option>
<option value="france">Франция</option>
<option value="japan">Япония</option>
<option value="india">Индия</option>
<option value="uk">Великобритания</option>
<option value="uae">ОАЭ</option>
<option value="russia">Россия</option>

          </select>
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-2">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            id="email"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-semibold mb-2">Телефон</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            id="phone"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="legalAddress" className="block font-semibold mb-2">Юридический адрес</label>
          <input
            type="text"
            name="legalAddress"
            value={formData.legalAddress}
            onChange={handleChange}
            placeholder="Юридический адрес"
            id="legalAddress"
            className="input-field"
          />
        </div>
      </div>

    </div>
  );
     
case 2:
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Инвестиционные приоритеты</h2>

      {/* Сектора интереса (мультивыбор) */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Сектора интереса</label>
        <select
          name="investmentSectors"
          value={formData.investmentSectors}
          onChange={handleChange}
          className="input-field"
        >
          <option value="" disabled selected>Выбрать</option>
          <option value="agrarian">Аграрный сектор</option>
          <option value="it">IT/Цифровые технологии</option>
          <option value="renewableEnergy">Возобновляемая энергетика</option>
          <option value="deepGrainProcessing">Глубокая переработка зерна</option>
        </select>
      </div>
      

      {/* Планируемый объём инвестиций */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Планируемый объём инвестиций</label>
        <select
          name="investmentAmount"
          value={formData.investmentAmount}
          onChange={handleChange}
          className="input-field"
        >
          <option value="" disabled selected>Выбрать</option>
          <option value="10-30">От 10 до 30 млн. USD</option>
          <option value="30-50">От 30 до 50 млн. USD</option>
          <option value="50-100">От 50 до 100 млн. USD</option>
        </select>
      </div>

      {/* Регион в Казахстане (мультивыбор) */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Регион в Казахстане</label>
        <select
          name="regionsInKazakhstan"
          value={formData.regionsInKazakhstan}
          onChange={handleChange}
          className="input-field"
        >
          <option value="" disabled selected>Выбрать</option>
          <option value="almatyRegion">Алматинская область</option>
          <option value="turkestanRegion">Туркестанская область</option>
          <option value="otherRegion">Другой регион</option>
        </select>
      </div>

    </div>
  );

  case 3:
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Предпочтения в сотрудничестве</h2>
      
      {/* Формат инвестиций */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Формат инвестиций</label>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="investmentTypeDirect"
            name="investmentType"
            value="Прямые инвестиции"
            checked={formData.investmentType === "Прямые инвестиции"}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="investmentTypeDirect" className="mr-6">Прямые инвестиции</label>
          
          <input
            type="radio"
            id="investmentTypeJointVenture"
            name="investmentType"
            value="Совместное предприятие"
            checked={formData.investmentType === "Совместное предприятие"}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="investmentTypeJointVenture">Совместное предприятие</label>
        </div>
      </div>

      {/* Доля участия */}
      <div className="mb-6">
        <label htmlFor="ownershipShare" className="block font-semibold mb-2">
          Доля участия
        </label>
        <input
          type="text"
          name="ownershipShare"
          id="ownershipShare"
          value={formData.ownershipShare}
          onChange={handleChange}
          placeholder="20-40%"
          className="input-field"
        />
      </div>

      {/* Ориентация на долгосрочные проекты */}
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            id="longTermProjects"
            name="longTermProjects"
            checked={formData.longTermProjects}
            onChange={handleChange}
            className="mr-2"
          />
          Ориентация на долгосрочные проекты
        </label>
      </div>
    </div>
  );

    
    case 4:
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Загрузка документов</h2>
          
          {/* Учредительные документы */}
          <div className="mb-6">
            <label htmlFor="foundingDocuments" className="block font-semibold mb-2">
              Учредительные документы
            </label>
            <div className="upload-box">
              <input
                type="file"
                name="foundingDocuments"
                id="foundingDocuments"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="foundingDocuments" className="upload-box-label">
                <div className="upload-box-text">
                  {formData.foundingDocuments ? (
                    <span>{formData.foundingDocuments.name}</span>
                  ) : (
                    "Перетащите или выберите файл"
                  )}
                </div>
              </label>
            </div>
          </div>
          
          {/* Финансовый отчет */}
          <div>
            <label htmlFor="financialReport" className="block font-semibold mb-2">
              Финансовый отчет
            </label>
            <div className="upload-box">
              <input
                type="file"
                name="financialReport"
                id="financialReport"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="financialReport" className="upload-box-label">
                <div className="upload-box-text">
                  {formData.financialReport ? (
                    <span>{formData.financialReport.name}</span>
                  ) : (
                    "Перетащите или выберите файл"
                  )}
                </div>
              </label>
            </div>
          </div>

          
        </div>
      );
    
      case 5:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Сегментационные вопросы</h2>
            
            {/* Опыт инвестирования в регионе */}
            <div className="mb-6">
              <label htmlFor="investmentExperience" className="block font-semibold mb-2">
                Опыт инвестирования в регионе
              </label>
              <select
                name="investmentExperience"
                id="investmentExperience"
                value={formData.investmentExperience}
                onChange={handleChange}
                className="input-field"
              >
                <option value="" disabled selected>Выбрать</option>
                <option value="Есть опыт">Есть опыт</option>
                <option value="Нет опыта">Нет опыта</option>
              </select>
            </div>
            
            {/* Наличие локального представительства */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Наличие локального представительства</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="localRepresentationYes"
                  name="localRepresentation"
                  value="Да"
                  checked={formData.localRepresentation === "Да"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="localRepresentationYes" className="mr-6">Да</label>
                
                <input
                  type="radio"
                  id="localRepresentationNo"
                  name="localRepresentation"
                  value="Нет"
                  checked={formData.localRepresentation === "Нет"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="localRepresentationNo">Нет</label>
              </div>
            </div>
      
            {/* Сроки начала инвестиций */}
            <div>
              <label htmlFor="investmentStartDate" className="block font-semibold mb-2">
                Сроки начала инвестиций
              </label>
              <input
                type="text"
                name="investmentStartDate"
                id="investmentStartDate"
                value={formData.investmentStartDate}
                onChange={handleChange}
                placeholder="2 квартал 2025"
                className="input-field"
              />
            </div>

          </div>
        );
        case 6:
          return (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Подтверждение</h2>
              <p className="mb-4">Пожалуйста, проверьте введенные данные:</p>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {/* Step 1: Основные сведения */}
                <div>
                  <h3 className="font-semibold">Основные сведения</h3>
                    <p><strong>Название компании:</strong> {formData.companyName}</p>
                    <p><strong>Контактное лицо:</strong> {formData.contactPerson}</p>
                    <p><strong>Тип инвестора:</strong> {formData.investorType || "Не указан"}</p>
                    <p><strong>Должность:</strong> {formData.position}</p>
                    <p><strong>Страна регистрации:</strong> {formData.registrationCountry || "Не указана"}</p>
                    <p><strong>E-mail:</strong> {formData.email}</p>
                    <p><strong>Телефон:</strong> {formData.phone}</p>
                    <p><strong>Юридический адрес:</strong> {formData.legalAddress}</p>
                </div>
        
                {/* Step 2: Инвестиционные приоритеты */}
                <div>
                  <h3 className="font-semibold">Инвестиционные приоритеты</h3>
                  <p><strong>Инвестиционные приоритеты:</strong> {formData.investmentPriorities || "Не указаны"}</p>
                  <p><strong>Сектора интереса:</strong> {formData.interestSectors || "Не указаны"}</p>
                  <p><strong>Планируемый объём инвестиций:</strong> {formData.investmentAmount || "Не указан"}</p>
                  <p><strong>Регион в Казахстане:</strong> {formData.investmentRegion || "Не указан"}</p>
                </div>
        
                {/* Step 3: Предпочтения в сотрудничестве */}
                <div>
                  <h3 className="font-semibold">Предпочтения в сотрудничестве</h3>
                  <p><strong>Формат инвестиций:</strong> {formData.investmentType || "Не указан"}</p>
                  <p><strong>Доля участия:</strong> {formData.ownershipShare || "Не указана"}</p>
                  <p><strong>Ориентация на долгосрочные проекты:</strong> {formData.longTermProjects ? "Да" : "Нет"}</p>
                </div>
        
                {/* Step 4: Загрузка документов */}
                <div>
                  <h3 className="font-semibold">Загрузка документов</h3>
                  <p><strong>Учредительные документы:</strong> {formData.documents ? "Загружены" : "Не загружены"}</p>
                  <p><strong>Финансовый отчет:</strong> {formData.documents ? "Загружен" : "Не загружен"}</p>
                </div>
        
                {/* Step 5: Сегментационные вопросы */}
                <div>
                  <h3 className="font-semibold">Сегментационные вопросы</h3>
                  <p><strong>Опыт инвестирования в регионе:</strong> {formData.investmentExperience || "Не указан"}</p>
                  <p><strong>Наличие локального представительства:</strong> {formData.localRepresentation || "Не указано"}</p>
                  <p><strong>Сроки начала инвестиций:</strong> {formData.investmentStartDate || "Не указаны"}</p>
                </div>
              </div>

            </div>
          );
    default:
      return <div>Invalid step</div>;
  }
};

export default FormStep;
