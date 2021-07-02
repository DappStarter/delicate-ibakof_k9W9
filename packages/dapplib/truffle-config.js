require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember clump gesture fork sunset giant'; 
let testAccounts = [
"0x769ed59601c6db8c3da10d53678740938bb15d9dd2fe7a756d5c99a16fbb4624",
"0x6f9540ebe375ebadd7e07f07689552137a4affc57bcd09fa0201552d014064a3",
"0x9edbe2abeabed94201a29eaf13148919693abf09c522a08fc5b217e353e9b592",
"0x7c80c2dad0a15425150c7f473b01e8f832dcf2a7bbe1a80ea9742632434e0ec6",
"0xd06b44d3f397bde8eb120cefd8ace0d5659b36d73943bf7b71f2bf0a4f12d51d",
"0x6d860bfda4efcdddfa6217b568ea6e7d4cf757663a78e6f22757c72f93407593",
"0xd1b8fe8bb7f4f0e3d7907ab52528b6638d57658bcd383439b4a78658b7784db0",
"0xf16d8694f7d13f7daf657b132894cb457488ea82c2af2d6247c7bd068b09419f",
"0xf8837dc05f7838169d46f9f149ad3f814e9a63c75bcf964f69625f9179bd76bb",
"0x198e0351ada004911352a110d24b51473ed45422a004069fedc5153dd06ccc69"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

