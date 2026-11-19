import React from 'react';
import { FormattedMessage } from 'react-intl';
import { HeroWrap, HeroInner, HeroTitle, HeroLead, CTAButton } from '../styles';

export default function Hero(): React.ReactElement {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <HeroWrap id="hero">
      <HeroInner>
        <HeroTitle><FormattedMessage id="hero.title" /></HeroTitle>
        <HeroLead><FormattedMessage id="hero.lead" /></HeroLead>
        <CTAButton href="#contact" onClick={handleCTAClick}>
          <FormattedMessage id="hero.cta" />
        </CTAButton>
      </HeroInner>
    </HeroWrap>
  );
}


