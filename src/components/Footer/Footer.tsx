import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FooterBar, FooterContent, FooterSection, FooterTitle, FooterLink, FooterBottom, FooterCopyright } from './styles';

export default function Footer(): React.ReactElement {
  const intl = useIntl();
  const year = new Date().getFullYear();
  return (
    <FooterBar>
      <FooterContent>
        <FooterSection>
          <FooterTitle>DevSharing</FooterTitle>
          <p style={{ color: '#a0a0a0', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
            Ваш надежный партнер в подборе IT-специалистов
          </p>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle><FormattedMessage id="footer.links" /></FooterTitle>
          <FooterLink to="/">Главная</FooterLink>
          <FooterLink to="/about">О нас</FooterLink>
          <FooterLink to="/contacts"><FormattedMessage id="footer.contactUs" /></FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle><FormattedMessage id="footer.contactUs" /></FooterTitle>
          <p style={{ color: '#a0a0a0', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
            Email: info@devsharing.com
          </p>
          <p style={{ color: '#a0a0a0', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
            <a 
              href="https://www.linkedin.com/in/viktoryia-strelskaya-91570a313/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#a0a0a0', 
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0a0'}
            >
              LinkedIn: Viktoryia Strelskaya
            </a>
          </p>
          <p style={{ color: '#a0a0a0', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
            Пн-Пт: 9:00 - 18:00
          </p>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <FooterCopyright>
          {intl.formatMessage({ id: 'footer.copyright' }, { year })}
        </FooterCopyright>
      </FooterBottom>
    </FooterBar>
  );
}



