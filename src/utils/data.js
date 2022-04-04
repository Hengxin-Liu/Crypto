const data = {
   coins: [
    {
        id:1,
        name: 'Bitcoin',
        price: '66666.09',
        onehour: 30,
        oneday: 40,
        sevendays: 51,
        onedayVolume:348923789,
        mkt_cap:23948902,
    },
    {
        id:2,
        name: 'Bitcoin',
        price: '77777',
        onehour: 30,
        oneday: 40,
        sevendays: 51,
        onedayVolume:348923789,
        mkt_cap:23948902,
    },
   ],
   cards: [
       {
         name : 'Market Capitalization' ,
         amount: 2222222222, 
         status: 'down',
       },
       {
        name : '24h Trading Volume' ,
        amount: 129361383974, 
        status: 'up',
      },
      {
        name : 'Bitcoin Market Cap Dominance' ,
        amount: 3990, 
        status: 'none',
      },
      {
        name : '# of Coins' ,
        amount: 1344, 
        status: 'none',
      },
   ],
   currency:[
    {
      name: 'Cryptocurrencies',
      coins:[{
        short:'BTC',
        name:'Bitcoin'
       },
       {
        short:'ETH',
        name:'Ether'
       },
       {
        short:'BCH',
        name:'Bitcoin Cash'
       },
       {
        short:'XRP',
        name:'XRP'
       },
       {
        short:'XLM',
        name:'Lumens'
       }]
    },
    {
      name:'Suggested Currencies',
      coins:[
        {
          short:'USD',
          name:'US Dollar'
        },
        {
          short:'EUR',
          name:'Euro'
        },
        {
          short:'RUB',
          name:'Russian Ruble'
        },
        {
          short:'CNY',
          name:'Chinese Yuan'
        }
      ]
    }
   ],
}
export default data;