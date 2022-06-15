module.exports = [
  {
    method: 'POST',
    path: '/import',
    handler: 'CSVExportController.importContent',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/delete-all',
    handler: 'CSVExportController.deleteAllContent',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/fetch-content',
    handler: 'CSVExportController.getContentByType',
    config: {
      policies: [],
    }
  }
];
