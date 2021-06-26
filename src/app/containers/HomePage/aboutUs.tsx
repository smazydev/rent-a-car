import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/screenConstants";
import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;


export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="about us img" />
      </CarContainer>
      <InfoContainer>
        <Title>Drive super-cars with the best experience</Title>
        <InfoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          voluptatem libero molestias hic dicta beatae fugit consectetur harum,
          suscipit sunt magni dignissimos, atque nihil eveniet saepe. Placeat
          reprehenderit exercitationem dolorum veritatis ad ipsam perferendis,
          aperiam sequi obcaecati ex quod soluta expedita veniam, dignissimos,
          eligendi a voluptates magni provident. 
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}