import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
template: `
 
    <pm-user-settings-form></pm-user-settings-form>
  
`
})
export class AppComponent {
  pageTitle: string = 'Marcelo Santos'
}