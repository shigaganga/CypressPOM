
/*Test Filter by Rani*/

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

