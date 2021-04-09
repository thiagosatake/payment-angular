import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SibsCardScriptLoaderService {

  private scripts: any = {};

  constructor() { }

  loadScript(checkoutId: string) {
    let node = document.createElement('script'); // creates the script tag
    node.src = 'https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=' + checkoutId; // sets the source (insert url in between quotes)
    node.type = 'text/javascript'; // set the script type
    node.async = true; // makes script run asynchronously
    // append to head of document
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}