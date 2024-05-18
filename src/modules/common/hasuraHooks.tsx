import { useEffect, useState } from 'react';
import { gql, useQuery, DocumentNode } from '@apollo/client';

export const useHasuraSubscriptionWithCache = (queryDocument: DocumentNode, options?: any) => {
  const queryString = queryDocument.loc!.source.body;
  const subscriptionDocument = gql(queryString.replace('query', 'subscription'));

  const queryDocumentResult = useQuery(queryDocument, {
    variables: options?.variables
  });

  useEffect(() => {
    if (queryDocumentResult?.subscribeToMore) {
      const unsubscribe = queryDocumentResult.subscribeToMore({
        document: subscriptionDocument,
        updateQuery: (_, curr) => {
          return curr.subscriptionData.data;
        },
        variables: options?.variables
      });
      return () => unsubscribe();
    }
  }, [options?.variables, queryDocumentResult, subscriptionDocument]);

  return queryDocumentResult;
};

export const useHasuraSubscriptionWithFilter = (queryDocumentResult: any = {}, props: any = {}) => {
  const { data } = queryDocumentResult;

  // following code allow working with subscription and filters simultaneously
  // this code is needed because line 23 resets the data to initial values
  const { queryName, onPaginationChange } = props;
  const [items, setItems] = useState<any>([]);
  const [concat, setConcat] = useState(false);

  useEffect(() => {
    if (data && data[queryName]) {
      if (concat) {
        setItems([...items, ...data[queryName]]);
        setConcat(false);
      } else setItems(data[queryName]);
    }
  }, [data && data[queryName]]);

  const loadItemsData = (offset: number, concatResult = false) => {
    setConcat(concatResult);
    if (onPaginationChange) onPaginationChange({ offset });
    else console.warn('onPaginationChange is not defined');
  };

  return { items, loadItemsData, ...queryDocumentResult };
};
