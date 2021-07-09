import React, { useEffect, useState } from 'react'

function Switch(){
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light"
    const darkTheme = "dark";
    let theme;
    const [darkMode, setDarkMode] = useState(false);
  
    if(localStorage){
      theme = localStorage.getItem("theme");
    }
    
    if(theme === lightTheme || theme === darkTheme){
        body.classList.add(theme);
    }else{
        body.classList.add(lightTheme);
        localStorage.setItem("theme", "light");
        setDarkMode(false);
    }
    const switchTheme = (e) => {  
      if(theme === darkTheme){
        body.classList.replace(darkTheme, lightTheme);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        theme = lightTheme
        setDarkMode(false);
      }else if(theme === lightTheme){
        body.classList.replace(lightTheme, darkTheme);
        e.target.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");
        theme = darkTheme;
        setDarkMode(true);
      }
    }


    useEffect(() => {
        if(theme === lightTheme){
            setDarkMode(false);
        }else if(theme === darkTheme){
            setDarkMode(true);
        }
    }, [theme]);


    return(
        <label className="switch">
            <input type="checkbox" checked={darkMode} readOnly />
            <span className="slider round" onClick={(e) => switchTheme(e)}></span>
        </label>
    )
}

export default Switch