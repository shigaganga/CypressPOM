pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests Fast') {
            steps {
                bat 'npx cypress run --browser chrome --headless --record false'
            }
        }
    }
}
