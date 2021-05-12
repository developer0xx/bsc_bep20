var chainId = window.ethereum.chainId || sessionStorage.getItem("chainId");
console.log("chainId", chainId);
module.exports = {
    Testnet_Abi: function () {
        return [{
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_upgradedAddress",
                "type": "address"
            }],
            "name": "deprecate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_spender",
                "type": "address"
            }, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "approve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "deprecated",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_evilUser",
                "type": "address"
            }],
            "name": "addBlackList",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_from",
                "type": "address"
            }, {
                "name": "_to",
                "type": "address"
            }, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "transferFrom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "upgradedAddress",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "balances",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "maximumFee",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "_totalSupply",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_maker",
                "type": "address"
            }],
            "name": "getBlackListStatus",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }, {
                "name": "",
                "type": "address"
            }],
            "name": "allowed",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "paused",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "who",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "getOwner",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_to",
                "type": "address"
            }, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "newBasisPoints",
                "type": "uint256"
            }, {
                "name": "newMaxFee",
                "type": "uint256"
            }],
            "name": "setParams",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "amount",
                "type": "uint256"
            }],
            "name": "issue",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "amount",
                "type": "uint256"
            }],
            "name": "redeem",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_owner",
                "type": "address"
            }, {
                "name": "_spender",
                "type": "address"
            }],
            "name": "allowance",
            "outputs": [{
                "name": "remaining",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "basisPointsRate",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "isBlackListed",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_clearedUser",
                "type": "address"
            }],
            "name": "removeBlackList",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "MAX_UINT",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "newOwner",
                "type": "address"
            }],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_blackListedUser",
                "type": "address"
            }],
            "name": "destroyBlackFunds",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{
                "name": "_initialSupply",
                "type": "uint256"
            }, {
                "name": "_name",
                "type": "string"
            }, {
                "name": "_symbol",
                "type": "string"
            }, {
                "name": "_decimals",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }],
            "name": "Issue",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }],
            "name": "Redeem",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "newAddress",
                "type": "address"
            }],
            "name": "Deprecate",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "feeBasisPoints",
                "type": "uint256"
            }, {
                "indexed": false,
                "name": "maxFee",
                "type": "uint256"
            }],
            "name": "Params",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "_blackListedUser",
                "type": "address"
            }, {
                "indexed": false,
                "name": "_balance",
                "type": "uint256"
            }],
            "name": "DestroyedBlackFunds",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "_user",
                "type": "address"
            }],
            "name": "AddedBlackList",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "_user",
                "type": "address"
            }],
            "name": "RemovedBlackList",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "owner",
                "type": "address"
            }, {
                "indexed": true,
                "name": "spender",
                "type": "address"
            }, {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "Approval",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "from",
                "type": "address"
            }, {
                "indexed": true,
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "Transfer",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [],
            "name": "Pause",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [],
            "name": "Unpause",
            "type": "event"
        }]
            ;
    },
    usdt: function () {
        return "0xdac17f958d2ee523a2206206994597c13d831ec7";
    },
    tusd: function () {
        return "0x0000000000085d4780B73119b644AE5ecd22b376";
    },
    busd: function () {
        return "0x4fabb145d64652a948d72533023f6e7a623c7c53";
    },
    dai: function () {
        return "0x6b175474e89094c44da98b954eedeac495271d0f";
    },
    usdc: function () {
        return "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    },
    Testnet_usdt: function () {
        if(chainId === "0x3") return "0x2683637a16a1f44dC646A086b7d3F722b02C30df"//"0x94934e1991cfe434db6b3366c989d630718417df";
        else if(chainId === "0x61") return "0x53996689C712De2590e1c1e74Ba0642Ca37DBCdC";//BEP20
    },
    Testnet_tusd: function () {
        if(chainId === "0x3") return "0x0a56d64cae4eb348294b28ae683c7b0bfd10c393"; 
        else if(chainId === "0x61") return "0x8f71855a1Db527f2C073b6E8baee1Fc2FdE5117C";//BEP20
    },
    Testnet_busd: function () {
        if(chainId === "0x3") return "0x5B63e6df456Ce029E4B8b30F36fe864834C6500A"//"0xC9b07E00EC83715bFEE27f7b3c71B0C5daE180A0"//"0xaefa7f18bffdd06dfca7e94fc77f2da6d5787ed6";
        else if(chainId === "0x61") return "0xaACD5090B7b8B3331CB3f95523397Ed5804944F9";//BEP20
    },
    Testnet_dai: function () {
        if(chainId === "0x3") return "0xba4b9eC951A505f48B21227BE0567A318296cBDB"//"0xADD8DD2B43deA26f29020fa364473a7e5A2799eF"//"0xe9d9950ecb7b49524530df696f6abdbe070ce93f";
        else if(chainId === "0x61") return "0xAE62311CF80fBd6902B949e6Ef77dEEf797E3763";//BEP20
    },
    Testnet_usdc: function () {
        if(chainId === "0x3") return "0x6d9e8df9BeB09B953a39bE7aDcfDf2840d5039c6"//"0x875c09e0c8efa38917e595556d9f38c7301bcd83";
        else if(chainId === "0x61") return "0x8c76B4989Ef2Eb7FBdfD970E374bd97D6F468959";//BEP20
    },
    Testnet_btf: function () {
        if(chainId === "0x3") return "0x9de496C08FCFbCB8c04ec9a727C41CCBaB740bB4"//"0x86fc82c59967965aee97471869f3d61bf8250d32";
        else if(chainId === "0x61") return "0xE83278Fa88d0409b9dbED328669E155cc22F2a03";//BEP20
    },

    Testnet_gfx: function () {
        if(chainId === "0x3") return "0xC0C58eB752a8c2360E89C2BfC4E68A55B9D97C2d"//"0xC0C58eB752a8c2360E89C2BfC4E68A55B9D97C2d"//"0x38305297767f13C438F2ce7101e4cAA430219d14"//"0xd435a91a07546b59151172548297930b807852f9";
        else if(chainId === "0x61") return "0x18E01c80F05117f67E6b700C2A8D930795204B42";//BEP20
    },
    
     Testnet_egld:function(){
        if(chainId === "0x3")  return "0x2E8622b05f533bf7DF4314176B81cb33d760d2fb" //"0xAfF78a51c285027bF9F4dB32226264170A773dc5"//"0xAC31341546f558d5d9e76fC0Ec51ce50fab8AC87";
        else if(chainId === "0x61") return "0xEFf333dF15Caa25D976f7E2e00d4d4b602B7d3E7";//BEP20
    },

    Testnet_gld:function(){
        if(chainId === "0x3") return "0xC1513A7Ec05d0df06Cb0da1997bC9fc380Ff4aEa"//"0xA5156E6d4A6E04278b823D85D59fc42FEC5bC0BA"//"0xd99ba4fBE5560b312eC682f2E8df8AdE0F1D0aaa"//"0x0d64357F4E5Ba2F3c8A406e9e987C4431718c8Ca";
        else if(chainId === "0x61") return "0x5464d5F60CB313CdaEc6CC6f222E66EF903765d9";//BEP20
   },
    
    Testnet_swap: function(){
        if(chainId === "0x3") return "0xA5156E6d4A6E04278b823D85D59fc42FEC5bC0BA"// "0x255fea4d6637729f60078809fc0836f1f9ec0338";
        else if(chainId === "0x61") return "0x531DA83655bb7Fc5571E5ed8325866F8840c6fE0";//BEP20
    },

    Testnet_USDT_stake: function(){
        if(chainId === "0x3") return "0xBA48DFF0D9a3d721BBE06A4733EF6B20bDd2882C"//"0x1FcF4a4E9e333053bE2014f0B89Fc243Cc4c9533"//"0xBA48DFF0D9a3d721BBE06A4733EF6B20bDd2882C"//"0x48A78079E14dbD7878Ee9B9C93407F69c49e834C"//"0x0Bb7B001F7fdaeCfdb6D366cDEb094a130C67701"//0x235F799bB8D71F8DceE59452007605fdeC0F9415"// "0xeF11B6B8849d0976524a6966c8AFd242D636cCC1";
        else if(chainId === "0x61") return "0x605686cB5a292658F9FB7d74C697350dD73C652b";//"0x7578f841808057b7ec84f5B84e1943406655Bb31";//BEP20
    },

    Testnet_DAI_stake: function(){
        if(chainId === "0x3") return "0x2335f5f8546dA10c9bd5957757255168999cF7Fb"//"0xC1F207851E7a436E12571b05e0eB80992009AF4F"//0x09e4D674323f46B14eeA8eFAAd68f5024F285a2A"//"0x6e436F8a887248b3247ae7eFFd2660859cC77667"//"0xb93A14B291ad85a2Afd849A63A01f4E1575dFB42";
        else if(chainId === "0x61") return "0x69c285980f00bCA4a6eF6Df642a94baAe53574A8";//"0x160BeA624365BF54B8532e5174a5537f90cEe50c";//BEP20
    },
   
    Testnet_USDC_stake: function(){
       // return "0xbb1F640ba4FeBAfB6A3EAa0df00ab3310910c9F1";
        if(chainId === "0x3") return "0xB045cfb99F6a2aB68402baB3f37E27284c2e262D"//"0x5d43Cdd2c686227a0fCe5d701807e06bAF760E32"//"0x331aE5919fB643Ff385f844C99Ca84C1cd391FB5"//"0xA693CD90A0d5571D8589B02a887782aeaCa37F97" //"0xb5c91ac00ac9bbbc7671eae93ee7afff99d14a6f";
        else if(chainId === "0x61") return "0xfB1B3D156bAbB079440270e0874A77deE579F09A";//"0x13cCE3cD6bB2c22888a3b0Df3947Ba5690b6CdD5";//BEP20
    },
   
    Testnet_BUSD_stake: function(){
        // return "0xbb1F640ba4FeBAfB6A3EAa0df00ab3310910c9F1";
        if(chainId === "0x3") return "0x9Ac4B47BfF1473261D435AF883dB55A93bDAaa67"//"0xBa57918984FfeB55C1b1Cc5eeA2415fC66E6CF7c"//"0xe9bC1a07919f26cb1D6e1C10933Ce28121c9630a"//"0xC2bbD7273534F1423cD7E0f6Eae454B5EB9a266B"//"0xb46ca5dc6ec6a2e7019e4615c2b9d0bd0b22c11c"//"0xb2dd8723a1ec63d9e6f4538c203fe0bd23341056";
        else if(chainId === "0x61") return "0x289a4f911d6284291cDe6CAEa0A4634655bFa003";//"0x78091598C4A733bbb968D897C7e9771Aa14423A7";//BEP20
     },
     
    Testnet_GFX_stake: function(){
        if(chainId === "0x3") return "0xB585B2Cd03402D2E61A6900e4Ba185B478816058"//"0x56A20b4a0304D0D37E3894Da64ba4CF28c3C8b3E"//"0x392E33e132502131edC719399D9f28036bCd2ad7"//"0x8873f52766b9faF29c815194D585dE0Cc06d11f0"//"0xe38069bf706fad2a757c4c94d6e43c3d3f516da3"//"0xf6f03361573313a65d50bb46e42578451cce4043";
        else if(chainId === "0x61") return "0x5Ab21415992650478fA96d81FaD4C8Ed1bE8dA2E";//"0xD9390370bE617285D0835eA912C68c99A1D1d5A8";//BEP20
    },

    Testnet_GLD_stake:function(){
        if(chainId === "0x3") return "0x0C5200AEd7B23C3dbf191797A2FFF37Cd8558A1B"//0xAE7Ba0f757660408041728Edae79df294C1F4971"//"0x0dbd3c3304466b7efcd9435e7196a6accb50fb5d"//"0x4d45db45a3d1b964bc29e5943ab0e97e97e9f7be";
        else if(chainId === "0x61") return "0x061bB5C7c66b82E895BDe06A610bcF1D03DaE0Df";//"0x64826E5C9e10fe390715f3ddC6349AC6521BbC09";//BEP20
    },

    Testnet_EGLD_stake:function(){
        if(chainId === "0x3") return "0x85760685fee646059344dA0d6863ef110fd98EF3"//"0xadc3780297f28add19e5d2186af4ecdf102959b3"//"0x22c0a9959bdb697cdf8767d77e3b4ca41c4f60a8";
        else if(chainId === "0x61") return "0xA54E5Ba67CA2FB434ADEA52A993cFed5EbbAB22b";//"0xB41779dB655703963eAcE06A34ABdBa52246933f";//BEP20
    },
    
    Testnet_swapAbi: function(){
        if(chainId === "0x3") return [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"contract ERC20","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"string","name":"tokenName","type":"string"},{"indexed":false,"internalType":"enum EscrowSwaper.TokenStatus","name":"tokenStatus","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"tokenPrice","type":"uint256"}],"name":"AddNewToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"orderID","type":"uint256"},{"indexed":false,"internalType":"address","name":"requesterAddress","type":"address"},{"indexed":false,"internalType":"string","name":"depositTokenName","type":"string"},{"indexed":false,"internalType":"string","name":"withdrawTokenName","type":"string"},{"indexed":false,"internalType":"contract ERC20","name":"depositTokenAddress","type":"address"},{"indexed":false,"internalType":"contract ERC20","name":"withdrawTokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isDeposited","type":"bool"}],"name":"DepositToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"orderID","type":"uint256"},{"indexed":false,"internalType":"address","name":"requesterAddress","type":"address"},{"indexed":false,"internalType":"string","name":"depositTokenName","type":"string"},{"indexed":false,"internalType":"string","name":"withdrawTokenName","type":"string"},{"indexed":false,"internalType":"contract ERC20","name":"depositTokenAddress","type":"address"},{"indexed":false,"internalType":"contract ERC20","name":"withdrawTokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isDeposited","type":"bool"},{"indexed":false,"internalType":"bool","name":"isWithdrawn","type":"bool"}],"name":"NewOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"PriceUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"TokenID","type":"uint256"},{"indexed":false,"internalType":"enum EscrowSwaper.TokenStatus","name":"tokenStatus","type":"uint8"}],"name":"UpdateTokenStatusForSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"TokenID","type":"uint256"},{"indexed":false,"internalType":"enum EscrowSwaper.TokenStatus","name":"tokenStatus","type":"uint8"}],"name":"UpdateTokenStatusToEndSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"orderID","type":"uint256"},{"indexed":false,"internalType":"address","name":"requesterAddress","type":"address"},{"indexed":false,"internalType":"contract ERC20","name":"depositTokenAddress","type":"address"},{"indexed":false,"internalType":"contract ERC20","name":"withdrawTokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isDeposited","type":"bool"},{"indexed":false,"internalType":"bool","name":"isWithdrawn","type":"bool"}],"name":"WithdrawToken","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"TokenInfo","outputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"contract ERC20","name":"tokenAddress","type":"address"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"enum EscrowSwaper.TokenStatus","name":"tokenStatus","type":"uint8"},{"internalType":"uint256","name":"tokenPrice","type":"uint256"},{"internalType":"bool","name":"isValidToken","type":"bool"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"contract ERC20","name":"_newTokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"name":"addNewToken","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ERC20","name":"_withdrawToken","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"exitSwappedLiquidity","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getBalanceOfToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"requester","type":"address"}],"name":"getOrdersIdByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getTokenAddressByID","outputs":[{"internalType":"contract ERC20","name":"tokenAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"isValidToken","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"orderBook","outputs":[{"internalType":"uint256","name":"orderID","type":"uint256"},{"internalType":"address","name":"requesterAddress","type":"address"},{"internalType":"contract ERC20","name":"depositTokenAddress","type":"address"},{"internalType":"contract ERC20","name":"withdrawTokenAddress","type":"address"},{"internalType":"bool","name":"isDeposited","type":"bool"},{"internalType":"bool","name":"isWithdrawn","type":"bool"},{"internalType":"uint256","name":"depositAmount","type":"uint256"},{"internalType":"uint256","name":"withdrawAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"orderBookByRequester","outputs":[{"internalType":"uint256","name":"orderID","type":"uint256"},{"internalType":"address","name":"requesterAddress","type":"address"},{"internalType":"contract ERC20","name":"depositTokenAddress","type":"address"},{"internalType":"contract ERC20","name":"withdrawTokenAddress","type":"address"},{"internalType":"bool","name":"isDeposited","type":"bool"},{"internalType":"bool","name":"isWithdrawn","type":"bool"},{"internalType":"uint256","name":"depositAmount","type":"uint256"},{"internalType":"uint256","name":"withdrawAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"orderCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ERC20","name":"depositTokenAddress","type":"address"},{"internalType":"contract ERC20","name":"withdrawTokenAddress","type":"address"},{"internalType":"uint256","name":"depositTokenAmount","type":"uint256"},{"internalType":"uint256","name":"depositTokenID","type":"uint256"},{"internalType":"uint256","name":"withdrawTokenID","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"updateTokenPrice","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"updateTokenStatusForSale","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"updateTokenStatusToEndSale","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
        else if(chainId === "0x61") return [
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokenID",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "contract BEP20",
                        "name": "tokenAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "tokenName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "enum EscrowSwaper.TokenStatus",
                        "name": "tokenStatus",
                        "type": "uint8"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokenPrice",
                        "type": "uint256"
                    }
                ],
                "name": "AddNewToken",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "orderID",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "requesterAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "depositTokenName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "withdrawTokenName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "contract BEP20",
                        "name": "depositTokenAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "contract BEP20",
                        "name": "withdrawTokenAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "depositAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "withdrawAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "isDeposited",
                        "type": "bool"
                    }
                ],
                "name": "DepositToken",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "orderID",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "requesterAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "depositTokenName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "withdrawTokenName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "contract BEP20",
                        "name": "depositTokenAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "contract BEP20",
                        "name": "withdrawTokenAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "depositAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "withdrawAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "isDeposited",
                        "type": "bool"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "isWithdrawn",
                        "type": "bool"
                    }
                ],
                "name": "NewOrder",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "newPrice",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokenID",
                        "type": "uint256"
                    }
                ],
                "name": "PriceUpdate",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "TokenID",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "enum EscrowSwaper.TokenStatus",
                        "name": "tokenStatus",
                        "type": "uint8"
                    }
                ],
                "name": "UpdateTokenStatusForSale",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "TokenID",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "enum EscrowSwaper.TokenStatus",
                        "name": "tokenStatus",
                        "type": "uint8"
                    }
                ],
                "name": "UpdateTokenStatusToEndSale",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "orderID",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "requesterAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "contract BEP20",
                        "name": "depositTokenAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "contract BEP20",
                        "name": "withdrawTokenAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "depositAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "withdrawAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "isDeposited",
                        "type": "bool"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "isWithdrawn",
                        "type": "bool"
                    }
                ],
                "name": "WithdrawToken",
                "type": "event"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "TokenInfo",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract BEP20",
                        "name": "tokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "tokenName",
                        "type": "string"
                    },
                    {
                        "internalType": "enum EscrowSwaper.TokenStatus",
                        "name": "tokenStatus",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isValidToken",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint8",
                        "name": "decimals",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_tokenName",
                        "type": "string"
                    },
                    {
                        "internalType": "contract BEP20",
                        "name": "_newTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_tokenPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint8",
                        "name": "_decimals",
                        "type": "uint8"
                    }
                ],
                "name": "addNewToken",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "contract BEP20",
                        "name": "_withdrawToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_tokens",
                        "type": "uint256"
                    }
                ],
                "name": "exitSwappedLiquidity",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenID",
                        "type": "uint256"
                    }
                ],
                "name": "getBalanceOfToken",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "requester",
                        "type": "address"
                    }
                ],
                "name": "getOrdersIdByAddress",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "depositAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "depositTokenPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "withdrawTokenPrice",
                        "type": "uint256"
                    }
                ],
                "name": "getTestingValues",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenID",
                        "type": "uint256"
                    }
                ],
                "name": "getTokenAddressByID",
                "outputs": [
                    {
                        "internalType": "contract BEP20",
                        "name": "tokenAddress",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenID",
                        "type": "uint256"
                    }
                ],
                "name": "isValidToken",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "orderBook",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "orderID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "requesterAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "contract BEP20",
                        "name": "depositTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "contract BEP20",
                        "name": "withdrawTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "isDeposited",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "isWithdrawn",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "depositAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "withdrawAmount",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "orderBookByRequester",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "orderID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "requesterAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "contract BEP20",
                        "name": "depositTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "contract BEP20",
                        "name": "withdrawTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "isDeposited",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "isWithdrawn",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "depositAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "withdrawAmount",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "orderCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "contract BEP20",
                        "name": "depositTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "contract BEP20",
                        "name": "withdrawTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "depositTokenAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "depositTokenID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "withdrawTokenID",
                        "type": "uint256"
                    }
                ],
                "name": "swap",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "tokenCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_tokenPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "updateTokenPrice",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenID",
                        "type": "uint256"
                    }
                ],
                "name": "updateTokenStatusForSale",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenID",
                        "type": "uint256"
                    }
                ],
                "name": "updateTokenStatusToEndSale",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
    },
    Testnet_stakeAbi: function(){
        if(chainId === "0x3") return [{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"getTotalRewardInMemory","outputs":[{"name":"totalInternalReward","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_withdrawToken","type":"address"},{"name":"_tokens","type":"uint256"}],"name":"exitSwappedLiquidity","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"usdcToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_index","type":"uint256"}],"name":"unstake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"getTotalReward","outputs":[{"name":"totalReward","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_index","type":"uint256"}],"name":"claim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"getTotalStackedBalance","outputs":[{"name":"totalStakedValue","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"},{"name":"_index","type":"uint256"}],"name":"getCoinAge","outputs":[{"name":"_coinAge","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newRate","type":"uint256"}],"name":"updateInterestRate","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gfiToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"getTotalCount","outputs":[{"name":"lastIndex","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"stakingInfo","outputs":[{"name":"value","type":"uint256"},{"name":"stakingTime","type":"uint256"},{"name":"reward","type":"uint256"},{"name":"userAddress","type":"address"},{"name":"indexId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"},{"name":"_index","type":"uint256"}],"name":"getReward","outputs":[{"name":"reward","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_gfiToken","type":"address"},{"name":"_usdcToken","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Unstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_stakedValue","type":"uint256"},{"indexed":false,"name":"_rewardValue","type":"uint256"}],"name":"Exit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_rewardValue","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
        else if(chainId === "0x61") return [
            {
                "inputs": [
                    {
                        "internalType": "contract BEP20Token",
                        "name": "_gfiToken",
                        "type": "address"
                    },
                    {
                        "internalType": "contract BEP20Token",
                        "name": "_busdToken",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_rewardValue",
                        "type": "uint256"
                    }
                ],
                "name": "Claim",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_stakedValue",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_rewardValue",
                        "type": "uint256"
                    }
                ],
                "name": "Exit",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "Staked",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "Unstaked",
                "type": "event"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "busdToken",
                "outputs": [
                    {
                        "internalType": "contract BEP20Token",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "claim",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "exit",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "contract BEP20Token",
                        "name": "_withdrawToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_tokens",
                        "type": "uint256"
                    }
                ],
                "name": "exitSwappedLiquidity",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "getCoinAge",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "_coinAge",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "getReward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "reward",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_who",
                        "type": "address"
                    }
                ],
                "name": "getTotalCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "lastIndex",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_who",
                        "type": "address"
                    }
                ],
                "name": "getTotalReward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "totalReward",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_who",
                        "type": "address"
                    }
                ],
                "name": "getTotalRewardInMemory",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "totalInternalReward",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_who",
                        "type": "address"
                    }
                ],
                "name": "getTotalStackedBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "totalStakedValue",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "gfiToken",
                "outputs": [
                    {
                        "internalType": "contract BEP20Token",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "interestRate",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "stake",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "stakingInfo",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stakingTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "reward",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "userAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "indexId",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "unstake",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_newRate",
                        "type": "uint256"
                    }
                ],
                "name": "updateInterestRate",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
    
    }
        

    }