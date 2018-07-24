/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiAsPromised from 'chai-as-promised';
import Apparatus from '../helpers/apparatus';
import {properAddress} from '../helpers/web3chai';

chai.use(properAddress);
chai.use(chaiHttp);
chai.use(chaiAsPromised);

const {expect} = chai;

describe.only('Nodeinfo - Integrations', async () => {
  let apparatus;

  describe('Check if it works', async () => {
    before(async () => {
      apparatus = new Apparatus();
      await apparatus.start(null);
    });

    beforeEach(async () => {
      await apparatus.cleanDB();
    });

    it.only('should return npm version, git commit and address', async () => {
      const gitCommit = 'aaaaaa';
      apparatus.config.gitCommit = gitCommit;
      console.log('apparatus.config', apparatus.config);
      const nodeinfo = await apparatus.request().get('/nodeinfo');
      expect(nodeinfo.body.commit).to.eql(gitCommit);
      expect(nodeinfo.body.version).to.match(/^\d+\.\d+\.\d+$/);
      expect(nodeinfo.body.nodeAddress).to.be.properAddress;
    });

    after(async () => {
      await apparatus.stop();
    });
  });
});
