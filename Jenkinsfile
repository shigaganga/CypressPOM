pipeline {
    agent any

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
                    bat 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Run Critical Tests') {
            steps {
                script {
                    // Run critical tests
                    bat 'npm run test:critical'
                }
            }
        }

        stage('Generate Mochawesome Report') {
            steps {
                script {
                    // Merge Mochawesome reports and generate a final report
                    bat 'mochawesome-merge cypress/reports/*.json > cypress/reports/mochawesome.json',
                    bat 'marge cypress/reports/mochawesome.json --reportDir cypress/final-report'

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
