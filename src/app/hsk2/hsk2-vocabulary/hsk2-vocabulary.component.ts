import { Component, OnInit } from '@angular/core';
import {hsk} from '../../models/hsk';
import {hsk2Service} from '../hsk2CommonServices/hsk2.service';

@Component({
  selector: 'app-hsk2-vocabulary',
  templateUrl: './hsk2-vocabulary.component.html',
  styleUrls: ['./hsk2-vocabulary.component.css']
})
export class Hsk2VocabularyComponent implements OnInit {
  hsk2:hsk[];
  hskLevel:string;
  constructor(private hsk2Service:hsk2Service) { }

  ngOnInit() {
    this.hskLevel = "HSK 2"
    this.hsk2Service.getHsks().subscribe(data=>{
      this.hsk2 = data;
    });
  }

}
