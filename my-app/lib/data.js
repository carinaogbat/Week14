import got from 'got';


// define url from rest endpoint
const dataURL = "https://dev-cs5033-carinaogbat.pantheonsite.io/wp-json/twentytwentyone-child/v1/special"
const catURL = "https://dev-cs5033-carinaogbat.pantheonsite.io/wp-json/twentytwentyone-child/v1/cats"
const ownerURL = "https://dev-cs5033-carinaogbat.pantheonsite.io/wp-json/twentytwentyone-child/v1/owners"
const contactURL = "https://dev-cs5033-carinaogbat.pantheonsite.io/wp-json/twentytwentyone-child/v1/contacts"

export async function getSortedData() {

  let jsonString;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  
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

export async function getCatData() {

  let jsonString;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString = await got(catURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  
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

export async function getOwnerData() {

  let jsonString;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString = await got(ownerURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  
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


export async function getContactData() {

  let jsonString;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString = await got(contactURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  
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
export async function getIds() {

  let jsonString1;
  // let jsonString2;
  // let jsonString3;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString1 = await got(dataURL);
    // jsonString1 = await got(URL2);
    // jsonString1 = await got(URL3);
    console.log(jsonString1.body);
  } catch(error) {
    jsonString1.body = [];
    // jsonString2.body = [];
    // jsonString3.body = [];
    console.log(error);
  }


  const jsonObj1 = JSON.parse(jsonString1.body);
  // const jsonObj2 = JSON.parse(jsonString2.body);
  // const jsonObj3 = JSON.parse(jsonString3.body);

  // use map() on array to extract just id properties into new array of obj values
  return jsonObj1.map(item => {
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