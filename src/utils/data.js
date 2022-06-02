const data = {
   coins: [
    {
        id:1,
        name: 'Bitcoin',
        price: '66666.09',
        onehour: '30',
        oneday: '40',
        sevendays: '51',
        onedayVolume:348923789,
        mkt_cap:23948902,
    },
    {
        id:2,
        name: 'XRP',
        price: '77777',
        onehour: '30',
        oneday: '40',
        sevendays: '51',
        onedayVolume:348923789,
        mkt_cap:23948902,
    },
    {
      id:3,
      name: 'TTC',
      price:'666666',
      onehour: null,
      oneday: null,
      sevendays: '',
      onedayVolume:'',
      mkt_cap:'',
    }
   ],
   cards: [
       {
         id:1,
         name : 'Market Capitalization' ,
         amount: 2222222222, 
         status: 'down',
       },
       { 
        id:2,
        name : '24h Trading Volume' ,
        amount: 129361383974, 
        status: 'up',
      },
      { 
        id:3,
        name : 'Bitcoin Market Cap Dominance' ,
        amount: 3990, 
        status: 'none',
      },
      {
        id:4,
        name : 'Total of Coins' ,
        amount: 1344, 
        status: 'none',
      },
   ],
   currency:[
    { 
      id:1,
      name: 'Cryptocurrencies',
      coins:[{
        id: 1,
        short:'BTC',
        name:'Bitcoin'
       },
       {
        id:2,
        short:'ETH',
        name:'Ether'
       },
       {
        id:3,
        short:'BCH',
        name:'Bitcoin Cash'
       },
       {
        id:4,
        short:'XRP',
        name:'XRP'
       },
       {
        id:5,
        short:'XLM',
        name:'Lumens'
       }]
    },
    {
      id:2,
      name:'Suggested Currencies',
      coins:[
        {
          id:2.1,
          short:'USD',
          name:'US Dollar'
        },
        {
          id:2.2,
          short:'EUR',
          name:'Euro'
        },
        {
          id:2.3,
          short:'RUB',
          name:'Russian Ruble'
        },
        {
          id:2.4,
          short:'CNY',
          name:'Chinese Yuan'
        }
      ]
    }
   ],
}
export default data;