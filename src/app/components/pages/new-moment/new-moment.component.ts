import { Component, OnInit} from '@angular/core';
import { Moment } from '../../../Moments';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent implements OnInit {

  btnText = 'Compartilhar!';

  constructor() { }
  ngOnInit(): void { }

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }
}

/* FORM */

