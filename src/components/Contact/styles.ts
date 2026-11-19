import styled from '@emotion/styled';

// Стили для ошибок валидации Formspree
export const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 14px;
  margin-top: 4px;
  font-weight: 500;
`;

export const Section = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 72px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 48px 16px;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;

  @media (max-width: 768px) {
    text-align: center;
    align-self: center;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 12px;
  display: flex;
  flex-direction: column;
`;

export const MainTitle = styled.div`
  font-size: 48px;
  font-weight: 800;
  color: #1e033a;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 6px;
  }
`;

export const SubTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #1e033a;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SectionLead = styled.p`
  margin: 0;
  font-size: 18px;
  color: #1e033a;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FormGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const LabelText = styled.div`
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;

  @media (max-width: 768px) {
    margin-bottom: 6px;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: white;
  color: #374151;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &::placeholder {
    color: #9ca3af;
  }
  
  &:focus {
    border-color: #1e033a;
    box-shadow: 0 0 0 4px rgba(30, 3, 58, 0.1);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  background: white;
  color: #374151;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  box-sizing: border-box;
  
  &::placeholder {
    color: #9ca3af;
  }
  
  &:focus {
    border-color: #1e033a;
    box-shadow: 0 0 0 4px rgba(30, 3, 58, 0.1);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
    font-size: 16px;
  }
`;

export const PhoneInputWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  
  .react-international-phone-input-container {
    display: flex;
    align-items: center;
    width: 100% !important;
    min-width: 100%;
    max-width: 100%;
    background: white;
    border: 2px solid #d1d5db;
    border-radius: 12px;
    overflow: visible;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    box-sizing: border-box;
    
    &:focus-within {
      border-color: #1e033a;
      box-shadow: 0 0 0 4px rgba(30, 3, 58, 0.1);
      transform: translateY(-1px);
    }
  }
  
  .react-international-phone-input {
    flex: 1;
    padding: 14px 16px;
    background: transparent;
    color: #374151;
    border: none;
    outline: none;
    font-size: 16px;
    
    &::placeholder {
      color: #9ca3af;
    }
    
    @media (max-width: 768px) {
      padding: 12px 14px;
      font-size: 16px;
    }
  }
  
  .react-international-phone-country-selector-button {
    padding: 14px 8px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    
    @media (max-width: 768px) {
      padding: 12px 6px;
      font-size: 16px;
    }
  }
  
  .react-international-phone-flag-emoji {
    width: 20px;
    height: 15px;
    margin-right: 8px;
  }
  
  .react-international-phone-country-selector-dropdown {
    z-index: 1000 !important;
    position: absolute !important;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px 32px;
  background: #1e033a;
  color: white;
  border: 2px solid #1e033a;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(30, 3, 58, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover {
    background: #2a0548;
    border-color: #2a0548;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 3, 58, 0.3);
    
    &::before {
      width: 300px;
      height: 300px;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      background: #1e033a;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    padding: 16px 24px;
    font-size: 16px;
  }
`;