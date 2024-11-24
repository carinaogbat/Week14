import app from "./firebase-app";
import { getFirestore, collection, getDocs, doc, getDoc} from "firebase/firestore";

const db = getFirestore(app);

export async function getSortedData() {

    const snapshot = await getDocs( collection(db, "cats") ) ;

    const jsonObj = snapshot.docs.map(
        (d) => (
            {
                id: d.id,
                ...d.data()
            }
        )   
        )

    // sort json array by name property
    jsonObj.sort(
        function (a, b) {
            return a.name.localeCompare(b.name);
        }
    );

    // use map() on array to exract the id and name properties into a new array of object values
    return jsonObj.map(
        function(item) {
            return {
                id: item.id.toString(),
                name: item.name,
            };
        }
    );
}


// function to return all cat ids
export async function getCatIds() {

    const snapshot = await getDocs( collection(db, "cats") ) ;
    const jsonObj = snapshot.docs.map(
        (doc) => (
            {
                id: doc.id
            }
        )   
        );
    
        return jsonObj.map(
            function(item) {
                return {
                    params: {
                        id: item.id.toString()
                    }
                }
            }
        )

}

export async function getData( requestedID ) {

    const docRef = doc(db, "cats", requestedID);
    const d = await getDoc(docRef);

    let objReturned;
    if (!d.exists) {
        objReturned = {};
    } else {
        objReturned = d.data();
    }

    return objReturned;
}

// return all of the properties for the object with a matching id value
export async function getFilePath( requestedID ) {
    // get filepath to json file
    const filePath = path.join(dataDir, 'imgPaths.json');

    // load json file contents
    const jsonString = fs.readFileSync( filePath, 'utf8');

    // convert string from file into json array object
    const jsonObj = JSON.parse(jsonString);

    const matchingObj = jsonObj.filter(
        function(obj) {
            return obj.id.toString() === requestedID;
        }
    );

    let returnedObj;
    if (matchingObj.length > 0) {
        returnedObj = matchingObj[0] 
    } else {
        returnedObj = {};
    }

    return returnedObj;
}