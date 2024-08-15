import PropTypes from "prop-types";


const Tutorial = ({isDarkMode}) => {
  return (
    <section id="tutorial" className={`max-w-[1000px] mx-auto top-8 p-8 mb-8 rounded-lg shadow-lg border ${
      isDarkMode
        ? 'bg-[#1e293b] text-[#e2e8f0] border-[#334155]'
        : 'bg-white text-[#1e293b] border-gray-300'
    }`}
    style={{ 'sectionbg': isDarkMode ? '#1e293b' : '#fff' }}
  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4 text-secondary" style={{ color: isDarkMode ? '#a5b4fc' : '#6366f1' }}>Tutorial</h2>
        <ol className="space-y-4">
          <li className="font-semibold">
            <p className=" text-secondary " style={{ color: isDarkMode ? '#a5b4fc' : '#6366f1' }}>Step 1: Obtain an API Key</p>
            <p className="font-normal ">
              Generate an API key using the button in the Authentication section above.
            </p>
          </li>
          <li className="font-semibold " >
          <p className=" text-secondary" style={{ color: isDarkMode ? '#a5b4fc' : '#6366f1' }}>Step 2: Make a Request</p>
            <p className="font-normal">
              Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.
            </p>
          </li>
          <li className="font-semibold">
          <p className=" text-secondary" style={{ color: isDarkMode ? '#a5b4fc' : '#6366f1' }}>Step 3: Handle the Response</p>
            <p className="font-normal ">
              The API will return a response with a job ID. You can use this ID to check the status of your book generation job.
            </p>
          </li>
          <li className="font-semibold">
          <p className=" text-secondary" style={{ color: isDarkMode ? '#a5b4fc' : '#6366f1' }}>Step 4: Retrieve the Generated Book</p>
            <p className="font-normal">
              Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

Tutorial.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Tutorial;
