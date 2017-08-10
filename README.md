# Token2IDR
Estimate token value in IDR, powered by Shapeshift API and Bitcoin.co.id API. BTC to IDR conversion fee is 0.3% and IDR withdraw fee is 1%.

## Installation
```
$ npm install -g token2idr
```

## Usage
```
$ token2idr 1 eth
Source   : 1 ETH
Rate     : 0.0873153 BTC/ETH
Fee      : 0.002 BTC
Receive  : 0.085315300 BTC
IDR/BTC  : IDR 32754600
Converted: IDR 2786085
Withdraw : IDR 2758224

$ token2idr 10 gno
Source   : 10 GNO
Rate     : 0.08671725 BTC/GNO
Fee      : 0.002 BTC
Receive  : 0.86517250 BTC
IDR/BTC  : IDR 32800000
Converted: IDR 28292525
Withdraw : IDR 28009599

$ token2idr 23.765 xmr
Source   : 23.765 XMR
Rate     : 0.01614359 BTC/XMR
Fee      : 0.002 BTC
Receive  : 0.38165242 BTC
IDR/BTC  : IDR 32770300
Converted: IDR 12469343
Withdraw : IDR 12344649
```
