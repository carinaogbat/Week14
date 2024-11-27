import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
    return (
        <div>
            <Head>
                <title>Carinas Cats</title>
            </Head>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                    <Link href="/owners">    View Owners</Link>
                    <Link href="/contacts">   Contacts</Link>
                    <a href="https://sierrameadowscatalog.carinaogbat.site/">Check the Neighborhood CATalog</a>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>

            <footer>
                <p>Carinas Cats, a site for cat lovers </p>
                {!home && (
                <Link href="/" className="btn btn-primary mt-3">
                    Back to Home
                </Link>
            )
            }
            </footer>
        </div>
    );
}