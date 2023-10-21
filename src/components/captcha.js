'use client';

import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Captcha({ email, setVerified }) {
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  function handleChange(value) {
    if (value) setToken(value);
  }

  useEffect(() => {
    setTimeout(() => captchaRef.current.execute(), 1000);
  }, [captchaRef]);

  useEffect(() => {
    if (token) {
      (async () => {
        const res = await fetch(`/api/captcha?email=${email}&token=${token}`);
        const json = await res.json();
        if (json.success) setVerified(true);
      })();
    }
  }, [token, email, setVerified]);

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
