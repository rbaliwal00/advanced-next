import { FunctionComponent } from "react";
import update from "immutability-helper";
import set from "lodash/set";
import isEmpty from "lodash/isEmpty";
import omit from "lodash/omit";
import { makeVar, useReactiveVar } from "@apollo/client";

import { config } from "@modules/common";

export const tagsPath = (idx: number) => ["_and", idx, "tags", "value", "_eq"];

interface StateValue {
  where: any;
  pagination: PaginationBookInput;
  reset?: boolean;
}

interface PaginationBookInput {
  limit: number;
  // after: number;
}

const initialValue: StateValue = {
  where: {},
  pagination: {
    limit: config.PAGINATION_LIMIT,
    // after: 0,
  },
};

const stateVar = makeVar(initialValue);

export const withStateAndActionsForPosts = (Component: FunctionComponent) => {
  const WithComponent = (props: any) => {
    const state = useReactiveVar(stateVar);

    function updateState({ where, pagination, reset = false }: StateValue) {
      const newState = update(
        state,
        reset
          ? {
              where: { $set: {} },
              pagination: {
                $set: {
                  limit: config.PAGINATION_LIMIT,
                  // after: 0,
                },
              },
            }
          : {
              where: isEmpty(where)
                ? { $set: where }
                : {
                    $merge: omit(where, "_and"),
                    ...(where._and && {
                      _and: {
                        $set: where._and,
                      },
                    }),
                  },
              pagination: { $merge: pagination },
            },
      );

      stateVar(newState);
    }

    function onPaginationChange(pagination: PaginationBookInput) {
      updateState({ ...state, pagination });
    }

    function onStateReset() {
      updateState({ ...initialValue, reset: true });
    }

    function onNameChange(name: string) {
      const path = ["metadata", "name", "_ilike"];
      const where = set({}, path, `%${name}%`);
      updateState({
        ...state,
        where,
        pagination: { ...state.pagination /* after: 0 */ },
      });
    }

    function onTagChange(where: object) {
      updateState({
        where,
        pagination: { ...state.pagination /* after: 0 */ },
      });
    }

    return (
      <Component
        {...{
          // State
          ...state,

          // State Actions
          onPaginationChange,
          onStateReset,
          onNameChange,
          onTagChange,
        }}
        {...props}
      />
    );
  };
  return WithComponent;
};

export default {
  read() {
    return stateVar();
  },
};
