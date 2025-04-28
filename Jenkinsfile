pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Critical Tests') {
            steps {
                script {
                    
                    // Run the critical tests in headless mode with Chrome browser
                    bat 'npx cypress run --browser chrome --headless --env grep=@critical --record false'
                }
            }
        }
    }
}
