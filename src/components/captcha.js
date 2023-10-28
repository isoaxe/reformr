'use client';

import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Captcha(props) {
  const { firstName, lastName, email, setToken } = props;
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);

  function handleChange(value) {
    if (value) setCaptchaToken(value);
  }

  useEffect(() => {
    setTimeout(() => captchaRef.current.execute(), 1000);
  }, [captchaRef]);

  useEffect(() => {
    if (captchaToken) {
      (async () => {
        const options = {
          method: 'POST',
          body: JSON.stringify({ firstName, lastName, email, captchaToken }),
          headers: { 'content-type': 'application/json' },
        };
        const res = await fetch('/api/captcha', options);
        const json = await res.json();
        if (json.success) setToken(json.token);
      })();
    }
  }, [captchaToken, firstName, lastName, email, setToken]);

  return (
    <ReCAPTCHA
      ref={captchaRef}
      size="invisible"
      badge="bottomright"
      sitekey="6LdcGLYoAAAAALiS3p1uTXU5979fEhDbF-yyhNda"
      onChange={handleChange}
    />
  );
}
