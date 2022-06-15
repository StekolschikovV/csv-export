import React from 'react';
import {Button} from "@strapi/design-system/Button";
import {Box} from '@strapi/design-system/Box';
import {Typography} from '@strapi/design-system/Typography';
import {Flex} from '@strapi/design-system/Flex';
import {Grid, GridItem} from '@strapi/design-system/Grid';
import {saveAs} from "file-saver";
import {fetchAll} from "../../utils/contentApis";
import {convertToCSV} from "../../utils/csvHelper";

const ExportModel = ({model}) => {
  const fetchModelData = () => fetchAll(model.uid)
  const download = (data) => {
    const current = new Date();
    const filename = `${model.apiID}-${current.getTime()}`
    downloadCsv(filename, data);
  }
  const downloadCsv = (filename, data) => {
    const file = new File([convertToCSV.convert(data.data)], `${filename}.csv`, {type: "text/csv;charset=utf-8"});
    saveAs(file);
  }
  const go = async () => {
    const data = await fetchModelData()
    download(data)
  }
  return (
    <Box paddingLeft={9} paddingRight={9}>
      <Box padding={4} margin={4} shadow="filterShadow" hasRadius background="neutral0">
        <Grid gap={4}>
          <GridItem col={8}>
            <Flex height={"34px"}>
              <Typography variant="epsilon">{model.schema.displayName}</Typography>
            </Flex>
          </GridItem>
          <GridItem col={4}>
            <Flex justifyContent="flex-end">
              <Button onClick={go}>Download</Button>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )

};

export default ExportModel;
