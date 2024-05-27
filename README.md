<h1 align="center"><a href="https://pg-technews.netlify.app/">Hacker_News</a></h1>

<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<br>
	<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=flat&logo=Webpack&logoColor=black" alt="Webpack">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/Lodash-3492FF.svg?style=flat&logo=Lodash&logoColor=white" alt="Lodash">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

## Descrizione

![Screenshot 2024-05-28 alle 01 11 28](https://github.com/Pgalli992/jsAdvanced_s2i_project/assets/106709635/692b7131-9b12-450c-b7ee-f975f9ea73e3)


Hacker News è un'applicazione sviluppata per democratizzare la diffusione di informazioni in ambito tech attraverso l'utilizzo dell'omonimo servizio <a href="https://github.com/HackerNews/API">(https://github.com/HackerNews/API).</a><br />
<br />



L'interfaccia è composta da: <br />

- un '_header_' contente il logo dell'applicazione ed un pulsante che permette di caricare 10 notizie alla volta.<br />
- la sezione '_main_' composta dai risultati rappresentati dalle notizie, di cui vengono evidenziati _titolo_, _autore_, _data e ora_ di pubblicazione e [se dispobile] il _link_ alla risorsa.<br />
- il '_footer_' in cui è presente il copyright e i link ai social.

<h2>Funzionalità</h2>
Al momento del caricamento della pagina saranno visualizzate le 10 notizie più recenti; cliccando il pulsante 'Load More...' sarà possibile caricarne altre 10, fino ad un massimo di 500.<br />
Sarà possibile tenere conto del numero di notizie caricate grazie al contatore integrato nel pulsante. Per migliorare l'esperienza utente l'interfaccia è programmata per scorrere automaticamente al primo risultato dell'ultima ricerca.<br />
Per ognuna delle notizie è stato aggiunto, ove presente, un bottone che permette di aprire il collegamento della risorsa in una nuova scheda; in modo da non abbandonare la pagina e poter tornare agilmente a consultare le notizie.

## Repository Structure

```sh
└── jsAdvanced_s2i_project/
    ├── README.md
    ├── dist
    │   ├── bundle.js
    │   ├── bundle.js.LICENSE.txt
    │   ├── img
    │   │   ├── favicon.png
    │   │   └── hacker_logo.png
    │   ├── index.html
    │   └── main.css
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.conifg.js
    ├── src
    │   ├── css
    │   │   ├── input.css
    │   │   └── output.css
    │   ├── img
    │   │   ├── favicon.png
    │   │   └── hacker_logo.png
    │   └── js
    │       ├── index.js
    │       └── model.js
    ├── tailwind.config.js
    └── webpack.config.js
```

---

## Getting Started

### Installazione

1. Clona jsAdvanced_s2i_project repository:

```sh
git clone https://github.com/Pgalli992/jsAdvanced_s2i_project.git
```

2. Cambia la directory del progetto:

```sh
cd desktop
```

3. Una volta clonata la repository in locale installa le dependencies:

```sh
npm install
```

### Comandi utili

Utilizzare Tailwind per compilare il file output.css

```sh
npm run dev
```

Creare la cartella dist in modalità _dev_

```sh
npm run build:dev
```

Creare la cartella dist in modalità _production_

```sh
npm run build:prod
```

Far girare il progetto dalla cartella dist in locale

```sh
npm run serve
```

## Link

<a href="https://pg-technews.netlify.app/">Link al sito</a>
