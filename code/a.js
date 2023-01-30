console.log("a.js --> loaded");

const r_hex = ["xerwinxpl", "album/hex/", "https://f4.bcbits.com/img/a3112523276_2.jpg"];				// electronica
const r_aqua = ["xerwinxpl", "album/aqua/", "https://f4.bcbits.com/img/a1536174611_2.jpg"];				// ambient
const r_03 = ["xerwinxpl", "album/album03/", "https://f4.bcbits.com/img/a3216786508_2.jpg"];				// glitch, house
const r_new = ["xerwinxpl", "album/new/", "https://f4.bcbits.com/img/a4153279772_2.jpg"];				// electronica, house, ambient, hip-hop
const r_think = ["xerwinxpl", "track/i-think/", "https://f4.bcbits.com/img/a3340981925_2.jpg"];				// electronica, house, ambient
const r_piano = ["xerwinxpl", "track/piano/", "https://f4.bcbits.com/img/a2509572786_2.jpg"];				// electronica
const r_s = ["xerwinxpl", "track/sound/", "https://f4.bcbits.com/img/a3983760367_2.jpg"];				// house, electronica
const r_tw = ["xerwinxpl", "album/2-weeks/", "https://f4.bcbits.com/img/a1300888331_2.jpg"];				// electronica, house, ambient, glitch, hip-hop
const r_tiwnh = ["xerwinxpl", "track/things-i-will-never-have/", "https://f4.bcbits.com/img/a3412206100_2.jpg"];	// ambient, electronica
const r_na = ["xerwinxpl", "track/not-acid/", "https://f4.bcbits.com/img/a0933733175_2.jpg"];				// hip-hop, house, electronica
const r_sanctuary = ["jcran", "/track/sanctuary", "https://f4.bcbits.com/img/a3801538135_2.jpg"]			// electronica, ambient

electronica = [r_hex, r_new, r_think, r_piano, r_s, r_tw, r_tiwnh, r_na, r_sanctuary];
ambient = [r_aqua, r_new, r_think, r_tw, r_tiwnh, r_sanctuary];
hh = [r_new, r_na, r_tw];
glitch = [r_03, r_tw];
house = [r_03, r_new, r_think, r_s, r_tw, r_na];

h_electronica = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // what this do lol, i dont remember

function get_imgs() {
	imgs = [
	document.querySelector("#ri0 a"),
	document.querySelector("#ri1 a"),
	document.querySelector("#ri2 a"),
	document.querySelector("#ri3 a"),
	document.querySelector("#ri4 a")];
}

function get_tag(r) {
	return "<a href=\"https://" + r[0] + ".bandcamp.com/"+ r[1] + "\"><img src=\"" + r[2] + "\" alt=\"\"></a>";
}

//updating images [41203]
function u_e() {get_imgs(); console.log("a.js --> u_e --> clicked");
imgs[0].outerHTML = get_tag(electronica[2]);
imgs[1].outerHTML = get_tag(electronica[5]);
imgs[2].outerHTML = get_tag(electronica[8]);
imgs[3].outerHTML = get_tag(electronica[6]);
imgs[4].outerHTML = get_tag(electronica[1]);}
function u_a() {get_imgs(); console.log("a.js --> u_a --> clicked");
imgs[0].outerHTML = get_tag(ambient[5]);
imgs[1].outerHTML = get_tag(ambient[4]);
imgs[2].outerHTML = get_tag(ambient[2]);
imgs[3].outerHTML = get_tag(ambient[3]);
imgs[4].outerHTML = get_tag(ambient[1]);}
function u_i() {get_imgs(); console.log("a.js --> u_i --> clicked");
imgs[0].outerHTML = get_tag(hh[2]);
imgs[1].outerHTML = get_tag(hh[2]);
imgs[2].outerHTML = get_tag(hh[1]);
imgs[3].outerHTML = get_tag(hh[1]);
imgs[4].outerHTML = get_tag(hh[0]);}
function u_g() {get_imgs(); console.log("a.js --> u_g --> clicked");
imgs[0].outerHTML = get_tag(glitch[0]);
imgs[1].outerHTML = get_tag(glitch[1]);
imgs[2].outerHTML = get_tag(glitch[0]);
imgs[3].outerHTML = get_tag(glitch[1]);
imgs[4].outerHTML = get_tag(glitch[0]);}
function u_h() {get_imgs(); console.log("a.js --> u_h --> clicked");
imgs[0].outerHTML = get_tag(house[0]);
imgs[1].outerHTML = get_tag(house[4]);
imgs[2].outerHTML = get_tag(house[2]);
imgs[3].outerHTML = get_tag(house[5]);
imgs[4].outerHTML = get_tag(house[3]);}


//listeners
document.querySelector("#e").addEventListener("click", u_e);
document.querySelector("#a").addEventListener("click", u_a);
document.querySelector("#i").addEventListener("click", u_i);
document.querySelector("#g").addEventListener("click", u_g);
document.querySelector("#h").addEventListener("click", u_h);
