import { Component, input } from '@angular/core';
import { IStaticTableConfigs } from '../../utilities/models';

@Component({
  selector: 'app-quick-conversions',
  templateUrl: './quick-conversions.component.html',
  styleUrl: './quick-conversions.component.scss'
})
export class QuickConversionsComponent {

  configs=input.required<IStaticTableConfigs>();

}
