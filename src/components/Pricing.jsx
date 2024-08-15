import PropTypes from "prop-types";

const Pricing = ({isDarkMode}) => {
  return (
    <section id="pricing" className={`max-w-[1000px] mx-auto top-8 p-8 mb-8 rounded-lg shadow-lg border ${
      isDarkMode
        ? 'bg-[#1e293b] text-[#e2e8f0] border-[#334155]'
        : 'bg-white text-[#1e293b] border-gray-300'
    }`}
    style={{ 'sectionbg': isDarkMode ? '#1e293b' : '#fff' }}
  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mt-8 text-2xl font-bold mb-1 text-secondary"
        style={{ color: isDarkMode ? '#a5b4fc' : '#6366f1' }}>API Pricing</h2>
        <p className="mb-6">
          Our API pricing is based on the model used and the number of tokens
          processed. Here’s a breakdown of the costs:
        </p>
        <table className="w-full border-separate border-spacing-0 mt-4 overflow-hidden rounded-lg border border-[#334155]">
          <thead>
            <tr className="bg-primary text-white text-left border-[#334155]">
              <th className="px-4 py-4">API</th>
              <th className="px-4 py-4">MODEL</th>
              <th className="px-4 py-4">PRICE PER 1K TOKENS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-4 border-[#334155]">OpenAI</td>
              <td className="border px-4 py-4 border-[#334155]">GPT-3.5</td>
              <td className="border px-4 py-4 border-[#334155]">$0.002</td>
            </tr>
            <tr>
              <td className="border px-4 py-4 border-[#334155]">OpenAI</td>
              <td className="border px-4 py-4 border-[#334155]">GPT-4</td>
              <td className="border px-4 py-4 border-[#334155]">$0.03</td>
            </tr>
            <tr>
              <td className="border px-4 py-4 border-[#334155]">Together AI</td>
              <td className="border px-4 py-4 border-[#334155]">Llama-2-70b</td>
              <td className="border px-4 py-4 border-[#334155]">$0.0008</td>
            </tr>
            <tr>
              <td className="border px-4 py-4 border-[#334155]">Together AI</td>
              <td className="border px-4 py-4 border-[#334155]">Llama-2-13b</td>
              <td className="border px-4 py-4 border-[#334155]">$0.0006</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6">
          <h3 className="mt-8 text-xl font-bold"
        style={{ color: isDarkMode ? '#a5b4fc' : '#6366f1' }}>Token Estimation</h3>
          <p>
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="mt-8 text-xl font-bold"
        style={{ color: isDarkMode ? '#a5b4fc' : '#6366f1' }}>Billing</h3>
          <p>
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

Pricing.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Pricing;
