class Sedans extends HTMLElement {
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
       .sedans{
        background-color:var(--orange);
        width: var(--width);
        height: var(--height);
        border-radius: 5px 0 05px;
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
        color:var(--orange);
        font-family: var(--lexend)
       }
            `;
}

  connectedCallback() {
    this.render();
  }
 
      render() {
     this.shadowRoot.innerHTML = /*html*/ `
        <style>${Sedans.styles}</style>
        <div class='sedans'>
        <div class="contenido">
          <img src="./images/icon-sedans.svg">
          <h1>SEDANS</h1>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
        </div>
        <button>Leer más</button>
    </div>`
      }
}

customElements.define('mlz-sedans', Sedans);