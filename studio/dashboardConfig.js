export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ec6eb8d9cce67ac4d1f32e4',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-bs9m61ut',
                  apiId: 'f848f29c-9131-482f-8400-551e1458c6e1'
                },
                {
                  buildHookId: '5ec6eb8e57f7e8a55dd64ee0',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-arhboova',
                  apiId: 'cc5ce7d2-9ac3-46e0-9861-df013a86cffa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/t0t/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-arhboova.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
