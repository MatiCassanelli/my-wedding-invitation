import Head from "next/head";

const title = "Invitación para la boda de Mati y Ro";
const image = "https://boda-mati-ro.web.app/mati-ro.jpeg";
const description =
  "Esta es la invitacion para nuestra boda! Por favor, leé toda la info y completá el formulario para saber si contamos con vos en este gran momento.";
const url = "https://boda-mati-ro.web.app";
const type = "website";

export function Meta() {
  return (
    <Head>
      {/* Basic meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:site_name" content="Nuestra boda - Mati y Ro" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
