export default [
  {
    path: '/403',
    name: 'forbidden',
    component: () => import('@/modules/error/views/ForbiddenView.vue'),
    meta: {
      title: '404 - Forbidden',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('@/modules/error/views/NotFoundView.vue'),
    meta: {
      title: '404 - Page not found',
    },
  },
]
