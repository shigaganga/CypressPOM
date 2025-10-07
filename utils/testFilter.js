
/*Test Filter by Rani*/
/*
const axios = require('axios');
const xlsx = require('xlsx');

async function getEnabledTestIdListFromDrive() {
  const fileId = '1t3eTB74wJSTqnyv6lquubGnhNsVerI-I_CQDYf1wHWg';
const url = `https://docs.google.com/spreadsheets/d/${fileId}/export?format=csv&gid=1192378355`;



  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
    });

    const workbook = xlsx.read(response.data, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    return data
      .filter(row => row.run?.toLowerCase() === 'yes')
      .map(row => row.testId.trim());


  } catch (error) {
    console.error('❌ Failed to fetch Excel file:', error.message);
    return [];
  }
}

module.exports = { getEnabledTestIdListFromDrive };
*/


/*
const axios = require('axios');
const xlsx = require('xlsx');

async function getEnabledTestIdListFromDrive() {
  const fileId = '1qt6d15k1S0Ctv-CosGalse7whF6ifEsO7ypYXG7BXjI';
  const url = `https://docs.google.com/spreadsheets/d/${fileId}/export?format=csv&gid=0`;

  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    const workbook = xlsx.read(response.data, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    // 👇 Expecting Google Sheet has columns: testId, dependency, run
    return data
  .filter(row => row.run && row.run.toString().trim().toLowerCase() === 'yes')
  .map(row => ({
    testId: row.testid ? row.testid.toString().trim() : null,
    dependency: row.dependency ? row.dependency.toString().trim() : 'NA'
  }))
  .filter(t => t.testId); // remove nulls

  } catch (error) {
    console.error('❌ Failed to fetch Excel file:', error.message);
    return [];
  }
}

module.exports = { getEnabledTestIdListFromDrive };

*/



// utils/testFilter.js
const axios = require('axios');
const xlsx = require('xlsx');

async function getEnabledTestListFromDrive() {
  const fileId = '1qt6d15k1S0Ctv-CosGalse7whF6ifEsO7ypYXG7BXjI';
  const url = `https://docs.google.com/spreadsheets/d/${fileId}/export?format=csv&gid=0`;

  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const workbook = xlsx.read(response.data, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    // 👇 Expecting columns: specfile, testid, dependency, run
    return data
      .filter(row => row.run?.toLowerCase() === 'yes')
      .map(row => ({
        specfile: row.specfile?.trim(),
        testId: row.testid?.trim(),
        dependency: row.dependency?.trim() || 'NA'
      }));

  } catch (error) {
    console.error('❌ Failed to fetch sheet:', error.message);
    return [];
  }
}

module.exports = { getEnabledTestListFromDrive };







/*const csvToJson = require("convert-csv-to-json");

function getEnabledTestIdListFromDrive(sheetId, gid = "0") {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&id=${sheetId}&gid=${gid}`;

  return new Promise((resolve, reject) => {
    cy.request(url).then((response) => {
      if (response.status !== 200) {
        return reject(new Error("❌ Failed to fetch Google Sheet"));
      }

      const csvData = response.body;

      // Convert CSV → JSON
      const jsonOutput = csvToJson.fieldDelimiter(",").csvStringToJson(csvData);

      // Extract enabled test IDs
      const runnable = jsonOutput
        .filter((row) => row.run?.toLowerCase() === "yes")
        .map((row) => row.testId?.trim());

      resolve(runnable);
    });
  });
}

module.exports = { getEnabledTestIdListFromDrive };
*/
