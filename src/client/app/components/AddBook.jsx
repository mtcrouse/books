import React from 'react';
import axios from 'axios';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addBook = this.addBook.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.iso639 = {
      'Abkhaz': 'ab',
      'Afar': 'aa',
      'Afrikaans': 'af',
      'Akan': 'ak',
      'Albanian': 'sq',
      'Amharic': 'am',
      'Arabic': 'ar',
      'Aragonese': 'an',
      'Armenian': 'hy',
      'Assamese': 'as',
      'Avaric': 'av',
      'Avestan': 'ae',
      'Aymara': 'ay',
      'Azerbaijani': 'az',
      'Bambara': 'bm',
      'Bashkir': 'ba',
      'Basque': 'eu',
      'Belarusian': 'be',
      'Bengali': 'bn',
      'Bihari': 'bh',
      'Bislama': 'bi',
      'Bosnian': 'bs',
      'Breton': 'br',
      'Bulgarian': 'bg',
      'Burmese': 'my',
      'Catalan': 'ca',
      'Chamorro': 'ch',
      'Chechen': 'ce',
      'Chichewa': 'ny',
      'Chinese': 'zh',
      'Chuvash': 'cv',
      'Cornish': 'kw',
      'Corsican': 'co',
      'Cree': 'cr',
      'Croatian': 'hr',
      'Czech': 'cs',
      'Danish': 'da',
      'Divehi': 'dv',
      'Dutch': 'nl',
      'Dzongkha': 'dz',
      'English': 'en',
      'Esperanto': 'eo',
      'Estonian': 'et',
      'Ewe': 'ee',
      'Faroese': 'fo',
      'Fijian': 'fj',
      'Finnish': 'fi',
      'French': 'fr',
      'Fula': 'ff',
      'Galician': 'gl',
      'Georgian': 'ka',
      'German': 'de',
      'Greek': 'el',
      'Guarani': 'gn',
      'Gujarati': 'gu',
      'Haitian': 'ht',
      'Hausa': 'ha',
      'Hebrew': 'he',
      'Herero': 'hz',
      'Hindi': 'hi',
      'Hiri Motu': 'ho',
      'Hungarian': 'hu',
      'Interlingua': 'ia',
      'Indonesian': 'id',
      'Interlingue': 'ie',
      'Irish': 'ga',
      'Igbo': 'ig',
      'Inupiaq': 'ik',
      'Ido': 'io',
      'Icelandic': 'is',
      'Italian': 'it',
      'Inukitut': 'iu',
      'Japanese': 'ja',
      'Javanese': 'jv',
      'Kalaallisut': 'kl',
      'Kannada': 'kn',
      'Kanuri': 'kr',
      'Kashmiri': 'ks',
      'Kazakh': 'kk',
      'Khmer': 'km',
      'Kikuyu': 'ki',
      'Kinyarwanda': 'rw',
      'Kyrgyz': 'ky',
      'Komi': 'kv',
      'Kongo': 'kg',
      'Korean': 'ko',
      'Kurdish': 'ku',
      'Kwanyama': 'kj',
      'Latin': 'la',
      'Luxembourgish': 'lb',
      'Ganda': 'lg',
      'Limburgish': 'li',
      'Lingala': 'ln',
      'Lao': 'lo',
      'Lithuanian': 'lt',
      'Luba-Katanga': 'lu',
      'Latvian': 'lv',
      'Manx': 'gv',
      'Macedonian': 'mk',
      'Malagasy': 'mg',
      'Malay': 'ms',
      'Malayalam': 'ml',
      'Maltese': 'mt',
      'Maori': 'mi',
      'Marathi': 'mr',
      'Marshallese': 'mh',
      'Mongolian': 'mn',
      'Nauruan': 'na',
      'Navajo': 'nv',
      'Northern Ndebele': 'nd',
      'Nepali': 'ne',
      'Ndonga': 'ng',
      'Norwegian Bokmal': 'nb',
      'Norwegian Nynorsk': 'nn',
      'Norwegian': 'no',
      'Nuosu': 'ii',
      'Southern Ndebele': 'nr',
      'Occitan': 'oc',
      'Ojibwe': 'oj',
      'Old Church Slavonic': 'cu',
      'Oromo': 'om',
      'Oriya': 'or',
      'Ossetian': 'os',
      'Eastern Punjabi': 'pa',
      'Pali': 'pi',
      'Persian': 'fa',
      'Polish': 'pl',
      'Pashto': 'ps',
      'Portuguese': 'pt',
      'Quechua': 'qu',
      'Romansh': 'rm',
      'Kirundi': 'rn',
      'Romanian': 'ro',
      'Russian': 'ru',
      'Sanskrit': 'sa',
      'Sardinian': 'sc',
      'Sindhi': 'sd',
      'Northern Sami': 'se',
      'Samoan': 'sm',
      'Sango': 'sg',
      'Serbian': 'sr',
      'Scottish Gaelic': 'gd',
      'Shona': 'sn',
      'Sinhalese': 'si',
      'Slovak': 'sk',
      'Slovene': 'sl',
      'Somali': 'so',
      'Southern Sotho': 'st',
      'Spanish': 'es',
      'Sundanese': 'su',
      'Swahili': 'sw',
      'Swati': 'ss',
      'Swedish': 'sv',
      'Tamil': 'ta',
      'Telugu': 'te',
      'Tajik': 'tg',
      'Thai': 'th',
      'Tigrinya': 'ti',
      'Tibetan': 'bo',
      'Turkmen': 'tk',
      'Tagalog': 'tl',
      'Tswana': 'tn',
      'Tonga': 'to',
      'Turkish': 'tr',
      'Tsonga': 'ts',
      'Tatar': 'tt',
      'Twi': 'tw',
      'Tahitian': 'ty',
      'Uyghur': 'ug',
      'Ukranian': 'uk',
      'Urdu': 'ur',
      'Uzbek': 'uz',
      'Venda': 've',
      'Vietnamese': 'vi',
      'Volapük': 'vo',
      'Walloon': 'wa',
      'Welsh': 'cy',
      'Wolof': 'wo',
      'Western Frisian': 'fy',
      'Xhosa': 'xh',
      'Yiddish': 'yi',
      'Yoruba': 'yo',
      'Zhuang': 'za',
      'Zulu': 'zu'
    };
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  addBook(event) {
    event.preventDefault();
    this.props.addSearchResults([]);

    let data = { title: this.state.title,
      author: this.state.author
    };

    let query = '';

    if (this.state.title) {
      query += `intitle:${this.state.title.replace(/ /g, '+')}`;
    }

    if (this.state.author) {
      if (query === '') {
        query += `inauthor:${this.state.author.replace(/ /g, '+')}`;
      } else {
        query += `+inauthor:${this.state.author.replace(/ /g, '+')}`;
      }
    }

    if (this.state.language) {
      let language = this.state.language.charAt(0).toUpperCase() + this.state.language.slice(1);
      let languageCode;

      if (this.iso639.hasOwnProperty(language)) {
          languageCode = this.iso639[language];
        } else {
          console.log('invalid language code');
          event.target.reset();
          this.setState({});
          return;
        }
      if (query === '') {
        console.log('need to enter either title or author');
        event.target.reset();
        this.setState({});
        return;
      } else {
        query += `&langRestrict=${languageCode}`;
      }
    }

    event.target.reset();
    this.setState({});

    if (query === '') {
      console.log('blank search');
      return 'blank search';
    }

    query += `&maxResults=25&printType=books`;

    console.log(query);

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(res => {
        this.props.addSearchResults(res.data.items);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    const languages = Object.keys(this.iso639);

    const languageAutoComplete = new autoComplete({
        selector: '#language',
        minChars: 1,
        cache: false,
        source: function(term, suggest){
          term = term.toLowerCase();
          let choices = languages;
          let suggestions = [];
          for (let i=0; i < choices.length; i++)
              if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
          suggest(suggestions);
        }
    });
  }

  render() {

    return (
      <div className="row">
        <form onSubmit={this.addBook}>
          <input type="text" placeholder="title" name="title" onChange={this.handleChange} />
          <input type="text" placeholder="author" name="author" onChange={this.handleChange} />
          <input type="number" placeholder="year" name="year" onChange={this.handleChange} />
          <input type="text" placeholder="language" name="language" id="language" onChange={this.handleChange} />
          <button type="submit">SEARCH</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
