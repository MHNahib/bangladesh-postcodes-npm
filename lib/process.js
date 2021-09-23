// read json
const postCodeObject = require(`${__dirname}/../src/postcodes.json`);

// handle all the functions
handle = {};

// find data from the userinput
const findData = (data, section) =>
  postCodeObject.find((c) => c[section].toLowerCase() === data.toLowerCase());

// get postcode object
handle.getPostcodeObject = (data) => {
  const value = findData(data.replace(/\s{2,}/g, "").trim(), "postOffice");

  // processed data
  const processedData = {
    upazila: value.upazila,
    postOffice: value.postOffice,
    postCode: value.postCode,
  };
  return processedData;
};

// get postOffice Object
handle.getPostOfficeObject = (data) => {
  const value = findData(data.replace(/\s{2,}/g, "").trim(), "postCode");

  // processed data
  const processedData = {
    upazila: value.upazila,
    postOffice: value.postOffice,
    postCode: value.postCode,
  };
  return processedData;
};

// get postOffice
handle.getPostOffice = (data) => {
  const processedData = handle.getPostOfficeObject(data);

  return processedData.postOffice;
};

// get getPostcode
handle.getPostcode = (data) => {
  const processedData = handle.getPostcodeObject(data);

  return processedData.postCode;
};

/*
// test code
  console.log(handle.getPostcode(`Bamna`));
  console.log(handle.getPostOffice(` 8700 `));
  console.log(handle.getPostcodeObject(`Bamna`));
  console.log(handle.getPostOfficeObject(` 1800 `));
*/

module.exports = handle;
