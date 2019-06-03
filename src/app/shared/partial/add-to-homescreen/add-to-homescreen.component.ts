import { Component, OnInit } from '@angular/core';

// declare var window;

@Component({
  selector: 'app-add-to-homescreen',
  templateUrl: './add-to-homescreen.component.html'
})
export class AddToHomescreenComponent implements OnInit {

  isVisible: boolean;

  constructor() {}

  ngOnInit() {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent );
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator['standalone']);
    // Checks if should display install popup notification:
    this.isVisible = isIos() && !isInStandaloneMode();
  }

}
