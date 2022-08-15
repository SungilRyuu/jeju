import Head from "next/head";
import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";

export default function Layout({ description, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>제주여행 {description ? `| ${description}` : ""}</title>
        <link rel="icon" href="/plane.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gugi&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://webfontworld.github.io/Poppins/Poppins.css"
          rel="stylesheet"
        />
      </Head>

      <Wrap />
      {children}
    </React.Fragment>
  );
}

const Wrap = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background-color: #d8d6c8;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
}

a {
  text-decoration: none;
  color: #000;
}
`;
