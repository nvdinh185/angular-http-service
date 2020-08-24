import { Component } from "@angular/core";
import { IpService } from "./ip.service";

@Component({
    selector: 'app-ip2',
    template: `
                <p>This is Service Component</p>
                <h4>{{ ip }}</h4>
    `,
    providers: [IpService]
})
export class IpComponentService {
    ip: String;
    constructor(private ipService: IpService) {
        this.ipService.getIp()
            .then(ip => this.ip = ip)
            .catch(err => console.log(err));
    }
}