import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits:Fruit[];
  constructor(private service:FruitService) { }

  ngOnInit(): void {
    this.all();
  }

  private all(){
    this.service.all().subscribe(dato => {
      console.log(dato);
      this.fruits = dato;
    });
  }

  alert(fruit:Fruit)  {  
    Swal.fire({    
      icon: 'success',  
      title: `Fruit ${fruit.name}`,  
      text: `Family: ${fruit.family} | Genus: ${fruit.genus} | Order: ${fruit.order}`,
      showConfirmButton: true,  
    })  
  }  

}
