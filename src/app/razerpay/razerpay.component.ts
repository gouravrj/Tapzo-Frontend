import { Component,HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


declare var Razorpay:any;

@Component({
  selector: 'app-razerpay',
  templateUrl: './razerpay.component.html',
  styleUrls: ['./razerpay.component.css']
})
export class RazerpayComponent implements OnInit{

  public price!:string
  constructor(private _acroute:ActivatedRoute){}
  ngOnInit(): void {
    this.price = this._acroute.snapshot.paramMap.get('price') as string
    console.log(this.price)
  }

  message = "Now yet Started";
  paymentId = "";
  error = " ";
  title = 'razer-pay';
  options = {
    "key": "rzp_test_ZLlDLZjDjC7qvz",
    "amount": "200",
    "name": "TAPZO",
    "description": "Web Development",
    "image": "https://i.ibb.co/8brFYxf/tapzo-logo.png",
    "order_id":"",
    "handler": function (response:any){
        var event = new CustomEvent("payment.success",
            {
                detail: response,
                bubbles: true,
                cancelable: true
            }
        );
        window.dispatchEvent(event);
    }
    ,
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };

    paynow(){


      console.log("Hello")

      this.paymentId = '';
      this.error = '';

      var strAmount = this.price+"00";


      // this.options.key = "";
      // this.options.order_id = "";


      this.options.amount = strAmount; //paise
      this.options.prefill.name = "Gourav Raj";
      this.options.prefill.email = "gourav.raj42001@gmail.com";
      this.options.prefill.contact = "7008983469";
      var rzp1 = new Razorpay(this.options);
      rzp1.open();

      rzp1.on('payment.failed', function (response:any){

          // Todo - store this information in the server
          console.log(response.error.code);
          console.log(response.error.description);
          console.log(response.error.source);
          console.log(response.error.step);
          console.log(response.error.reason);
          console.log(response.error.metadata.order_id);
          console.log(response.error.metadata.payment_id);
          // this.error = response.error.reason;
        }
      );
      console.log("Hi")

    }
    @HostListener('window:payment.success', ['$event'])
    onPaymentSuccess(event: any):void{
      this.message = "Success Payment "
    }
}
