export default function StatsSection() {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Apps That Shape the World Are Built on Appy Pie
            </h1>
            <div className="text-blue-600 text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
              300000+
            </div>
            <p className="text-gray-600 text-lg">
              companies drive transformation with Appy Pie
            </p>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            {/* Statistic Block 1 */}

            <div className="flex-1 gap-5 border-l-2 border-gray-300 pl-10 pt-14">
              <div className="text-blue-600 text-5xl font-bold">25+</div>
              <p className="text-gray-600 text-lg">
                Countries have companies that build effective apps using Appy
                Pie
              </p>
            </div>

            {/* Statistic Block 2 */}

            <div className="flex-1 gap-5 border-l-2 border-gray-300 pl-10 pt-14">
              <div className="text-blue-600 text-5xl font-bold">3%</div>
              <p className="text-gray-600 text-lg">
                Fortune 500 companies create apps with Appy Pie
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
