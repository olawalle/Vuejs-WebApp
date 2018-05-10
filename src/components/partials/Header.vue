<template>
    <header class="main-header">
        <!-- Logo -->
        <router-link to="/dashboard" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini">
                <b> <img src="static/img/logo.png" alt="User Image"></b>
            </span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><img src="static/img/logo.png" alt="User Image">
                <b>Notifications<br>manaeer</b> 
            </span> 
        </router-link>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"> 
                <span class="sr-only">Toggle navigation</span> 
                <span class="icon-bar"></span> 
                <span class="icon-bar"></span> 
                <span class="icon-bar"></span> 
            </a>
            <div class="pull-left-search">
                <form id="demo-2">
                    <input class="devin-search" type="search">
                </form>
            </div>
        </nav>
    </header>
</template>
<script>
  export default {
    name: 'DashboardHeader',
    mounted: function () {

    }
  }
</script>