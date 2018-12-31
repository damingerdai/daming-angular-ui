import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LayoutService } from '../../../core/layout/layout.service';



@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  isMobile = false;
  isLinear: boolean;

  surveyForm: FormGroup;

  constructor(
    private layoutService: LayoutService,
 ) {
    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        gender: new FormControl('1', Validators.required),
        name: new FormControl('', Validators.required),
        birthday: new FormControl('', Validators.required),
        education: new FormControl('', Validators.required)
      }),
      detailedQuestions: new FormGroup({
        chexbox: new FormControl(),
        appearance: new FormControl('1'),
        love: new FormControl(true, Validators.required)
      }),
    });

    this.layoutService.screenSize$.subscribe(result => {
      this.isMobile = result === 'xsamll' || result === 'samll';
    });
  }

  ngOnInit() {
  }

}
