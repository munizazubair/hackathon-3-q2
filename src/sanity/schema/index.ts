import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products"
import { categorySchema } from "./categories";

export const schema: SchemaTypeDefinition[] = [productSchema, categorySchema];
