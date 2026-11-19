import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ServiceSection,  SectionTitle, Cards, CardBox, ServiceWrapper, ServiceName, ServiceDescription, ServiceList } from '../styles';

export default function Services(): React.ReactElement {
  return (
    <ServiceSection id="services">
      <ServiceWrapper>
        <SectionTitle><FormattedMessage id="services.title" /></SectionTitle>
        <Cards>
          <CardBox>
            <ServiceName>
              <FormattedMessage id="services.service1.name" />
            </ServiceName>
            <ServiceList>
              <ServiceDescription>
                <FormattedMessage id="services.service1.item1" />
              </ServiceDescription>
              <ServiceDescription>
                <FormattedMessage id="services.service1.item2" />
              </ServiceDescription>
              <ServiceDescription>
                <FormattedMessage id="services.service1.item3" />
              </ServiceDescription>
            </ServiceList>
          </CardBox>
          <CardBox>
            <ServiceName>
              <FormattedMessage id="services.service2.name" />
            </ServiceName>
            <ServiceList>
              <ServiceDescription>
                <FormattedMessage id="services.service2.item1" />
              </ServiceDescription>
              <ServiceDescription>
                <FormattedMessage id="services.service2.item2" />
              </ServiceDescription>
              <ServiceDescription>
                <FormattedMessage id="services.service2.item3" />
              </ServiceDescription>
              <ServiceDescription>
                <FormattedMessage id="services.service2.item4" />
              </ServiceDescription>
            </ServiceList>
          </CardBox>
          <CardBox>
            <ServiceName>
              <FormattedMessage id="services.service3.name" />
            </ServiceName>
            <ServiceList>
              <ServiceDescription>
                <FormattedMessage id="services.service3.item1" />
              </ServiceDescription>
              <ServiceDescription>
                <FormattedMessage id="services.service3.item2" />
              </ServiceDescription>
              <ServiceDescription>
                <FormattedMessage id="services.service3.item3" />
              </ServiceDescription>
              <ServiceDescription>
                <FormattedMessage id="services.service3.item4" />
              </ServiceDescription>
            </ServiceList>
          </CardBox>
        </Cards>
      </ServiceWrapper>
    </ServiceSection>
  );
}


