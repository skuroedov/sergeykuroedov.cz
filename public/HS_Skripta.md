# Sítě

## Úvod

Tato skripta jsou věnována především látce, která je vyučována na Střední průmyslové škole V Úžlabině 320 (https://uzlabina.cz) v předmětu *Hardware a sítě* a *Hardware a síte - cvičení*. Účelem skript je zajištění podkladu pro předmět, ze kterého budou moci žáci (a nejen oni) čerpat.

Aktuálně jsou skripta ve stavu, kdy se teprve píší. Proto nemohou být spolehlivě použita jako vzdělávací materiál. Ovšem stále mohou být použita jako podpůrný materiál ze kterého lze případně čerpat.

### Čtení skript

Skripta obsahují různé značky, např. **{DEF}**. Každá taková značka má pro čtenáře svoji funkci a váže se k ní vždy nějaký text, který souvisí s danou funkcí.

#### DEF

Tato značka ve formátu **{DEF}** značí, že následující text je stručnou definicí předešlého, více podrobného.

## Síť

### Definice

Jelikož celá skripta věnují sítím, bylo by dobré si vysvětlit, co to vůbec sítě jsou. Zatím jsme si nevysvětlili, jakou funkci plní a jak vypadá, tak se pokusíme to reflektovat na věci z každodenního života. Slovo síť často používáme s přívlastkem, např. pavoučí síť, volejbalová síť nebo síť kořenů stromu. Ačkoliv se zdá, že tyto věci navzájem nijak nesouvisí, natož s počítačovými sítěmi, tak opak je pravdou.

Pokud vezmeme nějakou výše zmíněnou síť, například volejbalovou síť, můžeme si všimnout některých shodných detailů. Každá síť je tvořená určitými body, kde se nějaké spoje, lanka, protínají. U zmíněné volejbalové sítě to jsou doslova uzly. A dané uzly jsou mezi sebou různě uspořádany.

Právě tyto vlastnosti mají i počítačové sítě. Každá počítačová síť má nějaké uzly. Těmito uzly jsou počítače a další zařízení, viz **{LINK}**. Tyto body může nazývat jak uzly, tak například prvky. A každý tento prvek je spojen s nějakým dalším pomocí nějakého spoje. U volejbalové sítě se jedná o lanko, u počítačových sítí to může být několik věcí, ovšem z logického hlediska nám jde o nějaké propojení.


**{DEF}** Síť jako taková v daném kontextu počítačových sítí je množina prvků, kdy každé zařízení je nějakým způsobem propojeno s jiným.

Síť tedy obsahuje prvky, zařízení, které jsou propojeny s jinými prvky. Pokud prvek není propojen s jiným prvkem, tak není v dané síti. Z toho vyplývá, že minimální počet prvků, který potřebujeme pro síť, je 2. Pokud bychom měli méně než 2 prvky, tak ten jeden jediný prvek není propojen s žádným dalším a tedy nesplňuje definici. Naopak můžeme mít prvků více a prvky mohou být propojeny s vícero prvky zároveň.

## Prvky v síti

Jak jsme si již pověděli, každá síť má entity, které jsou navzájem propojeny. Tyto entity se nazývají prvky nebo také uzly.

Uzly jsou konkrétně zařízení, která jsou do sítě připojena. Nezáleží na tom, co dělají a jak jsou zapojena.


### Typy prvků

Prvky mohou vykonávat širokou škálu činností a já základě charakteru činnosti je můžeme dělit do dvou kategorií: koncové a síťové.

#### Koncové prvky

Prvky této kategorie jsou z hlediska sítí jednodušší. Jsou to prvky, které zasílané zprávy zpracovávají a používají. Zprávy u nich končí a nejdou dál. Nemají a priori vliv na funkčnost sítě, pokud samozřejmě není naším cílem síť ovlivnit.

**{DEF}** Koncové prvky jsou takové prvky, u nichž zprávy končí a nepokračují dále. Tyto prvky zprávy používají.

#### Síťové prvky

Prvky této druhé kategorie jsou už složitější a to z jednoduchého důvodu: podstatně ovlivňují danou síť.

Síťové prvky, anglicky intermediary, zprávy předávají na základě různých faktorů. Zprávy jimi primárně prochází. Ačkoliv mohou fungovat jako koncové prvky např. v případě získání IP adresy pomocí DHCP, není to jejich hlavní funkcí.

Jelikož jimi zprávy prochází, mohou ovlivnit destinaci zpráv a i to, zda-li zprávu vůbec předají dál.

**{DEF}** Síťové prvky jsou takové prvky, které slouží k zajištění komunikace v síti. Jejich hlavní funkcí je předávání zpráv dál.


### Role prvků

Každý prvek, nehledě na jeho typ, má nějaké své chování