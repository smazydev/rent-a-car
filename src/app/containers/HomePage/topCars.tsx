import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

export function TopCars() {
  const CarOne: ICar = {
    name: "Audi S3",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    transmission: "Auto",
    gas: "Petrol",
  };
  const CarTwo: ICar = {
    name: "Honda City 5 Seater",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    transmission: "Auto",
    gas: "Petrol",
  };

  return (
    <TopCarsContainer>
      <Title>Top Rented Cars</Title>
      <CarsContainer>
        <Car {...CarOne} />
        <Car {...CarTwo} />
	<Car {...CarOne} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
