pipeline {
    agent any

    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chrome', 'firefox', 'edge'],
            description: 'Select the browser to run the tests'
        )
        choice(
            name: 'TEST_TYPE',
            choices: ['critical', 'smoke', 'regression'],
            description: 'Select the test type to run'
        )
    }

    environment {
        REPORT_DIR = 'cypress/reports'
        FINAL_REPORT_DIR = 'cypress/final-report'
        REPORT_FILE = 'mochawesome.json'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Ensure clean npm install
                    bat 'npm ci' // or use 'npm install' if you prefer
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Set the browser flag based on the selected parameter
                    def browserFlag = "--browser ${params.BROWSER}"

                    // Run the appropriate Cypress tests based on TEST_TYPE
                    if (params.TEST_TYPE == 'critical') {
                        bat "npm run test:critical ${browserFlag}"
                    } else {
                        bat "npm test ${browserFlag}"
                    }

                    // Run Cypress tests with the chosen browser
                    bat "npx cypress run ${browserFlag} --reporter mochawesome"
                }
            }
        }

        stage('Generate Mochawesome Report') {
            steps {
                script {
                    // Merge Mochawesome reports and generate a final report
                    bat 'mochawesome-merge cypress/reports/*.json > mochawesome.json'
                    bat 'marge mochawesome.json --reportDir cypress/final-report'
                }
            }
        }

        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: "${FINAL_REPORT_DIR}/**/*", allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            // Clean up workspace after the build
            cleanWs()
        }
    }
}
