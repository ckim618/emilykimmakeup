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
                    <link rel="shortcut icon" href="/static/img/brush.png" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Dosis&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <form
                        name="contact-form"
                        method="post"
                        data-netlify-="true"
                        netlify
                        data-netlify-honeypot="bot-field"
                    >
                        <input
                            type="hidden"
                            name="form-name"
                            value="contact-form"
                        />
                    </form>
                </body>
            </html>
        );
    }
}
