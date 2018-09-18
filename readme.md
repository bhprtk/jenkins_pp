![Jenkins++](jenkins_pp.png)

##Overview
Traditional Jenkins servers run multiple Jenkins job serially. In a growing company, there could be multiple jobs being run at a time and each job may have 1000+ automated tests. Running those jobs serially could take hours to days depending on the number and complexity of the automated tests in each job. The time complexity for the Jenkins server could be described as O(n) where n is the number of jobs.