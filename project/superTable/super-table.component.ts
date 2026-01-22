import {
  Component,
  Input,
  TemplateRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { SuperTableConfig } from './super-table.types';
import { SelectButton } from 'primeng/selectbutton';
import { FilterMetadata } from 'primeng/api';

interface CustomerData{
  
    id: number,
    name: string,
    country: string,
    countryCode: string,
    flagUrl: string,
    company: string,
    representative: string,
    avatarUrl: string,
    balance: number,
    status: string
  
}
@Component({
  selector: 'super-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule, SelectButton
  
  ],
  templateUrl: './super-table.component.html',
  styleUrls: ['./super-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SuperTableComponent<T extends Record<string, unknown>> {
 
  @Input({ required: true }) data: CustomerData[] = [];

  @Input({ required: true }) config!: SuperTableConfig<T>;

  selection!: CustomerData;
  sizes = [
            { name: 'Small', class: 'p-datatable-sm' },
            { name: 'Normal', class: '' },
            { name: 'Large',  class: 'p-datatable-lg' }
        ];
  selectedSize='';
  first = 0;
  rows=5;
  frozenValueData=this.data.filter((e,p)=>p==0);
  trackByIndex(index: number): number {
    return index;
  }
   rowClass(product: CustomerData) {
        return { '!bg-primary !text-primary-contrast': product?.balance < 5000 };
    }

    rowStyle(product: CustomerData) {
        if (product.balance <5000 ) {
            return { fontWeight: 'bold', fontStyle: 'italic' };
        }
        else{
          return {};
        }
    }
    //pagination programatic
     next() {
      if(this.config) {
        this.first = this.first + (this.config.rows ?? 0);
      }
    }

    prev() {
        this.first = this.first - (this.config?.rows ?? 0);
    }

    reset() {
        this.first = 0;
    }

    pageChange(event: {first:number, rows:number}) {
    
        this.first = event.first;
        this.rows = event.rows;
      
    }

    isLastPage(): boolean {
        return this.data ? this.first + this.rows >= this.data.length : true;
    }

    isFirstPage(): boolean {
        return this.data ? this.first === 0 : true;
    }
}
