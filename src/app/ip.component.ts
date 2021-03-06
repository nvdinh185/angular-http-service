import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    selector: 'app-ip',
    template: `
                <p>This is ip component</p>
                <h4>{{ ip }}</h4>
                <button (click)=onGetIp()>Get IP</button>
            `,
})
export class IpComponent {
    ip: String;
    constructor(private http: Http) {
        this.http.get("http://ip.jsontest.com/")
            .toPromise()
            .then(res => res.json())
            .then(resJson => this.ip = resJson.ip)
            .catch(err => console.log(err));
    }

    onGetIp() {
        this.http.get("http://ip.jsontest.com/")
            .subscribe(ip => {
                console.log(ip.json());
            }, (err) => {
                console.log(err)
            });
    }
}