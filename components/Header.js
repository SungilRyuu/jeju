import Link from "next/link";
import React from "react";

import styled from "styled-components";

export default function Header() {
  return (
    <NaviWrap>
      <Link href="/" passHref>
        <Logo>
          걸어서... <Strong>제주도여행을</Strong>
        </Logo>
      </Link>
      <NaviWrapper>
        <Link href="/main" passHref>
          <Navi>about</Navi>
        </Link>
        <Navi>카페</Navi>
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
  font-family: "Gugi", sans-serif;
  text-shadow: 1px 2px 3px black;
  margin-right: auto;
  color: #e8e25d;
  font-size: 3vw;
  cursor: default;
`;
const Strong = styled.span`
  color: #5678e1;
`;
const NaviWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Navi = styled.a`
  font-family: "Gugi", sans-serif;
  text-shadow: 1px 2px 3px black;
  margin: 0 1vw;
  font-size: 2.5vw;
  color: #a5a5a5;
`;
