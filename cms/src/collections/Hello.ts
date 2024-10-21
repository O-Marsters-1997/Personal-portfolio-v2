import { CollectionConfig } from "payload/types";

const Hello: CollectionConfig = {
  slug: "hello",
  admin: {
    useAsTitle: "testField",
  },
  fields: [
    {
      name: "myField",
      type: "text",
    },
    {
      name: "another",
      type: "text",
    },
    {
      name: "otherField",
      type: "checkbox",
    },
  ],
};

export default Hello;
