let abiERC20 = [
    {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}, {"name":"_spender","type":"address"}],
        "name":"allowance",
        "outputs":[{"name":"remaining","type":"uint256"}],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[{"name":"_spender","type":"address"}, {"name":"_value","type":"uint256"}],
        "name":"approve",
        "outputs":[],
        "type":"function"
    }
];
let abiVault = [
    {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[],
        "name":"totalSupply",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[],
        "name":"balanceToken",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[],
        "name":"balanceVault",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[],
        "name":"balanceProfits",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[{"name":"amount","type":"uint256"}],
        "name":"deposit",
        "outputs":[],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[{"name":"numberOfShares","type":"uint256"}],
        "name":"withdraw",
        "outputs":[],
        "type":"function"
    }
];
let abiPool = [
    {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[{"name":"_account","type":"address"}],
        "name":"earned",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[],
        "name":"getReward",
        "outputs":[],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[],
        "name":"exit",
        "outputs":[],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[{"name":"amount","type":"uint256"}],
        "name":"stake",
        "outputs":[],
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[{"name":"numberOfShares","type":"uint256"}],
        "name":"withdraw",
        "outputs":[],
        "type":"function"
    }
];