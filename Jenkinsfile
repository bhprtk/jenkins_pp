pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                runTests()
            }
        }
    }
}

void runTests(def args) {
    sh 'npm test'
}