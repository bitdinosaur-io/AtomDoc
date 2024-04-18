## Get arc20 information
Returns the Arc20 information of a given ticker.
- Path: /arc20/{arc20}/info
- Reuqest:

| Parameter | Type | Description|
| ------- |:----------:|:----------:|
| arc20   | String     | ticker. eg: atom |

- Response:(Only data not available in official nodes are listed)
```c
curl 'https://api.atomscan.org/v1/arc20/atom/info'
```

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
            "img_base64": "iVBORw0KGgo...",
            "img_name": "image.png",
            "img_type": "image/png",
            "max_supply": 21000000,
            "mint_mode": "fixed",
            "nft_name": "atom",
            "nft_name_decode": "atom",
            "nft_type": "ticker",
            "parent_container": null,
            "price": 7400.0,
            "reveal_location": "1d2f39f54320631d0432fa495a45a4f298a2ca1b18adef8e4356e327d003a694i0",
            "reveal_location_height": 808081,
            "reveal_location_script": "512093e2ab36ff5dd2d72b4d434aff2f5f434b0c4697ac5ba1b16aa9b774e3b5d86c",
            "status": "verified",
            "txt": null,
            "types": "FT",
            "utc_time": "2023-09-17 05:46:50"
        }
    ],
    "error": "",
    "success": true
}
```

## Get balance of arc20 for address
Returns the balance of arc20 for address, if no address parameter, return the top 10 address for arc20 balance
- Path: /arc20/{arc20}/holder?address={address}
- Reuqest:

| Parameter | Type | Optional| Description|
| ------- |:----------:|:----------:|:----------:|
| arc20   | String     | No | ticker. eg: atom |
| address | String     | Yes | a valid Bitcoin address |

```c
curl --location 'https://api.atomscan.org/v1/arc20/atom/holder?address=bc1pn84jwndjk5zenzjf0kmtytdk7h3rqznxzf7ku4nx4nmmwtygm59qsj2y4e'
```

- Response:

| Parameter  |  Type    | Description |
| -------|:--------:|:-----------:|
| address | String  | Bitcoin address |
| balance | Integer | balance of the address |

```json
{
    "data": [
        {
            "address": "bc1pn84jwndjk5zenzjf0kmtytdk7h3rqznxzf7ku4nx4nmmwtygm59qsj2y4e",
            "amount": 450000
        }
    ],
    "error": "",
    "success": true
}
```

## Get arc20 activity
Return the arc20 latest 10 activity of a given ticker
- Path: /arc20/{arc20}/activity?event={event}
- Reuqest:

| Parameter | Type |Option| Description|
| ------- |:----------:|:----------:|:----------:|
| arc20 | String| No | arc20 name. eg: atom |
| event | String| Yes| event of activity. options: mint/burn/market |

```c
curl 'https://api.atomscan.org/v1/arc20/atom/activity?event=mint'
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

## Get arc20 deployer(COMING SOON)  

## Get arc20 number of transactions for utc time(COMING SOON)
