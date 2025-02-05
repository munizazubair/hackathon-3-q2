import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products"
import { categorySchema } from "./categories";
import faqSubmit from "./faq-submit";
import order from "./order";

export const schema: SchemaTypeDefinition[] = [productSchema , categorySchema , faqSubmit , order ];
