## Get block information
Return the block information of a given block
- Path: /block/{block}/info
- Parameters:

| Parameter  |  Type  | Description|
| -------|:------:|:----------:|
| block  | Integer    | block height, should>=808080

```c
curl 'https://api.atomscan.org/v1/block/818080/info'
```

- Result:

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
| utc_time  | String  | UTC time of the transaction
| froms     | Array/null   | inputs information of the transaction
| tos       | Array/null   | outputs information of the transaction

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
            "utc_time": "2023-11-23 08:01:47"
        }
    ],
    "error": "",
    "success": true
}
```

## Get block activity
Return block latest 10 activity
- Path: /block/{block}/activity
            ?arc20=atomicals
            &event=mint
- Request:

```c
curl 'https://api.atomscan.org/v1/block/828080/activity?event=mint&arc20=atomicals'
```

| Parameter | Type |Option| Description|
| ------- |:----------:|:----------:|:----------:|
| block | Integer｜Yes| block height |
| arc20 | String | Yes| ticker |
| event | String | Yes| event of activity. options: mint/burn/market |

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
            "block": 828080,
            "cost": null,
            "event": [
                "Mint"
            ],
            "fee": 3889,
            "from": null,
            "hand_fee": 0,
            "market": null,
            "to": [
                {
                    "address": "bc1p6v5lxszpv0rsyt8umjac03tjmnkk4uxrptrhavsh7sc3mxwx702q3yvv58",
                    "amount": 1000,
                    "atomicals": [
                        {
                            "atomical_id": "54799a35caf574c08d44216c354ef16344f9c5f6c8cf6e349468d90549c9ed5fi0",
                            "atomical_no": 3304,
                            "count": 1000,
                            "token": "atomicals",
                            "types": "FT"
                        }
                    ],
                    "n": 0
                }
            ],
            "tx_index": 5,
            "txid": "cd015613ccff8795bc6ca1f9b8c6e050c46ba0895945605247d6059d3ed162e9",
            "utc_time": "2024-01-30 06:24:26"
        },
        ...
    ],
    "error": "",
    "success": true
}
```
