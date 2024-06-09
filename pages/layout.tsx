import { DesktopNavbar } from "@components/desktop-navbar";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import Head from "next/head";
// import { Metadata } from 'next/types'

const APP_NAME = "Horecah";
const APP_DEFAULT_TITLE = "Horecah";
const APP_TITLE_TEMPLATE = "%s - App";
const APP_DESCRIPTION = "Horecah!";

export const metadata: any = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: any = {
  themeColor: "#FFFFFF",
};

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,minimal-ui,viewport-fit=cover,initial-scale=1,maximum-scale=1,user-scalable=no"
        />{" "}
        <title>Horecah</title>
        <meta name="description" content="Horecah!" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/icons/app/icon.png" color="#FFFFFF" />
        {/* <link
          rel="icon"
          href="/icons/app/icon.png"
          type="image/png"
          sizes="192x192"
        /> */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" sizes="192x192" href="/icons/app/icon.png" />
        <link rel="icon" sizes="128x128" href="/icons/app/icon-128x128.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/icons/app/apple-touch-icon.png" />
        {/* <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        /> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://client.horecah.com" />
        <meta name="twitter:title" content="Horecah App" />
        <meta name="twitter:description" content="Horecah!" />
        <meta name="twitter:image" content="/icons/twitter.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Horecah App" />
        <meta property="og:description" content="Horecah!" />
        <meta property="og:site_name" content="Horecah App" />
        <meta property="og:url" content="https://client.horecah.com" />
        <meta property="og:image" content="/icons/og.png" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="yes" name="mobile-web-app-capable" />
        {/* add the following only if you want to add a startup image for Apple devices. */}
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
