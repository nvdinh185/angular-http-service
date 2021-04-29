import { Component, OnInit } from "@angular/core";
import { IpService } from "./ip.service";

@Component({
  selector: 'app-ip3',
  template: `
          <p>This is ngOnInit Component</p>
          <h4>{{ ip }}</h4>
          <button (click)=onGetIp()>Get IP Observable</button>
          <button (click)=onTest()>Get Test</button>
    `
})
export class IpComponentOnInit implements OnInit {
  ip: String;
  constructor(private ipService: IpService) { }

  ngOnInit() {
    this.ipService.getIp()
      .then(ip => { this.ip = ip; console.log(ip) })
      .catch(err => console.log(err));
  }

  async onTest() {
    let ip = await this.ipService.getIp()
    console.log(ip);
  }

  onGetIp() {
    this.ipService.getIpObservable()
      .subscribe(ip => {
        console.log(ip.json());
      }, (err) => {
        console.log(err);
      });
  }
}