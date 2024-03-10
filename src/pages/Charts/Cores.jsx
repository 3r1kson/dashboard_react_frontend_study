import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries} from '@syncfusion/ej2-react-charts';


import { Header } from '../../components';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Cores = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Colors" title="Color mapping" />
      <div className="w-full">
        <ChartComponent
          id='colors'
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[Tooltip, ColumnSeries, Category, Legend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective 
            dataSource={colorMappingData[0]}
            name='USA'
            xName='x'
            yName='y'
            type='Column'
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default Cores;