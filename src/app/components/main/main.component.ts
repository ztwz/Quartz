import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isCollapsed = false;
  triggerTemplate = null;
  itemName: String = '';

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private notification: NzNotificationService) { }

  ngOnInit() {
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  selectItemName(event) {
    this.itemName = event.hostElement.nativeElement.innerText;
  }

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }

}
