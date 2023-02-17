const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DapniProc", async function () {
  const _vaultPassword = "testPassword";
  const _ownerPubKey = "0xdd2fd4581271e230360230f9337d5c0430bf44c0";
  const _clientPubKey = "0xcd3b766ccdd6ae721141f452c550ca635964ce71";
  const _clientIcNumber = 1234567890;
  const _validatorPubKey = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";
  const _validatorIsAuthorized = true;

  // before(async () => {
  //   const DapniProc = await ethers.getContractFactory("DapniProc");
  //   const dapniProc = await DapniProc.deploy(
  //     _vaultPassword,
  //     _ownerPubKey,
  //     _clientPubKey,
  //     _clientIcNumber,
  //     _validators
  //   );
  // });
  it("Should return vault password", async () => {
    const DapniProc = await ethers.getContractFactory("DapniProc");
    const dapniProc = await DapniProc.deploy(
      _vaultPassword,
      _ownerPubKey,
      _clientPubKey,
      _clientIcNumber,
      _validatorPubKey,
      _validatorIsAuthorized
    );
    const vaultPassword = await dapniProc.getVaultPassword();
    expect(vaultPassword).to.equal(_vaultPassword);
  });

  it("Should return a bool on validator's authorization", async () => {
    const DapniProc = await ethers.getContractFactory("DapniProc");
    const dapniProc = await DapniProc.deploy(
      _vaultPassword,
      _ownerPubKey,
      _clientPubKey,
      _clientIcNumber,
      _validatorPubKey,
      _validatorIsAuthorized
    );
    const isValidatorAuthorized = await dapniProc.isValidatorAuthorized();
    expect(isValidatorAuthorized).to.equal(_validatorIsAuthorized);
  });

  it("Should return requested vault password", async () => {
    const DapniProc = await ethers.getContractFactory("DapniProc");
    const dapniProc = await DapniProc.deploy(
      _vaultPassword,
      _ownerPubKey,
      _clientPubKey,
      _clientIcNumber,
      _validatorPubKey,
      _validatorIsAuthorized
    );
    const vaultPassword = await dapniProc.requestVaultPassword();
    expect(vaultPassword).to.equal(_vaultPassword);
  });
});
