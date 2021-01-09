var c = document.getElementById("c");
var ctx = c.getContext("2d");

// vollbildmodus für bg
c.height = window.innerHeight;
c.width = window.innerWidth;

var symbols = "ぁあぃいぅうぇえぉおかがきぎけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヺ田由甲申甴电甶男甸甹画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
//symbole in chars splitten
symbols = symbols.split("");

var font_size = 11;
var spalten = c.width / font_size; //anzahl der spalten abh. von fensterbreite und textgroesse
//1 drop pro spalte
var drizzle = [];
//x zaehlt von links nach rechts die reihe durch, spalte beginnt aber immer bei 1
for (var x = 0; x < spalten; x++)
	drizzle[x] = 1;

//animation
function draw() {
	//schwarzer hintergrund, dann rot, gruen, blau und wie lange es dauert bis es durchsichtig wird
	//durchsichtig um den schweif zu sehen
	ctx.fillStyle = "rgba(0, 0, 0, 0.047";
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = "#008080"; //textfarbe cyan
	ctx.font = font_size + "Hiragino Kaku Gothic Pro"; //alt. Font: "ヒラギノ角ゴ Pro W3"
	//schleife für die animation
	for (var i = 0; i < drizzle.length; i++) {
		//zufälliges symbol
		var text = symbols[Math.floor(Math.random() * symbols.length)];
		//Koordinaten: x = i*font_size, y = wert von drizzle[i]*font_size
		ctx.fillText(text, i * font_size, drizzle[i] * font_size);

		//die spalte zurück zu y=0 senden nachdem monitor 1x durchlaufen/unten angekommen
		//zufällige startposition damit verteilung hübscher
		if (drizzle[i] * font_size > c.height && Math.random() > 0.95)
			drizzle[i] = 0;

		//untereinander stacken statt aufeinander
		drizzle[i]++;
	}
}

//geschwindigkeit vom gefälle
setInterval(draw, 45);




