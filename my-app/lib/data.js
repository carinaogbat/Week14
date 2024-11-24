// import fs from 'fs';
// import path from 'path';
// data.js is utility functions to read data
import got from 'got';
//get filepath to data directory. cwd = current working directory
// const dataDir = path.join( process.cwd(), 'data' );

// define url from rest endpoint
const dataURL = "https://dev-cs5033-carinaogbat.pantheonsite.io/wp-json/twentytwentyone-child/v1/special"

export async function getSortedData() {
  // get filepath to json file
  // const filePath = path.join(dataDir, 'persons.json');

  // load json file contents
  // const jsonString = fs.readFileSync(filePath, 'utf8');
  let jsonString;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  
  // convert string from file into json array object
  // const jsonObj = JSON.parse(jsonString);
  const jsonObj = JSON.parse(jsonString.body);

  // sort json array by name property
  jsonObj.sort(function (a, b) {
      return a.post_title.localeCompare(b.post_title);
  });

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}




// function to return all cat ids
export async function getCatIds() {

  let jsonString;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }


  const jsonObj = JSON.parse(jsonString.body);

  // use map() on array to extract just id properties into new array of obj values
  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  });

}

// return all of the properties for the object with a matching id value
export async function getData( requestedID ) {
 // get filepath to json file
  // const filePath = path.join(dataDir, 'persons.json');

  // load json file contents
  // const jsonString = fs.readFileSync(filePath, 'utf8');
  let jsonString;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }

  // convert string from file into json array object
  // const jsonObj = JSON.parse(jsonString);
  const jsonObj = JSON.parse(jsonString.body);

  // find object value in array that has matching id
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });

  // extract object value in filtered array if any
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  // console.log(objReturned);

  // return object value found
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
            return obj.ID.toString() === requestedID;
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

//testing