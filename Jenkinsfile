pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Ensure clean npm install
                    sh 'npm ci' // or use 'npm install' if you prefer
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Run the appropriate Cypress tests
                    if (params.TEST_TYPE == 'critical') {
                        sh 'npm run test:critical'
                    } else {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Generate Mochawesome Report') {
            steps {
                script {
                    sh 'npm run report'
                }
            }
        }
    }
}
