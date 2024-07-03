// scripts/deploy.js

async function main() {
    const Medicalsys = await ethers.getContractFactory("Medicalsys");

    // Deploy the contract (no arguments)
    const medicalsys = await Medicalsys.deploy();

    console.log("Contract deployed to address:", medicalsys.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


    //Contract deployed to address: 0x4d3Daf9b7876befF2D3b3A5400C6fD9AA15943D0