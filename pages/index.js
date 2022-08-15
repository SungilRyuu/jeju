import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Layout from "./Layout";

export default function index() {
  return (
    <Layout description={"home"}>
      <MainImageWrap>
        <TitleWrap>
          <Title>
            걸어서...
            <br />
            <DifferentColor>제주도여행을</DifferentColor>
            <Link href="/main" passHref>
              <EarthSvg />
            </Link>
          </Title>
        </TitleWrap>
      </MainImageWrap>
    </Layout>
  );
}

const MainImageWrap = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 10vh;
  background-image: url("/udo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
`;

const TitleWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: #00000040;
  padding: 0.5vw;
`;

const Title = styled.h1`
  font-family: "Gugi", sans-serif;
  font-size: 9vw;
  color: #e8e25d;
  text-shadow: 4px 4px 6px black;
  position: relative;
  background-color: transparent;

  @media screen and (min-width: 1200px) {
    font-size: 105px;
  }
`;

const DifferentColor = styled.span`
  color: #5678e1;
  background-color: transparent;
`;
const EarthSvg = styled.div`
  background-image: url("/earth.svg");
  width: 12vw;
  height: 12vw;
  background-size: cover;
  position: absolute;
  right: 3vw;
  top: 0;
  background-color: transparent;

  @media screen and (min-width: 1200px) {
    width: 130px;
    height: 130px;
  }

  &:hover {
    filter: contrast(500%);
    transition: all 0.3s ease;
    right: 0vw;
  }
`;
