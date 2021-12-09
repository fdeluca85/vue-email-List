// Descrizione
// Attrvaerso l'apposita API di Boolean
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

// alert('hello')

const app = new Vue({
  el: '#root',
  data: {},
  methods: {},
  created() {
    for (let i = 0; i < 10; i++) {
      let emails = {
        mail: null,
      };
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((risposta) => {
          emails.mail = risposta.data.response;
          console.log(risposta.data.response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  },
});
