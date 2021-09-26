
import { React } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Test from "./Components/test";
import { Header } from "./Components/Header";
import Form from "./Components/Form";
// 幾何轉
import Particles from 'react-particles-js';


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
    <Form />
  </>

  );
    
}

export default App;
