import got from 'got';

const catURL = "https://dev-cs5033-carinaogbat.pantheonsite.io/wp-json/twentytwentyone-child/v1/cats";

export async function getAllIds() {

    let jsonString;
    try {

      jsonString = await got(catURL);
      console.log(jsonString.body);
    } catch(error) {
      jsonString.body = [];
      console.log(error);
    }
  
    // convert string from file into json array object
    // const jsonObj = JSON.parse(jsonString);
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

  export async function getData(idRequested) {

    let jsonString;
    try {
      // next line uses got synchronously to retrive via https our json data from wp site
      jsonString = await got(catURL);
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