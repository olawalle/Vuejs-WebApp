<template>
    <transition name="el-zoom-in-top">
        <div class="content-wrapper dashboard-wrapper">
            <!-- Main content -->
            <section class="content">
                <!--end of New User-->
                <div class="row">
                    <div class="col-md-10 col-md-0ffset-1">
                        <div class="">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="panel panel-default">
                                        <div class="panel-heading c-list">
                                            <span class="title">Contacts</span>
                                            <ul class="pull-right c-controls">
                                                <li><a href="#" class="hide-search" data-command="toggle-search" data-toggle="tooltip" data-placement="top" title="Toggle Search"><i class="fa fa-ellipsis-v"></i></a></li>
                                            </ul>
                                        </div>
                                        
                                        <div class="row" style="display: none;">
                                            <div class="col-xs-12">
                                                <div class="input-group c-search">
                                                    <input type="text" class="form-control" id="contact-list-search">
                                                    <span class="input-group-btn">
                                                        <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search text-muted"></span></button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <ul class="list-group" id="contact-list">
                                            <li class="list-group-item">
                                                <div class="col-xs-12 col-sm-3 col-md-2">
                                                    <img src="http://api.randomuser.me/portraits/men/49.jpg" alt="Scott Stevens" class="img-circle" height="80px"  />
                                                </div>
                                                <div class=" col-xs-12 col-sm-9 single">
                                                    <div class="col-md-6 left">
                                                        <span class="name">Seth Frazier</span><br/>
                                                        <span class="text-muted"> <i class="fa fa-map-marker"  data-toggle="tooltip" title="7396 E North St"></i> 7396 E North St</span><br/>
                                                        <span class="text-muted"> <i class="glyphicon glyphicon-earphone" data-toggle="tooltip" title="(560) 180-4143"></i>  (560)180-4143 </span><br/>
                                                        <span class="text-muted"> <i class="fa fa-comments" data-toggle="tooltip" title="seth.frazier@example.com"></i>  seth.frazier@example.com</span><br/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <span class="name"></span><br/>
                                                        <span class="text-muted" data-toggle="tooltip" title="Lanre Oyedotun"><i class="fa fa-qrcode"></i> RBIB: LANRE OYEDOTUN </span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-facebook-messanger"></i> Has Messanger:</span> True</span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-telegram"></i>Has Messanger:</span> True</span><br>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="col-xs-12 col-sm-3 col-md-2">
                                                    <img src="http://api.randomuser.me/portraits/men/97.jpg" alt="Seth Frazier" class="img-circle" height="80px" />
                                                </div>
                                                <div class=" col-xs-12 col-sm-9 single">
                                                    <div class="col-md-6 left">
                                                        <span class="name">Seth Frazier</span><br/>
                                                        <span class="text-muted"> <i class="fa fa-map-marker"  data-toggle="tooltip" title="7396 E North St"></i> 7396 E North St</span><br/>
                                                        <span class="text-muted"> <i class="glyphicon glyphicon-earphone" data-toggle="tooltip" title="(560) 180-4143"></i>  (560)180-4143 </span><br/>
                                                        <span class="text-muted"> <i class="fa fa-comments" data-toggle="tooltip" title="seth.frazier@example.com"></i>  seth.frazier@example.com</span><br/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <span class="name"></span><br/>
                                                        <span class="text-muted" data-toggle="tooltip" title="Lanre Oyedotun"><i class="fa fa-qrcode"></i> RBIB: LANRE OYEDOTUN </span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-facebook-messanger"></i> Has Messanger:</span> True</span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-telegram"></i>Has Messanger:</span> True</span><br>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="col-xs-12 col-sm-3 col-md-2">
                                                    <img src="http://api.randomuser.me/portraits/women/90.jpg" alt="Jean Myers" class="img-circle" height="80px"  />
                                                </div>
                                                <div class=" col-xs-12 col-sm-9 single">
                                                    <div class="col-md-6 left">
                                                        <span class="name">Jane Frazier</span><br/>
                                                        <span class="text-muted"> <i class="fa fa-map-marker"  data-toggle="tooltip" title="7396 E North St"></i> 7396 E North St</span><br/>
                                                        <span class="text-muted"> <i class="glyphicon glyphicon-earphone" data-toggle="tooltip" title="(560) 180-4143"></i>  (560)180-4143 </span><br/>
                                                        <span class="text-muted"> <i class="fa fa-comments" data-toggle="tooltip" title="seth.frazier@example.com"></i>  seth.frazier@example.com</span><br/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <span class="name"></span><br/>
                                                        <span class="text-muted" data-toggle="tooltip" title="Lanre Oyedotun"><i class="fa fa-qrcode"></i> RBIB: LANRE OYEDOTUN </span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-facebook-messanger"></i> Has Messanger:</span> True</span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-telegram"></i>Has Messanger:</span> True</span><br>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="col-xs-12 col-sm-3 col-md-2">
                                                    <img src="http://api.randomuser.me/portraits/men/24.jpg" alt="Todd Shelton" class="img-circle" height="80px"  />
                                                </div>
                                                <div class=" col-xs-12 col-sm-9 single">
                                                    <div class="col-md-6 left">
                                                        <span class="name">Todd Sam</span><br/>
                                                        <span class="text-muted"> <i class="fa fa-map-marker"  data-toggle="tooltip" title="7396 E North St"></i> 7396 E North St</span><br/>
                                                        <span class="text-muted"> <i class="glyphicon glyphicon-earphone" data-toggle="tooltip" title="(560) 180-4143"></i>  (560)180-4143 </span><br/>
                                                        <span class="text-muted"> <i class="fa fa-comments" data-toggle="tooltip" title="seth.frazier@example.com"></i>  seth.frazier@example.com</span><br/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <span class="name"></span><br/>
                                                        <span class="text-muted" data-toggle="tooltip" title="Lanre Oyedotun"><i class="fa fa-qrcode"></i> RBIB: LANRE OYEDOTUN </span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-facebook-messanger"></i> Has Messanger:</span> True</span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-telegram"></i>Has Messanger:</span> True</span><br>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="col-xs-12 col-sm-3 col-md-2">
                                                    <img src="http://api.randomuser.me/portraits/women/34.jpg" alt="Rosemary Porter" class="img-circle" height="80px"  />
                                                </div>
                                                <div class=" col-xs-12 col-sm-9 single">
                                                    <div class="col-md-6 left">
                                                        <span class="name">Rosemary Simpson</span><br/>
                                                        <span class="text-muted"> <i class="fa fa-map-marker"  data-toggle="tooltip" title="7396 E North St"></i> 7396 E North St</span><br/>
                                                        <span class="text-muted"> <i class="glyphicon glyphicon-earphone" data-toggle="tooltip" title="(560) 180-4143"></i>  (560)180-4143 </span><br/>
                                                        <span class="text-muted"> <i class="fa fa-comments" data-toggle="tooltip" title="seth.frazier@example.com"></i>  seth.frazier@example.com</span><br/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <span class="name"></span><br/>
                                                        <span class="text-muted" data-toggle="tooltip" title="Lanre Oyedotun"><i class="fa fa-qrcode"></i> RBIB: LANRE OYEDOTUN </span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-facebook-messanger"></i> Has Messanger:</span> True</span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-telegram"></i>Has Messanger:</span> True</span><br>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="col-xs-12 col-sm-3 col-md-2">
                                                    <img src="http://api.randomuser.me/portraits/women/56.jpg" alt="Debbie Schmidt" class="img-circle" height="80px"  />
                                                </div>
                                                <div class=" col-xs-12 col-sm-9 single">
                                                    <div class="col-md-6 left">
                                                        <span class="name">Debbi Cole</span><br/>
                                                        <span class="text-muted"> <i class="fa fa-map-marker"  data-toggle="tooltip" title="7396 E North St"></i> 7396 E North St</span><br/>
                                                        <span class="text-muted"> <i class="glyphicon glyphicon-earphone" data-toggle="tooltip" title="(560) 180-4143"></i>  (560)180-4143 </span><br/>
                                                        <span class="text-muted"> <i class="fa fa-comments" data-toggle="tooltip" title="seth.frazier@example.com"></i>  seth.frazier@example.com</span><br/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <span class="name"></span><br/>
                                                        <span class="text-muted" data-toggle="tooltip" title="Lanre Oyedotun"><i class="fa fa-qrcode"></i> RBIB: LANRE OYEDOTUN </span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-facebook-messanger"></i> Has Messanger:</span> True</span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-telegram"></i>Has Messanger:</span> True</span><br>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="col-xs-12 col-sm-3 col-md-2">
                                                    <img src="http://api.randomuser.me/portraits/women/76.jpg" alt="Glenda Patterson" class="img-circle" height="80px"  />
                                                </div>
                                                <div class=" col-xs-12 col-sm-9 single">
                                                    <div class="col-md-6 left">
                                                        <span class="name">Suzzie Frazier</span><br/>
                                                        <span class="text-muted"> <i class="fa fa-map-marker"  data-toggle="tooltip" title="7396 E North St"></i> 7396 E North St</span><br/>
                                                        <span class="text-muted"> <i class="glyphicon glyphicon-earphone" data-toggle="tooltip" title="(560) 180-4143"></i>  (560)180-4143 </span><br/>
                                                        <span class="text-muted"> <i class="fa fa-comments" data-toggle="tooltip" title="seth.frazier@example.com"></i>  seth.frazier@example.com</span><br/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <span class="name"></span><br/>
                                                        <span class="text-muted" data-toggle="tooltip" title="Lanre Oyedotun"><i class="fa fa-qrcode"></i> RBIB: LANRE OYEDOTUN </span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-facebook-messanger"></i> Has Messanger:</span> True</span><br>
                                                        <span class="text-muted"><span class="bold"> <i class="fa fa-telegram"></i>Has Messanger:</span> True</span><br>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="col-md-6 col-md-offset-3">
                    <div class="add pull-right">
                        <span :plain="true" @click="dialogTableVisible = true" data-toggle="tooltip" data-placement="bottom" title="Add Contact"><i class="glyphicon glyphicon-plus"></i></span>
                    </div>   
                    <el-dialog title="Add contact" class="form-wrap" :visible.sync="dialogTableVisible" width="70%">
                        <form action="" >
                            <span><label for="Fullname">Fullname</label><input type="text"></span><br>
                            <span><label for="Number">Number</label><input type="number"></span><br>
                            <div class="radio">
                               <span class="col-xs-6">
                                   <label for="has Messanger">Has messanger</label><input type="radio" value="true">True <input type="radio" value="false">False <br>
                                </span>
                                <span class="col-xs-6">
                                    <label for="has Messanger">Has messanger</label><input type="radio" value="true">True <input type="radio" value="false">False <br>
                                </span>
                           </div>
                            <span><label for="Address">Address</label><input type="text"></span>

                        </form>
                    </el-dialog>
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
    data: function () {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false
      }
    }
  }
</script>
<style>
    .padding-fifthin{
            padding: 15px!important;
    }
.panel > .list-group .list-group-item:first-child {
    /*border-top: 1px solid rgb(204, 204, 204);*/
}
@media (max-width: 767px) {
    .visible-xl {
        display: inline-block !important;
    }
    .block {
        display: block !important;
        width: 100%;
        height: 1px !important;
    }
}
.add{
    position: fixed;
    bottom:30px;
    right: 30px;
    border-radius:1000px;
    box-shadow: 3px 3px 3px #bdbdbd
}
.form-wrap{
    height:auto;
    padding-bottom:20px
}
.add i{
    color:#fff;
    font-size: 25px;
    padding:20px;
    border-radius:1000px;
    background-color: #2a3bd3
}
input{
    width: 100%;
    height: 25px;
    margin-top: -15px;
    margin-bottom: 15px;
    padding-left: 45px;
    border: 0;
    border-bottom: 0.2px solid #a7a7a7
}
label{
    margin-top: 35px;
    color: #5759a1 ;
}
.radio label{
     margin-top: 0;
}
input:focus{
     outline:none;
     border-bottom: 1px solid #5759a1
}
.float-sideways{
    font-size: 10px;
    color: #868686;
    float: right;
}

.list-group li{
    border-bottom: 1px solid #eee
}
i{
    padding-right: 30px;
    padding-left: 20px
}
.single{
    border-bottom: 0.3px solid #c3c3c3;
    padding-bottom: 20px
}
#back-to-bootsnipp {
    position: fixed;
    top: 10px; right: 10px;
}


.c-search > .form-control {
   border-radius: 0px;
   border-width: 0px;
   border-bottom-width: 1px;
   font-size: 1.3em;
   padding: 12px 12px;
   height: 44px;
   outline: none !important;
}
.c-search > .form-control:focus {
    outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none;
}
.c-search > .input-group-btn .btn {
   border-radius: 0px;
   border-width: 0px;
   border-left-width: 1px;
   border-bottom-width: 1px;
   height: 44px;
}


.c-list {
    padding: 0px;
    min-height: 44px;
}
.title {
    display: inline-block;
    font-size: 1.7em;
    font-weight: bold;
    padding: 5px 15px;
}
ul.c-controls {
    list-style: none;
    margin: 0px;
    min-height: 44px;
}

ul.c-controls li {
    margin-top: 8px;
    float: left;
}

ul.c-controls li a {
    font-size: 1.7em;
    padding: 11px 10px 6px;   
}
ul.c-controls li a i {
    min-width: 24px;
    text-align: center;
}

ul.c-controls li a:hover {
    background-color: rgba(51, 51, 51, 0.2);
}

.c-toggle {
    font-size: 1.7em;
}

.name {
    font-size: 1.7em;
    font-weight: 700;
}

.c-info {
    padding: 5px 10px;
    font-size: 1.25em;
}
</style>