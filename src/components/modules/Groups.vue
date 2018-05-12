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
                                            <span class="title">Groups</span><button v-on:click="showForm" class="btn-primary pull-right my-btn"><i class="fa fa-pencil"></i><span>Edit</span></button>
                                        </div>
                                        <div class="container-chat clearfix col-md-12">
                                            <ul>
                                              <li v-for="list in lists">
                                                <div class="col-md-6 groupcard">
                                                    <div class="box" v-show="!isEditing">
                                                        <div class="">
                                                            <div class="events-nest ">
                                                                <div class="wrap-no-pad">
                                                                    <div class="row">
                                                                        <h3 class="Groupname">{{list.name}}</h3>
                                                                        <div class="col-xs-4 group bor-right">
                                                                            <div class="">
                                                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPskxJxp3TYi2jvTpMLr3_HT2i_Dh6xlo0hxfhPUCtGZzneqkbA" width="90%">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-xs-8 ">
                                                                            <div class="description">
                                                                            <h4>{{list.description}}</h4> 
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
                                                    <div class="wrap" v-show="isEditing">
                                                        <div class='form edit'>
                                                            <div class="col-md-12">
                                                                <label>Name</label>
                                                                <input type='text' v-model="list.name" ><br>
                                                                <label>Number</label>
                                                                <input type='text' v-model="list.description" ><br>
                                                            </div>
                                                            <div class='send'>
                                                                <button class="btn-success float-right" v-on:click="hideForm">
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>  
                                        <div class="add pull-right">
                                            <a href="#" data-toggle="modal" data-target="#myModal2">
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
                                    <modal></modal>
                                    <!-- MODAL --> 
                                        <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content"> <a href="#"><h2 class="pull-right closebtn text-danger" data-dismiss="modal">X</h2></a>
                                                    <form  @submit.prevent="validateBeforeSubmit" class="contact">
                                                        <h2 class="text-center">Add Group</h2>
                                                        <fieldset class="contact-inner">
                                                        <p class="contact-input">
                                                            <input type="text" v-validate="'required'" name="name" v-model="name" placeholder="Group Name" >
                                                            <div class="form-error" v-if="errors.has('name')">
                                                                {{ errors.first('name') }}
                                                            </div>
                                                        </p>
                                                        <p class="contact-input">
                                                            <input type="text" v-validate="'required'" name="description" v-model="description" placeholder="Group description">
                                                            <div class="form-error" v-if="errors.has('description')">
                                                                {{ errors.first('description') }}
                                                            </div>
                                                        </p>
                                                        <p class="contact-submit">
                                                            <input type="submit" :disabled="errors.any()" data-dismiss="modal" v-on:click="create" value="Create Group">
                                                        </p>
                                                        </fieldset>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> 
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
  import sweetalert from 'sweetalert'
  export default {
    data () {
      return {
        isEditing: false,
        name: '',
        url: '',
        description: '',
        lists: [{
          name: 'Group name',
          description: 'Brief description of what the group is all about'
        }, {
          name: 'Group name',
          description: 'Brief description of what the group is all about'
        }, {
          name: 'Group name',
          description: 'Brief description of what the group is all about'
        }, {
          name: 'Group name',
          description: 'Brief description of what the group is all about'
        }]
      }
    },
    methods: {
      create () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.dialogTableVisible = false
            this.lists.push({ name: this.name, description: this.description })
            sweetalert('Success!', 'Group created!', 'success')
          }
        })
      },
      showForm  () {
        this.isEditing = true
      },
      hideForm () {
        this.isEditing = false
        sweetalert('Success!', 'Groups updated!', 'success')
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
    .form-error{
        color: red
    }
    .my-btn{
        padding: 8px;
        padding-left: 12px;
        padding-right: 12px;
        border-radius: 5px;
        border: 0
    }
</style>