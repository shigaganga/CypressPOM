
/*Test-control_By_Rani*/
/*
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


*/


/*
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { getEnabledTestIdListFromDrive } = require('./utils/testFilter');

const downloadsDir = path.resolve(__dirname, '../cypress/downloads');
const dependencyFile = path.join(downloadsDir, 'consistency_dependency.csv');

async function runTests() {
  try {
    // 1️⃣ Fetch enabled tests (with dependencies) from Google Sheet
    const enabledTests = await getEnabledTestIdListFromDrive();

    // Save only testIds to JSON for Cypress env
    const jsonFilePath = path.resolve(__dirname, 'allowedTests.json');
    const testIds = enabledTests.map(t => t.testId);
    fs.writeFileSync(jsonFilePath, JSON.stringify(testIds, null, 2));
    console.log(`✅ Saved allowed tests to ${jsonFilePath}`);

    // 2️⃣ Build CSV with Dependency + initial Status
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir, { recursive: true });
    }

    const csvHeader = "Test_id,Dependency,Status\n";
    const csvRows = enabledTests.map(row => 
      `${row.testId},${row.dependency},Not executed`
    );
    const csvContent = csvHeader + csvRows.join("\n");

    fs.writeFileSync(dependencyFile, csvContent);
    console.log(`✅ Created dependency file at ${dependencyFile}`);

    // 3️⃣ Run Cypress regression tests
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
    console.error('❌ Failed to run tests:', e.message);
  }
}

runTests();

*/


// scripts/run-tests.js  By Rani Yelgalwar
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { getEnabledTestListFromDrive } = require('./utils/testFilter');
const os = require("os");
const downloadsDir = path.join(os.homedir(), "Downloads");
const dependencyFile = path.join(downloadsDir, "consistency_dependency.csv");


function resolveDependencies(tests) {
  let order = [];

  // Helper function to add a test and its dependencies
  function addTest(test) {
    // If already added, skip it
    if (order.includes(test.Test_id)) {
      return;
    }

    // If this test has a dependency, resolve it first
    if (test.dependency && test.dependency !== "NA") {
      const depTest = tests.find(x => x.test_Id === test.dependency);
      if (depTest) {
        addTest(depTest);  // 🔁 recursion
      }
    }

    // Now add the test itself
    order.push(test);
  }

  // Process all tests
  tests.forEach(t => addTest(t));

  return order;
}




async function runTests() {
  try {
    // 1️⃣ Fetch enabled tests (with dependencies) from Google Sheet
    const enabledTests = await getEnabledTestListFromDrive();
    const orderedTests = resolveDependencies(enabledTests);
    // Save only testIds to JSON for Cypress env
    const jsonFilePath = path.resolve(__dirname, 'allowedTests.json');
    const testIds = orderedTests.map(t => t.testId);
    fs.writeFileSync(jsonFilePath, JSON.stringify(testIds, null, 2));
    console.log(`✅ Saved allowed tests to ${jsonFilePath}`);

    // 2️⃣ Build CSV with Dependency + initial Status
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir, { recursive: true });
    }

    const csvHeader = "Test_id,Dependency,Status\n";
    const csvRows = orderedTests.map(row =>
      `${row.testId},${row.dependency},Not executed`
    );
    const csvContent = csvHeader + csvRows.join("\n");

    fs.writeFileSync(dependencyFile, csvContent);
    console.log(`✅ Created dependency file at ${dependencyFile}`);

    // 3️⃣ Build spec list (unique)
    const specFiles = [...new Set(orderedTests.map(t => t.specfile).filter(Boolean))];
    if (specFiles.length === 0) {
      console.log("⚠️ No spec files to run. Exiting.");
      return;
    }

    const specArg = specFiles.map(f => `cypress/e2e/POMTest/${f}`).join(',');
    
const command = `npx cypress run --browser chrome --headless --env dependencyFile=${dependencyFile} --spec "${specArg}"`;

    console.log(`🚀 Running: ${command}`);

    exec(command, (err, stdout, stderr) => {
      console.log(stdout);
      console.error(stderr);
      if (err) {
        console.error('Test run failed:', err.message);
      }
    });

  } catch (e) {
    console.error('Failed to run tests:', e.message);
  }
}

runTests();
