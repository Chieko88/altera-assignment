import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const DarkModeSwitch = ({DarkModeSwitch}) => {
  const [mode, setMode] = useState("light");
  const handleSwitchDarkMode = (event) => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const htmlElement = document.querySelector("html");
  htmlElement.setAttribute("data-bs-theme", mode);

  return (
    <>
     {(mode === "light") ?
      <FontAwesomeIcon icon={faMoon} onClick={handleSwitchDarkMode} /> :
      <FontAwesomeIcon icon={faSun} onClick={handleSwitchDarkMode} />
    }
    </>
  );
}

export default DarkModeSwitch;
