import { Component } from '@angular/core';
import {MDCRipple} from '@material/ripple';
let selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
let ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AngularMaterial';

}
