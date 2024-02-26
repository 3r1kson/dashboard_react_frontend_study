import React from 'react';
import { GridComponent, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Tasks = () => {
  return (
    <div className='m-2 md:md-10 p-2 md:p-10 bg-white rounded-3x1'>
      <Header category="Page" title="Tasks"/>
      <GridComponent>
        <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnsDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  )
}

export default Tasks