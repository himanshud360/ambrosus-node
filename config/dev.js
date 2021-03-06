/* eslint-disable header/header */

const registryContractAddress = (
  process.env.BUNDLE_REGISTRY_CONTRACT_ADDRESS || require('./registryContractAddress.json')
);

module.exports = {
  mongoUri: 'mongodb://localhost:27017/ambrosus_gateway_development',
  bundle: {registryContractAddress},
  web3: {
    rpc: 'http://localhost:8545',
    nodePrivateKey: '0x4d5db4107d237df6a3d58ee5f70ae63d73d7658d4026f2eefd2f204c81682cb7'
  },
  authorizationWithSecretEnabled: true
};
