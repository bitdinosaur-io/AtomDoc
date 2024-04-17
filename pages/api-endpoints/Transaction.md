## Get the Transaction activity
Return transaction activity of a gaven transaction hash
- Path: /tx/{tx}
- Parameters:

| Parameter | Type | Description|
| ------- |:----------:|:----------:|
| tx | String| transaction hash |

```c
curl 'https://api.atomscan.org/v1/tx/175640fbc51a7f6e539697feb540557307d0c9a21646324b43a8d443a564c0c0/activity'
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
| utc       | String  | UTC time of the transaction
| froms     | Array/null   | inputs information of the transaction
| tos       | Array/null   | outputs information of the transaction

```json
{
    "data": [
        {
            "block": 828080,
            "cost": null,
            "events": [
                "Mint"
            ],
            "fee": 3889,
            "froms": null,
            "hand_fee": 0,
            "market": null,
            "tos": [
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
            "tx_index": 4,
            "txid": "175640fbc51a7f6e539697feb540557307d0c9a21646324b43a8d443a564c0c0",
            "utc": "2024-01-30 06:24:26"
        },
        ...
    ],
    "error": "",
    "success": true
}
```
