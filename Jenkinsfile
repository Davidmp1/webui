node('FreeNAS-webui') {
    stage('Checkout') {
      checkout scm
    }
    stage('Cleanup') {
      echo 'Cleaning environment'
      sh 'cd $WORKSPACE ; rm -rf node_modules ; rm -f package-lock.json'
      sh 'npm cache clear --force'
    }
    stage('NPM Install') {
      echo 'NPM Install...'
      sh 'npm cache clear --force'
      sh 'npm install'
    }
    stage('NPM Build') {
      echo 'npm run build:prod:aot'
      sh 'npm run build:prod:aot'
    }
    stage('Building UI archive') {
      sh 'rm -rf ${WORKSPACE}/artifacts'
      sh 'mkdir -p ${WORKSPACE}/artifacts'
      sh 'tar cvJf ${WORKSPACE}/artifacts/webui.txz --exclude ./artifacts .'
      archiveArtifacts artifacts: 'artifacts/**', fingerprint: true
    }
}
