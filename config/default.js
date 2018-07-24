/* eslint-disable header/header */
module.exports = {
  server: {
    port: 9876
  },
  mongo: {
    hosts: 'localhost:27017',
    dbName: 'ambrosus',
    replicaSet: '',
    X509User: '',
    X509SslCaPath: '',
    x509SslCertPath: '',
    x509SslKeyPath: ''
  },
  bundle: {
    finalisationInterval: 15000,
    downloadInterval: 5000,
    bundleSizeLimit: 10000,
    defaultGasPrice: 5 // in ambits
  },
  maximumEntityTimestampOvertake: 86400, // in seconds
  authorizationWithSecretEnabled: false
};
