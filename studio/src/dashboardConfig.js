export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2be360a66f6eb2a692cedb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-test-studio-b1j8vj4m',
                  apiId: '2bcdaa8e-f2c0-4f35-9f9b-e3d651d3a454'
                },
                {
                  buildHookId: '5f2be3603688a590df2c2d30',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-test-web-nq5gyf7s',
                  apiId: '247bb87d-e77d-4aec-b194-6a618041a140'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timryandev/sanity-gatsby-blog-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-test-web-nq5gyf7s.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
