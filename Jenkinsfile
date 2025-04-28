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
                    bat 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Run Cypress tests
                    bat 'npx cypress run --reporter mochawesome'
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
