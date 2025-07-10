
/*Test-control_By_Rani*/
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { getEnabledTestIdListFromDrive } = require('./utils/testFilter');

async function runTests() {
  try {
    const allowedTests = await getEnabledTestIdListFromDrive();
    const filePath = path.resolve(__dirname, 'allowedTests.json');

    // Write allowed test IDs to JSON file
    fs.writeFileSync(filePath, JSON.stringify(allowedTests, null, 2));
    console.log(`✅ Saved allowed tests to ${filePath}`);

    const command = `npm run test:regression`;
    console.log(`🚀 Running: ${command}`);

    exec(command, (err, stdout, stderr) => {
      console.log(stdout);
      console.error(stderr);
      if (err) {
        console.error('❌ Test run failed:', err.message);
      }
    });
  } catch (e) {
    console.error('❌ Failed to get allowed tests:', e.message);
  }
}

runTests();



