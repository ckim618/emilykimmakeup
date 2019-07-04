import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </html>
        );
    }
}
