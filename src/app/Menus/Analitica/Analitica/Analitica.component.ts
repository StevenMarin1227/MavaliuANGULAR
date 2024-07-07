import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-analitica',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Analitica.component.html',
  styleUrl: './Analitica.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnaliticaComponent { }
