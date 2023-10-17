import { redirect } from 'next/navigation';

/* This replaces <Home/> as the entry point to the app. */
/* Needed to move <Home/> so that new layout got applied to it. */
export default function Entry() {
  redirect('/main/home ');
}
