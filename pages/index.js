import client from '../contentful';
import '../resources/scss/global.scss';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PhotoGallery from '../components/PhotoGallery';
import Contact from '../components/Contact';

const Home = ({ page }) => {
    const {
        heroBackgroundImage: {
            fields: {
                file: { url },
            },
        },
        heroText,
        heroSubText,
        photoGallery,
        phoneNumber,
        email,
    } = page;

    return (
        <Layout>
            <Hero img={url} header={heroText} subHeader={heroSubText} />
            <PhotoGallery photoGallery={photoGallery} />
            <Contact phone={phoneNumber} email={email} />
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
