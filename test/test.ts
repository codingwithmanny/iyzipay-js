// Imports
// =================================
import iyzico from "../src";
import { config } from "dotenv";

// Config
// =================================
config();

// Main Script
// =================================
const main = async () => {
  console.group("main");

  // init iyzico client
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  const testResponse = await client.apiTest.retrieve();
  console.log({ testResponse });

  const response = await client.checkoutForm.create({
    locale: 'tr',
    conversationId: '123456789',
    price: '1.0',
    basketId: 'B67832',
    paymentGroup: 'PRODUCT',
    buyer: {
      id: 'BY789',
      name: 'John',
      surname: 'Doe',
      identityNumber: '74300864791',
      email: 'email@email.com',
      gsmNumber: '+905350000000',
      registrationDate: '2013-04-21 15:12:09',
      lastLoginDate: '2015-10-05 12:43:35',
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      city: 'Istanbul',
      country: 'Turkey',
      zipCode: '34732',
      ip: '85.34.78.112'
    },
    shippingAddress: {
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      zipCode: '34742',
      contactName: 'Jane Doe',
      city: 'Istanbul',
      country: 'Turkey'
    },
    billingAddress: {
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      zipCode: '34742',
      contactName: 'Jane Doe',
      city: 'Istanbul',
      country: 'Turkey'
    },
    basketItems: [
      {
        id: 'BI101',
        price: '0.3',
        name: 'Binocular',
        category1: 'Collectibles',
        category2: 'Accessories',
        itemType: 'PHYSICAL'
      },
      {
        id: 'BI102',
        price: '0.5',
        name: 'Game code',
        category1: 'Game',
        category2: 'Online Game Items',
        itemType: 'VIRTUAL'
      },
      {
        id: 'BI103',
        name: 'Usb',
        price: '0.2',
        category1: 'Electronics',
        category2: 'Usb / Cable',
        itemType: 'PHYSICAL'
      }
    ],
    enabledInstallments: [ 1, 2, 3, 6, 9 ],
    callbackUrl: 'https://www.merchant.com/callback',
    currency: 'TRY',
    paidPrice: '1.2'
  });

  console.log({ response });

  console.groupEnd();
};

// Init
// =================================
main()
  .then(() => {
    console.log("Script complete!");
  })
  .catch((err) => {
    console.error({ err });
  });