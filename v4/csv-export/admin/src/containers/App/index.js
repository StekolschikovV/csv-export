import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { Grid, GridItem } from '@strapi/design-system/Grid';
import ExportPage from '../ExportPage';

const App = () => {
  return (
    <div>
      <Grid>
        <GridItem col={12} padding={1}>
          <Switch>
            <ExportPage/>
          </Switch>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
