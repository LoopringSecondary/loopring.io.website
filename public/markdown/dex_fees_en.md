> Last edit: 2021-02-06


Loopring Exchange charges fees per service type. Each service has a **flat-fee** and a **percentage fee**. For the percentage fee, there is also a **minimal-fee** applied.
 The acutal fee charged for a service is `flat_fee + max(minimal_fee, percentage_fee * volume)`.

All users share the same **flat-fee**s and **minimal-fee**s, but VIPs have different percentange fee settings.

#### Exchange Fee Table
Service | Flat-Fee | Minimal-Fee | Normal User | VIP1 | VIP2 | VIP3 | VIP4
:--- | :--- | :--- | :--- | :--- | :--- | :--- | :---
Stablecoin orderbook trade [1]| - | maker:0, taker:0.000309 ETH[4] | maker:-0.02%, taker:0.04% | maker:-0.02%, taker:0.04% | maker:-0.02%, taker:0.04% | maker:-0.02%, taker:0.04% | maker:-0.02%, taker:0.04%
Other orderbook trade [1]| - | maker:0, taker:0.000309 ETH[4] | maker:-0.02%, taker:0.25% | maker:-0.02%, taker:0.20% | maker:-0.02%, taker:0.15% | maker:-0.02%, taker:0.10% | maker:-0.02%, taker:0.06%
AMM swap | - | 0.000309 ETH[4] | 0.10% | 0.10% | 0.10% | 0.10% | 0.06%
AMM exit | 0.023377 ETH[4] | - | - | - | - | - | -
AMM join | - | - | - | - | - | - | -
L2-to-L2 transfer | 0.000309 ETH[4] | - | - | - | - | - | -
L1-to-L2 transfer (Deposit) | - | - | - | - | - | - | -
L2-to-L1 transfer (Withdrawal) | 0.011481 ETH[4] | - | - | - | - | - | -
L2-to-L1 forced transfer (Forced Withdrawal) | 0.01ETH | - | - | - | - | - | -
L2-to-L1 fast transfer (Fast Withdrawal) [2] | - | 0.019532 ETH[4] | 0.50% | 0.50% | 0.50% | 0.50% | 0.50%
Submit order | - | - | - | - | - | - | -
Cancel order | - | - | - | - | - | - | -
Set L2 EdDSA key [3] | 0.000309 ETH[4] | - | - | - | - | - | -

Note:

-  '-' means 0 or 0%.
- [1] The minimal order size is $33.00
- [2] The minimal amount for fast withdrawal is $5,000
- [3] Waived for the first operation or when this tx is approved with an on-chain hash.
- [4] Assuming Ethereum gas price is 100Gwei and will adjust in realtime based on the actual gas price. For example, if the gas price is now 150Gwei, the fee will be multiplied by 1.5.

Many of the above fee settings depends on the price of Ether. Loopring will adjust fee parameters if necessary.

### Affiliate Rewards

For every trade our affiliates contribute, the reward we pay per taker order in orderbooks is calculated as follows:

`
(trading_fee - maker_rebate) * trade_volume * 20%
`

the reward we pay per taker order in AMM is calculated as follows:

`
(trading_fee - liquidity_fee) * trade_volume * 20%
`
Out of the affiliate reward for a taker order, 50% will be given to the user's registration referral up to 3 months; and 50 will be given to the third-party platform that contributed the order.
If the taker doesn't have a registration referral or the order is submitted directly without going through a third-party platform, then all affiliate reward will go to Loopring relayer.

#### Affiliate Reward Table
Trade  | Normal User | VIP1 | VIP2 | VIP3 | VIP4
:--- | :--- | :--- | :--- | :--- | :---
Stablecoin orderbook | 0.006% | 0.006%| 0.006% | 0.006% | 0.006%
Other orderbook | 0.069% | 0.054% | 0.039% | 0.024% | 0.012%
AMM swap | 0.030%	 |0.030%	 |0.030%	 |0.030%	 |0.030%
