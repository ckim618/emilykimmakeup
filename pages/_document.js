import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta
                        httpEquiv="Content-type"
                        content="text/html; charset=utf-8"
                    />
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <meta
                        property="og:url"
                        content="http://www.emilykimmakeup.com"
                    />
                    <meta property="og:title" content="Emily Kim Makeup" />
                    <meta
                        property="og:description"
                        content="Professional makeup and hair artist available to book for any event!"
                    />
                    <meta
                        property="og:image"
                        content="http://images.ctfassets.net/i70jiwebm7c8/6ch244bBPtLgbEms1gKyw8/7126ea91b76fad7535b5a883bee6be1c/hero.jpg"
                    />
                    <link rel="shortcut icon" href="/static/img/brush.png" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Dosis&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
