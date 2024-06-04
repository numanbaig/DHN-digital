import "@/styles/globals.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LdJr_ApAAAAAJwsg5FdAKiqBxOPDM3HoOJpMcaF"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}
