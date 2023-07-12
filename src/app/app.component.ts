 import { Component } from '@angular/core';

 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
 })
 export class AppComponent {
   title = 'angular-test';
}
// import { Component } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
   
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'newMat';
     
//   isLinear = true;
//   firstFormGroup!: FormGroup;
//   secondFormGroup!: FormGroup;
  
//   constructor(private _formBuilder: FormBuilder) {}
  
//   ngOnInit() {
//     this.firstFormGroup = this._formBuilder.group({
//       name: ['', Validators.required],
//       description: ['', Validators.required]
//     });
//     this.secondFormGroup = this._formBuilder.group({
//       name: ['', Validators.required],
//       description: ['', Validators.required]
//     });
//   }
  
//   submit(){
//       console.log(this.firstFormGroup.value);
//       console.log(this.secondFormGroup.value);
//   }
// }