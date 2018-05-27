<template>
  <div v-loading="loading">
    <app-header></app-header>

    <!-- Left side column. contains the sidebar -->
    <app-sidebar></app-sidebar>

    <!-- Content Wrapper. Contains page content -->
    <router-view></router-view>
    <!-- /.content-wrapper -->

    <app-footer></app-footer>
  </div>
</template>

<script>
  import Sidebar from './partials/Sidebar.vue'
  import Header from './partials/Header.vue'
  import Footer from './partials/Footer.vue'

  export default {
    name: 'Dashboard',
    components: {
      'app-sidebar': Sidebar,
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>
