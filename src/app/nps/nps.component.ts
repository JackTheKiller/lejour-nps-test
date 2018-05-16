import { Component, OnInit } from '@angular/core';
import { NpsService } from '../services/nps.service';
import * as rainbow from '../utils/rainbow';

@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss']
})
export class NpsComponent implements OnInit {

  options = [];
  selected = -1;

  userFeedback = {
    id: null,
    score: null,
    comment: ''
  };

  constructor(
    private npsService: NpsService
  ) {

    const badHalf = rainbow.generateColor('#f5d3cf', '#bb7871', 5);
    const neutral = ['#f5f8c0'];
    const goodHalf = rainbow.generateColor('#27897e', '#d8f5f1', 5);

    const colors = [].concat(badHalf, neutral, goodHalf);

    colors.forEach((color, i) => {
      let label = '';

      if (i === 0) {
        label = 'Não recomendaria';
      } else if (i === colors.length - 1) {
        label = 'Recomendaria com certeza!';
      }

      this.options.push({ label, color });
    });
  }

  ngOnInit() {
    if (!localStorage.getItem('gaveFeedback')) {
      setTimeout(
        () => document.getElementById('nps').classList.remove('hidden'),
        2000
      );
    }
  }

  select(value) {
    if (this.userFeedback.score === null) {
      this.selected = value;
    }
  }

  pulse(element) {
    element.classList.add('pulse');
  }

  submitScore(value) {
    this.userFeedback.score = value;

    setTimeout(
      () => document.getElementById('nps').classList.add('hidden'),
      1000
    );

    this.npsService.saveScore(value).subscribe(
      (data: any) => {
        this.userFeedback.id = data.data.id;
        document.getElementById('modalComment').classList.remove('hidden');
        document.getElementById('overlay').classList.remove('hidden');
        localStorage.setItem('gaveFeedback', '1');
      },
      error => console.log('error saving score')
    );
  }

  submitComment() {
    this.npsService.saveComment(this.userFeedback.id, this.userFeedback.comment).subscribe(
      data => {
        document.getElementById('modalThanks').classList.remove('hidden');
      },
      error => console.log('error saving score')
    );
  }

  close(element, hideOverlay = false) {
    element.classList.add('hidden');
    if (hideOverlay) {
      document.getElementById('overlay').classList.add('hidden');
    }
  }

}
