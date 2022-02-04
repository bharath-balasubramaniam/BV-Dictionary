import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import categories from "../data/category";
import React from "react";
import { debounce } from "lodash";
import "./header.css";
const Header = ({
  category,
  setCategory,
  word,
  setWord,
  setMeanings,
  lightTheme,
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightTheme ? "#000" : "#fff",
      },
      type: lightTheme ? "light" : "dark",
    },
  });
  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    setMeanings([]);
  };
  const handleText = debounce((text) => {
    setWord(text);
  }, 500);
  return (
    <div className="header">
      <span className="title">{word ? word : "Bv dictionary"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            // value={word}
            onChange={(e) => handleText(e.target.value)}
            label="Search a Word !"
          />
          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
