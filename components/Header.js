import Link from "next/link";
import React from "react";

import styled from "styled-components";

export default function Header() {
  return (
    <NaviWrap>
      <Link href="/" passHref>
        <Logo>가자, 제주도</Logo>
      </Link>
      <NaviWrapper>
        <Link href="/main" passHref>
          <Navi>about</Navi>
        </Link>
        <Link href="/food" passHref>
          <Navi>음식</Navi>
        </Link>
        <Link href="/nature" passHref>
          <Navi>문화재</Navi>
        </Link>
        <Navi>자연</Navi>
      </NaviWrapper>
    </NaviWrap>
  );
}

const NaviWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 1vw;
`;
const Logo = styled.h1`
  font-size: 30px;
  cursor: default;
  font-family: "Poppins";
  font-weight: 100;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const Strong = styled.span``;
const NaviWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
const Navi = styled.a`
  margin: 0 30px;
  font-size: 20px;
  font-weight: 100;
  font-family: "Poppins";

  @media screen and (max-width: 700px) {
    margin: 0 20px;
  }
`;
