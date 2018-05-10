<template>
    <Li class="list-group-item col-xs-12">
        <div  v-show="!isEditing" class="" >
            <div class=" col-xs-12 single">
                <div class="row top-sect">
                    <div class="col-md-12">
                        <div class="col-md-12 sa">
                            <div class="contactId">
                                <span class="name"> {{contact.name}} </span>
                            </div>
                            <div class="action-btn pull-right">
                                <button v-on:click="showForm" class="btn-primary mybtn"><i class="fa fa-pencil"></i><span>Edit</span></button>
                                <button v-on:click="deleteContact" class="btn-danger mybtn"><i class="fa fa-trash"></i><span>Delete</span></button>
                                <!-- <button class="mybtn2"><i class="fa fa-ellipsis-v"></i></button> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row details">
                    <div class="col-md-4 ">
                        <span class="text-muted" data-toggle="tooltip" v-bind:title="contact.address"><i class="fa fa-map-marker"></i> {{contact.address}}</span><br/>
                        <span class="text-muted" data-toggle="tooltip" v-bind:title="contact.number"><i class="fa fa-phone"></i>{{contact.number}}</span><br/>
                    </div>
                    <div class="col-md-4">
                        <span class="text-muted" data-toggle="tooltip" v-bind:title="contact.name"><i class="fa fa-qrcode"></i>  RBIB:{{contact.name}} </span><br>
                        <span class="text-muted" data-toggle="tooltip" v-bind:title="contact.email"><i class="fa fa-comments" ></i>{{contact.email}}</span><br/>
                    </div>
                    <div class="col-md-4">
                        <span class="text-muted"><span class="bold"> <i class="fa fa-envelope"></i> Has Messanger:</span>{{contact.msn}}</span><br>
                        <span class="text-muted"><span class="bold"> <i class="fa fa-car"></i>Has Messanger:</span>{{contact.tele}}</span><br>
                    </div>                                                        
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="wrap" v-show="isEditing">
            <div class='form edit'>
                <div class="col-md-6">
                    <label>Name</label>
                    <input type='text' v-model="contact.name" ><br>
                    <label>Number</label>
                    <input type='text' v-model="contact.number" ><br>
                </div>
                <div class="col-md-6">
                    <label>Email</label>
                    <input type='text' v-model="contact.email" ><br>
                    <label>Address</label>
                    <input type='text' v-model="contact.address" ><br>
                </div>
                <div class='send'>
                    <button class="btn-success float-right" v-on:click="hideForm()">
                        Save
                    </button>
                </div>
            </div>
        </div> 
    </li>
</template>
<script type="text/javascript">
  import sweetalert from 'sweetalert'
  export default {
    props: ['contact'],
    data () {
      return {
        isEditing: false
      }
    },
    methods: {
      showForm () {
        this.isEditing = true
      },
      hideForm () {
        this.isEditing = false
        sweetalert('Success!', 'contact updated!', 'success')
      },
      deleteContact (contact) {
        this.$emit('delete-contact', contact)
      }
    }
  }
</script>
<style>
.edit input{
    background-color: rgb(230, 230, 230);
    height:55px 
}
@media (max-width:767px){
    .edit{
        height: auto;
    }
}
</style>