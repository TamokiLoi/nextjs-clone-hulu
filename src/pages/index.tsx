import { Meta, Results } from '@@components'
import type { GetServerSideProps, NextPage } from 'next'
import requests from '../helpers/requests.helper';

const Home: NextPage = ({ results }: any) => {
    return (
        <>
            <Meta title='Hulu Clone' description='Home Page' />
            <Results results={results} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const queryGenre: any = context.query.genre;
    const request = await fetch(`https://api.themoviedb.org/3${(requests as any)[queryGenre]?.url || requests.fetchTrending.url}`)
        .then(res => res.json());
    return {
        props: {
            results: request.results,
        },
    };
};

export default Home;
