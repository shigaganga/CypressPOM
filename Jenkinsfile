pipeline {
  agent any

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Generate Mochawesome Report') {
      steps {
        sh 'npm run report'
      }
    }

    stage('Publish Mochawesome Report') {
      steps {
        publishHTML(target: [
          reportDir: 'cypress/final-report',
          reportFiles: 'mochawesome.html',
          reportName: 'Mochawesome HTML Report',
          alwaysLinkToLastBuild: true,
          keepAll: true
        ])
      }
    }
  }

  post {
    always {
      echo "Build complete!"
    }
  }
}
