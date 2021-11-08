import React from "react";
import Main from "./pages/Main";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from "styled-components";
import Portfolio from "./pages/Portfolio";


const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
`

export default App;
