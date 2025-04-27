pipeline {
    agent any

    parameters {
        // Parameter for selecting test type
        choice(name: 'TEST_TYPE', choices: ['critical', 'smoke', 'regression'], description: 'Select the test type to run')

        // Parameter for selecting browser
        choice(name: 'BROWSER', choices: ['chrome', 'firefox', 'edge'], description: 'Select the browser to run the tests')
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
                    // Install npm dependencies
                    bat 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Choose the browser for Cypress
                    def browserFlag = ''
                    if (params.BROWSER == 'chrome') {
                        browserFlag = '--browser chrome'
                    } else if (params.BROWSER == 'firefox') {
                        browserFlag = '--browser firefox'
                    } else if (params.BROWSER == 'edge') {
                        browserFlag = '--browser edge'
                    }

                    // Choose which tests to run based on the selected parameter
                    def testCommand = ''
                    if (params.TEST_TYPE == 'critical') {
                        testCommand = "npx cypress run --env grep=@critical ${browserFlag} --reporter mochawesome"
                    } else if (params.TEST_TYPE == 'smoke') {
                        testCommand = "npx cypress run --env grep=smoke ${browserFlag} --reporter mochawesome"
                    } else {
                        testCommand = "npx cypress run ${browserFlag} --reporter mochawesome"
                    }
                    
                    // Run Cypress tests with the selected browser and test type
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
