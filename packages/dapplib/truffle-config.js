require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stomach response shift pudding half kangaroo army genre'; 
let testAccounts = [
"0x0fc460793b26f2c5b7a7af6fd964dd43a4443ff45d8b4fbe439076e9532d5334",
"0xb1c4db1e3260f233289f5494d4a89deee77fb8449d6392c6fde2f295999d3807",
"0x4d77c459935e4c5b69b61c919f4a38eef962599280cb25f5a85a4daf2c439cae",
"0x61be9ff55e5ed3138df6e75b5c70b1991e4db9df0591f50fe2db274a5b6086da",
"0x92a593a186c103f9ca24c0152f00d7984d9edcf8512190d89df5326e883f712e",
"0x1550769af6dc51787981ac0d13042dd2b44e50b2abb72006efc62b530fb546ae",
"0x48d48712155c6849da33b13e105c0e7316f8a4e8ff749d2a4f3fda27fed77be0",
"0xf9559e2493a4b41b2cc13f2a5a6623c4a022398bfb7c0cbb72a5e262c8ac6317",
"0x6423b5fa43a39f269d10dd6b95f4ca3fcf35ff51bc47e7a9321b2d27b37dd016",
"0xdf5cf8f3c744c8b70ee5791dbe110a069b0644e97f1f3d45203b6116a7ca2730"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

