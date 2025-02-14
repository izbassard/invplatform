import React from "react";

const BusinessFormStep = ({
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
          <h2 className="text-2xl font-semibold mb-4">Общая информация</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Название проекта */}
            <div>
              <label htmlFor="projectName" className="block font-semibold mb-2">
                Название проекта
              </label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="Название проекта"
                id="projectName"
                className="input-field"
              />
            </div>

            {/* Сфера деятельности */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Сфера деятельности</label>
              <select
                name="industry"
                value={formData.industry}
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

            {/* Юридический статус */}
            <div>
              <label htmlFor="legalStatus" className="block font-semibold mb-2">
                Юридический статус
              </label>
              <select
                name="legalStatus"
                value={formData.legalStatus}
                onChange={handleChange}
                id="legalStatus"
                className="input-field"
              >
                <option value="" disabled selected>Выбрать</option>
                <option value="">Выберите статус</option>
                <option value="ТОО">ТОО</option>
                <option value="ИП">ИП</option>
              </select>
            </div>

            {/* Локация */}
            <div>
              <label htmlFor="location" className="block font-semibold mb-2">
                Локация
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Локация"
                id="location"
                className="input-field"
              />
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Описание проекта</h2>
          <div className="space-y-4">
            {/* Цель проекта */}
            <div>
              <label htmlFor="projectGoal" className="block font-semibold mb-2">
                Цель проекта
              </label>
              <textarea
                name="projectGoal"
                value={formData.projectGoal}
                onChange={handleChange}
                placeholder="Цель проекта"
                id="projectGoal"
                className="input-field"
              />
            </div>

            {/* Масштаб */}
            <div>
              <label htmlFor="projectScale" className="block font-semibold mb-2">
                Масштаб
              </label>
              <textarea
                name="projectScale"
                value={formData.projectScale}
                onChange={handleChange}
                placeholder="Масштаб"
                id="projectScale"
                className="input-field"
              />
            </div>

            {/* Ожидаемый объём инвестиций */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Ожидаемый объём инвестиций</label>
              <select
                name="investmentAmount"
                value={formData.investmentAmount}
                onChange={handleChange}
                className="input-field"
              >
                <option value="" disabled selected>Выбрать</option>
                <option value="">Выберите объём инвестиций</option>
                <option value="10-30">От 10 до 30 млн. USD</option>
                <option value="30-50">От 30 до 50 млн. USD</option>
                <option value="50-100">От 50 до 100 млн. USD</option>
              </select>
             </div>

            {/* Сроки */}
            <div>
              <label htmlFor="projectTimeline" className="block font-semibold mb-2">
                Сроки
              </label>
              <input
                type="text"
                name="projectTimeline"
                value={formData.projectTimeline}
                onChange={handleChange}
                placeholder="Сроки"
                id="projectTimeline"
                className="input-field"
              />
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Документация</h2>
          <div className="space-y-4">
            {/* Наличие ТЭО */}
            <div>
              <label className="block font-semibold mb-2">Наличие ТЭО</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="teoYes"
                  name="hasTeo"
                  value="Да"
                  checked={formData.hasTeo === "Да"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="teoYes" className="mr-6">Да</label>
                <input
                  type="radio"
                  id="teoNo"
                  name="hasTeo"
                  value="Нет"
                  checked={formData.hasTeo === "Нет"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="teoNo">Нет</label>
              </div>
            </div>

            {/* Загрузка файла ТЭО */}
            {formData.hasTeo === "Да" && (
              <div>
                <label htmlFor="teoFile" className="block font-semibold mb-2">
                  Загрузить ТЭО
                </label>
                <input
                  type="file"
                  name="teoFile"
                  id="teoFile"
                  onChange={handleFileChange}
                  className="input-field"
                />
              </div>
            )}

            {/* Наличие лицензий */}
            <div>
              <label className="block font-semibold mb-2">Наличие лицензий</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="licensesYes"
                  name="hasLicenses"
                  value="Есть"
                  checked={formData.hasLicenses === "Есть"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="licensesYes" className="mr-6">Есть</label>
                <input
                  type="radio"
                  id="licensesNo"
                  name="hasLicenses"
                  value="Нет"
                  checked={formData.hasLicenses === "Нет"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="licensesNo">Нет</label>
              </div>
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Финансовые показатели</h2>
          <div className="space-y-4">
            {/* Текущая выручка */}
            <div>
              <label htmlFor="revenue" className="block font-semibold mb-2">
                Текущая выручка
              </label>
              <input
                type="text"
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                placeholder="Текущая выручка"
                id="revenue"
                className="input-field"
              />
            </div>

            {/* Прибыль */}
            <div>
              <label htmlFor="profit" className="block font-semibold mb-2">
                Прибыль
              </label>
              <input
                type="text"
                name="profit"
                value={formData.profit}
                onChange={handleChange}
                placeholder="Прибыль"
                id="profit"
                className="input-field"
              />
            </div>

            {/* Инвестиции от учредителей */}
            <div>
              <label htmlFor="founderInvestment" className="block font-semibold mb-2">
                Инвестиции от учредителей
              </label>
              <input
                type="text"
                name="founderInvestment"
                value={formData.founderInvestment}
                onChange={handleChange}
                placeholder="Инвестиции от учредителей"
                id="founderInvestment"
                className="input-field"
              />
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Инфраструктура</h2>
          <div className="space-y-4">
            {/* Земля */}
            <div>
              <label htmlFor="land" className="block font-semibold mb-2">
                Земля
              </label>
              <input
                type="text"
                name="land"
                value={formData.land}
                onChange={handleChange}
                placeholder="Земля"
                id="land"
                className="input-field"
              />
            </div>

            {/* Коммуникации */}
            <div>
              <label htmlFor="utilities" className="block font-semibold mb-2">
                Коммуникации
              </label>
              <input
                type="text"
                name="utilities"
                value={formData.utilities}
                onChange={handleChange}
                placeholder="Коммуникации"
                id="utilities"
                className="input-field"
              />
            </div>

            {/* Логистика */}
            <div>
              <label htmlFor="logistics" className="block font-semibold mb-2">
                Логистика
              </label>
              <input
                type="text"
                name="logistics"
                value={formData.logistics}
                onChange={handleChange}
                placeholder="Логистика"
                id="logistics"
                className="input-field"
              />
            </div>
          </div>
        </div>
      );

    case 6:
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Команда</h2>
          <div className="space-y-4">
            {/* Руководитель */}
            <div>
              <label htmlFor="leader" className="block font-semibold mb-2">
                Руководитель
              </label>
              <input
                type="text"
                name="leader"
                value={formData.leader}
                onChange={handleChange}
                placeholder="Руководитель"
                id="leader"
                className="input-field"
              />
            </div>

            {/* Численность команды */}
            <div>
              <label htmlFor="teamSize" className="block font-semibold mb-2">
                Численность команды
              </label>
              <input
                type="number"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                placeholder="Численность команды"
                id="teamSize"
                className="input-field"
              />
            </div>
          </div>
        </div>
      );

    case 7:
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Риски и факторы успеха</h2>
          <div className="space-y-4">
            {/* Основные риски */}
            <div>
              <label htmlFor="risks" className="block font-semibold mb-2">
                Основные риски
              </label>
              <textarea
                name="risks"
                value={formData.risks}
                onChange={handleChange}
                placeholder="Основные риски"
                id="risks"
                className="input-field"
              />
            </div>

            {/* Факторы успеха */}
            <div>
              <label htmlFor="successFactors" className="block font-semibold mb-2">
                Факторы успеха
              </label>
              <textarea
                name="successFactors"
                value={formData.successFactors}
                onChange={handleChange}
                placeholder="Факторы успеха"
                id="successFactors"
                className="input-field"
              />
            </div>
          </div>
        </div>
      );
    default:
      return <div>Invalid step</div>;
  }
};

export default BusinessFormStep;