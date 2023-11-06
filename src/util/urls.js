// Social Media
export const INSTAGRAM = 'https://www.instagram.com/reformr.nz';

/* Check what URL is currently being used. */
const currentUrl = window.location.href;
let baseUrl;
if (currentUrl.includes('localhost')) baseUrl = 'http://localhost:3000';
else if (currentUrl.includes('.app')) baseUrl = 'https://reformr.vercel.app';
else if (currentUrl.includes('.nz')) baseUrl = 'https://reformr.nz';
else if (currentUrl.includes('.com')) baseUrl = 'https://reformr.com';
export const BASE_URL = baseUrl;
