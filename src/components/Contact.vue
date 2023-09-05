<template>
  <div class="tokyo_tm_contact">
    <div class="fields">
      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
        <form  class="contact_form" @submit.prevent="handleSubmit(onSubmit)">
          <div class="first">
            <ul>
              <ValidationProvider
                name="user_name"
                rules="required"
                v-slot="{ errors }">
                <li>
                  <input
                    v-model="formData.user_name"
                    type="text"
                    :placeholder="$t('name')"
                    autocomplete="off"/>
                    <span class="inpur-error">{{ errors[0] ? $t('name_required') : ''}}</span>
                </li>
              </ValidationProvider>
              <ValidationProvider
                name="user_email"
                rules="required|email"
                v-slot="{ errors }">
                <li>
                  <input
                    type="text"
                    rules="required|user_email"
                    v-model="formData.user_email"
                    :placeholder="$t('email')"/>
                 <span class="inpur-error">{{ errors[0] ? $t('email_notvalid') : ''}}</span>
                </li>
              </ValidationProvider>
              <ValidationProvider
                name="subject"
                rules="required"
                v-slot="{ errors }">
                <li>
                  <input
                    v-model="formData.subject"
                    type="text"
                    :placeholder="$t('subject')"
                    autocomplete="off"/>
                 <span class="inpur-error">{{ errors[0] ? $t('subject_required') : ''}}</span>
                </li>
              </ValidationProvider>
              <ValidationProvider
                name="message"
                rules="required"
                v-slot="{ errors }">
                <li>
                  <textarea
                    v-model="formData.message"
                    :placeholder="$t('message')">
                  </textarea>
                  <span class="inpur-error">{{ errors[0] ? $t('message_required') : ''}}</span>
                </li>
              </ValidationProvider>
            </ul>
          </div>
          <div class="tokyo_tm_button">
            <button type="submit" class="white-fill-bg fill-black">
               {{$t('send')}}
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>

import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import emailjs from '@emailjs/browser';

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
 
  data() {
    return {
      formData: {
        user_name: "",
        user_email: "",
        subject:"",
        message: "",
      },
    };
  },

  methods: {
    onSubmit () {
       var params = {
        user_name: this.formData.user_name,
        user_email: this.formData.user_email,
        message:this.formData.message,
        subject: this.formData.subject,
       };
       emailjs.send('service_svna4xo', 'template_pe5jj3f', params, 'ugLo-2gkdgnt-b5_l')
        .then((result) => {
          if(result){
            this.makeSuccesfulToast();
            this.formData = {
              name: "",
              email: "",
              message: "",
              };
            this.$nextTick(() => {
                this.$refs.form.reset();
                this.isSended = false;
              });
          }
          else{
            this.makeUnSuccesfulToast();
          } 
        });
      
    },
    makeSuccesfulToast() {
      this.$toast.open({
            message: this.$t('send_succesful'),
            type: "success",
            position: 'top'
          });
      },
      makeUnSuccesfulToast() {
      this.$toast.open({
            message: this.$t('send_unsuccesful'),
            type: "error",
            position: 'top'
          });
      }
  }
};

</script>
