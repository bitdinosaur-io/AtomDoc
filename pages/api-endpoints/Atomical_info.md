## Get Atomical information

Return Atomical information of a given atomical.

- Path: /atomical/{atomical}/info
- Reuqest:

| Parameter |      Type      |                  Description                  |
| --------- | :------------: | :-------------------------------------------: |
| atomical  | String/Integer | Atomical No/Atomical id/ticker/container name |

- Response:(Only data not available in official nodes are listed)

```c
curl 'https://api.atomscan.org/v1/atomical/0/info'
```

| Parameter       |  Type   |          Description           |
| --------------- | :-----: | :----------------------------: |
| img_base64      | String  |        atomical's image        |
| img_name        | String  |       name of the image        |
| img_type        | String  |       type of the image        |
| max_supply      | Integer | maximum supply of the atomical |
| mint_mode       | String  | minting mode for the atomical  |
| nft_name        | String  |        name of the NFT         |
| nft_name_decode | String  |    decoded name of the NFT     |
| nft_type        | String  |        type of the NFT         |

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
      "img_base64": "iVBO...QmCC",
      "img_name": "image.png",
      "img_type": "image/png",
      "max_supply": 21000000,
      "mint_mode": "fixed",
      "nft_name": "atom",
      "nft_name_decode": "atom",
      "nft_type": "ticker",
      "parent_container": null,
      "price": 6606.0,
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
