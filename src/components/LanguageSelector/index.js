import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { ThemeContext } from './../../ThemeContext';
import './style.scss';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const { darkTheme } = useContext(ThemeContext);

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <FormControl variant="standard" className='language-selector' sx={{
      color: darkTheme ? '#fff' : '',
      '& .MuiInputLabel-root': {
        color: darkTheme ? '#fff' : '',
      },
      '& .MuiInputBase-root':{
      color: darkTheme ? '#fff' : '',
      }
    }}>
      <InputLabel htmlFor="language-selector">Language</InputLabel>
      <Select
        label="Language"
        value={language}
        onChange={handleChange}
        inputProps={{
          name: 'language',
          id: 'language-selector',
        }}
        className={darkTheme ? 'dark-theme' : ''}
      >
        <MenuItem value="pt">🇧🇷 Português</MenuItem>
        <MenuItem value="en">🇬🇧 English</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
