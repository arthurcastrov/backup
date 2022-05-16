// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cognitoURL: 'https://adl-habilitadora-stg-employee-bbog-federation.auth.us-east-2.amazoncognito.com',
  redirectURL: 'http://localhost:4200/home',
  clientId: '2im45lu90a4v06up7kfetiqkml',
  logoutHome: 'http://localhost:4200/login'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
