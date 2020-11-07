import React, { useState } from 'react';

const Customizer = () => {
    const [themeLayout, setThemeLayout] = useState(false);

    const changeThemeLayout = () => {
        setThemeLayout(!themeLayout)
    }

    if(themeLayout){
        if (process.browser) {
        document.body.classList.add('dark');
        }
    }else{
        if (process.browser) {
        document.body.classList.remove('dark');
        }
    }

    return (
        <div className="theme-pannel-main">
            <ul>
                <li className="sidebar-btn dark-light-btn">
                    <a href={null} className="dark-light" onClick={() => changeThemeLayout()}>
                        <span className="theme-layout-version">{themeLayout?'Light':'Dark'}</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Customizer;