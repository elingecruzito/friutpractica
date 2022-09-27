import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { ActivatedRoute } from '@angular/router';
import { FruitService } from '../fruit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: '../fruits/fruits.component.html',
  styleUrls: ['../fruits/fruits.component.css']
})
export class OrderComponent implements OnInit {

  fruits:Fruit[];
  constructor(private route: ActivatedRoute,private service:FruitService) { }

  ngOnInit(): void {
    this.getFruitOrder();
  }

  private getFruitOrder(){
    const order = String(this.route.snapshot.paramMap.get('order'));
    this.service.getOrder(order).subscribe(data => {
      this.fruits = data;
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
