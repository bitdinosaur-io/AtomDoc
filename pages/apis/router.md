# Router

## Event
- Path: /event/{event}
- Function: Get the latest 10 event transactions
- event options:
  
| Option| Description|
| -------|:----------:|
| mint          | transactions of type mint|
| invaild_mint  | transactions of type invaild mint|
| burn          | transactions of type burn|
| all           | all transactions|
| transfer      | transactions of type transfer|
| market        | market transactions|

- Result:

| Parameter  |  Type    | Description |
| -------|:--------:|:-----------:|
| block     | Integer | block height                    
| cost      | Float   | cost of the market transaction    
| events    | Array   | events of the transaction       
| fee       | Integer | fee for the transaction         
| hand_fee  | Integer | hand fee of the market transaction    
| market    | String  | market label of the transaction 
| tx_index  | Integer | transaction index               
| txid      | String  | transaction hash                  
| utc       | String  | UTC Time                            
| froms     | Array   | inputs infos                        
| tos       | Array   | outputs infos                       

```c
curl 'http://url/event/mint'
```
```json
{
    "data": [
        {
            "block": 838739,
            "cost": 0.0,
            "events": [
                "Mint"
            ],
            "fee": 6106,
            "froms": null,
            "hand_fee": 0,
            "market": "Unknow",
            "tos": [
                {
                    "address": "bc1p2nu3p90sv06vgxlzh5as87ewhw0j076k3lxvlg9kerxlz4kesans5p3jqu",
                    "amount": 1000,
                    "atomicals": [
                        {
                            "atomical_id": "66466d0207d9f50b5782678282e08cffb8e315e95da8d91b3d46f290b440a8bdi0",
                            "atomical_no": 4068,
                            "count": 1000,
                            "token": "a",
                            "types": "FT"
                        }
                    ],
                    "n": 0
                }
            ],
            "tx_index": 24,
            "txid": "73fbf5c9311a1790c753e42d968896845c3bfb7fbe705a93aef78f9a30a6bcca",
            "utc": "2024-04-11 09:53:06"
        },
        ...
    ],
    "error": "",
    "success": true
}
```

## Block
- Path: /block/{block}
- Function: Get base information about a block
- Parameters:

| Parameter  |  Type  | Description|
| -------|:------:|:----------:|
| block  | Integer    | block height, should>=808080
- Result:

| Parameter  |  Type    | Description |
| -------|:--------:|:-----------:|
| average_vsize_fee| Float    | average virtual size fee     |
| block            | Integer  | block height                 |
| block_hash       | String   | block hash                   |
| max_vsize_fee    | Float    | maximum virtual size fee     |
| min_vsize_fee    | Float    | minimum virtual size fee     |
| total_fee        | Float    | total fee                    |
| total_size       | Float    | total size                   |
| total_vsize      | Float    | total virtual size           |
| transactions     | Integer  | number of transactions       |
| utc              | String   | UTC Time                     |

```c
curl 'http://url/block/818080'
```
```json
{
    "data": [
        {
            "average_vsize_fee": 83.1,
            "block": 818080,
            "block_hash": "000000000000000000017afbcb2fa592f14b8d9d7ffeb0ebab26b30d5401ddc0",
            "max_vsize_fee": 83.1,
            "min_vsize_fee": 83.1,
            "total_fee": 0.00098812,
            "total_size": 2.08,
            "total_vsize": 1.16,
            "transactions": 1,
            "utc": "2023-11-23 08:01:47"
        }
    ],
    "error": "",
    "success": true
}
```

## Atomical
- Path: /atomical/{atomical}
- Function: Get the base information of atomical (secondary parsing of data based on official node acquisition)
- Parameters: 
  
| Parameter  |  Type  | Description|
| -------|:------:|:----------:|
| atomical| Integer/String| atomical number/atomical id/token |

- Result:(Only data not available in official nodes are listed)

| Parameter  |  Type    | Description |
| -------|:--------:|:-----------:|
| img_base64      | String | atomical's image                |
| img_name        | String | name of the image               |
| img_type        | String | type of the image               |
| max_supply      | Integer| maximum supply of the atomical  |
| mint_mode       | String | minting mode for the atomical   |
| nft_name        | String | name of the NFT                 |
| nft_name_decode | String | decoded name of the NFT         |
| nft_type        | String | type of the NFT                 |

```c
curl 'http://url/atomical/0'
```
```json
{
    "data": [
        {
            "args": {
                "bitworkc": "56a8",
                "max_mints": 21000,
                "mint_amount": 1000,
                "mint_bitworkc": "1618",
                "mint_height": 808512,
                "nonce": 6426328,
                "request_ticker": "atom",
                "time": 1694929108
            },
            "atomical_id": "56a8702bab3d2405eb9a356fd0725ca112a93a8efd1ecca06c6085e7278f0341i0",
            "atomical_no": 0,
            "block": 808081,
            "claimed_by_atomical_id": null,
            "commit_height": 808081,
            "commit_txid": "56a8702bab3d2405eb9a356fd0725ca112a93a8efd1ecca06c6085e7278f0341",
            "img_base64": "iVBORw0KGgoA...",
            "status": "verified",
            "txt": null,
            "types": "FT",
            "utc": "2023-09-17 05:46:50"
        }
    ],
    "error": "",
    "success": true
}
```

## Holder
- Path: /holder/{address}/{atomical}
- Function: Get the atomical holdings of the address
- Parameters: 
  
| Parameter  |  Type  | Description|
| -------|:------:|:----------:|
| address    | String        | a valid Bitcoin address
| atomical   | Integer/String| atomical number/Atomical id/Token
- Result:
  
| Parameter  |  Type    | Description |
| -------|:--------:|:-----------:|
| address      | String     | a valid Bitcoin address |
| amount       | Integer    | number of holdings  |
| atomical_no  | Integer    | atomical number     |

```c
curl 'http://url/holder/bc1p3eze9y3krkxk848t0ph4d0y4mml22ht3z7g5snr8npdecrfkmuzsm433rk/0'
```
```json
{
    "data": [
        {
            "address": "bc1p3eze9y3krkxk848t0ph4d0y4mml22ht3z7g5snr8npdecrfkmuzsm433rk",
            "amount": 295777,
            "atomical_no": 0
        }
    ],
    "error": "",
    "success": true
}
```
