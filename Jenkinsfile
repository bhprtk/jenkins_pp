// pipeline {
//     agent any
//     stages {
//         stage('Test') {
//             steps {
//                 runTests()
//             }
//         }
//     }
// }


node {
    stage('Test') {
        runTests()
    }
}

void runTests(def args) {
    sh 'npm test'
}