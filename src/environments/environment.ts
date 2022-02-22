// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  orderData: {
    address: {
      title: 'Home',
      name: 'Maida',
      flatNumber: 115,
      street: 'Brighton Road',
      locality: 'Brighton'
    },
    grandTotal: 87,
    products: [
      {
        images: ['apple.jpg'],
        name: 'Apple',
        offer: 10,
        salePrice: 2.7,
        regularPrice: 3,
        units: 10
      },
      {
        images: ['biryani.jpg'],
        name: 'Biryani',
        offer: 20,
        salePrice: 12,
        regularPrice: 15,
        units: 5
      }
    ],
    status: 'Delivered',
    delivery_status: 'Unassigned',
    createdAt: 'Nov 3, 2020 3:49 PM'
  },
  serverUrl : ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
