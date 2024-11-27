import Layout from "../../components/layout";
// import { getIDs, getData } from "../../lib/data-firebase";
// import { getIDs, getCatData } from "../../lib/data";
import { getAllIds, getData } from '../../lib/data-cats';


// get static props
export async function getStaticProps( { params } ) {
    const itemData = await getData(params.id);
    return {
        props: {
            itemData
        },
        revalidate: 60
    };

}

// get static paths
export async function getStaticPaths () {
    const paths = await getAllIds();
    return {
        paths,
        fallback: false
    };
}

// export dynamic page component
export default function catPage( {itemData} ) {
    return (
        <Layout>
            <div className="card col-8">
                <div className="card-body">
                    <h5 className="card-title">{itemData.cat_name}</h5>
                    <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.post_content}} />
                </div>
            </div>
        </Layout>
    )
}