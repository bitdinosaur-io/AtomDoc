## Get address arc20 balance
Return the address all arc20 balance
- Path: /address/{address}/arc20
- Request:

| Parameter | Type | Description|
| ------- |:----------:|:----------:|
| address | String| a valid Bitcoin address |
```c
curl 'https://api.atomscan.org/v1/address/bc1pn84jwndjk5zenzjf0kmtytdk7h3rqznxzf7ku4nx4nmmwtygm59qsj2y4e/arc20'
```

- Response:

| Parameter  |  Type    | Description |
| -------|:--------:|:-----------:|
| balance | Integer    | balance of the ticker |
| arc20   | String     | ticker    |

```json
{
    "data": [
        {
            "arc20": "atomicals",
            "balance": 1000
        },
        {
            "arc20": "atom",
            "balance": 450000
        }
    ],
    "error": "",
    "success": true
}
```

## Get address NFT
Return the address all NFT
- Path: /address/{address}/nft
- Request:

| Parameter | Type | Description|
| ------- |:----------:|:----------:|
| address | String| a valid Bitcoin address |
```c
curl 'https://api.atomscan.org/v1/address/bc1papxe956mqf6khxyu49f8q9qjp48lh847l478zvy9kdwunfm8jeaqy6v9a7/nft'
```

- Response:

| Parameter  |  Type    | Description |
| -------|:--------:|:-----------:|
| banance | Integer    | banance of the atomical_id|
| atomical_id   | String     | atomical_id    |
| atomical_no   | String     | atomical_no    |

```json
{
    "data": [
        {
            "atomical_id": "101010854d557a3d8b26ebe0e6333d078d16253f3eb9ab94c9c459b130d44446i0",
            "atomical_no": 190886,
            "balance": 1
        },
        ...
    ],
    "error": "",
    "success": true
}
```

## Get address activity
Return the address latest 10 activity
- Path: /address/{address}/activity
    ?arc20={arc20}
    &event={event}
- Request:

| Parameter | Type |Option| Description|
| ------- |:----------:|:----------:|:----------:|
| address | String| No| a valid Bitcoin address |
| arc20 | String| Yes| ticker. eg: atom |
| event | String| Yes| event of activity. options: mint/burn/market |

```c
curl 'https://api.atomscan.org/v1/address/bc1pdn63sj7vv2gtdemyz90zjwkcw0s5r7z85mlw800crghztw4a9j6s57h5a8/activity
        ?arc20=atom
        &event=mint'
```
- Response:

| Parameter  |  Type    | Description |
| -------|:--------:|:-----------:|
| block     | Integer | block height of the transaction                
| cost      | Float/null   | cost of the market transaction    
| event     | Array   | event of the transaction       
| fee       | Integer | fee for the transaction         
| hand_fee  | Integer/null | hand fee of the market transaction    
| market    | String/null  | market label of the transaction 
| tx_index  | Integer | transaction index               
| txid      | String  | transaction hash                  
| utc_time  | String  | UTC time of the transaction
| from      | Array/null   | input information of the transaction
| to        | Array/null   | output information of the transaction

```json
{
    "data": [
        {
            "block": 808619,
            "cost": null,
            "event": [
                "Mint"
            ],
            "fee": 7620,
            "from": null,
            "hand_fee": 0,
            "market": null,
            "to": [
                {
                    "address": "bc1pdn63sj7vv2gtdemyz90zjwkcw0s5r7z85mlw800crghztw4a9j6s57h5a8",
                    "amount": 1000,
                    "atomicals": [
                        {
                            "atomical_id": "56a8702bab3d2405eb9a356fd0725ca112a93a8efd1ecca06c6085e7278f0341i0",
                            "atomical_no": 0,
                            "count": 1000,
                            "token": "atom",
                            "types": "FT"
                        }
                    ],
                    "n": 0
                }
            ],
            "tx_index": 1242,
            "txid": "c4f6d2f3a91011de64d349267936ae9fd874739cc1bfc6674f85cff14cf93b02",
            "utc_time": "2023-09-20 19:09:02"
        },
        ...
    ],
    "error": "",
    "success": true
}
```
