# Loopring Technology User Risk Disclosure

Loopring applications, including but not limited to Loopring Smart Wallet ("Wallet") and Loopring Exchange ("Exchange"), provide cutting-edge technologies and services related to blockchain, Ethereum smart contracts, and zero-knowledge proofs. Everything we build and offer users is designed to be 100% non-custodial, putting users in complete control of their funds at all times. Nonetheless, there are many known risks. **You must understand and accept these risks, otherwise, please consider stopping to use the Loopring app immediately.**

## Wallet Related Risks
### 1. Insufficient guardians
If your wallet does not have three or more guardians, your wallet may become unrecoverable because the guardians are unavailable; or you may lose the assets in your wallet due to the actions of individual guardians. See [here](https://github.com/Loopring/loopring.io.website/blob/main/public/markdown/legal/wallet_design_en.md) for more information on guardians, and wallet smart contract design.

### 2. Official guardian
After your wallet is created, we will add Loopring's official guardian service to your wallet by default. As a centralized service, Loopring's official guardian may be attacked and controlled by hackers. You can remove Loopring's official guardian service after you add more of your own, or keep it as one of your many. 

### 3. Super administrator
The Loopring Smart Wallet contract has a 'super administrator' who cannot change wallet states or touch tokens in a user's mobile wallet without user authorization. However, the super administrator has the right to do the following operations: (1) Modify the global whitelist. There is no daily limit for transfers to addresses in the whitelist. (2) New functional modules optional for registered users. (3) Change the mapping relationship between ENS and address. This operation will cause the assets transferred to the same ENS to actually be transferred to different addresses. **Therefore, you need to verify the receiving address when transferring funds through ENS.**

### 4. Untimely safety operations
In certain instances, the security of your wallet depends on your timely implementation of specific operations, including but not limited to (1) you should add at least three guardians as soon as possible after the wallet is created and ensure the security of the guardian's own wallet and the availability of the guardian; (2) After the loss of your mobile device, you must lock the wallet with the guardian within 24 hours; (3) After the wallet is stolen, you must contact the guardian within 72 hours to complete the wallet recovery.

## Transaction Related Risks
The following risks only affect the security of your assets in Loopring's layer-2 account.

### 1. The circuit code is not audited
Our auditor, Least Authority, has completed the code audit of the 3.6 contract part of the Loopring protocol, but the audit of the circuit part of the agreement has not yet been completed. We will update the audit situation. During this period, users can see and understand the open source circuit code by themselves to determine risks, or believe that Loopring will not do evil.

### 2. The circuit has not completed a trusted setup
Loopring has not yet started the trusted setup of the circuit, so you must believe that Loopring will not do evil. We expect to complete the circuit trust setup ceremony in January 2021.

### 3. Super administrator permissions
Loopring Exchange is still in the testing stage. In order to fix potential problems rapidly, we have the super administrator authority of the exchange contract. With this permission, Loopring can change the verification data used for contract deployment and zero-knowledge proofs. We expect to adopt multi-signature and time locks to manage and restrict super administrator powers in January 2021.

### 4. Transaction rollback
Transaction rollback is a common risk point of all or many layer-2 scaling solutions. That is, the execution of transactions on layer-2, while 'apparently immediate' from a user's point of view given the return of the back-end interface call, does not have the finality of the underlying layer-1 network (Ethereum). Only when we submit our zkRollup blocks with the corresponding cryptographic proofs to Ethereum (can be minutes, or hours), does layer-2 inherit the same finality as Ethereum. 

### 5. Untimely withdrawals
It should be known that situations pertaining to the underlying blockchain (Ethereum) is also a risk point shared by all layer-2 scaling constructions. Although we support fast withdrawals in version 3.6 of the Loopring Protocol, and the experience is consistent with that of a centralized exchange, there are still situations where it is impossible to withdraw to mainnet quickly (if the network is extremely congested, or having difficulty reaching consensus). In the worst case, the withdrawal time will be in hours. Users (especially low-latency traders) who arbitrage between different platforms and need to withdraw frequently should weigh and accept this risk.

## Other Risks
In addition to the risks stated above, there are other known and unknown risks associated with the use of the Loopring protocol and applications. If you have any questions, comments, or suggestions, please contact us via email: wallet@loopring.org.
