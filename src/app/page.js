import { redirect } from 'next/navigation';

/* This replaces <Home/> as the entry point to the app. */
/* Don't want a default layout but do want one for Home.  */
export default function Entry() {
  redirect('/main/home ');
}
