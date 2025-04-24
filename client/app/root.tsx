import {Box, ChakraProvider, Heading} from "@chakra-ui/react";
import {type LinksFunction, type LoaderFunctionArgs} from "@remix-run/node"; // Depends on the runtime you choose
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
  useNavigation,
  useRouteError,
  useRouteLoaderData,
} from "@remix-run/react";
import {useTranslation} from "react-i18next";
import {useChangeLanguage} from "remix-i18next/react";
import {AdminHeader} from "./components/header/admin/index";
import {Header} from "./components/header/user/index";
import {SideBar} from "./components/side-bar";
import {SIDE_BAR_WIDTH} from "./components/side-bar/constants";
import {LOCALES} from "./constants";
import {theme} from "./styles";
import i18next from "~/i18n/i18next.server";

export default function App() {
  const navigation = useNavigation();

  const {locale} = useLoaderData<typeof loader>();
  const {i18n} = useTranslation();

  const matches = useMatches();
  const isAdmin = matches.some((match) => {
    // FIXME: don't wanna use "as"
    const handle = match.handle as {isAdmin: boolean} | undefined;
    return handle?.isAdmin;
  });

  return (
    <Document locale={locale} dir={i18n.dir()}>
      <ChakraProvider theme={theme}>
        {isAdmin ? (
          <AdminHeader />
        ) : (
          <>
            <Header />
            <SideBar />
          </>
        )}
        <Box
          pl={
            isAdmin ? undefined : {base: undefined, md: `${SIDE_BAR_WIDTH}px`}
          }
          {...(navigation.state === "loading"
            ? {
                opacity: 0.25,
                transition: "opacity 200ms",
                transitionDelay: "200ms",
              }
            : {})}
        >
          <Outlet />
        </Box>
      </ChakraProvider>
    </Document>
  );
}
// Ref: https://remix.run/docs/en/main/guides/errors
export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  // Ref: https://sergiodxa.com/tutorials/access-remix-s-loader-data-from-a-root-errorboundary
  const data = useRouteLoaderData<typeof loader>("root");
  const {i18n, t} = useTranslation("root");

  return (
    <Document locale={data?.locale ?? LOCALES.en} dir={i18n.dir()}>
      <ChakraProvider theme={theme}>
        <Header />
        <SideBar />
        <Box
          w={{base: undefined, md: `calc(100dvw - ${SIDE_BAR_WIDTH}px)`}}
          pt="32px"
          textAlign="center"
        >
          <Heading as="h1" mb="32px">
            {t("Something went wrong")}
          </Heading>
          <Heading fontWeight={600} fontSize="3xl">
            {t("Try reload the page")}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
}

export async function loader({request}: LoaderFunctionArgs) {
  const locale = await i18next.getLocale(request);
  return json({locale});
}

interface DocumentProps {
  children: React.ReactNode;
  locale: string;
  dir: string;
}

const Document = ({children, locale, dir}: DocumentProps) => {
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={dir}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${
              import.meta.env.VITE_GOOGLE_TAG_MANAGER_CONTAINER_ID
            }');
        `,
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${
            import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID
          }`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${
              import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID
            }');
        `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${
              import.meta.env.VITE_GOOGLE_TAG_MANAGER_CONTAINER_ID
            }`}
            height="0"
            width="0"
            style={{display: "none", visibility: "hidden"}}
          ></iframe>
        </noscript>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export const links: LinksFunction = () => {
  return [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {rel: "preconnect", href: "https://fonts.gstatic.com"},
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
    {rel: "icon", href: "/favicon.ico"},
  ];
};
