import React from 'react';
import { FormattedMessage } from 'react-intl';
import { HeroWrap, HeroInner } from '../components/Sections/styles';
import Contact from '../components/Contact';
import styled from '@emotion/styled';

const ContactsPageSection = styled.section`
  background: #ffffff;
  padding: 80px 20px;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const ContactsContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 64px;
  color: #ffffff;
  text-align: center;
  margin: 0 0 48px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 36px;
    margin: 0 0 32px;
  }
`;

const HeroDescription = styled.p`
  font-size: 30px;
  color: #ffffff;
  line-height: 1.8;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  opacity: 0.95;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const InfoSection = styled.div`
  background: #f8f9fa;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(30, 3, 58, 0.08);
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 32px;
  color: #1e033a;
  margin: 0 0 32px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 24px;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoValue = styled.div`
  font-size: 20px;
  color: #1e033a;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const LinkedInLink = styled.a`
  font-size: 20px;
  color: #1e033a;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  position: relative;
  
  &::before {
    content: '🔗';
    font-size: 18px;
  }
  
  &:hover {
    color: #a855f7;
    transform: translateX(4px);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #1e033a, #a855f7);
      border-radius: 1px;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FormSection = styled.div`
  & > div {
    margin-bottom: 0;
  }
`;

const FormTitle = styled.h3`
  font-size: 32px;
  color: #1e033a;
  margin: 0 0 12px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const FormDescription = styled.p`
  font-size: 18px;
  color: #6b7280;
  margin: 0 0 32px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 24px;
  }
`;

export default function Contacts(): React.ReactElement {
  return (
    <>
      <HeroWrap>
        <HeroInner>
          <HeroSubtitle><FormattedMessage id="contactsPage.title" /></HeroSubtitle>
          <HeroDescription><FormattedMessage id="contactsPage.description" /></HeroDescription>
        </HeroInner>
      </HeroWrap>
      
      <ContactsPageSection>
        <ContactsContainer>
          <InfoSection>
            <InfoTitle><FormattedMessage id="contactsPage.infoTitle" /></InfoTitle>
            <InfoList>
              <InfoItem>
                <InfoLabel><FormattedMessage id="contactsPage.email" /></InfoLabel>
                <InfoValue><FormattedMessage id="contactsPage.emailValue" /></InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel><FormattedMessage id="contactsPage.linkedin" /></InfoLabel>
                <InfoValue>
                  <LinkedInLink 
                    href="https://www.linkedin.com/in/viktoryia-strelskaya-91570a313/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="contactsPage.linkedinValue" />
                  </LinkedInLink>
                </InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel><FormattedMessage id="contactsPage.workingHours" /></InfoLabel>
                <InfoValue><FormattedMessage id="contactsPage.workingHoursValue" /></InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel><FormattedMessage id="contactsPage.responseTime" /></InfoLabel>
                <InfoValue><FormattedMessage id="contactsPage.responseTimeValue" /></InfoValue>
              </InfoItem>
            </InfoList>
          </InfoSection>
          
          <FormSection>
            <FormTitle><FormattedMessage id="contactsPage.formTitle" /></FormTitle>
            <FormDescription><FormattedMessage id="contactsPage.formDescription" /></FormDescription>
            <Contact />
          </FormSection>
        </ContactsContainer>
      </ContactsPageSection>
    </>
  );
}
