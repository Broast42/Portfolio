import React from 'react';
import ChangeTheme from './ChangeTheme';
import VoteTheme from './VoteTheme';

const ThemeUI = () => {

    return(
        <div className="theme-ui">
            <ChangeTheme />
            <VoteTheme />
        </div>
    )
}

export default ThemeUI;