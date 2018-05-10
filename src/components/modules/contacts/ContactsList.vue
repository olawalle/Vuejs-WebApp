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
                                            <span class="title">Contacts</span>
                                        </div>                                        
                                        <ul class="list-group" id="contact-list" >
                                            <contactform v-on:delete-contact="deleteContact" v-for="contact in contacts" :contact.sync="contact"></contactform>        
                                         </ul>
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

<script type = "text/javascript" >
import sweetalert from 'sweetalert'
import Contactform from './contactform'
export default {
  props: ['contacts'],
  components: {
    Contactform
  },
  methods: {
    deleteContact: function (contact, index) {
      sweetalert({
        title: 'Are you sure?',
        text: 'This contact will be permanently deleted!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false
      },
      () => {
        this.contacts.splice(index, 1)
        sweetalert('Deleted!', 'Your contact has been deleted.', 'success')
      })
    }
  }
}
</script>
<style>
   .padding-fifthin{
            padding: 15px!important;
    }
.list-group:first-child {
    border-top:0;
}

.list-group-item img{
    margin-top: 20px
}
.text-muted{
    text-align: right;
}

.form-wrap{
    height:auto;
    padding-bottom:20px
}
/* .sa{
    background-color: #5759a1
} */
.sa img{
    margin-top: -30px
}
.add{
    position: fixed;
    bottom:30px;
    right: 30px;
}

/* .float-btn{
    color:#fff;
    display:table-cell;
    vertical-align:middle;
    width:40px;
    height:40px;
    background-color: #2a3bd3;
    border-radius: 50%
} */
.secondary-btn i{
    color:#2a3bd3;
    font-size: 15px;
    padding:10px;
    border-radius:1000px;
    box-shadow: 3px 3px 3px #bdbdbd;
    background-color: #fff;
    transition: 0.5s linear all
}
.secondary-btn{
    margin-left: 5px;
    visibility: hidden 
}
.mybtn2{
    display: none;
}
.add:hover .secondary-btn{
     visibility: visible;   
}
.contactId{
    margin-top: 25px
}
.details{
    margin-top: -70px;
    padding-left: 20px 
}
.details i{
    font-size: 20px;
    padding-right: 12px
}
.top-sect{
    margin-bottom: 20px;
}
.action-btn {
    margin: 20px;
    margin-top: -45px;
    visibility: hidden
} 
.action-btn button{
    padding: 8px;
    padding-left: 14px;
    padding-right: 14px;
    border:0;
    border-radius: 5px
}
.form{
    background-color: rgb(168, 18, 18)
}
.send button{
    margin-top: 12px;
    margin-right: 20px;
    padding: 8px;
    padding-left: 14px;
    padding-right: 14px;
    border:0;
    border-radius: 5px    
}
.single:hover .action-btn {
    visibility: visible;
}
.contact-btn{
    
    margin: 12px
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

/* .list-group li{
    border-bottom: 1px solid #eee
} */
/* i{
    padding-left: 20px
} */
.single{
    border-bottom: 0.3px solid #c3c3c3;
    padding-bottom: 20px
}
.single:hover{
    background-color: #e4e4e4
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
    margin-top: 50px;
    font-size: 1.7em;
    font-weight: 700;
}

.c-info {
    padding: 5px 10px;
    font-size: 1.25em;
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
    .details{
    padding-top: 40px;
    padding-left: 20px 
    }
    /* .contactId{
        margin-top: 45px
    } */
     .action-btn{
        visibility: visible;
        margin-right: -40px
    }
    .action-btn button{
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border:0;
    border-radius: 5px
    }
    .mybtn span{
        display: none;
    }
    /* .mybtn2{
        display: inline;
        background: #fff;
        color:#000
    }
    .mybtn2:hover .mybtn{
        display: inline;
    } */
}
</style>