import Link from 'next/link';
import Head from "next/head";

export default function Shop({message}) {
    return (
        <div>
            <Head>
                <title>Shop Page</title>
            </Head>
            <h1>Message from server - {message}</h1>
        </div>
    );
}

Shop.getInitialProps = async () => {
    const res = await fetch('http://localhost:8080/api/v1/shop')
    const text = await res.text();
    return { message: text }
};