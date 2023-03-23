import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { MessageService } from 'primeng/api';

declare var UIkit: any;

@Component({
  providers: [MessageService],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  public form: any = {
    username: null,
    password: null
  };
  public isLoggedIn = false;
  public isLoginFailed = false;
  public errorMessage = '';
  public roles: string[] = [];


  constructor(
    public activatedRoute: ActivatedRoute,
    public authService: AuthService, 
    public router: Router,
    public tokenStorage: TokenStorageService,
    private messageService: MessageService

  ){}
  

  public ngOnInit() {

    this.logout();

    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
  }

  public  onSubmit(): void {
    console.log('form ===>', this.form);
    
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        UIkit.notification("login berhasil", {status: 'primary'})
        // this.messageService.add({severity:'success', summary: 'Success', detail:'login success'});

      },
      err => {
        UIkit.notification("login gagal", {status: 'danger'})
        // this.messageService.add({severity:'error', summary: 'Error', detail:'login gagal'});
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  public reloadPage(): void {
    this.router.navigateByUrl('/admin/home');
  }

  public logout(): void {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/login');
  }


}
