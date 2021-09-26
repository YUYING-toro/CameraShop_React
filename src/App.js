
import { React } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Particles from 'react-particles-js';
import Test from "./Components/test";
import { Header } from "./Components/Header";
// 幾何轉



function App() {
  return (
  <>
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1000,
            }
          },
          shape:{
            type:"star",
            stroke:{
              width: 4,
              color: "orange"
            }
          }
        },
      }}
    />
    <Test />
    <Header />
  </>

  );
    
}

export default App;
