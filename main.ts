const WebSocket = require('ws');
require('dotenv').config()

import {Subscription,Ticker} from './models'

const ws = new WebSocket('wss://ws.kraken.com');

let subscriptions = [{
  "event": "subscribe",
  "pair": [
    "XBT/USD"
  ],
  "subscription": {
    "name": "ticker",
  }
},
{
   "event": "subscribe",
   "pair": [
     "ETH/USD"
   ],
   "subscription": {
     "name": "ticker",
   }
 }
]

ws.on('open', function open() {

  subscriptions.forEach((data)=>{
    ws.send(JSON.stringify(data))
  })

});


ws.on('message', function incoming(data) {

  let msg = JSON.parse(data)

  if( msg.event === 'subscriptionStatus' ){

    console.log(msg)

    newSubscription(msg)

  }
  else if( msg.event === 'systemStatus' ){
    
    console.log(msg)

  }
  else if( msg.event === 'heartbeat' ){


  }
  else{

    newTicker(msg)

  }

});

export async function newSubscription(msg){

  try{
   
    await Subscription.create({
  
      channelID: msg.channelID,
      event: msg.event,
      status: msg.status,
      pair: msg.pair,
      subscriptionType: msg.subscription.name

    })

  }catch(err){

    console.log(err)

  }

}

export async function newTicker(msg){

  try{
   
    let sub = await Subscription.findOne({where:{channelID:msg[0]}})
    
    await Ticker.create({

      channelID: msg[0],
      currency: sub.pair,
      ask: msg[1].a[0],
      bid: msg[1].b[0],
      close: msg[1].c[0],
      volume: msg[1].v[0],
      priceWeightedVolume: msg[1].p[0],
      numberOfTrades: msg[1].t[0],
      low: msg[1].l[0],
      high: msg[1].h[0],
      open_last24hours: msg[1].o[0],

  })


  }catch(err){

    console.log(err)

  }

}
