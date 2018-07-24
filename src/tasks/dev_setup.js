/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import {writeFile} from '../utils/file';
import path from 'path';
import Builder from '../builder';
import BundleRegistry from '../../contracts/BundleRegistry.json';
import {deployContract, getDefaultAddress} from '../../src/utils/web3_tools';
import config from '../../config/config';

async function createAdminAccount(dataModelEngine) {
  try {
    console.log('Creating admin account');
    const account = await dataModelEngine.addAdminAccount();
    console.log(`Address: ${account.address}`);
    if (account.secret) {
      console.log(`Secret:  ${account.secret}`);
    }
  } catch (exception) {
    console.log(exception.message);
  }
}

async function whitelist(bundleRegistryContract, dataModelEngine) {
  const {web3} = dataModelEngine.proofRepository;
  const address = await getDefaultAddress(web3);
  await bundleRegistryContract
    .methods
    .addToWhitelist(address, 'whatever')
    .send({
      from: address,
      gas: 2000000
    });
}

async function deployRegistryContract(dataModelEngine) {
  console.log('\nDeploying bundle registry contract...');
  const bundleRegistryContract = await deployContract(
    dataModelEngine.proofRepository.web3,
    BundleRegistry.abi,
    BundleRegistry.bytecode);

  const contractAddress = bundleRegistryContract.options.address;
  const filePath = path.join('config', 'registryContractAddress.json');
  console.log(`Contract deployed at ${contractAddress}`);
  whitelist(bundleRegistryContract, dataModelEngine);
  await writeFile(filePath, JSON.stringify(contractAddress));
  console.log(`Contract address stored in ${filePath}.`);
}

async function setupDevelopment(dataModelEngine) {
  await createAdminAccount(dataModelEngine);
  await deployRegistryContract(dataModelEngine);
}

const builder = new Builder();

builder.build({}, config)
  .then(async ({client, dataModelEngine}) => {
    await setupDevelopment(dataModelEngine);
    await client.close();
  })
  .catch((exception) => {
    console.error(exception);
    process.exit(1);
  });
