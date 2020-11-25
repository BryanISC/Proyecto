import { Component, Input, AfterViewInit, ViewChild  } from '@angular/core';
import { async } from '@angular/core/testing';
import { PaymentService } from "../../servicios/payment.service";

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.scss']
})
export class PaymentRequestComponent implements AfterViewInit {

  @Input() amount: number;
  @Input() label: string;

  elements: any;
  paymentRequest: any;
  prButton: any;

  @ViewChild('payElement') payElement;

  constructor(private pmt: PaymentService) { }

  ngAfterViewInit() {
    this.paymentRequest = this.pmt.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        amount: this.amount,
        label: this.label,
      },
    });

    this.elements = this.pmt.stripe.elements();

    this.paymentRequest.on('source', async (event) => {
      console.log(event);

      setTimeout(() => {
        event.complete('success')
      }, 1000)
    });

    this.prButton = this.elements.create('paymentRequestButton', {
      paymentRequest: this.paymentRequest,
      style: {
        paymentRequestButton: {
          type: 'buy',
          theme: 'dark'
        },
      }
    });

    this.mountButton()
  }

  async mountButton(){
    const result = await this.paymentRequest.canMakePayment();

    if (result){
      this.prButton.mount(this.payElement.nativeElement);
    } else {
      console.error('your browser is old school!');
    }
  }
}
