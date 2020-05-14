import {Query} from 'history';

export function generateTransactionSummaryRoute({orgSlug}: {orgSlug: String}): string {
  return `/organizations/${orgSlug}/performance/summary/`;
}

export function transactionSummaryRouteWithEventView({
  orgSlug,
  transaction,
  projectID,
  query,
}: {
  orgSlug: string;
  transaction: string;
  projectID: string | string[] | undefined;
  query: Query | undefined;
}) {
  const pathname = generateTransactionSummaryRoute({
    orgSlug,
  });

  return {
    pathname,
    query: {
      transaction,
      project: projectID,
      environment: query?.environment,
      statsPeriod: query?.statsPeriod,
      start: query?.start,
      end: query?.end,
    },
  };
}
