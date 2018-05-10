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
                                            <span class="title">Groups</span>
                                        </div>
                    <div class="container-chat clearfix col-md-12">
                        <div class="col-md-6 groupcard">
                        <div class="box">
                            <!-- /.box-header -->
                            <div class="">
                                <div class="events-nest ">
                                    <div class="wrap-no-pad">
                                        <div class="row">
                                            <h3 class="Groupname">Group name</h3>
                                            <div class="col-xs-6 group bor-right">
                                                <div class="">
                                                    <img src="http://ak8.picdn.net/shutterstock/videos/5840558/thumb/2.jpg" width="100%">
                                                </div>
                                            </div>
                                            <div class="col-xs-6 ">
                                                <div class="description">
                                                   <h4>Short description of the group and its activites </h4> 
                                                   <br> 
                                                   <img src="http://api.randomuser.me/portraits/men/76.jpg" class="img-circle" width="30px" alt=""><img src="http://api.randomuser.me/portraits/men/16.jpg" class="img-circle next" width="30px" alt=""><img src="http://api.randomuser.me/portraits/women/76.jpg" class="img-circle next" width="30px" alt=""> members(2000)                                                       
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="col-md-6 groupcard">
                    <div class="">
                        <div class="box">
                            <!-- /.box-header -->
                            <div class="">
                                <div class="events-nest ">
                                    <div class="wrap-no-pad">
                                        <div class="row">
                                            <h3 class="Groupname">Group name</h3>
                                            <div class="col-xs-6 group bor-right">
                                                <div class="">
                                                    <img src="http://ak8.picdn.net/shutterstock/videos/5840558/thumb/2.jpg" width="100%">
                                                </div>
                                            </div>
                                            <div class="col-xs-6 ">
                                                <div class="description">
                                                   <h4>Short description of the group and its activites </h4> 
                                                   <br> 
                                                   <img src="http://api.randomuser.me/portraits/men/76.jpg" class="img-circle" width="30px" alt=""><img src="http://api.randomuser.me/portraits/men/16.jpg" class="img-circle next" width="30px" alt=""><img src="http://api.randomuser.me/portraits/women/76.jpg" class="img-circle next" width="30px" alt=""> members(2000)                                                       
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 groupcard">
                    <div class="">
                        <div class="box">
                            <!-- /.box-header -->
                            <div class="">
                                <div class="events-nest ">
                                    <div class="wrap-no-pad">
                                        <div class="row">
                                            <h3 class="Groupname">Group name</h3>
                                            <div class="col-xs-6 group bor-right">
                                                <div class="">
                                                    <img src="http://ak8.picdn.net/shutterstock/videos/5840558/thumb/2.jpg" width="100%">
                                                </div>
                                            </div>
                                            <div class="col-xs-6 ">
                                                <div class="description">
                                                   <h4>Short description of the group and its activites </h4> 
                                                   <br> 
                                                   <img src="http://api.randomuser.me/portraits/men/76.jpg" class="img-circle" width="30px" alt=""><img src="http://api.randomuser.me/portraits/men/16.jpg" class="img-circle next" width="30px" alt=""><img src="http://api.randomuser.me/portraits/women/76.jpg" class="img-circle next" width="30px" alt=""> members(2000)                                                       
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 groupcard">
                    <div class="">
                        <div class="box">
                            <!-- /.box-header -->
                            <div class="">
                                <div class="events-nest ">
                                    <div class="wrap-no-pad">
                                        <div class="row">
                                            <h3 class="Groupname">Group name</h3>
                                            <div class="col-xs-6 group bor-right">
                                                <div class="">
                                                    <img src="http://ak8.picdn.net/shutterstock/videos/5840558/thumb/2.jpg" width="100%">
                                                </div>
                                            </div>
                                            <div class="col-xs-6 ">
                                                <div class="description">
                                                   <h4>Short description of the group and its activites </h4> 
                                                   <br> 
                                                   <img src="http://api.randomuser.me/portraits/men/76.jpg" class="img-circle" width="30px" alt=""><img src="http://api.randomuser.me/portraits/men/16.jpg" class="img-circle next" width="30px" alt=""><img src="http://api.randomuser.me/portraits/women/76.jpg" class="img-circle next" width="30px" alt=""> members(2000)                                                       
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>  
                <div class="add pull-right">
                    <a href="#" :plain="true" @click="dialogTableVisible = true">
                        <div style="display:table-cell;
                                vertical-align:middle;
                                width:50px;
                                height:50px; 
                                box-shadow:3px 3px 3px #959595;
                                background-color: #2a3bd3;
                                border-radius: 50%">
                            <div style="text-align:center; color:#fff; font-size:25px">+</div>
                        </div>
                    </a>
                </div>
               <el-dialog title="Add Group" :visible.sync="dialogTableVisible">
              <form action="" class="contact">
                <fieldset class="contact-inner">
                  <p class="contact-input">
                    <input type="text" name="name" placeholder="Group Name" autofocus>
                  </p>
                  <p class="contact-input">
                    <input type="text" name="name" placeholder="Group Description" autofocus>
                  </p>
                  <p class="contact-input">
                    <label for="select" class="select">
                      <select name="subject" id="select">
                        <option value="" selected>Add members</option>
                        <option value="1">Lanre Oyedotun</option>
                        <option value="1">Olawale Ariyo</option>
                        <option value="1">sammie Sam</option>
                        <option value="1">Brad Aalabi</option>
                      </select>
                    </label>
                  </p>
                  <p class="contact-submit">
                    <input type="submit" value="Create Group">
                  </p>
                </fieldset>
              </form>
          </el-dialog> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
            <!-- /.content -->
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'contacts',
    data () {
      return {
        dialogTableVisible: false
      }
    }
  }
</script>
<style>
    .padding-fifthin{
            padding: 15px!important;
    }
    .box:hover {
        box-shadow: 5px 5px 5px #d1d1d1
    }
    .title h1{
        color: #000;
    }
    .Groupname{
        color: #000;
        margin-left: 25px
    }
    .groupcard{
        margin-top: 22px
    }
    .description h4 {
    text-align:left;
    font-size:14px
    }
    .box{
        padding-bottom: 20px
    }
    .next{
        margin-left: -8px
    }
</style>