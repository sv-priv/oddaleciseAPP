import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.css']
})
export class MountainsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  title: string;
  subtitle: string;
  rating : number;
  reviewCount:number;
  height:number;
  imgUrl: string;
  latitude: number;
  longitude: number;
  timestamp: string;
  obj : any;

  onClickBelasica(){
    this.http.get('https://oddaleciseapi.herokuapp.com/mountains/Belasica')
    .subscribe(res =>{

     this.obj= res;
   console.log(this.obj);

   })
  }
  onClickKorab(){
    this.http.get('https://oddaleciseapi.herokuapp.com/mountains/Mt%20Korab')
    .subscribe(res =>{
     this.obj= res;
   console.log(res);

   })
  }
  onClickSharPlanina(){
    this.http.get('https://oddaleciseapi.herokuapp.com/mountains/Šar%20Mountains')
    .subscribe(res =>{
     this.obj= res;
   console.log(res);

   })
    }
  onClickOsogovski(){
    this.http.get('https://oddaleciseapi.herokuapp.com/mountains/Osogovo')
    .subscribe(res =>{
     this.obj= res;
   console.log(res);

   })
  }

  onClickBistra(){
    this.http.get('https://oddaleciseapi.herokuapp.com/mountains/Mount%20Bistra')
    .subscribe(res =>{
     this.obj= res;
   console.log(res);

   })
  }
  onClickKaradzica(){
    this.http.get('https://oddaleciseapi.herokuapp.com/mountains/Karadžica')
    .subscribe(res =>{
     this.obj= res;
   console.log(res);

   })
  }
  onClickMalesevski(){
    this.http.get('https://oddaleciseapi.herokuapp.com/mountains/Maleshevska%20Planina')
    .subscribe(res =>{
     this.obj= res;
   console.log(res);

   })
  }
  onClickPlackovica(){
    this.http.get('https://oddaleciseapi.herokuapp.com/mountains/Plačkovica')
    .subscribe(res =>{
     this.obj= res;
   console.log(res);

   })
  }
  ngOnInit(): void {
  }

}
