import { Component } from '@angular/core';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fruityvice';

  constructor (private service:FruitService){}

  ngOnInit(): void {
    this.all();
  }

  private all(){
    this.service.all().subscribe(dato => {
      console.log(dato);
    });
  }
}
