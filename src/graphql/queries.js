/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShelfMonitor = /* GraphQL */ `
  query GetShelfMonitor($ProductType: ProductType!) {
    getShelfMonitor(ProductType: $ProductType) {
      s3Uri
      count
      ProductType
      Threshold
      createdAt
      updatedOn
    }
  }
`;
export const listShelfMonitors = /* GraphQL */ `
  query ListShelfMonitors(
    $ProductType: ProductType
    $filter: ModelshelfMonitorFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listShelfMonitors(
      ProductType: $ProductType
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        s3Uri
        count
        ProductType
        Threshold
        createdAt
        updatedOn
      }
      nextToken
    }
  }
`;
