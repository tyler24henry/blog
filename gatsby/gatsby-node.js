import path from 'path';

async function turnBlogPostsIntoPages({ graphql, actions }) {
    const blogPostTemplate = path.resolve('./src/templates/BlogPost.js');
    const { data } = await graphql(`
        query {
            blogPosts: allSanityPost {
                nodes {
                    title
                    slug {
                        current
                    }
                }
            }
        }
    `);
    data.blogPosts.nodes.forEach(blogPost => {
        actions.createPage({
            path: `post/${blogPost.slug.current}`,
            component: blogPostTemplate,
            context: {
                slug: blogPost.slug.current,
            }
        })
    })
}

async function turnCategoriesIntoPages({ graphql, actions }) {
    const categoryTemplate = path.resolve('./src/templates/Category.js');
    const { data } = await graphql(`
        query {
            categories: allSanityCategory {
                nodes {
                    id
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    data.categories.nodes.forEach(category => {
        actions.createPage({
            path: `/category/${category.slug.current}`,
            component: categoryTemplate,
            context: {
                slug: category.slug.current,
            }
        })
    })
}

export async function createPages(params) {
    await Promise.all([
        turnBlogPostsIntoPages(params),
        turnCategoriesIntoPages(params),
    ]);
}