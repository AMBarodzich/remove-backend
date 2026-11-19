import React from 'react';
import { FormattedMessage } from 'react-intl';
import { SectionWhite, BandInner,  AboutSectionTitle, SectionLead, AboutList } from '../styles';

export default function About(): React.ReactElement {
  return (
    <SectionWhite id="about">
      <BandInner>
        <AboutSectionTitle><FormattedMessage id="about.headline" /></AboutSectionTitle>
        <AboutList>
          <SectionLead>
            <FormattedMessage id="about.lead" />
          </SectionLead>
          <SectionLead>
            <FormattedMessage id="about.values1" />
          </SectionLead>
          <SectionLead>
            <FormattedMessage id="about.values2" />
          </SectionLead>
          <SectionLead>
            <FormattedMessage id="about.values3" />
          </SectionLead>
        </AboutList>
      </BandInner>
    </SectionWhite>
  );
}


