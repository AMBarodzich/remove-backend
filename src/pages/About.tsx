import React from 'react';
import { FormattedMessage } from 'react-intl';
import { HeroWrap, HeroInner } from '../components/Sections/styles';
import styled from '@emotion/styled';

const AboutPageSection = styled.section`
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #fafafa 100%);
  padding: 100px 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(30, 3, 58, 0.02) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 80px 16px;
  }
`;

const AboutContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeroSubtitle = styled.h2`
  font-size: 52px;
  color: #ffffff;
  text-align: center;
  margin: 0 0 40px;
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin: 0 0 28px;
  }
`;

const HeroDescription = styled.p`
  font-size: 26px;
  color: #ffffff;
  line-height: 1.8;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const MissionBox = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 64px;
  border-radius: 24px;
  margin-bottom: 80px;
  box-shadow: 0 12px 48px rgba(30, 3, 58, 0.12), 0 4px 16px rgba(30, 3, 58, 0.08);
  border: 2px solid rgba(30, 3, 58, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #1e033a 0%, #a855f7 50%, #1e033a 100%);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 64px rgba(30, 3, 58, 0.15), 0 6px 24px rgba(168, 85, 247, 0.1);
    border-color: rgba(168, 85, 247, 0.2);
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 48px 32px;
    margin-bottom: 60px;
  }
`;

const MissionTitle = styled.h3`
  font-size: 40px;
  color: #1e033a;
  margin: 0 0 28px;
  font-weight: 800;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #1e033a, #a855f7);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 20px;
  }
`;

const MissionText = styled.p`
  font-size: 24px;
  color: #1e033a;
  line-height: 1.9;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ApproachSection = styled.div`
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const ApproachTitle = styled.h3`
  font-size: 40px;
  color: #1e033a;
  margin: 0 0 48px;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #a855f7, transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 36px;
  }
`;

const ApproachList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
`;

const ApproachItem = styled.p`
  font-size: 24px;
  color: #1e033a;
  line-height: 1.9;
  margin: 0;
  padding: 32px 40px 32px 80px;
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  border: 2px solid rgba(30, 3, 58, 0.1);
  box-shadow: 0 6px 20px rgba(30, 3, 58, 0.08), 0 2px 8px rgba(30, 3, 58, 0.04);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '✓';
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #1e033a 0%, #a855f7 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 6px 20px rgba(30, 3, 58, 0.25), 0 2px 8px rgba(168, 85, 247, 0.3);
    flex-shrink: 0;
    transition: all 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateX(12px) translateY(-2px);
    box-shadow: 0 12px 32px rgba(30, 3, 58, 0.15), 0 4px 16px rgba(168, 85, 247, 0.1);
    border-color: rgba(168, 85, 247, 0.4);
    background: linear-gradient(135deg, #ffffff 0%, #faf5ff 100%);
    
    &::before {
      transform: translateY(-50%) scale(1.15) rotate(5deg);
      box-shadow: 0 8px 24px rgba(168, 85, 247, 0.5), 0 4px 12px rgba(30, 3, 58, 0.3);
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 24px 28px 24px 68px;
    
    &::before {
      width: 36px;
      height: 36px;
      font-size: 18px;
      left: 20px;
    }
  }
`;

const ValuesContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 20px;
  background: #ffffff;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 48px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 32px;
  }
`;

const ValueCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #faf5ff 100%);
  padding: 48px 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(30, 3, 58, 0.1), 0 2px 8px rgba(30, 3, 58, 0.06);
  border: 2px solid rgba(30, 3, 58, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #1e033a 0%, #a855f7 50%, #1e033a 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 16px 48px rgba(30, 3, 58, 0.18), 0 4px 16px rgba(168, 85, 247, 0.12);
    border-color: rgba(168, 85, 247, 0.4);
    background: linear-gradient(135deg, #ffffff 0%, #f3e8ff 100%);
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 40px 32px;
  }
`;

const ValueTitle = styled.h4`
  font-size: 32px;
  color: #1e033a;
  margin: 0 0 24px;
  font-weight: 800;
  position: relative;
  display: inline-block;
  letter-spacing: -0.3px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: linear-gradient(90deg, #1e033a, #a855f7);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 26px;
    margin: 0 0 20px;
  }
`;

const ValueText = styled.p`
  font-size: 20px;
  color: #1e033a;
  line-height: 1.9;
  margin: 0;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ValuesTitle = styled.h2`
  font-size: 40px;
  color: #1e033a;
  margin: 0 0 48px;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #a855f7, transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 36px;
  }
`;

export default function About(): React.ReactElement {
  return (
    <>
    <HeroWrap>
      <HeroInner>
          <HeroSubtitle><FormattedMessage id="aboutPage.subtitle" /></HeroSubtitle>
          <HeroDescription>
            <FormattedMessage id="aboutPage.description" />
          </HeroDescription>
      </HeroInner>
    </HeroWrap>
      
      <AboutPageSection>
        <AboutContent>
          <MissionBox>
            <MissionTitle><FormattedMessage id="aboutPage.mission.title" /></MissionTitle>
            <MissionText><FormattedMessage id="aboutPage.mission.text" /></MissionText>
          </MissionBox>
          
          <ApproachSection>
            <ApproachTitle><FormattedMessage id="aboutPage.approach.title" /></ApproachTitle>
            <ApproachList>
              <ApproachItem><FormattedMessage id="aboutPage.approach.text1" /></ApproachItem>
              <ApproachItem><FormattedMessage id="aboutPage.approach.text2" /></ApproachItem>
              <ApproachItem><FormattedMessage id="aboutPage.approach.text3" /></ApproachItem>
            </ApproachList>
          </ApproachSection>
          
          <ValuesContainer>
            <ValuesTitle><FormattedMessage id="aboutPage.values.title" /></ValuesTitle>
            <ValuesGrid>
              <ValueCard>
                <ValueTitle><FormattedMessage id="aboutPage.values.value1.title" /></ValueTitle>
                <ValueText><FormattedMessage id="aboutPage.values.value1.text" /></ValueText>
              </ValueCard>
              <ValueCard>
                <ValueTitle><FormattedMessage id="aboutPage.values.value2.title" /></ValueTitle>
                <ValueText><FormattedMessage id="aboutPage.values.value2.text" /></ValueText>
              </ValueCard>
              <ValueCard>
                <ValueTitle><FormattedMessage id="aboutPage.values.value3.title" /></ValueTitle>
                <ValueText><FormattedMessage id="aboutPage.values.value3.text" /></ValueText>
              </ValueCard>
            </ValuesGrid>
          </ValuesContainer>
        </AboutContent>
      </AboutPageSection>
    </>
  );
}
