
/* Test Filter by Rani Yelgalwar */

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







