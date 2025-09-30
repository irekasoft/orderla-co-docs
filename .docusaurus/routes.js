import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/orderla-co-docs/blog',
    component: ComponentCreator('/orderla-co-docs/blog', 'a61'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/archive',
    component: ComponentCreator('/orderla-co-docs/blog/archive', 'f37'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/authors',
    component: ComponentCreator('/orderla-co-docs/blog/authors', '154'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/orderla-co-docs/blog/authors/all-sebastien-lorber-articles', 'e64'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/authors/yangshun',
    component: ComponentCreator('/orderla-co-docs/blog/authors/yangshun', '881'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/first-blog-post',
    component: ComponentCreator('/orderla-co-docs/blog/first-blog-post', '9d8'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/long-blog-post',
    component: ComponentCreator('/orderla-co-docs/blog/long-blog-post', 'c63'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/mdx-blog-post',
    component: ComponentCreator('/orderla-co-docs/blog/mdx-blog-post', 'd50'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/tags',
    component: ComponentCreator('/orderla-co-docs/blog/tags', '193'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/tags/docusaurus',
    component: ComponentCreator('/orderla-co-docs/blog/tags/docusaurus', '459'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/tags/facebook',
    component: ComponentCreator('/orderla-co-docs/blog/tags/facebook', 'c07'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/tags/hello',
    component: ComponentCreator('/orderla-co-docs/blog/tags/hello', 'f9a'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/tags/hola',
    component: ComponentCreator('/orderla-co-docs/blog/tags/hola', 'e3d'),
    exact: true
  },
  {
    path: '/orderla-co-docs/blog/welcome',
    component: ComponentCreator('/orderla-co-docs/blog/welcome', 'd59'),
    exact: true
  },
  {
    path: '/orderla-co-docs/markdown-page',
    component: ComponentCreator('/orderla-co-docs/markdown-page', '355'),
    exact: true
  },
  {
    path: '/orderla-co-docs/docs',
    component: ComponentCreator('/orderla-co-docs/docs', '9f2'),
    routes: [
      {
        path: '/orderla-co-docs/docs',
        component: ComponentCreator('/orderla-co-docs/docs', 'cf1'),
        routes: [
          {
            path: '/orderla-co-docs/docs',
            component: ComponentCreator('/orderla-co-docs/docs', '94f'),
            routes: [
              {
                path: '/orderla-co-docs/docs/category/tutorial---basics',
                component: ComponentCreator('/orderla-co-docs/docs/category/tutorial---basics', '7d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/orderla-co-docs/docs/category/tutorial---extras',
                component: ComponentCreator('/orderla-co-docs/docs/category/tutorial---extras', 'e3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/orderla-co-docs/docs/intro',
                component: ComponentCreator('/orderla-co-docs/docs/intro', '723'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/orderla-co-docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/orderla-co-docs/docs/tutorial-basics/congratulations', 'ac9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/orderla-co-docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/orderla-co-docs/docs/tutorial-basics/create-a-blog-post', '97f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/orderla-co-docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/orderla-co-docs/docs/tutorial-basics/create-a-document', '516'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/orderla-co-docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/orderla-co-docs/docs/tutorial-basics/create-a-page', '027'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/orderla-co-docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/orderla-co-docs/docs/tutorial-basics/deploy-your-site', 'f7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/orderla-co-docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/orderla-co-docs/docs/tutorial-basics/markdown-features', '27f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/orderla-co-docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/orderla-co-docs/docs/tutorial-extras/manage-docs-versions', '3b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/orderla-co-docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/orderla-co-docs/docs/tutorial-extras/translate-your-site', '24f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/orderla-co-docs/',
    component: ComponentCreator('/orderla-co-docs/', 'f53'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
