import React from 'react';
import { Grid, GridItem } from '@strapi/design-system/Grid';
import ExportPage from '../ExportPage';

const App = () => {
  return (
    <div>
      <Grid>
        <GridItem col={12} padding={1}>
          <ExportPage/>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
