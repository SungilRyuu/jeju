import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Layout from "./Layout";

export default function main() {
  const aboutItems = [
    {
      imageSrc:
        "https://img.insight.co.kr/static/2021/09/12/700/img_20210912142328_64r8q4u9.webp",
      imageAlt: "슉..슉..슉..슈발놈아",
      aboutTitle: "긴 말하지 않는다",
      aboutDesc1:
        "나만의 여행웹! 어디에 뭐가있는지, 어디가 평이 좋은지, 어디를 꼭 가야하는지, 직관적으로 알 수 있게끔 잘 만들어보겠다. 그리고 제주도 관련 책을 보며 불편했던 게 지도를 보기 어렵고, 머리에 지도를 그리기 힘들었다. 차가 있다면 동선을 고려하지 않고 그냥 가면 되지만 나는 면허가 없으니까 어쩔 수 없다 시간과 돈을 가장 절약할 수 있는 방향으로 동선을 짜야된다 이 웹페이지는 그 동선을 짜는 데 일조할 웹사이트다.",
      aboutDesc2:
        "먹는 것에 진심이다. 맛있는 곳이 있는 곳이 경치가 제일 좋다고 생각한다. 밥이 될만한 것을 1번, 자연경관 2번, 커피 3순위로 정했다. 잠은 아무데서나 자도 된다.",
      aboutDesc3:
        "MBTI의 'J'와 'P' 중 'P'이다 디자인, 기획 뭐 하나 정하지 않고 메인부터 만드는 중이다. 지금도 '걸어서 제주도속으로' 하나 만들고 이 글을 쓰고 있다. 이 글 지우고 싶다. 왜냐면 사담이 길다. 그리고 도와줄 것 처럼 하고 놀리기만 하는 사람들이 한 박스다. 개빡친다. 물론 한 박스에 한 명 들어간다.",
      aboutDesc4: "나랑 같이 여행가는 사람은 좋겠다. 왜냐면 나랑 가니까!",
    },
  ];
  return (
    <Layout description={"main"}>
      <Header />
      <AboutItemsWrap>
        {aboutItems.map((item) => (
          <AboutItemWrap key={item.aboutTitle}>
            <AboutImage src={item.imageSrc} alt={item.imageAlt} />
            <AboutInfo>
              <AboutTitle>{item.aboutTitle}</AboutTitle>
              <AboutDesc>{item.aboutDesc1}</AboutDesc>
              <AboutDesc>{item.aboutDesc2}</AboutDesc>
              <AboutDesc>{item.aboutDesc3}</AboutDesc>
              <AboutDesc>{item.aboutDesc4}</AboutDesc>
            </AboutInfo>
          </AboutItemWrap>
        ))}
      </AboutItemsWrap>
    </Layout>
  );
}

const AboutItemsWrap = styled.div`
  width: 1200px;
  margin: 100px auto;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
const AboutItemWrap = styled.div`
  display: flex;
  margin-top: 30px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    margin: 0;
  }
`;
const AboutImage = styled.img`
  width: 500px;
  margin-right: 60px;

  @media screen and (max-width: 1200px) {
    margin: 0 auto 50px;
  }
`;
const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #464964;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    padding: 20px;
  }
`;
const AboutTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 24px;
`;
const AboutDesc = styled.p`
  font-size: 16px;
  line-height: 1.5;
  word-break: keep-all;
  margin-bottom: 30px;
`;
