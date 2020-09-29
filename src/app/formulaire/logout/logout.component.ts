import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/client/auth-service.service';

@Component({
selector: 'app-logout',
templateUrl: './logout.component.html',
styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
/**
 *
 * @param router {Route} Angular route navigation
 * @param service {Auth} Authentification service
 */
constructor(private router:Router,private service:AuthServiceService) { }

ngOnInit(): void {
setTimeout(()=>{
this.router.navigated=false;
this.service.log_out()

this.router.navigate(['home']).then(()=>{
window.location.reload()

})
},1000)
}

}
