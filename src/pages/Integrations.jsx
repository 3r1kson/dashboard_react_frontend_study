import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Integrations = () => {
  return (
    <div className='m-2 md:md-10 p-2 md:p-10 bg-white rounded-3x1'>
    <Header category="Page" title="Integrations"/>
    <GridComponent
    dataSource={customersData}
    allowPaging
    allowSorting
    toolbar={['Delete']}
    editSettings={{allowDeleting: true, allowEditing: true}}
    >
      <ColumnsDirective>
      {customersGrid.map((item, index) => (<ColumnDirective key={index} {...item} />))}
      </ColumnsDirective>
      <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]}/>
    </GridComponent>
  </div>
  )
}

export default Integrations