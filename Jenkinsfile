pipeline {
    agent any

    environment {
        REPORT_DIR = 'cypress/reports'
        FINAL_REPORT_DIR = 'cypress/final-report'
        REPORT_FILE = 'mochawesome.json'
    }

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

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies
                    bat 'npm ci' // Use 'npm ci' for a clean install
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    def browserFlag = "--browser ${params.BROWSER}"
                    def testCommand = "npx cypress run --env grep=${params.TEST_TYPE} ${browserFlag} --reporter mochawesome"
                    // Run Cypress tests based on the test type
                    if (params.TEST_TYPE == 'critical') {
                        bat 'npm run test:critical'
                    } else {
                        bat 'npm test'
                    }
                    // Running the Cypress tests
                    bat testCommand
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
            // Clean up if necessary
            cleanWs()
        }
    }
}
