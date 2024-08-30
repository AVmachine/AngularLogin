import {Component, OnChanges} from '@angular/core';
import  {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {LoginService} from "./login-service.service";
import { ToastModule } from 'primeng/toast';
import {MessageService} from "primeng/api";

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

  onLogin()
  {console.log("hi");
    this.loginService.postLogin(this.userName, this.password)
      .subscribe( value => {
        this.validLogin = value;
        if(this.validLogin)
          this.triggerSuccess();
        else
            this.triggerError();
      });
  }

  triggerSuccess(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  triggerError(){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });

  }

}
