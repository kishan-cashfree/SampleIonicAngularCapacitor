import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {CFEnvironment, CFPaymentGateway, CFSession, CFWebCheckoutPayment} from "@awesome-cordova-plugins/cashfree-pg";


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
}
