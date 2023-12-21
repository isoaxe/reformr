'use client';

import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Captcha(props) {
  const { firstName, lastName, email, setToken, setLoading } = props;
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const captchaRef = useRef(null);

  function handleChange(value) {
    if (value) setRecaptchaToken(value);
  }

  useEffect(() => {
    setTimeout(() => captchaRef.current.execute(), 1000);
  }, [captchaRef]);

  useEffect(() => {
    if (recaptchaToken) {
      (async () => {
        setLoading(true);
        const options = {
          method: 'POST',
          body: JSON.stringify({ firstName, lastName, email, recaptchaToken }),
          headers: { 'content-type': 'application/json' },
        };
        const res = await fetch('/api/captcha', options);
        const json = await res.json();
        if (json.success) setToken(json.captchaToken);
        setLoading(false);
      })();
    }
  }, [recaptchaToken, firstName, lastName, email, setToken, setLoading]);

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
