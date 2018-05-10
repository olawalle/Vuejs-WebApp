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
                                            <ul>
                                                <li v-for="list in lists">
                                                <div class="col-md-6 groupcard">
                                                    <div class="box" v-show="!isEditing">
                                                        <div class="">
                                                            <div class="events-nest ">
                                                                <div class="wrap-no-pad">
                                                                    <div class="row">
                                                                        <h3 class="Groupname">{{list.name}}</h3>
                                                                        <div class="col-xs-6 group bor-right">
                                                                            <div class="">
                                                                                <img src="http://ak8.picdn.net/shutterstock/videos/5840558/thumb/2.jpg" width="100%">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-xs-6 ">
                                                                            <div class="description">
                                                                            <h4>{{list.description}}</h4> 
                                                                            <br> 
                                                                            <img src="http://api.randomuser.me/portraits/men/76.jpg" class="img-circle" width="30px" alt=""><img src="http://api.randomuser.me/portraits/men/16.jpg" class="img-circle next" width="30px" alt=""><img src="http://api.randomuser.me/portraits/women/76.jpg" class="img-circle next" width="30px" alt=""> members(2000)                                                       
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-12"><button :plain="true" @click="dialogEditTableVisible = true" class="btn-primary mybtn"><i class="fa fa-pencil"></i><span>Edit</span></button></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="wrap" v-show="isEditing">
                                                        <div class='form edit'>
                                                            <div class="col-md-12">
                                                                <label>Name</label>
                                                                <input type='text' v-model="lists.name" ><br>
                                                                <label>Number</label>
                                                                <input type='text' v-model="lists.description" ><br>
                                                            </div>
                                                            <div class='send'>
                                                                <button class="btn-success float-right" v-on:click="hideForm()">
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </li>
                                            </ul>
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
                                    <form  v-on:submit.prevent class="contact">
                                        <fieldset class="contact-inner">
                                        <p class="contact-input">
                                            <input type="text" name="name" v-model="name" placeholder="Group Name" autofocus>
                                        </p>
                                        <p class="contact-input">
                                            <input type="text" name="name" v-model="description" placeholder="Group Description" autofocus>
                                        </p>
                                        <p class="contact-input">
                                            <label for="select" class="select">
                                            <select name="subject" id="select">
                                                <option value="" selected v-for="contact in contacts">{{contact.name}}</option>
                                            </select>
                                            </label>
                                        </p>
                                        <p class="contact-submit">
                                            <input type="submit"  :plain="true" @click="dialogTableVisible = false" v-on:click="create" value="Create Group">
                                        </p>
                                        </fieldset>
                                    </form>
                                    </el-dialog>
                                    <el-dialog title="Add Group" :visible.sync="dialogEditTableVisible">
                                    <form  v-on:submit.prevent class="contact">
                                        <fieldset class="contact-inner">
                                        <p class="contact-input">
                                            <input type="text" name="name" v-model="lists.name" placeholder="Group Name" autofocus>
                                        </p>
                                        <p class="contact-input">
                                            <input type="text" name="name" v-model="lists.description" placeholder="Group Description" autofocus>
                                        </p>
                                        <p class="contact-submit">
                                            <input type="submit"  :plain="true" v-on:click="hideForm2()" value="Update Group">
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
  import sweetalert from 'sweetalert'
  export default {
    props: ['contactnames'],
    data () {
      return {
        // isEditing: true,
        dialogTableVisible: false,
        dialogEditTableVisible: false,
        name: '',
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
        this.lists.push({name: this.name, description: this.description})
        sweetalert('Success!', 'Group created!', 'success')
      },
      showForm () {
        this.isEditing = true
      },
      hideForm2 () {
        this.dialogEditTableVisible = false
        sweetalert('Success!', 'contact updated!', 'success')
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