import React from 'react';
import { graphql } from '@apollo/client/react/hoc';
import UPDATE_ONCE from '../graphql/updateOrg.graphql'; // Update with the actual path to your GraphQL file

const updatedColumns = ['vc_theme', 'is_active'];

const withInsertOrg = (Component) =>
    graphql(UPDATE_ONCE, {
        props: ({ mutate }) => ({
            insertUserOrganization: async (object) => {
                try {
                    const {
                        data: { insert_user_organization_one },
                    } = await mutate({
                        variables: { object, update_columns: updatedColumns },
                        optimisticResponse: {
                            __typename: 'Mutation',
                            insert_user_organization_one: {
                                id: null,
                                __typename: 'UserOrganization',
                            },
                        },
                    });
                    console.log('🚀 ~ insertUserOrganization: ~ data:', insert_user_organization_one);
                    return insert_user_organization_one;
                } catch (e) {
                    console.error(e);
                }
            },
        }),
    })(Component);

export default withInsertOrg;
