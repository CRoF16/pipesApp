import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

    public nameLower: string = 'carlos';
    public nameUpper: string = 'CARLOS';
    public fullName: string = 'CarLoS RodRIguez';

    public customDate: Date = new Date();

}
