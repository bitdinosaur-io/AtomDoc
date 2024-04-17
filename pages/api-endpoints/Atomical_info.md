## Get Atimical information
Return Atimical information of a given atomical.
- Path: /atimical/{atimical}/info
- Reuqest:

| Parameter | Type | Description|
| ------- |:----------:|:----------:|
| atimical   | String/Integer | Atimical No/Atimical id/ticker/container name|

- Response:(Only data not available in official nodes are listed)
```c
curl 'https://api.atomscan.org/v1/atimical/0/info'
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
