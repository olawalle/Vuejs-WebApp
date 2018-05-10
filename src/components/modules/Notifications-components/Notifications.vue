<template>
    <transition name="el-zoom-in-top">
        <div class="content-wrapper dashboard-wrapper">
            <!-- Main content -->
            <section class="content">
                <!--end of New User-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="panel panel-default">
                                        <div class="panel-heading c-list">
                                            <span class="title">Notifications</span>
                                        </div>
                <div class="container-chat clearfix">
                    <div class="chat col-md-10 col-md-offset-1">
                        <div class="chat-history">
                            <ul>
                                <li class="notif">
                                    <div class="panel-group">
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h5 class="notif-title">
                                                <a href="#"><span class="message-data-time"><i class="fa fa-envelope"></i> New message from Ted at 10:10 AM, Today</span></a>
                                                </h5>
                                                 <img src="http://api.randomuser.me/portraits/men/76.jpg" class="img-circle" width="30px" alt=""><h4>Hi Vincent, how are you? How is the project coming along?</h4>
                                                <button class="btn-primary notif-btn">Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="notif">
                                    <div class="panel-group">
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h5 class="notif-title">
                                                <a href="#"><span class="message-data-time"><i class="fa fa-bell"></i> Reminder at 1:10 PM, Today</span></a>
                                                </h5>
                                                <h4>Project meeting with investors</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                 <li class="notif">
                                    <div class="panel-group">
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <h5 class="notif-title">
                                                <a href="#"><span class="message-data-time"><i class="fa fa-envelope"></i> New mail from sammiemail.com at 10:10 AM, Today</span></a>
                                                </h5>
                                                 <img src="http://api.randomuser.me/portraits/men/36.jpg" class="img-circle" width="30px" alt=""><h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos perferendis tempore alias sunt, exercitationem, praesentium quaerat neque beatae natus nam magni ea dolores repellendus totam soluta earum et reprehenderit.</h4>
                                                <button class="btn-primary notif-btn">Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>                               
                            </ul>
                        </div>
                    </div>
                    <!-- end chat -->
                </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <br>
                <br>
                <br>
            </section>
            <!-- /.content -->
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'Chat'
  }
</script>
<style>
.content-wrapper{
    padding-top: 50px;
    padding-bottom: 50px
}
.panel-title h5{
    font-size: 15px
}
.panel-body{
    margin-top: -25px;
    border-top:1px solid #959595
}
.notif{
    padding: 20px
}
.panel-group:hover{
    box-shadow: 3px 3px 3px #c2c2c2
}
.notif-btn{
    border: 0;
    padding: 8px;
    border-radius: 5px;
    padding-left: 12px;
    padding-right: 12px
}
</style>
