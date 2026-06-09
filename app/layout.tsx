import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kritagya Bhandari — Digital Marketing Consultant Nepal',
  description: "Book a free 1:1 consultation call with Kritagya Bhandari, Nepal's digital marketing consultant.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1493069502606428');
fbq('track', 'PageView');`}
        </Script>
        {/* Facebook Pixel noscript fallback — rendered as raw HTML via dangerouslySetInnerHTML on a wrapper */}
      </head>
      <body>{children}</body>
    </html>
  );
}
