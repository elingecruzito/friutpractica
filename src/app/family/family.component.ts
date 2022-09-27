import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-family',
  templateUrl: '../fruits/fruits.component.html',
  styleUrls: ['../fruits/fruits.component.css']
})
export class FamilyComponent implements OnInit {

  fruits:Fruit[];
  constructor(private route: ActivatedRoute,private service:FruitService) { }

  ngOnInit(): void {
    this.getFruitFamily();
  }

  private getFruitFamily(){
    const family = String(this.route.snapshot.paramMap.get('family'));
    this.service.getFamily(family).subscribe(data => {
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
