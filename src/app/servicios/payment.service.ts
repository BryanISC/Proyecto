import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  stripe = stripe(environment.stripe.stripe_key);

  constructor() { }

}
