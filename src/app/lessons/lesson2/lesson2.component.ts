import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  dialogList:dialog[];
  constructor() {
    this.dialogList = [];
      this.dialogList.push(new dialog("建恺: 你好 吗?","Jiàn kǎi: Nǐ hǎo ma?",false));
      this.dialogList.push(new dialog("李香凝:我 很好。你 呢?","Lǐ Xiāngníng: Wǒ hěn hǎo. Nǐ ne?",false));
      this.dialogList.push(new dialog("建恺: 我 也 很好。","Jiàn kǎi: Wǒ yě hěn hǎo.",false));
    
   }
 

  ngOnInit() {
  }



}

export class dialog{
  hanzi:string;
  pinyin:string;
  flag:boolean;
  constructor(hanzi:string,pinyin:string,flag:boolean){
    this.hanzi = hanzi;
    this.pinyin = pinyin;
    this.flag = flag;
  }
  value(){
    if(this.flag){
      return this.hanzi;
    }else{
      return this.pinyin;
    }
  }
}
