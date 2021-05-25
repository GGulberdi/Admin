import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Visit Site',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Rating',
    to: '/ratings',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Comment',
    to: '/comment',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'User',
    to: '/users',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Category',
    route: '/category',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Category',
        to: '/category/add-category',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Category List',
        to: '/category/category-list',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Movie',
    route: '/movie',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Movie',
        to: '/movie/add-movie',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Movie List',
        to: '/movie/movie-list',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Show',
    route: '/show',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Show',
        to: '/show/add-show',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Show List',
        to: '/show/show-list',
      },
    ],
  },
  {_tag: 'CSidebarNavDropdown',
  name: 'Pages',
  route: '/pages',
  icon: 'cil-puzzle',
    _children: [
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Authentication',
      to: '/pages/authentication',
      icon: 'cil-puzzle',
        _children: [
       {
         _tag: 'CSidebarNavItem',
         name: 'Login',
         to: '/pages/authentication/login',
  },
   ],
    },
     ]
      }
  ]

export default _nav

































// import React from 'react'
// import CIcon from '@coreui/icons-react'

// const _nav =  [
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Visit Site',
//     to: '/visit-site',
//     icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Dashboard',
//     to: '/dashboard',
//     icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
//     badge: {
//       color: 'info',
//       text: 'NEW',
//     },
//   },
//   {
//   _tag: 'CSidebarNavDropdown',
//   name: 'Rating',
//   route: '/ratings',
//   icon: 'cil-puzzle',
//   },
  
//   {_tag: 'CSidebarNavDropdown',
//   name: 'Comment',
//   route: '/comment',
//   icon: 'cil-comment',
//   },
//   {_tag: 'CSidebarNavDropdown',
//   name: 'User',
//   route: '/user',
//   icon: 'cil-puzzle',
//   },
//   {_tag: 'CSidebarNavDropdown',
//   name: 'Category',
//   route: '/category',
//   icon: 'cil-puzzle',
//     _children: [
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Add Category',
//       to: '/category/add-category',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Category List',
//       to: '/category/category-list',
//     },
//   ]
//   },
//   {_tag: 'CSidebarNavDropdown',
//   name: 'Movie',
//   route: '/movie',
//   icon: 'cil-puzzle',
//     _children: [
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Add Movie',
//       to: '/movie/add-movie',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Movie List',
//       to: '/movie/movie-list',
//     },
//   ]
//   },
//   {_tag: 'CSidebarNavDropdown',
//   name: 'Show',
//   route: '/show',
//   icon: 'cil-puzzle',
//     _children: [
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Add Show',
//       to: '/show/add-show',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Show List',
//       to: '/show/show-list',
//     },
//   ]
//   },
//   {_tag: 'CSidebarNavDropdown',
//   name: 'Pages',
//   route: '/pages',
//   icon: 'cil-puzzle',
//     _children: [
//     {
//       _tag: 'CSidebarNavDropdown',
//       name: 'Authentication',
//       to: '/pages/authentication',
//       icon: 'cil-puzzle',
//         _children: [
//        {
//          _tag: 'CSidebarNavItem',
//          name: 'Login',
//          to: '/pages/authentication/login',
//   },
//    ],
//     },
//      ]
//       }
// ]

// export default _nav
