module.exports = [
  {
    method: 'POST',
    path: '/import',
    handler: 'CSVExportController.importContent',
    config: {
      policies: ['admin::isAuthenticatedAdmin']
    },
  },
  {
    method: 'POST',
    path: '/delete-all',
    handler: 'CSVExportController.deleteAllContent',
    config: {
      policies: ['admin::isAuthenticatedAdmin']
    },
  },
  {
    method: 'GET',
    path: '/fetch-content',
    handler: 'CSVExportController.getContentByType',
    config: {
      policies: ['admin::isAuthenticatedAdmin']
    }
  }
];
