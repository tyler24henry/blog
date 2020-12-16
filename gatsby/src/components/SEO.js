import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location }) {
  const title = "Tyler Henry";
  const description = "A blog you will be telling your grandkids about...";
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel="icon" href="/lightningbolt.png" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        propery="og:site_name"
        content={title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
}