import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import Head from 'next/head';
import client from '../contentful';
import '../resources/scss/global.scss';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PhotoGallery from '../components/PhotoGallery';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';

const Home = ({ page }) => {
    const {
        heroBackgroundImage: { fields: { file: { url = '' } = {} } = {} } = {},
        heroText,
        heroSubText,
        photoGallery,
        phoneNumber,
        email,
    } = page;

    return (
        <Layout>
            <Head>
                <title>Emily Kim Makeup</title>
                <script
                    crossOrigin="anonymous"
                    src="https://polyfill.io/v3/polyfill.min.js?features=es6%2Ces7%2Ces5%2Ces2015%2Ces2016%2Ces2017"
                />
            </Head>
            <Hero img={url} header={heroText} subHeader={heroSubText} />
            <PhotoGallery photoGallery={photoGallery} />
            <Contact phone={phoneNumber} email={email} />
            <ContactForm />
        </Layout>
    );
};

Home.getInitialProps = async () => {
    const { fields: page = {} } = await client.getEntry(
        '4Sp0R3uxK3vyZQIOQv9FUP'
    );

    return {
        page,
    };
};

export default Home;
