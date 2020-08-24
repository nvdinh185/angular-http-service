import { Component, OnInit } from "@angular/core";
import { IpService } from "./ip.service";

@Component({
  selector: 'app-ip3',
  template: `
          <p>This is ngOnInit Component</p>
          <h4>{{ ip }}</h4>
    `
})
export class IpComponentngOnInit implements OnInit {
  ip: String;
  constructor(private ipService: IpService) { }

  ngOnInit() {
    this.ipService.getIp()
      .then(ip => this.ip = ip)
      .catch(err => console.log(err));
  }
}