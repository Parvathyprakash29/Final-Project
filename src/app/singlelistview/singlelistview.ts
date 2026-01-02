
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-singlelistview',
  imports: [CommonModule],
  templateUrl: './singlelistview.html',
  styleUrl: './singlelistview.css',
})
export class Singlelistview {

  singleproduct:any;
  constructor(private route:ActivatedRoute, private service: Service,private cdr:ChangeDetectorRef){}
    ngOnInit (){
    const titleid = this.route.snapshot.paramMap.get('titleid')!;
    this.service.getsingleProduct(titleid).subscribe((data:any)=>{

      this.singleproduct=data;
      console.log(data);
      this.cdr.detectChanges();
    });
  }
}