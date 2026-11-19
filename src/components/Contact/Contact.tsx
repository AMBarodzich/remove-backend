import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useForm, ValidationError } from '@formspree/react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import toast from 'react-hot-toast';
import { Section, SectionTitle, MainTitle, SectionLead, ContentLeft, FormGrid, LabelText, Input, TextArea, Button, PhoneInputWrapper } from './styles';

export default function Contact(): React.ReactElement {
  const intl = useIntl();
  const [state, handleSubmit] = useForm("xblapvko");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Показываем тост при успешной отправке и очищаем форму
  React.useEffect(() => {
    if (state.succeeded) {
      toast.success(intl.formatMessage({ id: 'contact.success' }), {
        duration: 4000,
        position: 'bottom-center',
        style: {
          background: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          borderRadius: '8px',
          padding: '16px 24px',
          fontSize: '16px',
          fontWeight: '500',
        },
      });
      // Очищаем форму
      if (formRef.current) {
        formRef.current.reset();
      }
      setPhone(undefined);
    }
  }, [state.succeeded, intl]);
  
  // Показываем ошибку при неудачной отправке
  React.useEffect(() => {
    if (state.errors && (Array.isArray(state.errors) ? state.errors.length > 0 : Object.keys(state.errors).length > 0)) {
      toast.error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.', {
        duration: 5000,
        position: 'bottom-center',
        style: {
          background: 'rgba(220, 38, 38, 0.9)',
          color: '#fff',
          borderRadius: '8px',
          padding: '16px 24px',
          fontSize: '16px',
          fontWeight: '500',
        },
      });
    }
  }, [state.errors]);

  return (
    <Section id="contact">
      <ContentLeft>
        <SectionTitle>
          <MainTitle><FormattedMessage id="contact.title" /></MainTitle>
        </SectionTitle>
        <SectionLead><FormattedMessage id="contact.lead" /></SectionLead>
      </ContentLeft>
      
      <form ref={formRef} onSubmit={handleSubmit}>
        <FormGrid>
          <label>
            <LabelText><FormattedMessage id="contact.name" /></LabelText>
            <Input required type="text" name="name" placeholder={intl.formatMessage({ id: 'contact.name' })} />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </label>
          <label>
            <LabelText><FormattedMessage id="contact.email" /></LabelText>
            <Input required type="email" name="email" placeholder={intl.formatMessage({ id: 'contact.email' })} />
            <ValidationError prefix="email" field="email" errors={state.errors} />
          </label>
          <label>
            <LabelText><FormattedMessage id="contact.phone" /></LabelText>
            <PhoneInputWrapper>
              <PhoneInput
                value={phone}
                onChange={setPhone}
                placeholder={intl.formatMessage({ id: 'contact.phone' })}
                defaultCountry="ru"
              />
            </PhoneInputWrapper>
            {/* Скрытое поле для отправки телефона в Formspree, так как PhoneInput может не передавать значение напрямую */}
            <input type="hidden" name="phone" value={phone || ''} />
          </label>
          <label>
            <LabelText><FormattedMessage id="contact.details" /></LabelText>
            <TextArea rows={5} name="message" placeholder={intl.formatMessage({ id: 'contact.details' })} />
            <ValidationError prefix="message" field="message" errors={state.errors} />
          </label>
          <Button type="submit" disabled={state.submitting}>
            {state.submitting ? 'Отправка...' : <FormattedMessage id="contact.submit" />}
          </Button>
        </FormGrid>
      </form>
    </Section>
  );
}

 
