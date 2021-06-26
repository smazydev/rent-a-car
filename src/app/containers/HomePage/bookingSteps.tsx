import React from "react";
import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
w-full
flex
flex-col
items-center
pt-3
pb-3
mt-10
lg:pt-6
lg:pb-6
lg:mt-40
`};
`;

const Title = styled.h2`
  ${tw`
text-3xl
lg:text-4xl
text-black
font-extrabold
`};
`;

const StepsContainer = styled.div`
  ${tw`
flex
flex-col
justify-evenly
flex-wrap
md:flex-row
mt-7
lg:mt-16
`};
`;

const StepContainer = styled.div`
  ${tw`
flex
flex-col
w-16
md:w-96
items-center
transition-colors
hover:text-red-500
mb-20
`}
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw`
flex
rounded-lg
items-center
justify-center
p-6
`};
`;

const StepTitle = styled.h4`
  ${tw`
text-black
text-lg
font-semibold
w-40
text-center
mt-4
`};
`;

const StepDescription = styled.p`
  ${tw`
w-60
text-xs
md:text-sm
text-center
text-gray-600
`};
`;

const StepIcon = styled.span`
  ${tw`
text-red-500
text-3xl
`}
`;

export function BookingSteps() {
  return (
    <Container>
      <Title>How it works?</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest rent-a-car point and get your comfy ride.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose a date</StepTitle>
          <StepDescription>
            Book for days, weeks and even months, with flexible pricing plans.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book your car</StepTitle>
          <StepDescription>
            Book your car in one single click and enjoy your ride.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
