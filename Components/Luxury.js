class Luxury extends HTMLElement {
    constructor() {
      super();
         this.attachShadow({mode:"open"});
    }
   
  static get styles() {
      return /*css*/ `
      :host {
        --width:250px;
        --height:475px;
        --lexend: 'Lexend Deca', sans-serif;
        --big: 'Big Shoulders Display', cursive;
        --orange: hsl(31, 77%, 52%);
        --cyan: hsl(184, 100%, 22%);
        --cyan-dark:hsl(179, 100%, 13%)
  
         }
         .luxury{
          background-color:var(--cyan-dark);
          width: var(--width);
          height: var(--height);
          border-radius:  0 5px 5px 0;
          color: #fff;
          box-sizing: border-box;
          margin: 0;
          padding: 30px;
          display:flex;
          flex-direction: column; 
          justify-content: space-between
         }
         .contenido{
          display:flex;
          flex-direction: column;
          justify-content: space-between;
         }
         .contenido img{
          width: 70px
         }
         .contenido h1{
          font-family: var(--big)
         }
         .contenido p{
          font-family: var(--lexend)
         }
         button{
          width: 70%;
          padding: 13px;
          border-radius: 55px;
          border:none;
          font-size: 14px;
          color:var(--cyan-dark);
          font-family: var(--lexend)
         }
              `;
  }
  
    connectedCallback() {
      this.render();
    }
   
        render() {
       this.shadowRoot.innerHTML = /*html*/ `
          <style>${Luxury.styles}</style>
          <div class='luxury'>
          <div class="contenido">
            <img src="./images/icon-luxury.svg">
            <h1>LUXURY</h1>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
          </div>
          <button>Leer más</button>
      </div>`
        }
  }
  
  customElements.define('mlz-luxury', Luxury);