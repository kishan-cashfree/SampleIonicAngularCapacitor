# CashFree Capacitor SDK Sample with Ionic & Angular


## **Description**

Sample integration project for CashFree Payment Gateway's in Ionic Angular Capacitor platform.


## Installation:
Install the plugin

```bash

npm i @awesome-cordova-plugins/cashfree-pg@latest
npm i @awesome-cordova-plugins/core@latest
npm i cordova-plugin-cashfree-pg@capacitor

npx cap sync 
npx cap sync android
npx cap run android

```

Sample Integration code

```
const callbacks = {
        onVerify: function (result:any) {
            console.log("This is in the SDK Verify: " + JSON.stringify(result));
        },
        onError: function (error: any) {
            console.log("This is in the SDK Error: " + JSON.stringify(error));
        }
    };

//Set Callback (Mandatory)
CFPaymentGateway.setCallback(callbacks) 

//Call Webcheckout pamyent
CFPaymentGateway.doWebCheckoutPayment(
        new CFWebCheckoutPayment(
            new CFSession("session_Z7Sj6ZyrTNiU1PWxrgPoQ3zNkbQpPrSAhiilBn6mZnOq5PvIT7NqVnw9vm-6Wb5cT3HBTqufejP-UlK6OEiI88fYXvEYIadw6vEp_TLbGgXc",
                "order_101024392penKNwgrYS4EcTwEWHIFlCdApr",
                CFEnvironment.SANDBOX
            ),
            null)
)
```


### Sample Test UPI App
Doc : https://docs.cashfree.com/docs/cashfree-upi-intent-simulator-apk

APK : https://github.com/cashfree/nextgen-android/blob/master/assets/SampleTestUPISimulator.apk
