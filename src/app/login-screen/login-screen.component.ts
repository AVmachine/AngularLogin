import {Component, OnChanges} from '@angular/core';
import  {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {LoginService} from "./login-service.service";
import { ToastModule } from 'primeng/toast';
import {MessageService} from "primeng/api";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [ButtonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent {

  constructor(private loginService: LoginService, private messageService: MessageService) {}

  userName : string = "";
  password : string = "";
  validLogin : boolean  = false;

  onUserNameChange(){
    console.log(this.userName);
  }

  onPasswordChange(){
    console.log(this.password);
  }

  onLogin()
  {console.log("hi");
    this.loginService.postLogin(this.userName, this.password)
      .subscribe( value => {
        this.validLogin = value;
        if(this.validLogin)
          this.triggerToast();
      });
  }

  triggerToast(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

}
