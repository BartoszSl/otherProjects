const allTitles = [
	'Binkowski',
	'Stadion',
	'Kadzielnia',
	'Skwer Harcerski',
	'Park',
	'Muzeum w kielcach',
	'McDonald',
	'Zalew Strawczyn',
	'Basen Strawczyn',
	'Kino Strawczyn',
	'ZOO w lisowie',
];

const allText = [
	'Baseny Tropikalne Binkowski to idealne miejsce do spędzenia wolnego czasu samotnie , bądź z rodziną lub przyjaciółmi. Obiekt składa się z M.in jednego dużego basenu z barem wodnym, basenu dla dzieci, rzeki prowadzącej przez cały obiekt. Budynek jest cały czas wzbogacany o nowe atrakcje, a turyści z innych miejsc mogą zatrzymać się na nocleg w hotelu znajdującym się obok. ',
	'Stadion Leśny to kompleks parkowo-leśny położony w południowej części Kielc, w pobliżu Pakosza i Baranówka. Miejsce to jest idealne na długie spacery, bądź inne aktywności na świeżym powietrzu.',
	'Rezerwat Przyrody Kadzielnia to miejsce, w którym każdy znajdzie coś dla siebie. Na terenie obiektu znajduje się M.injaskinia, tyrolka, oraz amfiteatr. Rezerwat Przyrody Kadzielnia to miejsce, w którym każdy znajdzie coś dla siebie. Na terenietego obiektu znajduje się M.in jaskinia, tyrolka, oraz amfiteatr. Rezerwat Przyrody Kadzielnia to miejsce, w którymkażdy znajdzie coś dla siebie. Na terenie tego obiektu znajduje się M.in jaskinia, tyrolka, oraz amfiteatr.',
	'Jest to plac położony koło centrum miasta. Na jego terenie znajdują się ciągi alejek spacerowych, place zabaw oraz przebiega przez niego (wzdłuż rzeki) ścieżka rowerowa. Na skwerze stoi pomnik poświęcony "Harcerzom poległym za Ojczyznę" autorstwa Stefana Dulnego.Przez skwer przechodzą również różne szlaki turystyczne prowadzące przez zabytkowe i ciekawe turystycznie miejsca. ',
	'Jeden z najstarszych parków w Polsce, leżący w centrum miasta. W zachodniej części parku znajduje się staw określany mianem "podzamecki", mający na środku fontannę z ozdobnymi dyszami w kształcie ryb. Na terenie parku organizowane są co jakiś czas koncerty i uroczystości.',
	'Jest to placówka muzealna z ponad 100-letnią tradycją. W swoich zbiorach posiada cenne eksponaty z dziedziny malarstwa, rzemiosła artystycznego, sztuki ludowej, archeologii i przyrody.',
	'Jest to amerykańska sieć barów szybkiej obsługi, sprzedająca głównie burgery, frytki i napoje. Można w niej miło spędzić czas ze znajomymi. Często organizowane są tam różne wydarzenia, przykładowo: limitowany zestaw artysty Mata.',
	'Zalew w Strawczynie ma powierzchnię blisko 10 ha i powstał przez zagrodzenie tamą cieku wodnego o nazwie Olszówka (znanego również jako Trupień). Zbiornik ma charakter wypoczynkowo-rekreacyjny i jest bardzo dobrze zagospodarowany turystycznie.',
	'Duży basen z zjeżdżalnia i wieloma różnymi strefami do pływania takie jak jacuzzi, sztuczna rzeka i wiele więcej. Do tego bardzo tanie bilety bo tylko 8 zł za 1h',
	'Małe bardzo nowoczesne kino które powstało w tym roku. Jest to jedne kino w całej gminie. Co prawda nie ma tam najnowszych filmów ale napewno są te najciekawsze. Bilety wstępu tak samo jak na basen są w bardzo niskiej cenie',
	'Zoo „Leśne zacisze” to miejsce idealne do spędzenia wolnego czasu na świeżym powietrzu. Znajduje się w nim około 100 gatunków zwierząt z 6 kontynentów!',
];

const dataHref = [
	'./img/binkowski.jpg',
	'./img/stadion.jpg',
	'./img/kadzielnia.png',
	'./img/skwerHarcerski.jpg',
	'./img/park.jpg',
	'./img/muzeum.jpg',
	'./img/mcDonald.jpg',
	'./img/zalewStrawczyn.jpg',
	'./img/basenStrawczyn.jpg',
	'./img/kinoStrawczyn.jpg',
	'./img/zooLisow.jpg',
];

const mapaHref = [
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.790432805151!2d20.607025177020063!3d50.85356490825654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717881962791723%3A0x7b65af67a3127e05!2sBaseny%20Tropikalne%20Binkowski%20Resort!5e0!3m2!1spl!2spl!4v1682954002599!5m2!1spl!2spl',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11978.981732858792!2d20.61714597700157!3d50.863188098081395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718278b1eacbb7f%3A0x845a7a59958e85ff!2sSuzuki%20Arena!5e0!3m2!1spl!2spl!4v1682954053098!5m2!1spl!2spl',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.3674738637515!2d20.615495927020383!3d50.86139635768952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827f509bc6533%3A0xadd9e13322b35162!2sRezerwat%20Przyrody%20Kadzielnia!5e0!3m2!1spl!2spl!4v1682795255320!5m2!1spl!2spl',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.1172176338723!2d20.618199477020624!3d50.86602965735398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827f246c74941%3A0x18186e343c4e786!2sSkwer%20Harcerski%20im.%20Szarych%20Szereg%C3%B3w!5e0!3m2!1spl!2spl!4v1682954096992!5m2!1spl!2spl',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20144.925369592584!2d20.600174886258884!3d50.86605828744497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718278d173ca8b7%3A0xc513bb1958956f45!2sPark%20Miejski%20im.%20Stanis%C5%82awa%20Staszica!5e0!3m2!1spl!2spl!4v1682954321022!5m2!1spl!2spl',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20144.90352816694!2d20.600174880677443!3d50.86610883287147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827ed56c11621%3A0xdad7485d26e29c9e!2sMuzeum%20Narodowe%20w%20Kielcach!5e0!3m2!1spl!2spl!4v1682954348221!5m2!1spl!2spl',
	
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157.36283508371872!2d20.626361178821554!3d50.8718030077334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827ecfe0efc4d%3A0xdbfbc625cbe2dc12!2sRestauracja%20McDonald;s!5e0!3m2!1spl!2spl!4v1682956773839!5m2!1spl!2spl',

	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.7443192560786!2d20.421956377024113!3d50.94694135149116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47182b18fa55e621%3A0x9b0653c0116be701!2sZalew%20Strawczyn!5e0!3m2!1spl!2spl!4v1682954407949!5m2!1spl!2spl',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.808339665248!2d20.428231777024145!3d50.945757451577016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47182b1bb0c618a9%3A0x2aa186308591c765!2sCentrum%20Sportowo-Rekreacyjne%20OLIMPIC!5e0!3m2!1spl!2spl!4v1682954432654!5m2!1spl!2spl',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.0251758843256!2d20.418550577023883!3d50.941747451867634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47182b6c6515788d%3A0x67b800b0c49935ec!2sKino%20Strawczyn!5e0!3m2!1spl!2spl!4v1682954449965!5m2!1spl!2spl',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.7274675577996!2d20.642193477012903!3d50.687883570239144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47178d76e7c94459%3A0xc915ac9e1958111b!2sOgr%C3%B3d%20Zoologiczny%20Le%C5%9Bne%20Zacisze!5e0!3m2!1spl!2spl!4v1682954467206!5m2!1spl!2spl',
];

const select = document.querySelector('#select');
const title = document.querySelector('.change-title');
const text = document.querySelector('.change-text');
const img = document.querySelector('.section-guide img');
const map = document.querySelector('.change-map');

const pickGuide = () => {
	const valueSelect = select.value;
	for (let i = 0; i <= 10; i++) {
		if (valueSelect == i) {
			title.textContent = allTitles[i];
			text.textContent = allText[i];
			img.setAttribute('src', dataHref[i]);
			map.setAttribute('src', mapaHref[i]);
		}
	}
};

select.addEventListener('change', pickGuide);
