import Layout from "../../components/layout";
import { getCatIds, getIds } from "../../lib/data-firebase";
import { dataURL, catURL, ownerURL} from "../../lib/data-firebase";


// get static props
export async function getStaticProps( { params } ) {
    const itemData = await getData(params.id);
    return {
        props: {
            itemData
        }
    }

}

// get static paths
export async function getStaticPaths () {
    const paths = await getIds()
    return {
        paths,
        fallback: false
    };
}

// export dynamic page component
export default function catPage( {itemData, imgPath} ) {
    return (
        <Layout>
            <div className="card col-8">
                <div className="card-body">
                    <h5 className="card-title">{itemData.name}</h5>
                    <h7>Indoor: {itemData.indoor}</h7>
                    <p className="card-text">{itemData.bio}</p>
                </div>
            </div>
        </Layout>
    )
}