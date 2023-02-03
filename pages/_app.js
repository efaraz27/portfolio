import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Script
          id="clarity"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "djtosfcyca");`,
          }}
        />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
