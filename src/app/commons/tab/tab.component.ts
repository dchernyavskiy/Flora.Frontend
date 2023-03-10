import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabItemComponent} from "./tab-item/tab-item.component";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements AfterContentInit {
  @ContentChildren(TabItemComponent) tabs: QueryList<TabItemComponent> = new QueryList<TabItemComponent>();

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabItemComponent) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
  }
}
