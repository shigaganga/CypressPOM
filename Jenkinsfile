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
                    // Debugging: Show npm version and check installed dependencies
                    echo 'Installing dependencies...'
                    bat 'npm --version'  // Check npm version
                    bat 'npm install --legacy-peer-deps'  // Install dependencies
                    bat 'npm list'  // Show installed npm packages for debugging
                }
            }
        }

        stage('Run Critical Tests') {
            steps {
                script {
                    // Debugging: Check if test:critical script is defined in package.json
                    echo 'Running critical tests...'
                    bat 'npm run test:critical --env grep=@critical'  // Run critical tests
                }
            }
        }

        stage('Generate Mochawesome Report') {
            steps {
                script {
                    // Debugging: List files in the reports directory before merging
                    echo 'Listing files in reports directory...'
                    bat 'dir cypress/reports'

                    // Merge Mochawesome reports and generate final report
                    echo 'Merging Mochawesome reports...'
                    bat 'mochawesome-merge cypress/reports/*.json > cypress/reports/mochawesome.json'
                    
                    // Check if merge was successful and the file exists
                    echo 'Checking merged mochawesome.json file...'
                    bat 'dir cypress/reports/mochawesome.json'

                    echo 'Generating final Mochawesome report...'
                    bat 'marge cypress/reports/mochawesome.json --reportDir cypress/final-report'

                    // Check the final report directory
                    echo 'Listing files in final-report directory...'
                    bat 'dir cypress/final-report'
                }
            }
        }

        stage('Archive Report') {
            steps {
                // Debugging: Check if final report exists before archiving
                echo 'Archiving report...'
                bat 'dir cypress/final-report'  // Check if final-report directory exists
                archiveArtifacts artifacts: "${FINAL_REPORT_DIR}/**/*", allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            // Clean up the workspace after the build
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}


