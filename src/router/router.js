export const router = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      isTabPage: true
    },
    component: resolve => {
      require(['@/page/tabbar/home.vue'], resolve)
    }
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      isTabPage: true
    },
    component: resolve => {
      require(['@/page/tabbar/search.vue'], resolve)
    }
  },
  {
    path: '/found',
    name: 'found',
    meta: {
      isTabPage: true
    },
    component: resolve => {
      require(['@/page/tabbar/found.vue'], resolve)
    }
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      isTabPage: true
    },
    component: resolve => {
      require(['@/page/tabbar/user.vue'], resolve)
    }
  },
  {
    path: '/user/setup',
    name: 'setup',
    component: resolve => {
      require(['@/page/user/user-set-up.vue'], resolve)
    }
  },
  {
    path: '/list',
    name: 'list',
    component: resolve => {
      require(['@/page/home/list.vue'], resolve)
    }
  }
]
