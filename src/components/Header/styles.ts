import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1000;
  width: 100%;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;

  & > a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  & > a > img {
    max-width: 7rem;
    max-height: 7rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${props => props.$isActive ? 'white' : '#a855f7'};
  text-decoration: ${props => props.$isActive ? 'underline' : 'none'};
  text-underline-offset: 4px;
  font-weight: ${props => props.$isActive ? 'bold' : 'normal'};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.4rem 0.8rem;
  }
`;
