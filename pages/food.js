import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Layout from "./Layout";

export default function food() {
  return (
    <Layout description={"음식"}>
      <Header />
      <Map latitude={7.402056} longitude={127.108212} />
      <div>안녕안녕</div>
    </Layout>
  );
}
