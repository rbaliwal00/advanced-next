export default {
  PAGINATION_LIMIT: 12,

  EMPTY_OPTION: {
    label: 'None',
    value: ''
  },
  appInfo: {
    appName: "horecah",
    apiDomain: process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT || '',
    apiBasePath: process.env.NEXT_PUBLIC_API_BASE_PATH || '',
  },

  API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
  HASURA_ADMIN_SECRET: process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || '',
  SERVER_API_ENDPOINT: process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT || ''



  // CLOUDINARY_CLOUDNAME: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
  // CLOUDINARY_PRESET: process.env.REACT_APP_CLOUDINARY_PRESET
};
