export default [
  {
    path: '/403',
    name: 'Forbidden',
    component: () => import('@/modules/error/views/Forbidden.vue'),
    meta: {
      title: '404 - Forbidden',
      hidden: true,
      permission: ['exception'],
    },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/modules/error/views/NotFoundView.vue'),
    meta: {
      title: '404 - Page not found',
      hidden: true,
      permission: ['exception'],
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    redirect: '404',
  },
]
