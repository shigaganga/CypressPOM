pipeline {
    agent any

    parameters {
        string(name: 'TEST_TYPE', defaultValue: 'all', description: 'Specify which tests to run (e.g., all, critical)')
        booleanParam(name: 'INSTALL_DEPENDENCIES', defaultValue: true, description: 'Install npm dependencies')
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
            when {
                expression { return params.INSTALL_DEPENDENCIES }
            }
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
                    // Run Cypress tests based on TEST_TYPE parameter
                    if (params.TEST_TYPE == 'critical') {
                        bat 'npx cypress run --spec "cypress/integration/critical/*.js" --reporter mochawesome'
                    } else {
                        bat 'npx cypress run --reporter mochawesome'
                    }
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
