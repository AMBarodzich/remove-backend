import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterBar = styled.footer`
  width: 100%;
  background: linear-gradient(180deg, #1e033a 0%, #0f0219 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #a855f7, transparent);
  }
`;

export const FooterContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 60px 20px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 40px 16px 32px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 1;
  
  p {
    margin: 0;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 22px;
  font-weight: 800;
  margin: 0;
  color: #ffffff;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #a855f7, transparent);
    border-radius: 1px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const FooterLink = styled(Link)`
  color: #a0a0a0;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  padding: 4px 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #a855f7, transparent);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #ffffff;
    transform: translateX(4px);
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 20px;
  max-width: 1120px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const FooterCopyright = styled.div`
  text-align: center;
  color: #a0a0a0;
  font-size: 18px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;




