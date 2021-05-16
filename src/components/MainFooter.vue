<template>
  <div class="footer">
    <span class="advice">Не знаете что выбрать?</span>
    <h2 class="advice">Посетите наши магазины в Уфе</h2>
    <p class="text">Американская корпорация, производитель персональных и планшетных компьютеров, 
       аудиоплееров, смартфонов, программного обеспечения.
       Один из пионеров в области персональных компьютеров и 
       современных многозадачных операционных систем с графическим интерфейсом.
    </p>  
    <button class="button-shops">наши магазины</button>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
  data: () => ({
   
  }),

  methods: {
   
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
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    width: 100%;
    color: white;
    padding: 1rem 0;

    %indent {
      margin-bottom: 1rem;
      padding: 0 0.5rem;
    }
    .advice {
      @extend %indent;
    }
    .text {
      max-width: 40rem;
      @extend %indent;
    }
    .button-shops {
    text-transform: uppercase;
    background-color: white;
    color: black;
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
   
</style>
