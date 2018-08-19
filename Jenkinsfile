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

def runTests(args) {
    sh 'npm test'
}

node {
    stage('Test') {
        runTests()
    }
}
