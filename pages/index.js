import Layout from '../components/Layout';
import Hero from "../components/Hero";
import client from '../contentful';
import '../resources/scss/global.scss';

const Home = ({page}) => {
    const {
        heroBackgroundImage: {
            fields: {
                file: {url}
            }
        },
        heroText,
        heroSubText
    } = page;

    return (
        <Layout>
            <Hero
                img={url}
                header={heroText}
                subHeader={heroSubText}
            />
        </Layout>
    );
}

Home.getInitialProps = async () => {
    const {
        fields: page = {},
    } = await client.getEntry('4Sp0R3uxK3vyZQIOQv9FUP');

    return {
        page
    } 
}

export default Home;