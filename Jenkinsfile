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
                echo 'Checking out the repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    bat 'npm --version'
                    bat 'npm install --legacy-peer-deps'
                    bat 'npm list'
                }
            }
        }

        stage('Run Critical Tests') {
            steps {
                script {
                    echo 'Running critical tests...'
                    bat 'npm run test:critical --env grep=@critical'
                }
            }
        }

        stage('Run Non-Critical Tests') {
            steps {
                script {
                    echo 'Running non-critical tests...'
                    catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                        bat 'npm run test:non-critical --env grep=@non-critical'
                    }
                }
            }
        }

        stage('Generate Mochawesome Report') {
            steps {
                script {
                    echo 'Listing files in reports directory...'
                    bat 'dir cypress/reports'

                    echo 'Merging Mochawesome reports...'
                    bat 'mochawesome-merge cypress/reports/*.json > cypress/reports/mochawesome.json'

                    echo 'Checking merged mochawesome.json file...'
                    bat 'dir cypress/reports/mochawesome.json'

                    echo 'Generating final Mochawesome report...'
                    bat 'marge cypress/reports/mochawesome.json --reportDir cypress/final-report'

                    echo 'Listing files in final-report directory...'
                    bat 'dir cypress/final-report'
                }
            }
        }

        stage('Archive Report') {
            steps {
                echo 'Archiving report...'
                bat 'dir cypress/final-report'
                archiveArtifacts artifacts: "${FINAL_REPORT_DIR}/**/*", allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Publishing HTML report...'
            publishHTML(target: [
                reportDir: "${FINAL_REPORT_DIR}",   // Folder where HTML report exists
                reportFiles: 'index.html',          // The main report file
                reportName: 'Cypress Mochawesome Report', // Name shown in Jenkins UI
                keepAll: true,                      // Retain all reports for previous builds
                alwaysLinkToLastBuild: true,        // Always link to last successful build's report
                allowMissing: true                  // Allow missing reports, but log a warning
            ])

            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}
