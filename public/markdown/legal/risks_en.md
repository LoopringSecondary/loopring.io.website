# Loopring Technology User Risk Disclosure

Loopring applications, including but not limited to Loopring Smart Wallet ("Wallet") and Loopring Exchange ("Exchange"), provide cutting-edge technologies and services related to blockchain, Ethereum smart contracts, and zero-knowledge proofs, There are many known risks. You must understand and accept these risks, otherwise, please consider stop using the Loopring app immediately.

## Wallet Related Risks
### 1. Insufficient guardians
If your wallet does not have three or more guardians, your wallet may become unrecoverable because the guardians are unavailable; or you may lose the tokens in the wallet due to the actions of individual guardians.

### 2. Official guardian
After your wallet is created, we will add Loopring's official guardian service to your wallet by default. As a centralized service, Loopring's official guardian may be attacked and controlled by hackers.

### 3. Super administrator
The Loopring Smart Wallet contract has a super administrator who cannot change any wallet status or tokens in the mobile wallet without user authorization. But the super administrator has the right to do the following operations: (1) Modify the global whitelist. There is no daily limit for transfers to any address in the whitelist. (2) New functional modules optional for registered users. (3) Change the mapping relationship between ENS and address. This operation will cause the assets transferred to the same ENS to actually be transferred to different addresses. Therefore, you need to verify the receiving address when transferring funds through ENS .

### 4. Untimely operations
The security of your wallet depends on your timely implementation of specific operations, including but not limited to (1) you should add at least three guardians as soon as possible after the wallet is created and ensure the security of the guardian's own wallet and the availability of the guardian; (2) equipment After the loss, you must lock the wallet with the guardian within 24 hours; (3) After the wallet is stolen, you must contact the guardian within 72 hours to complete the wallet recovery.

## Transaction Related Risks
The following risks only affect the security of your assets in Loopring's second-tier account.

### 1. The circuit code is not audited
Our auditor, Least Authority, has completed the code audit of the 3.6 contract part of the Loopring agreement, but the audit of the circuit part of the agreement has not yet been completed. We will update the audit situation. During this period, users can understand the circuit code by themselves, or believe that Loopring will not do evil .

### 2. The circuit has not completed a trusted setup
Loopring has not yet started the trusted setup of the circuit, so you also need to believe that Loopring will not do evil. We expect to complete the circuit trust setting in January 2021.

### 3. Super administrator permissions
Loopring Exchange is still in the testing stage. In order to fix online problems in time, we have the super administrator authority of the exchange contract. With this permission, Loopring can change the verification data used for contract deployment and zero-knowledge proof. We expect to adopt multi-signature and time lock to manage and restrict super administrator authority in January 2021.

### 4. Transaction rollback
Transaction rollback is the common risk point of all the second-tier expansion plans, that is, the return result of the back-end interface call does not have the finality of the basic token network.

### 5. The withdrawal is not timely
It is mentioned that the untimely arrival of the basic token network is also a risk point shared by all the second-tier expansion plans. Although we support fast withdrawal in the new version of the Loopring Protocol, the experience is consistent with that of a centralized exchange. But there are still many situations where it is impossible to withdraw quickly. In the worst case, the withdrawal time will be in hours. Users who arbitrage between different platforms need to withdraw frequently. These users need to weigh and accept the risk.

## Other Risks
In addition to the risks stated above, there are other known and unknown risks associated with the use of the Loopring application. If you have any questions, comments, or suggestions, please contact us via email: wallet@loopring.org.
