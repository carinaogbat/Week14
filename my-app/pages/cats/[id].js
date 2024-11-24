import Layout from "../../components/layout";
import { getCatIds, getData } from "../../lib/data-firebase";
import { getFilePath } from "../../lib/data";
import Image from 'next/image';

// get static props
export async function getStaticProps( { params } ) {
    const itemData = await getData(params.id);
    const imgPath = await getFilePath(params.id)
    return {
        props: {
            itemData,
            imgPath
        }
    }

}

// get static paths
export async function getStaticPaths () {
    const paths = await getCatIds();
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
                <Image className="card-img-top" width={imgPath.width} height={imgPath.height} src={imgPath.imgPath} alt={itemData.name}/>
                <div className="card-body">
                    <h5 className="card-title">{itemData.name}</h5>
                    <h7>Indoor: {itemData.indoor}</h7>
                    <p className="card-text">{itemData.bio}</p>
                </div>
            </div>
        </Layout>
    )
}