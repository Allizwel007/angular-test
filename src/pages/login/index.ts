import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import models from './models'

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./index.sass']
})
export class LoginComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
      ) { }

      ngOnInit() {
      }
}
