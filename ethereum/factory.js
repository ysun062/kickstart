import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x79E92bc519B84b559973d5A3d6fa7D9b2963a69b"
);

export default instance;