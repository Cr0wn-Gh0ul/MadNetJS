require('dotenv').config({ path: process.cwd() + '/tests/.env' });
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised)
const expect = chai.expect
const MadWalletJS = require("../../index.js");
const MultiSig = require("../../src/Signers/MultiSig");
const SecpSigner = require("../../src/Signers/SecpSigner.js");

let privateKey;

if (process.env.PRIVATE_KEY) {
    privateKey = process.env.PRIVATE_KEY;
}
else {
    privateKey = "6B59703273357638792F423F4528482B4D6251655468576D5A7134743677397A"
}

const madWallet = new MadWalletJS();
const secpSigner = new SecpSigner(madWallet, privateKey);
const multiSigSecp = new MultiSig(madWallet, secpSigner);

describe('SecpSigner', () => {
    before(async function(){});

    describe('Describe tests here', () => {
        // TODO Easy - Test sign(msg) for Errors
        // TODO Easy - Test signMulti(msgs) for Success and Errors
        // TODO Easy - Test verify(msg, sig) for Errors
        // TODO Easy - Test getPubK() for Errors
        // TODO Easy - Test pubFromSig(sig) for Success and Errors
        // TODO Easy - Test getAddress(pubK) for Errors
       
        it('Fail: Get Public Key', async () => {
            await expect(
                multiSigSecp.getPubK()
            ).to.eventually.be.rejectedWith(Error);
        });
    });
});
