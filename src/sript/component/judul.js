class JudulWeb extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render(); 
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        :host {
            font-family: 'Inter', sans-serif;
            color: #FFFFFF;
            text-align: center;
            font-weight: 200;
            font-size: small;
        }

        h1 {
            margin-top: 100px;
        }

        </style>
        
        <h1>Check the  Weather Your  Location  </h1>`;
    }
}

customElements.define('judul-web', JudulWeb);