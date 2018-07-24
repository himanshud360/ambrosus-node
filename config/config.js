/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
const config = {
  serverPort: process.env.SERVER_PORT || 9876,

  web3Rpc: process.env.WEB3_RPC,
  nodePrivateKey: process.env.WEB3_NODEPRIVATEKEY,

  // One or more hosts delimited with comma, e.g 'mongo1:27107,mongo2:27017'
  mongoHosts: process.env.MONGO_HOSTS,
  mongoDbName: process.env.MONGO_DB_NAME,
  mongoReplicaSet: process.env.MONGO_REPLICA_SET,
  mongoX509User: process.env.MONGO_X509_USER,
  mongoX509SslCaPath: process.env.MONGO_X509_SSL_CA_PATH,
  mongox509SslCertPath: process.env.MONGO_x509_SSL_CERT_PATH,
  mongox509SslKeyPath: process.env.MONGO_X509_SSL_KEY_PATH,

  bundleRegistryContractAddress: process.env.BUNDLE_REGISTRY_CONTRACT_ADDRESS,
  bundleFinalisationInterval: process.env.BUNDLE_FINALISATION_INTERVAL || 15000,
  bundleDownloadInterval: process.env.BUNDLE_DOWNLOAD_INTERVAL || 5000,
  bundleSizeLimit: process.env.BUNDLE_SIZE_LIMIT || 10000,

  maximumEntityTimestampOvertake:
    process.env.MAXIMUM_ENTITY_TIMESTAMP_OVERTAKE || 86400,

  authorizationWithSecretKeyEnabled:
    process.env.AUTHORIZATION_WITH_SECRET_KEY_ENABLED || false,

  defaultGasPrice: process.env.DEFAULT_GAS_PRICE || 5, // in ambits

  gitCommit: process.env.GIT_COMMIT
};

export default config;
