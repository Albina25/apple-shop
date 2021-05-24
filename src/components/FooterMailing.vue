<template>
  <div class="mailing">
    <span class="advice">Послезные советы и персональные предложения</span>
    <h2 class="advice">Экслюзивная рассылка</h2>
    <div class="list-and-form">
      <div class="individual-part">
        <ul class="list">
          <li class="point-list">Личный менеджер</li>
          <li class="point-list">Доставка и оформление</li>
          <li class="point-list">Индивидуальный подход</li>
        </ul>
      </div>
      <div class="form-part">
        <div class="email-form">
          <div class="input-and-button">
            <input type="email" class="mail-input" :class="{'invalidEmail': !isValid && email}" required placeholder="E-MAIL" v-model="email">
            <button class="button-mail" @click="send">отправить</button>
          </div>
          <div>
            <span v-if="error" class="error"> {{ error }}</span>
          </div>
        </div> 
        
          
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mailing',
  data: () => ({
    email: '',
    error: null,
  }),
  computed: {
    isValid() {
       return this.email ? (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)): false
       
    }
  },
  methods: {
    validateEmail() {
    if (!this.email) {
        this.error = 'Введите Ваш E-Mail';
    } else if (!this.isValid) {
      this.error = 'Пожалуйста, введите корректный e-mail';
      }
      else {
          this.error = '';
      }
},
    send() { 

      this.validateEmail();
   
      const response =  fetch('send.php',{
            method: 'POST',
            body: JSON.stringify(this.email),
            headers: {
                  'Content-Type': 'application/json', 
              }
          });
    }
  }  
};
</script>

<style lang="scss">
  .mailing {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    width: 100%;
    color: white;
    padding: 1rem 0;
    
    .advice {
      margin-bottom: 1rem;
    }
    .list-and-form {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      
      .mail-input {
        height: 2rem;
        margin-right: 1rem;
      }
      .individual-part {
        padding: 1rem;
      }  
      .form-part {
        padding: 0.5rem;
        border: 1px solid white;
        background-color: lighten(rgb(15, 15, 15),10%);
      }
      .email-form {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: white;
        justify-content: center;
      }
      .input-and-button {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: 0.5rem;
        margin-right: 0.5rem;
        justify-content: center;
      }
      .error {
        color: red;
        background-color: white;
        width: 100%;
        font-size: 0.9rem;
      }
      .list {
        text-align: left
      }
      .point-list {
        margin-bottom: 0.7rem;
        font-size: 0.9rem;
      }
      .invalidEmail {
        border: 1px solid red;
      }
      .button-mail {
        text-transform: uppercase;
        background-color: black;
        color: white;
        padding: 0.5rem 1rem;
        cursor: pointer;
        text-decoration: none;
        border: 1px solid gray;
          &:hover {
            opacity: 0.8;
          }
          &:active {
            opacity: 0.6;
          }
      }
    }
  }
  
  @media only screen and (max-width: 734px) and (orientation: portrait) {
    .mailing {
      padding-bottom: 0;  
      .mail-input {
        margin-bottom: 0.5rem;
        margin-right: 0;
      }
      .list-and-form {
        flex-direction: column;
        .input-and-button {
          flex-direction: column;
          margin: 0;
        }
      }
    }
  }  
</style>
