import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Books from '@/components/Books'
import Authors from '@/components/Authors'
import DeleteBook from '@/components/DeleteBook'
import DeleteAuthor from '@/components/DeleteAuthor'
import NewAuthorForm from '@/components/NewAuthorForm'
import NewBookForm from '@/components/NewBookForm'
import EditAuthorForm from '@/components/EditAuthorForm'
import EditBookForm from '@/components/EditBookForm'
import SingleBook from '@/components/SingleBook'
import SingleAuthor from '@/components/SingleAuthor'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
     name: 'Home',
     component: Home
   },
   {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path:'/books',
      name: 'Books',
      component: Books
    },
    {
      path:'/authors',
      name: 'Authors',
      component: Authors
    },
    {
      path:'/books/:id/delete',
      name: 'DeleteBook',
      component: DeleteBook
    },
    {
      path: '/authors/:id/delete',
      name: 'DeleteAuthor',
      component: DeleteAuthor
    },
    {
      path: '/authors/new',
      name: 'NewAuthorForm',
      component: NewAuthorForm
    },
    {
      path: '/books/new',
      name: 'NewBookForm',
      component: NewBookForm
    },
    {
      path: '/authors/:id/edit',
      name: 'EditAuthorForm',
      component: EditAuthorForm
    },
    {
      path: '/books/:id/edit',
      name: 'EditBookForm',
      component: EditBookForm
    },
    {
      path: '/books/:id',
      name: 'SingleBook',
      component: SingleBook
    },
    {
      path: '/authors/:id',
      name: 'SingleAuthor',
      component: SingleAuthor
    }
  ]
})
