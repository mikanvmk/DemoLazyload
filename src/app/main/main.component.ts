import {Component} from "@angular/core";
import {UserService} from "../common/service/user.service";
import {Constant} from "../common/constant";
import {HttpService} from "../common/service/http.service";
import {Keepalive} from "@ng-idle/keepalive";
import {DEFAULT_INTERRUPTSOURCES, Idle} from "@ng-idle/core";

@Component({
  selector : "main",
  templateUrl : "./main.component.html"
})

export class MainComponent {

  constructor(
    private user:UserService,
    private idle: Idle,
    private keepalive: Keepalive,
    private http:HttpService
  ) {

    idle.setIdle(Constant.const_time_out_set_interval);
    idle.setTimeout(Constant.const_time_out_interval);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    idle.onTimeout.subscribe(() => {
      this.http.logout()
    });
    // sets the ping interval to 5 seconds
    keepalive.interval(Constant.const_time_out_set_interval);
    this.reset();
  }

  reset() {
    this.idle.watch();
  }
}
