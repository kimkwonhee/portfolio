import React from "react";
import styled from "styled-components";

const Main = () => {
    return (
        <Wrapper>
            <Inner>
                <InnerCenter>
                    <TitleInner>
                        <Title>PORTFOLIO</Title>
                        <SubTitle>Front-end Developer</SubTitle>
                        <SubYear>2020 - 2021</SubYear>
                    </TitleInner>
                    <ConTactInner>
                        
                        <Name>KwonHee Kim<br/>김권희</Name><br/>
                        <Number>+82 010 9321 6734</Number>
                        <Email>kimkwon429@naver.com</Email>

                    </ConTactInner>
                </InnerCenter>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    /* background : red; */
`

const Inner = styled.div`
    width : 1200px;
    height : 100vh;
    display : flex;
    align-items : center;
    /* background-color : green; */
`

const InnerCenter = styled.div`
    width : 100%;
    /* background : grey; */
`

const TitleInner = styled.div`
`

const Title = styled.div`
    font-size: 80px;
    font-weight: 900;
    line-height: 1.29;
    color: #3f637c;
`
const SubTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
    line-height: 1.29;
    color: #222;
`

const SubYear = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.29;
    color: #222;
`

const ConTactInner = styled.div`
    margin-top : 400px;
    float : right;
`

const Name = styled.div`

`
const Number = styled.div`

`
const Email = styled.div`

`



export default Main