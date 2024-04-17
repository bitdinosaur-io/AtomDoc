## Get container information
Return the container information of a gaven container name
- Path: /container/{container}/info
- Parameters:

| Parameter | Type | Description|
| ------- |:----------:|:----------:|
| container   | String     | container name |

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
curl 'https://api.atomscan.org/v1/container/quarkduck/info'
```
```json
{
    "data": [
        {
            "args": {
                "bitworkc": "aabbcc",
                "nonce": 6966,
                "request_container": "quarkduck",
                "time": 1705610394
            },
            "atomical_id": "aabbcc39f60e3bc00d0eb8fa3eac41b38fe5cd2114303a327115a49530e17776i0",
            "atomical_no": 183659,
            "block": 826353,
            "claimed_by_atomical_id": null,
            "commit_height": 826353,
            "commit_txid": "aabbcc39f60e3bc00d0eb8fa3eac41b38fe5cd2114303a327115a49530e17776",
            "img_base64": null,
            "img_name": null,
            "img_type": null,
            "max_supply": null,
            "mint_mode": null,
            "nft_name": "quarkduck",
            "nft_name_decode": "quarkduck",
            "nft_type": "container",
            "parent_container": null,
            "price": null,
            "reveal_location": "ca7ed087bfdda47ebc6ba7707de5dd75b6c67631225038f858258a9a007d0e09i0",
            "reveal_location_height": 826353,
            "reveal_location_script": "5120ea8a6784a2261971e5550e2c1014a2791b0b4233c97703f094d0b7b8cf6dcfb7",
            "status": "verified",
            "txt": null,
            "types": "NFT",
            "utc": "2024-01-19 04:04:49"
        }
    ],
    "error": "",
    "success": true
}
```

## Get container holder
Return the container holder of a gaven container name
- Path: /container/{container}/holder
- Parameters:

| Parameter | Type | Description|
| ------- |:----------:|:----------:|
| container   | String     | container name |

```c
curl 'https://api.atomscan.org/v1/container/quarkduck/holder?address=bc1pldl36wjjzyew2xpvyyqmf3nu2k6u9xrwtsvvg7cyz4du4tnf7pgqzuwkvg'
```

- Result:

| Parameter  |  Type    | Description |
| -------|:--------:|:-----------:|
| address | String  | Bitcoin address |
| balance | Integer | balance of the address |

```json
{
    "data": [
        {
            "address": "bc1pldl36wjjzyew2xpvyyqmf3nu2k6u9xrwtsvvg7cyz4du4tnf7pgqzuwkvg",
            "balance": 53
        }
    ],
    "error": "",
    "success": true
}
```

## Get container activity
Return the container latest 10 activity of a gaven container name
- Path: /container/{container}/activity
    ?event={event}
- Reuqest:

| Parameter | Type |Option| Description|
| ------- |:----------:|:----------:|:----------:|
| container | String| No | container name |
| event | String| Yes| options: mint/burn/market |

```c
curl 'https://api.atomscan.org/v1/container/quarkduck/activity
        ?event=mint'
```

- Response:

| Parameter  |  Type    | Description |
| -------|:--------:|:-----------:|
| block     | Integer | block height of the transaction                
| cost      | Float/null   | cost of the market transaction    
| events    | Array   | events of the transaction       
| fee       | Integer | fee for the transaction         
| hand_fee  | Integer/null | hand fee of the market transaction    
| market    | String/null  | market label of the transaction 
| tx_index  | Integer | transaction index               
| txid      | String  | transaction hash                  
| utc       | String  | UTC time of the transaction
| froms     | Array/null   | inputs information of the transaction
| tos       | Array/null   | outputs information of the transaction

```json
{
    "data": [
        {
            "block": 836347,
            "cost": 0.0,
            "events": [
                "Mint"
            ],
            "fee": 7333,
            "froms": null,
            "hand_fee": 0,
            "market": "Unknow",
            "tos": [
                {
                    "address": "bc1pgfcwmkn68hlxgqq359mn0xzh7lnenh4mvgug4lsxua7q5s9m0jfs6d4rtl",
                    "amount": 1000,
                    "atomicals": [
                        {
                            "atomical_id": "44acc873bf3ede9771ca3d517267c11fcc78b4267d267e8eaab9d50dc4fa0355i0",
                            "atomical_no": 207257,
                            "count": 1,
                            "token": "147",
                            "types": "NFT"
                        }
                    ],
                    "n": 0
                }
            ],
            "tx_index": 5,
            "txid": "67b344e9ff2c4304a3c9e7cb1d330097a7f4fa561f2c884e713f52685f0b00eb",
            "utc": "2024-03-26 07:12:30"
        },
        ...
    ],
    "error": "",
    "success": true
}
```

## Get container deployer(COMING SOON)

## Get container number of transactions for utc(COMING SOON)