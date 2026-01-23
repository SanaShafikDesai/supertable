
import { customers } from '../../src/data/data';

export interface CustomerData{ 
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
export interface SuperTableColumn<T> {
  field: keyof T & string;
  header: string;
  width?: string;
  sortable?: boolean;
  filter?: boolean;
  advfilter?:boolean;
  filterMatchMode?: 'contains' | 'startsWith' | 'equals' | 'in';
  
}

export interface TableMode {
  label: string;
  data: any[];
  config: SuperTableConfig<any>;
}

export interface SuperTableConfig<T> {
  columns: SuperTableColumn<T>[];
  dataKey?: keyof T & string;
  tableStyle?: Record<string, string>;
  size?: boolean;

  showGridlines?:boolean;
  conditionalStyle?:boolean;

  caption?: string;
  paginator?: boolean;
  rows?: number;
  rowsPerPageOptions?: number[];
  first?:boolean;
  
  globalFilter?: boolean;
  globalFilterFields?: (keyof T & string)[];

  selectionMode?: 'single' | 'multiple';

  scrollable?: boolean;
  scrollHeight?: string;

  virtualScroll?: boolean;
  virtualScrollItemSize?: number;

  frozen?:boolean;
  frozenColumns?: SuperTableColumn<T>[];
  frozenWidth?: string;

  resizableColumns?: boolean;
  columnResizeMode: 'fit' | 'expand';
  reorderableColumns?: boolean;
  editCell?: boolean;
  rowEdit?:boolean;
  stateKey?: string;
  loading?: boolean;
}
export const TABLE_MODES: TableMode[] = [

  //basic
  {
    label: 'Basic',
    data: customers,
    config: {
      caption: 'Basic Table',
      paginator: false,
      columnResizeMode:'fit',
      columns: [
        { field: 'name', header: 'Name'},
        { field: 'country', header: 'Country'},
        { field: 'company', header: 'Company' },
        { field: 'status', header: 'Status' }
      ]
    }
  },

//dynamic column
  {
    label: 'Dynamic Columns',
    data: customers,
    config: {
      caption: 'Dynamic Columns',
      columnResizeMode:'fit',
      columns: [
        { field: 'name', header: 'Customer' },
        { field: 'representative', header: 'Representative' },
        { field: 'balance', header: 'Balance' }
      ]
    }
  },

//sorting
  {
    label: 'Sorting',
    data: customers,
    config: {
      caption: 'Single / Multi Sort',
      columnResizeMode:'fit',
      columns: [
        { field: 'name', header: 'Name', sortable: true },
        { field: 'company', header: 'Company', sortable: true },
        { field: 'balance', header: 'Balance', sortable: true }
      ],
      
    }
  },
  //size
  {
    label: 'Size',
    data: customers,
    config: {
      caption: 'Size',
      columnResizeMode:'fit',
      size:true,
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'company', header: 'Company' },
        { field: 'balance', header: 'Balance' }
      ],
      
    }
  },
  //gridlines
  {
    label: 'Gridlines',
    data: customers,
    config: {
      caption: 'Gridlines',
      columnResizeMode:'fit',
      showGridlines:true,
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'company', header: 'Company' },
        { field: 'balance', header: 'Balance' }
      ],
      
    }
  },
  //conditional style
  {
    label: 'Conditional Style',
    data: customers,
    config: {
      caption: 'Conditional Style',
      columnResizeMode:'fit',
      conditionalStyle:true,
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'company', header: 'Company' },
        { field: 'balance', header: 'Balance' }
      ],
      
    }
  },
//filter-global
  {
    label: 'Filter – Global',
    data: customers,
    config: {
      caption: 'Global Filters',
      columnResizeMode:'fit',
      globalFilter:true,
      globalFilterFields: ['name', 'country', 'company', 'status'],
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'country', header: 'Country' },
        { field: 'company', header: 'Company' },
        { field: 'status', header: 'Status'}
      ]
    }
  },
//filter-basic
  {
    label: 'Filter – Basic',
    data: customers,
    config: {
      caption: 'Basic Filters',
      columnResizeMode:'fit',
      columns: [
        { field: 'name', header: 'Name',  filter: true },
        { field: 'country', header: 'Country' },
        { field: 'company', header: 'Company' },
        { field: 'status', header: 'Status'}
      ]
    }
  },
//filter advanced
{
    label: 'Filter – Advanced',
    data: customers,
    config: {
      caption: 'Advanced Filter',
      columnResizeMode:'fit',
      columns: [
        { field: 'name', header: 'Name',  advfilter: true },
        { field: 'country', header: 'Country' },
        { field: 'company', header: 'Company' },
        { field: 'status', header: 'Status'}
      ]
    }
  },
 //pagination-basic
  {
    label: 'Pagination – Basic',
    data: customers,
    config: {
      caption: 'Paginator',
      paginator: true,
      columnResizeMode:'fit',
      rows: 10,
      first:false,
      rowsPerPageOptions: [5, 10, 20],
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'country', header: 'Country' },
        { field: 'company', header: 'Company' }
      ]
    }
  },
   {
    label: 'Pagination – Programmatic',
    data: customers,
    config: {
      caption: 'Paginator Programatic',
      paginator: true,
      columnResizeMode:'fit',
      rows: 10,
      first:true,
      rowsPerPageOptions: [5, 10, 20],
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'country', header: 'Country' },
        { field: 'company', header: 'Company' }
      ]
    }
  },

 //single selection
  {
    label: 'Single Selection',
    data: customers,
    config: {
      caption: 'Selection Mode Single',
      columnResizeMode:'fit',
      selectionMode: 'single',
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'company', header: 'Company' },
        { field: 'status', header: 'Status' }
      ]
    }
  },
 //multiple selection
  {
    label: 'Multiple Selection',
    data: customers,
    config: {
      caption: 'Multiple Selection Checkbox',
      columnResizeMode:'fit',
      selectionMode: 'multiple',
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'company', header: 'Company' },
        { field: 'status', header: 'Status' }
      ]
    }
  },
 //scroll
  {
    label: 'Scroll',
    data: customers,
    config: {
      caption: 'Vertical Scroll',
      columnResizeMode:'fit',
      rows: 10,
      scrollable:true,
      scrollHeight:'200px',
      columns: [
        { field: 'name', header: 'Name', width: '200px' },
        { field: 'country', header: 'Country', width: '150px' },
        { field: 'company', header: 'Company', width: '200px' },
        { field: 'balance', header: 'Balance', width: '150px' }
      ]
    }
  },
  //frozen
// {
//     label: 'Frozen',
//     data: customers,
//     config: {
//       caption: 'Frozen',
//       columnResizeMode:'fit',
//       rows: 10,
//       scrollable:true,
//       scrollHeight:'200px',
//       frozen:true,
//       columns: [
//         { field: 'name', header: 'Name', width: '200px' },
//         { field: 'country', header: 'Country', width: '150px' },
//         { field: 'company', header: 'Company', width: '200px' },
//         { field: 'balance', header: 'Balance', width: '150px' }
//       ]
//     }
//   },

  //expand column
  
{
    label: 'Expand column',
    data: customers,
    config: {
      caption: 'Expand column',
      columnResizeMode:'expand',
      rows: 10,
      resizableColumns:true,
      columns: [
        { field: 'name', header: 'Name', width: '200px' },
        { field: 'country', header: 'Country', width: '150px' },
        { field: 'company', header: 'Company', width: '200px' },
        { field: 'balance', header: 'Balance', width: '150px' }
      ]
    }
  },
  //fit Column
  
{
    label: 'FIT column',
    data: customers,
    config: {
      caption: 'Fit column',
      columnResizeMode:'fit',
      rows: 10,
      resizableColumns:true,
      columns: [
        { field: 'name', header: 'Name', width: '200px' },
        { field: 'country', header: 'Country', width: '150px' },
        { field: 'company', header: 'Company', width: '200px' },
        { field: 'balance', header: 'Balance', width: '150px' }
      ]
    }
  },
  //reorder
  {
    label: 'reorder',
    data: customers,
    config: {
      caption: 'Reorder column',
      columnResizeMode:'fit',
      rows: 10,
      resizableColumns:true,
      reorderableColumns:true,
      columns: [
        { field: 'name', header: 'Name', width: '200px' },
        { field: 'country', header: 'Country', width: '150px' },
        { field: 'company', header: 'Company', width: '200px' },
        { field: 'balance', header: 'Balance', width: '150px' }
      ]
    }
  },
   //edit row
  // {
  //   label: 'edit row',
  //   data: customers,
  //   config: {
  //     caption: 'Edit Row',
  //     columnResizeMode:'fit',
  //     rows: 10,
  //     rowEdit:true,
  //     columns: [
  //       { field: 'name', header: 'Name', width: '200px' },
  //       { field: 'country', header: 'Country', width: '150px' },
  //       { field: 'company', header: 'Company', width: '200px' },
  //       { field: 'balance', header: 'Balance', width: '150px' }
  //     ]
  //   }
  // }

];
