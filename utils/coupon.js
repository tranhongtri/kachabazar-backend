const coupons = [
  {
    _id: "643970d0e58a401b6c62c755",

    status: "show",
    title: {
      en: "RAMADAN23 TWO",
    },
    couponCode: "RAMADAN23TWO",
    endTime: "2023-05-31T20:19:00.000Z",

    minimumAmount: 1500,
    productType: "Grocery",
    logo: "https://i.ibb.co/wBBYm7j/ins4.jpg",

    discountType: {
      type: "fixed",
      value: 100,
    },
  },
  {
    _id: "643970d0e58a401b6c62c756",

    status: "show",
    title: {
      en: "RAMADAN23",
    },
    couponCode: "RAMADAN23",
    endTime: "2023-05-01T20:19:00.000Z",

    minimumAmount: 500,
    productType: "Grocery",
    logo: "https://i.ibb.co/23kQcB9/ins3.jpg",

    discountType: {
      type: "percentage",
      value: 10,
    },
  },
  {
    _id: "643970d0e58a401b6c62c753",

    status: "show",
    title: {
      en: "August Gift Voucher",
    },
    couponCode: "AUGUST21",
    endTime: "2021-08-31T06:00:00.000Z",

    minimumAmount: 2000,
    productType: "Grocery",
    logo: "https://i.ibb.co/PDLPDHc/ins1.jpg",

    discountType: {
      type: "fixed",
      value: 100,
    },
  },
  {
    _id: "643970d0e58a401b6c62c754",

    status: "show",
    title: {
      en: "Summer Gift Voucher",
    },
    couponCode: "SUMMER21",
    endTime: "2023-12-20T00:56:00.000Z",

    minimumAmount: 1000,
    productType: "Cloths",
    logo: "https://i.ibb.co/4thS4Z1/ins2.jpg",

    discountType: {
      type: "percentage",
      value: 10,
    },
  },
];

module.exports = coupons;
