import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    selector: 'app-ip',
    template: `
                <p>This is ip component</p>
                <h4>{{ ip }}</h4>
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
}