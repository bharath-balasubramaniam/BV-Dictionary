import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./components/Definitions";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightTheme, setLightTheme] = useState(false);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(meanings);
  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, category]);
  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightTheme ? "#fff" : "#282c34",
        color: lightTheme ? "black" : "white",
        transition: "all 1s linear",
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          height: "100vh",
          dispaly: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightTheme ? "Dark" : "Light"} Mode</span>
          <PurpleSwitch
            checked={lightTheme}
            onChange={() => setLightTheme(!lightTheme)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          setMeanings={setMeanings}
          lightTheme={lightTheme}
        />
        {meanings && (
          <Definitions
            word={word}
            lightTheme={lightTheme}
            meanings={meanings}
            category={category}
          />
        )}
      </Container>
      <Footer lightTheme={lightTheme} />
    </div>
  );
}

export default App;
