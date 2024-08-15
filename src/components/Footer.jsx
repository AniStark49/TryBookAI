import PropTypes from "prop-types"


const Footer = ({isDarkMode}) => {
  return (
    <footer className={`w-full p-4 text-center ${isDarkMode ? "bg-[#1e293b] text-white" : "bg-white text-[#1e293b]"}`}>
        <p className="text-lg">
            Made by<span className="text-[#22d3ee]"> Anirban Guha</span>
        </p>
    </footer>
  )
}

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
}

export default Footer