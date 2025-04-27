pipeline {
    agent any

    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chrome', 'firefox', 'edge'],
            description: 'Select the browser to run the tests',
            defaultValue: 'chrome'
        )
        choice(
            name: 'TEST_TYPE',
            choices: ['critical', 'smoke', 'regression'],
            description: 'Select the test type to run',
            defaultValue: 'critical'
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
                    bat 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    def browserFlag = "--browser ${params.BROWSER}"
                    def testCommand = "npx cypress run --env grep=${params.TEST_TYPE} ${browserFlag} --reporter mochawesome"
                    bat testCommand
                }
            }
        }

        stage('Generate Mochawesome Report') {
            steps {
                script {
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
            cleanWs()
        }
    }
}
