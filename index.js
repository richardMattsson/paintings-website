const app = Vue.createApp({});

const Home = {
  data() {
    return { imageSrc: 'ericaProfilbildExp.png' };
  },
  template: `
  <h1 id="mainTitle">Erica Mattsson</h1>
      <h2>Delar mina experiment i min utveckling i konst❣</h2>
      <img :src="imageSrc" alt="Akryl tavla självporträtt"/>
      <figcaption>Första självporträtt. </figcaption> 
      `,
};

const Paintings = {
  data() {
    return {
      route: this.$route.params.style,
      dogsarray: false,
      portraitsarray: false,
      dotsarray: false,
      portraits: [
        'Pictures/portraitPics/portraitOnCanvas2Exp.png',
        'Pictures/portraitPics/canvasOrangesExp.png',
        'Pictures/portraitPics/gardenOfEdenExp.png',
        'Pictures/portraitPics/portraitNrOneExp.png',
        'Pictures/portraitPics/portraitNrThreeExp.png',
        'Pictures/portraitPics/snowflakesexp.png',
      ],
      dogs: [
        'Pictures/Hundar/hundBlåExp.png',
        'Pictures/Hundar/hundGrönExp.png',
        'Pictures/Hundar/hundGulExp.png',
        'Pictures/Hundar/hundLilaExp.png',
        'Pictures/Hundar/hundRosaExp.png',
        'Pictures/Hundar/hundRödExp.png',
      ],
      dots: [
        'Pictures/Prickar/prickarRyggExp.png',
        'Pictures/Prickar/prickarBenExp.png',
        'Pictures/Prickar/prickarMageExp.png',
        'Pictures/Prickar/prickarHänder2Exp.png',
        'Pictures/Prickar/prickarDeVitoExp.png',
        'Pictures/Prickar/prickarMonroeExp.png',
      ],
    };
  },
  created() {
    this.$watch(
      () => this.$route.params.style,
      this.chooseImageArray,
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  methods: {
    chooseImageArray() {
      if (this.$route.params.style === 'dogs') {
        this.dotsarray = this.portraitsarray = false;
        this.dogsarray = true;
        heading = this.$route.params.style;
      } else if (this.$route.params.style === 'portraits') {
        this.dotsarray = this.dogsarray = false;
        this.portraitsarray = true;
        heading = this.$route.params.style;
      } else if (this.$route.params.style === 'dots') {
        this.portraitsarray = this.dogsarray = false;
        this.dotsarray = true;
        heading = this.$route.params.style;
      }
    },
  },
  template: `
    <h1>{{this.$route.params.style.charAt(0).toUpperCase()+this.$route.params.style.substring(1)}}</h1>
    <h2>Delar mina experiment i min utveckling i konst❣</h2>
    
    <article v-if="dogsarray === true">
      <figure>
        <img class="zoom"  v-for="image in dogs" :src="image" alt="image of dog"/>
      </figure>
    </article>
    
    <article v-if="portraitsarray === true">
      <figure>
        <img class="zoom"  v-for="image in portraits" :src="image" alt="image of portrait"/>
      </figure>
    </article>
    
    <article v-if="dotsarray === true">
      <figure>
        <img class="zoom"  v-for="image in dots" :src="image" alt="image of portrait"/>
      </figure>
    </article>
    `,
};

const Contact = {
  data() {
    return { formName: '', formMessage: '' };
  },
  methods: {
    sendMessage() {
      alert('message sent!');
    },
  },
  template: `<h1>Kontakt</h1>
  <form id="form" v-on:submit.prevent="sendMessage">
    <label for="namefield">Vänligen skriv ditt namn nedan.</label>
      <input id="namefield" name="contact" placeholder="Namn" v-model="formName"/>
      <br/>
    <label for="contactMessage"
      >Vänligen skriv ditt meddelande nedan.
    </label>
    <textarea
    v-model="formMessage"
      name="message"
      id="contactMessage"
      cols="25"
      rows="6"
      placeholder="Meddelande"
    ></textarea>

    <input id="submitBtn" type="submit" value="Skicka" />
  </form>
  `,
};

const routes = [
  {
    component: Home,
    path: '/',
  },
  {
    component: Paintings,
    path: '/paintings/:style',
  },
  {
    component: Contact,
    path: '/contact',
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);

app.mount('#app');
