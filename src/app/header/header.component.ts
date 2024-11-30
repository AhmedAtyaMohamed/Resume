import { Component, OnInit } from '@angular/core'; 
import { FirebaseDataService } from '../_services/firebase-data.service';
import { CV } from '../_models/CV';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
DevName="Ahmed Attya.";
DevJobTitle="Dotnet Developer";
cv={}as CV ;

constructor(   private firebaseService: FirebaseDataService  ) 
  {
    
  }
ngOnInit(): void { 
   // Fetch data
   this.firebaseService.getData('CV').subscribe(data => {
    this.cv = data;  
  });
}
}
