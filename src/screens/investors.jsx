const Investors = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600">Investors Dashboard</h1>
      <p className="mt-4 text-gray-700 text-lg">
        Explore business opportunities and make impactful investments.
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
          Browse Opportunities
        </button>
        <button className="px-6 py-3 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition">
          View My Investments
        </button>
      </div>
    </div>
  );
};

export default Investors;
