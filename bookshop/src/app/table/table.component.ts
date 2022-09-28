import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  searchText:any;
  books=[
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
       
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
       
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
       
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    
   
   
   
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
       
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
       "imageLink": "images/le-pere-goriot.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835
    },
    {
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
       
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
    {
      "author": "Giovanni Boccaccio",
      "country": "Italy",
       
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351
    },
    {
      "author": "Jorge Luis Borges",
      "country": "Argentina",
       
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Ficciones\n",
      "pages": 224,
      "title": "Ficciones",
      "year": 1965
    },
    {
      "author": "Emily Bront\u00eb",
      "country": "United Kingdom",
       
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
      "pages": 342,
      "title": "Wuthering Heights",
      "year": 1847
    },
    {
      "author": "Albert Camus",
      "country": "Algeria, French Empire",
       
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
      "pages": 185,
      "title": "The Stranger",
      "year": 1942
    },
    {
      "author": "Paul Celan",
      "country": "Romania, France",
       
      "language": "German",
      "link": "\n",
      "pages": 320,
      "title": "Poems",
      "year": 1952
    },
    {
      "author": "Louis-Ferdinand C\u00e9line",
      "country": "France",
       
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
      "pages": 505,
      "title": "Journey to the End of the Night",
      "year": 1932
    },
    {
      "author": "Miguel de Cervantes",
      "country": "Spain",
       
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
      "pages": 1056,
      "title": "Don Quijote De La Mancha",
      "year": 1610
    },
    {
      "author": "Geoffrey Chaucer",
      "country": "England",
       
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
      "pages": 544,
      "title": "The Canterbury Tales",
      "year": 1450
    },
    {
      "author": "Anton Chekhov",
      "country": "Russia",
    
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
      "pages": 194,
      "title": "Stories",
      "year": 1886
    },
    {
      "author": "Joseph Conrad",
      "country": "United Kingdom",
       
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nostromo\n",
      "pages": 320,
      "title": "Nostromo",
      "year": 1904
    },
    {
      "author": "Charles Dickens",
      "country": "United Kingdom",
       
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
      "pages": 194,
      "title": "Great Expectations",
      "year": 1861
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
