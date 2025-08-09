import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {CFEnvironment, CFPaymentGateway, CFSession, CFWebCheckoutPayment, CFUPIIntentCheckoutPayment} from "@awesome-cordova-plugins/cashfree-pg";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
  async initiateWebPayment(){
    const callbacks = {
        onVerify: function (result:any) {
            console.log("This is in the SDK Verify: " + JSON.stringify(result));
        },
        onError: function (error: any) {
            console.log("This is in the SDK Error: " + JSON.stringify(error));
        }
    };
    CFPaymentGateway.setCallback(callbacks)
    CFPaymentGateway.doWebCheckoutPayment(
        new CFWebCheckoutPayment(
            new CFSession("session_Z7Sj6ZyrTNiU1PWxrgPoQ3zNkbQpPrSAhiilBn6mZnOq5PvIT7NqVnw9vm-6Wb5cT3HBTqufejP-UlK6OEiI88fYXvEYIadw6vEp_TLbGgXc",
                "order_101024392penKNwgrYS4EcTwEWHIFlCdApr",
                CFEnvironment.SANDBOX
            ),
            null)
    )
  };

  async initiateIntentCheckoutPayment(){
    const callbacks = {
        onVerify: function (result:any) {
            console.log("This is in the SDK Verify: " + JSON.stringify(result));
        },
        onError: function (error: any) {
            console.log("This is in the SDK Error: " + JSON.stringify(error));
        }
    };
    CFPaymentGateway.setCallback(callbacks)

    const upiIntentCheckoutPaymentObject  = new CFUPIIntentCheckoutPayment(
      new CFSession("session_573UgcO0ItzgFZeFusGhtQ3BYKr2aUAAHJ35aGzNpHKZRVhHyzc6uOPaeJHJvee3Q2o0PvsZdHC3GewejRmtRzue-xBqwNWRoKuwNjQaDS9JKuJTL_oPkE4payment",
        "order_6099982qej4RHRoeZkekR8y7UVoSeuJQR",
        CFEnvironment.PRODUCTION),null);
    console.log("UPIData", JSON.stringify(upiIntentCheckoutPaymentObject))
    CFPaymentGateway.doUPIPayment(upiIntentCheckoutPaymentObject)
  };
}
