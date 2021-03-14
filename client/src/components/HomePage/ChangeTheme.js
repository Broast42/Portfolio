import React from 'react';

const ChangeTheme = () => {

    return(
        <div className="change-theme change-theme-themed">
            <p>Change Theme</p>
            <select>
                <option value="standard">Standard</option>
                <option value="retro">Retro</option>
            </select>
        </div>
    )
}

export default ChangeTheme;