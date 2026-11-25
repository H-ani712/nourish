import { redirect } from 'next/navigation'

// The home route is normally rewritten to the food picker in next.config.mjs;
// this redirect is a fallback if that rewrite is ever removed.
export default function Page() {
  redirect('/food-picker.html')
}
