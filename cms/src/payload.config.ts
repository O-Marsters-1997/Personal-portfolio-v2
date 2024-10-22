import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { viteBundler } from "@payloadcms/bundler-vite";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Test from "./collections/Test";
import { getConnectionString } from "./db";
import Hello from "./collections/Hello";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Test, Hello],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: getConnectionString(),
    },
  }),
});
