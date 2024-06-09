import React from 'react';
import { graphql } from '@apollo/client/react/hoc';
import UPDATE_ONCE from '../graphql/updateOrg.graphql'; // Update with the actual path to your GraphQL file

const updatedColumns = [
    "vc_theme",
    "brand_name",
    "company_name",
    "nature_of_business",
    "image_url",
    "no_of_employee",
    "id",
    "created_at",
    "updated_at",
    "is_active",
];

const withInsertOrg = (Component) =>
    graphql(UPDATE_ONCE, {
        props: ({ mutate }) => ({
            insertUserOrganization: async (object) => {
                console.log('🚀 ~ insertUserOrganization: ~ object:', object)
                try {
                    const {
                        data: { insert_user_organization_one },
                    } = await mutate({
                        variables: { object, update_columns: updatedColumns },
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
