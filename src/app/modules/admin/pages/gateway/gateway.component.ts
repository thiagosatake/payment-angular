import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {

  uuid : String = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params.uuid;
  }

}
