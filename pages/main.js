import React from "react";
import Header from "../components/Header";
import Layout from "./Layout";

export default function main() {
  return (
    <Layout description={"main"}>
      <Header />
      <h2>어떻게 웹페이지를 만들게 되었나?</h2>
      <p>
        Tripful 책을 보면서 생각이 들었다. 이거 만든 사람은 지금 엄청 기분
        좋겠지? 이 책 보면서 맨날맨날 행복하겠지?
      </p>
    </Layout>
  );
}
