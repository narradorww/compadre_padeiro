import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import {ThemeContext} from '../../ThemeContext';

const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton onClick={toggleTheme}>
      {darkTheme ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggle;
