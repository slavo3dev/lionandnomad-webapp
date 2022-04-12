import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { BaseLayout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <BaseLayout>
                <Component {...pageProps} />
            </BaseLayout>
        </>
    );
}

export default MyApp;
