import Dashboard from '../components/Dashboard.vue'

// import contacts from '../components/modules/contacts.vue'
import FullContacts from '../components/modules/FullContacts.vue'
import Notifications from '../components/modules/Notifications-components/Notifications.vue'
import Settings from '../components/modules/Notifications-components/Settings.vue'
import Groups from '../components/modules/Notifications-components/Groups.vue'
import Groups2 from '../components/modules/Groups.vue'
import Home from '../components/modules/Home.vue'

// Routes
const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      document.body.className += 'skin-dark sidebar-mini'
      next()
    },
    activate: function () {
      this.$nextTick(function () {
        // => 'DOM loaded and ready'
        alert('test')
      })
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      }, {
        path: '/contacts',
        name: 'fullContacts',
        component: FullContacts
      }, {
        path: '/Notifications',
        name: 'Notifications',
        component: Notifications
      }, {
        path: '/Settings',
        name: 'Settings',
        component: Settings
      }, {
        path: '/Groups',
        name: 'Groups',
        component: Groups
      }, {
        path: '/Groups2',
        name: 'Groups2',
        component: Groups2
      }, {
        path: '/Groups2',
        name: 'Groups2',
        component: Groups2
      }]
  }
]

export default routes
