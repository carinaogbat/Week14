import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
    return (
        <div>
            <Head>
                <title>Carinas Cats</title>
            </Head>
            <header>
                <nav>
                    <a href="https://sierrameadowscatalog.carinaogbat.site/">Check the CATalog</a>
                    <a href="/owners">    View Owners</a>
                    <a href="/contacts">   Contacts</a>
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