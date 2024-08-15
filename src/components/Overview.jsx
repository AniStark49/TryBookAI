import PropTypes from "prop-types";


const Overview = ( {isDarkMode }) => {
  console.log(
    "overview",isDarkMode
  )
  return (
    <section
      id="overview"
      className={`mt-6 max-w-[1000px] mx-auto mb-8 px-16 pb-8 rounded-lg shadow-lg border ${
        isDarkMode
          ? 'bg-[#1e293b] text-[#e2e8f0] border-[#334155]'
          : 'bg-white text-[#1e293b] border-gray-300'
      }`}
      style={{ 'sectionbg': isDarkMode ? '#1e293b' : '#fff' }}
    >
      <h2
        className="mt-8 text-2xl font-bold"
        style={{ color: isDarkMode ? '#a5b4fc' : '#6366f1' }}
      >
        Overview
      </h2>
      <p className="mt-4">
        The Book Generator API allows you to generate books on various topics
        using different language models. This documentation provides details on
        how to use the API, including authentication, available endpoints, and
        code examples.
      </p>
    </section>
  );
};

Overview.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Overview;
