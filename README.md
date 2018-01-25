

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).




## 3. Zadatak

Potrebno je napraviti single-page aplikaciju koristeći B oostrap3 i AngularJS framework.
Aplikacija je jednostavni imenik koji omogućava korisniku unos podataka o kontaktima. Svaki kontakt ima sljedeće podatke:

* `unikatni ID (integer, auto increment)`
* `ime`
* `prezime`
* `adresa`
* `poštanski broj`
* `grad`
* `država`
* `proizvoljan broj telefonskih brojeva`
* `email adresu`

Sva polja su obavezna i moraju se validirati prije pohrane. Storage birajte sami (nema komunikacije sa serverskom stranom). Aplikacija mora moći izlistati sve kontakte (s paginacijom), kreirati, izmijeniti, obrisati i prikazati svaki pojedini kontakt u svom "pageu" (viewu, zasebna ruta za svaki akciju).

Potrebna je mogućnost pretraživanje kontakata po imenu, prezimenu, broju telefona ili e-mail adresi (po nekom ili svim poljima).

Aplikacija nudi korisniku mogućnost merganja kontakata ako oni imaju isto ime i isto prezime. Merge akcija se pokreće na klik gumba. Svaki potencijalni merge mora odobriti korisnik aplikacije. Ako kontakti koji se mergaju imaju popunjene podatke za npr. adresu, onda korisnik mora odabrat koju adresu želi prihvatiti. Ako jedan kontakt ima neki podatak, a ostali u mergu nemaju, onda korisnik ne treba potvrditi merge tog podatka.

Aplikacija mora imati i mogućnost navigacije sa back/forward mogućnostima browsera te mogućnost “shareanja” ili "bookmarkanja" linkova – npr., ako korisnik ode na link .../user/45/edit, mora mu se pokazati forma za uređivanje korisnika sa ID-om 45.


##
