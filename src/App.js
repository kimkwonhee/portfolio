import React from "react";
import Main from "./pages/Main";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from "styled-components";
import Portfolio from "./pages/Portfolio";


const Globalstyles = createGlobalStyle`

    html, body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size : 16px;
    }
`


const App = () => {
  return (
    <Wrapper>
      <Globalstyles />
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
