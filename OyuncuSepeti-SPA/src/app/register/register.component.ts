import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
model: any = {};
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
register() {
this.authservice.register(this.model).subscribe(() =>  {
console.log('Kayıt İşlemi Başarılı');
}, error => {
  console.log('errror');
});
}
cancel() {
  this.cancelRegister.emit(false);
  console.log('İşlem İptal Edildi');
}

}
