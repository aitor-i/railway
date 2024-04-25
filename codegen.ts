
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      ["https://backboard.railway.app/graphql/v2"]: {
        headers: {
          Authorization: `Bearer ${process.env.RAILWAY_TOKEN}`,
        },
      },
    },
  ],
  documents: ["./src/services/graphql/**/*.graphql"],
  generates: {
    "./src/services/graphql/graphql-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
