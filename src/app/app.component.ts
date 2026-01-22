import { CommonModule } from '@angular/common';
import { SuperTableComponent } from './../../project/superTable/super-table.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TABLE_MODES, TableMode } from './../../project/superTable/super-table.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SuperTableComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'supertable';
  modes = TABLE_MODES;
  mode: TableMode | null = null;
  
  selectMode(mode: TableMode): void {
    this.mode = null; 
    setTimeout(() => {
      this.mode = mode; 
    });
  }
}
