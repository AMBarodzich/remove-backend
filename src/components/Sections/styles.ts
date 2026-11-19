import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0 auto;
  padding: 72px 20px;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 48px 16px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 48px;
  font-size: 64px;
  color: #ffffff;
  text-align: center;
  font-weight: 800;
  letter-spacing: -1px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
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
    font-size: 40px;
    margin: 0 0 32px;
  }
`;

export const AboutSectionTitle = styled.h2`
  margin: 0 0 48px;
  font-size: 60px;
  color: #1e033a;
  font-weight: 800;
  letter-spacing: -1px;
  position: relative;
  text-align: center;
  
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
    font-size: 36px;
    margin: 0 0 32px;
  }
`;

export const SectionLead = styled.p`
  margin: 0;
  opacity: 0.95;
  font-size: 22px;
  line-height: 1.9;
  padding: 28px 36px 28px 56px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  border: 2px solid rgba(30, 3, 58, 0.1);
  box-shadow: 0 6px 20px rgba(30, 3, 58, 0.08), 0 2px 8px rgba(30, 3, 58, 0.04);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  
  &::before {
    content: '→';
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #a855f7;
    font-size: 24px;
    font-weight: bold;
    opacity: 0.7;
    transition: all 0.4s ease;
    z-index: 1;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
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
    box-shadow: 0 12px 32px rgba(30, 3, 58, 0.12), 0 4px 16px rgba(168, 85, 247, 0.08);
    border-color: rgba(168, 85, 247, 0.3);
    background: linear-gradient(135deg, #ffffff 0%, #faf5ff 100%);
    
    &::before {
      opacity: 1;
      transform: translateY(-50%) translateX(6px) scale(1.1);
      color: #8b5cf6;
    }
    
    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 24px 28px 24px 48px;
    
    &::before {
      font-size: 20px;
      left: 16px;
    }
  }
`;

export const AboutList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export const CardBox = styled.div`
  padding: 48px 40px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(30, 3, 58, 0.12), 0 2px 8px rgba(30, 3, 58, 0.08);
  border: 1px solid rgba(30, 3, 58, 0.08);
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
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 16px 48px rgba(30, 3, 58, 0.2), 0 4px 16px rgba(168, 85, 247, 0.15);
    border-color: rgba(168, 85, 247, 0.4);
    background: linear-gradient(135deg, #ffffff 0%, #faf5ff 100%);
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 36px 28px;
    gap: 20px;
  }
`;

export const HeroWrap = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 800px;
  padding: 80px 20px 120px;
  color: #ffffff;
  background: url('/images/hero-bg.png');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;

  @media (max-width: 768px) {
    min-height: 600px;
    padding: 60px 16px 80px;
    background-attachment: scroll;
  }
`;

export const HeroInner = styled.div`
  width: 100%;
  max-width: 1120px;
  text-align: center;
  margin-top: 120px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0 0 16px;
  font-size: 56px;
  letter-spacing: 0.08em;

  @media (max-width: 768px) {
    font-size: 32px;
    margin: 0 0 12px;
  }
`;

export const HeroLead = styled.p`
  margin: 0 0 24px;
  font-size: 28px;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin: 0 0 20px;
    font-size: 18px;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 16px 32px;
  background: #ffffff;
  color: #1E033A;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid rgba(255,255,255,0.5);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(30, 3, 58, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.4);
    border-color: rgba(255,255,255,0.8);
    
    &::before {
      width: 300px;
      height: 300px;
    }
  }
  
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 14px;
  }
`;

export const SectionWhite = styled.section`
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #fafafa 100%);
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
`;

export const BandInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 32px;
    padding: 60px 16px;
  }
`;

export const ServiceSection = styled.section`
  margin: 0 auto;
  background: #1e033a;
  display: flex;
`;

export const ServiceWrapper = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

export const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: flex-start;
`;

export const ServiceName = styled.h3`
  font-size: 32px;
  margin: 0 0 16px 0;
  color: #1e033a;
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.5px;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #1e033a, #a855f7);
    border-radius: 2px;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    margin: 0 0 12px 0;
  }
`;

export const ServiceDescription = styled.p`
  margin: 0;
  font-size: 18px;
  color: #374151;
  text-align: left;
  position: relative;
  line-height: 1.7;
  padding-left: 28px;
  transition: all 0.3s ease;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 2px;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #1e033a, #a855f7);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(30, 3, 58, 0.2);
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #1e033a;
    transform: translateX(4px);
    
    &::before {
      transform: scale(1.15);
      box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding-left: 26px;
    
    &::before {
      width: 18px;
      height: 18px;
      font-size: 11px;
    }
  }
`;