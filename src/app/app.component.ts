import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isShow = false;
  member = { 'name': 'Angular', 'email': 'welcome@angular.io' };
  animals = ['Dog', 'Cat', 'Zebra', 'Horse', 'Cock'];
  animal = '';
  myObj = {test : true, 'test-class': true, 'your-class' : 0, 'my-class' : 1};
  myName = 'terry';
  
  boilable = 'red';
  editable = true;

  styleConf = {
    color : this.boilable ? 'green' : 'yellow',
    'font-weight' : this.editable ? 'bold' : 'normal'
  };

  curVal = 0;
  manualVal = 0;
  static LIMIT_CNT = 100;

  colorByValue() {
    if (this.curVal > 0) {
      return 'green';
    } else if (this.curVal < 0) {
      return 'red';
    } else {
      return 'grey';
    }
  }

  inc() {
    const tempVal = this.curVal + 1;
    if (this.checkLimitCnt(tempVal)) {
      this.curVal = tempVal;
    }
  }

  dec() {
    const tempVal = this.curVal - 1;
    if (this.checkLimitCnt(tempVal)) {
      this.curVal = tempVal;
    }
  }

  setValueForcibly() {
    if (this.checkLimitCnt(this.manualVal)) {
      this.curVal = this.manualVal;
      this.manualVal = 0;
    }
  }

  checkLimitCnt(val) {
    if (Math.abs(val) < AppComponent.LIMIT_CNT) {
      return true;
    }

    const target = val > 0 ? '증가' : '감소';
    alert('더이상 ${target}시킬 수 없습니다.');

    return false;
  }

}
