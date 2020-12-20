import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar-lakes',
  templateUrl: './sidebar-lakes.component.html',
  styleUrls: ['./sidebar-lakes.component.css']
})
export class SidebarLakesComponent implements OnInit {

  title: string;
  subtitle: string;
  rating : number;
  reviewCount:number;
  category:string;
  imgUrl: string;
  latitude: number;
  longitude: number;
  timestamp: string;
  obj : Object;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {

  }

onClickKozjak(){
   this.http.get('https://oddaleciseapi.herokuapp.com/lakes/Kozjak%20Lake')
   .subscribe(res =>{
    this.obj= res;
  console.log(res);

  })

}

onClickTikvesh(){
  this.http.get('https://oddaleciseapi.herokuapp.com/lakes/Tikvesh%20Lake')
  .subscribe(res =>{
   this.obj= res;
 console.log(res);

 })
}

 onClickLipkovsko(){
  this.http.get('https://oddaleciseapi.herokuapp.com/lakes/Tikvesh%20Lake')
  .subscribe(res =>{
   this.obj= res;
 console.log(res);

 })
 }

  onClickOhridsko(){
    this.http.get('https://oddaleciseapi.herokuapp.com/lakes/Lake%20Ohrid')
    .subscribe(res =>{
     this.obj= res;
   console.log(res);

   })
  }

 onClickPrespansko(){
  this.http.get('https://oddaleciseapi.herokuapp.com/lakes/Lake%20Prespa')
  .subscribe(res =>{
   this.obj= res;
 console.log(res);

 })
 }

onClickDojransko(){
  this.http.get('https://oddaleciseapi.herokuapp.com/lakes/Dojran%20Lake')
  .subscribe(res =>{
   this.obj= res;
 console.log(res);

 })
}

onClickTreska(){
  this.http.get('https://oddaleciseapi.herokuapp.com/lakes/Treska%20Lake')
  .subscribe(res =>{
   this.obj= res;
 console.log(res);

 })
}

 onClickGradec(){
  this.http.get('https://oddaleciseapi.herokuapp.com/lakes/Gradec%20Lake')
  .subscribe(res =>{
   this.obj= res;
 console.log(res);

 })
 }

}
