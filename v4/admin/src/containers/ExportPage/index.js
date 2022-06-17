import React, { memo, useEffect, useState } from 'react';
import { BaseHeaderLayout } from '@strapi/design-system/Layout';
import { Stack } from '@strapi/design-system/Stack';
import { Box } from '@strapi/design-system/Box';
import { Alert } from '@strapi/design-system/Alert';
import { Typography } from '@strapi/design-system/Typography';
import { getModels } from '../../utils/contentApis';
import ExportModel from "./ExportModel";

const ExportPage = () => {
  const [models, setModels] = useState([]);
  const [rightsError, setRightsError] = useState(false);
  useEffect(() => {
    async function loadContentTypes() {
      const models = await getModels();
      if (models) {
        setModels(models);
      } else if (models === false) {
        setRightsError(true)
      }
    }

    loadContentTypes();
  }, []);

  const isContentTypes = !rightsError && models.length > 0
  const isNoTables = !rightsError && models.length === 0

  return (
    <div>
      <BaseHeaderLayout title="Export Content" subtitle="Export content into CSV format" as="h2" />
      <Stack size={4} padding={2}>
        {
          isNoTables && <Box paddingLeft={9} paddingRight={9}>
            <Alert closeLabel={""} title="" variant="default" onClose={() => { }}>You don't have tables or data!</Alert>
          </Box>
        }
        {
          rightsError && <Box paddingLeft={9} paddingRight={9}>
            <Alert closeLabel={""} title="" variant="danger" onClose={() => { }}>Your rights are not enough, contact a user with super admin rights.</Alert>
          </Box>
        }
        {
          isContentTypes && <Box key="title" paddingLeft={9} paddingRight={9}>
            <Typography variant="beta">Content Types</Typography>
          </Box>
        }
        {
          !rightsError && models.map((model) => (<ExportModel key={model.uid} model={model} />))
        }

      </Stack>
    </div>
  );
};

export default memo(ExportPage);
