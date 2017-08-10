#!/usr/bin/env node

const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const url = {
    shapeshift: 'https://shapeshift.io/marketinfo/',
    btcid: 'https://vip.bitcoin.co.id/api/btc_idr/ticker'
}

if (!process.argv[2] || !process.argv[3]) process.exit(1);

let source_value = process.argv[2];
let source_coin = process.argv[3].toUpperCase();
let idr_data = null;
let ss_data = null;

function calc() {
    const received_btc = ((source_value * ss_data.rate) - ss_data.minerFee).toPrecision(8);
    const received_idr = Math.floor(idr_data.ticker.buy * received_btc * (1 - 0.003));
    const withdraw = Math.floor(received_idr * 0.99);

    console.log('Source   : ' + source_value + ' ' + source_coin);
    console.log('Rate     : ' + ss_data.rate + ' BTC/' + source_coin);
    console.log('Fee      : ' + ss_data.minerFee + ' BTC');
    console.log('Receive  : ' + received_btc + ' BTC');
    console.log('IDR/BTC  : IDR ' + idr_data.ticker.buy);
    console.log('Converted: IDR ' + received_idr);
    console.log('Withdraw : IDR ' + withdraw);
}

request.getAsync(url.btcid)
    .then(function(json) {
        idr_data = JSON.parse(json.body);
    }).catch(function() {
        console.error('Unable to get BTC-IDR data');
        process.exit(1);
    }).then(function() {
        return request.getAsync(url.shapeshift + source_coin.toLowerCase() + '_btc');
    }).then(function(json) {
        ss_data = JSON.parse(json.body);
        calc();
    }).catch(function() {
        console.error('Unable to get ' + source_coin + '-BTC data');
    });
