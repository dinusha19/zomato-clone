
import React from "react"
import HomeHOC from "./HOC/Home.HOC"
import Temp from "./components/temp"

function App() {
  return (
    <>
    <HomeHOC path="/" exact component={Temp}/>
    </>
  );
}

export default App;
