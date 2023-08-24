export default [
  {
    path: '/403',
    name: 'forbidden',
    component: () => import('@/modules/error/views/Forbidden.vue'),
    meta: {
      title: '404 - Forbidden'
    },
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/modules/error/views/NotFoundView.vue'),
    meta: {
      title: '404 - Page not found'
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    redirect: '404',
  },
]
