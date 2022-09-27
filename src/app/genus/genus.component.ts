import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { ActivatedRoute } from '@angular/router';
import { FruitService } from '../fruit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-genus',
  templateUrl: '../fruits/fruits.component.html',
  styleUrls: ['../fruits/fruits.component.css']
})
export class GenusComponent implements OnInit {

  fruits:Fruit[];
  constructor(private route: ActivatedRoute,private service:FruitService) { }

  ngOnInit(): void {
    this.getFruitGenus();
  }

  private getFruitGenus(){
    const genus = String(this.route.snapshot.paramMap.get('genus'));
    this.service.getGenus(genus).subscribe(data => {
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
