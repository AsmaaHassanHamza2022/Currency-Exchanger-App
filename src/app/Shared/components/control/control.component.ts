import { Component, input } from '@angular/core';
import { PrimengModule } from '../../../primengModule/primeng.module';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss'
})
export class ControlComponent {
  label=input.required<string>();

}
