import { defineType } from "sanity";

export const categorySchema = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(50)
                .error('Title must be between 2 and 50 characters.'),
        },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
            validation: (Rule) => Rule.required()
                .error('Image is required for the category.'),
        },
        {
            title: 'Number of Products',
            name: 'products',
            type: 'number',
            validation: (Rule) => Rule.required().min(0)
                .error('Number of products must be 0 or more.'),
        }
        
    ],
});
