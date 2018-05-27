<template>
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <div>
            <section class="sidebar">
                <div class="user-panel">
                    <div class="image"> <img src="static/img/headshot.jpg" class="img-circle" alt="User Image"> </div>
                    <div class="info">
                        <p>Hello Lanre</p>
                    </div> <img class="bg-user" src="static/img/images.jpg" alt="User Image">
                </div>
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">
                    <!-- <li class="header">MENU</li> -->
                    <li class="">
                        <router-link to="/">
                            <avatar username="Dashaboard One" :size='20' color="#fff"></avatar>
                            <i class="fa fa-home"></i> Home
                        </router-link>
                    </li>
                    <li class="">    
                        <router-link to="/Notifications">
                            <avatar username="Dashaboard One" :size='20' color="#fff"></avatar>
                            <i class="fa fa-bell"></i>Notifications
                        </router-link>
                    </li>   
                    <li class=""> 
                        <router-link to="/contacts">
                            <avatar username="Dashaboard One" :size='20' color="#fff"></avatar>
                            <i class="fa fa-user" ></i>Contacts
                        </router-link>
                    </li>
                    <li class="">
                        <router-link to="/Groups">
                            <avatar username="Dashaboard One" :size='20' color="#fff"></avatar>
                            <i class="fa fa-users"></i>Groups
                        </router-link>
                    </li>   
                    <li class=""> 
                        <router-link to="/Settings">
                            <avatar username="Dashaboard One" :size='20' color="#fff"></avatar>
                            <i class="fa fa-cog"></i>Settings
                        </router-link>
                    </li>
                </ul>
            </section>
            <!-- /.sidebar -->
        </div>
    </aside>
</template>
<script>
import Avatar from 'vue-avatar'
export default {
  name: 'DashboardSidebar',
  mounted: function () {
    $(document).ready(function ($) {
      $('.main-sidebar > div').slimScroll({
        width: '230px',
        position: 'left',
        size: '5px',
        height: '95vh'
      })
    })
  },
  components: {
    Avatar
  }
}
</script>