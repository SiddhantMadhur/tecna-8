import "../styles/globals.css";
import "../styles/navbar.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../server/firebaseConfig";
import { useEffect } from "react";
import NavBar from "../components/navbar";

const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const analytics = getAnalytics(app);
  }, []);
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
