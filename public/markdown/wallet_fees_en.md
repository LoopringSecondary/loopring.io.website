
> Last edit: 2021-01-23

## Loopring Wallet

#### Wallet Fee Table
Service | Fee | Comment
:--- | :--- | :--- |
Creation of new wallet | ≈ Ethereum TX gas cost |  
Add a guardian | ≈ Ethereum TX gas cost | Waived for the first 3 operations
Remove a guardian | ≈ Ethereum TX gas cost |  
Whitelist an address | ≈ Ethereum TX gas cost |  
Remove address from whitelist | ≈ Ethereum TX gas cost |  
Lock wallet by official guardian | ≈ Ethereum TX gas cost | Waived once per day
Lock other’s wallet | ≈ Ethereum TX gas cost |  
Unlock wallet | ≈ Ethereum TX gas cost + $10.00|  
ERC20 approval for Loopring DEX | Free |  
Other ERC20 approval | ≈ Ethereum TX gas cost |  
L1-to-L2 transfer (Deposit) | ≈ Ethereum TX gas cost |  
L1-to-L1 transfer | ≈ Ethereum TX gas cost |  
Change of daily quota | ≈ Ethereum TX gas cost |
Wallet upgrade | Free |  
Wallet recovery | ≈ Ethereum TX gas cost + $10.00 |

All fees will include a meta-transaction overhead unless the fee is charged by using L2 transfers or from the user's Loopring RedPacket balance.

When interacting with Loopring Exchange, exchange fees will also apply. Normally an operation will not be subject to both wallet fees and exchange fees.

## Loopring Exchange

Loopring Exchange charges fees per service type. Each service has a **flat fee** and a **percentage fee**. For the percentage fee, there is also a **minimal fee** applied.
 The acutal fee charged for a service is `flat_fee + max(minimal_fee, percentage_fee * volume)`.

All users share the same flat fee, but VIPs have different percentange fee settings.

#### Exchange Fee Table
Service | Flat-Fee | Min-Fee | Normal User | VIP1 | VIP2 | VIP3 | VIP4
:--- | :--- | :--- | :--- | :--- | :--- | :--- | :---
Stablecoin orderbook trade | - | maker:0, taker:$0.25 | maker:-0.02%, taker:0.04% | maker:-0.02%, taker:0.04% | maker:-0.02%, taker:0.04% | maker:-0.02%, taker:0.04% | maker:-0.02%, taker:0.04%
Other orderbook trade | - | maker:0, taker:$0.83 | maker:-0.02%, taker:0.25% | maker:-0.02%, taker:0.20% | maker:-0.02%, taker:0.15% | maker:-0.02%, taker:0.10% | maker:-0.02%, taker:0.06%
AMM swap | - | $0.50 | 0.10% | 0.10% | 0.10% | 0.10% | 0.06%
AMM exit | $5.00 | - | - | - | - | - | -
AMM join | - | - | - | - | - | - | -
L2-to-L2 transfer | $0.05 | - | - | - | - | - | -
L1-to-L2 transfer (Deposit) | - | - | - | - | - | - | -
L2-to-L1 transfer (Withdrawal) | $5.00 | - | - | - | - | - | -
L2-to-L1 forced transfer (Forced Withdrawal) | 0.01ETH | - | - | - | - | - | -
L2-to-L1 fast transfer (Fast Withdrawal) | $25.00 | - | 0.25% | 0.25% | 0.25% | 0.25% | 0.25%
Submit order | - | - | - | - | - | - | -
Cancel order | - | - | - | - | - | - | -
Set L2 EdDSA key* | $5.00 | - | - | - | - | - | -

Note:

-  '-' means 0 or 0%.
-  Orderbook market makers get 0.02% rebate
- __*__ Waived for the first operation or when this tx is approved with an on-chain hash.


Many of the above fee settings depends on the price of Ether. Loopring will adjust fee parameters if necessary. Going forward, we will also release APIs for you to query these fee parameters.

### Affiliate Rewards

For every trade our affiliates contribute, the reward we pay per trade is calculated as follows:

`
(taker_fee - maker_rebate) * trade_volume * 30%
`

#### Affiliate Reward Table
Trade  | Normal User | VIP1 | VIP2 | VIP3 | VIP4
:--- | :--- | :--- | :--- | :--- | :---
Stablecoin orderbook | 0.006% | 0.006%| 0.006% | 0.006% | 0.006%
Other orderbook | 0.069% | 0.054% | 0.039% | 0.024% | 0.012%
AMM swap | 0.030%	 |0.030%	 |0.030%	 |0.030%	 |0.030%