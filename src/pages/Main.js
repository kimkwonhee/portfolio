import React from "react";
import styled from "styled-components";

const Main = () => {
    return (
        <Wrapper>
            <Inner>
                <div>WEB<br/>PORTFOLIO</div>
                <div>Front-end Developer</div>
                <div>2020 - 2021</div>
                <div>index contects</div>
                <div>name kimkwonhee</div>
                <div>hp 010-9321-6734</div>
                <div>email kimkwon429@naver.com</div>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    background : red;
`

const Inner = styled.div`
    width : 1200px;
    height : 100vh;
    background-color : green;
`


export default Main