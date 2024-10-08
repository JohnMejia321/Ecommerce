import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserType } from '../../../common/user-type';
import { User } from '../../../common/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent  implements OnInit {

  username : string = '';
  name : string = '';
  surname : string = '';
  email : string = '';
  address : string = '';
  cellphone : string = '';
  password : string = '';
  userType : string = '';


  ngOnInit(): void {
  }

  constructor(private authetication : AuthenticationService, private router : Router,
    private toastr:ToastrService
    ){}

    register(){
      this.username = this.email;
      this.userType = UserType.USER
      let user = new User (0, this.username, this.name, this.surname, this.email, this.address, this.cellphone, this.password, this.userType);
      this.authetication.register(user).subscribe(
        res => {
          this.toastr.success('Usuario registrado', 'Usuario');
        console.log(res)}
      );
  
  
      console.log(user);
      this.router.navigate(['user/login']);
    }

}
