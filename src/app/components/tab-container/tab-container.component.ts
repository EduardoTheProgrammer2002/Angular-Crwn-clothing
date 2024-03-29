import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  constructor() { }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active === true);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach((tab) => {
      tab.active = false;
    });

    tab.active = true;

    return false;
  }
}
