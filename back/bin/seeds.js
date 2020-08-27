const { withDbConnection, dropIfExists } = require("../lib/withDbConnection");
const Gamesession = require("../models/gameSession");
const Artist = require("../models/artist");

withDbConnection(async () => {
  await dropIfExists(Artist);
  //await Artist.deleteMany();
  await Artist.remove({});
  await Artist.create([
    {
      idSpotify: "0uq5PttqEjj3IH1bzwcrXF",
      name: "Spice Girls",
      image: "https://i.scdn.co/image/c6f6b80a3f338b7577a6daa6e27cb0c3f621bb02",
    },
    {
      idSpotify: "1yxSLGMDHlW21z4YXirZDS",
      name: "The Black Eyed Peas",
      image: "https://i.scdn.co/image/ad2b20d12b16fcb7661dda1455be8b4f1bf0a6e8",
    },
    {
      idSpotify: "4vRSocKbGh7PsQrYRDVMEF",
      name: "Lindsay Lohan",
      image: "https://i.scdn.co/image/03f1063b33685a52971b20f9119f2730441af4f0",
    },
    {
      idSpotify: "6XCS9JCn56Q252cMOTbeq6",
      name: "Danii Minoge",
      image: "https://i.scdn.co/image/07e7c2c6b5b1180cffbb57b4ca4acc7679c927bf",
    },
    {
      idSpotify: "12Chz98pHFMPJEknJQMWvI",
      name: "Muse",
      image: "https://i.scdn.co/image/17f00ec7613d733f2dd88de8f2c1628ea5f9adde",
    },
    {
      idSpotify: "2hazSY4Ef3aB9ATXW7F5w3",
      name: "Izal",
      image: "https://i.scdn.co/image/8681430ead812152a14f61ad53c74a23599a6321",
    },
    {
      idSpotify: "4HV7yKF3SRpY6I0gxu7hm9",
      name: "Kakkmaddafakka",
      image: "https://i.scdn.co/image/e0e17f4481de1a1bbcb4c38fa0c3c97b3b57c391",
    },
    {
      idSpotify: "4M84umUNRbZy1mJleyyRM9",
      name: "Vitalic",
      image: "https://i.scdn.co/image/f9b104ca523d40026e87c2411579ca1bb11ef4ad",
    },
    {
      idSpotify: "6J6yx1t3nwIDyPXk5xa7O8",
      name: "Vetusta Morla",
      image: "https://i.scdn.co/image/a62934ac93ad644de1c4f2fc03d93f069925ed50",
    },
    {
      idSpotify: "3zVGMz661UQBxwt04UIYV0",
      name: "Lluis Llach",
      image: "https://i.scdn.co/image/ab67616d00001e0270e35da4dbed94288eaf3bcc",
    },
    {
      idSpotify: "75U40yZLLPglFgXbDVnmVs",
      name: "The Mars Volta",
      image: "https://i.scdn.co/image/c43e2a16c764c958b28da27e429b13405d994901",
    },
    {
      idSpotify: "2exkZbmNqMKnT8LRWuxWgy",
      name: "Moderat",
      image: "https://i.scdn.co/image/04a1d0d490d700b1a6feeacd31db5e5bfe1bc737",
    },
    {
      idSpotify: "3jQ8hpdQo3TCEnb5gmOtH5",
      name: "Erol Alkan",
      image: "https://i.scdn.co/image/6726bd27d1a690a6c85061a3535dff9c9e6a1512",
    },
    {
      idSpotify: "1gR0gsQYfi6joyO1dlp76N",
      name: "Justice",
      image: "https://i.scdn.co/image/01a786afab31738885eaf683872cf9b7ea9ee150",
    },
  ]);
  console.log("Seeds >>> OK");
});
