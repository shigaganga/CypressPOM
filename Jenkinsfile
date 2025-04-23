pipeline {
  agent any

  tools {
    nodejs "NodeJS 20"  // Use the NodeJS version configured in Jenkins
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout Code') {
      steps {
        // Checkout your project from GitHub
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        // Install necessary packages, including Cypress
        sh 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        // Run Cypress tests
        sh 'npm run test'
      }
    }

    stage('Generate Mochawesome Report') {
      steps {
        // Merge and generate Mochawesome report
        sh 'npm run report'
      }
    }

    stage('Publish Mochawesome Report') {
      steps {
        // Publish the Mochawesome HTML report in Jenkins UI
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
      // Clean up resources or notify after the build
      echo "Build complete!"
    }
  }
}
