import type { BookTestData } from './types';

export const bookTestData: BookTestData = {
	questions: [
		{
			body: '星期六早晨，窗簾外的光線照進房間，你望著灑落地面的光線，覺得外面的天氣應該是...',
			choices: [
				{
					label: 'A',
					body: '豔陽高照，光線在地面上彷彿融化的水',
					bookIds: ['0010937927', '0010960353', '0010955357', '0010964032'],
				},
				{
					label: 'B',
					body: '細雨綿綿，柔和的陽光在水氣之間散開',
					bookIds: ['0010941981', '0010956474', '0010876131', '0010886823'],
				},
			],
		},
		{
			body: '下午，在天氣舒適多了之後，你決定帶著新買的書，去附近的店家坐坐，享受假日時光，你帶著書走進了...',
			choices: [
				{
					label: 'A',
					body: '提供好喝咖啡、環境明亮的咖啡廳',
					bookIds: ['0010937927', '0010960353', '0010941981', '0010956474'],
				},
				{
					label: 'B',
					body: '充滿懷舊氛圍、店員友善的小餐館',
					bookIds: ['0010955357', '0010964032', '0010876131', '0010886823'],
				},
			],
		},
		{
			body: '傍晚回家的路上，你走在無人的巷弄中，突然聽到後方傳來一陣怪聲響，你轉頭去看，眼前只有無人的街道，你心中升起一個想法...',
			choices: [
				{
					label: 'A',
					body: '太詭異了，還是加緊腳步離開那裡',
					bookIds: ['0010937927', '0010955357', '0010941981', '0010876131'],
				},
				{
					label: 'B',
					body: '發生了什麼事，還是再觀察一下好',
					bookIds: ['0010960353', '0010964032', '0010956474', '0010886823'],
				},
			],
		},
	],
	books: [
		{
			id: '0010937927',
			title: '子彈是餘生',
			authur: '寺尾哲也',
			imagePath: 'img/001/093/79/0010937927.jpg',
			introduction: `天才少年相愛相殺！

九則短篇，串起一群天才，飛翔又殞落的命定之困。

為什麼不費吹灰之力就能得到一切的天才要選擇自殺？

環繞著天才介恆的資優競賽圈友人們過著看似優越無瑕卻扭曲掙扎的人生。對於身陷生之地獄的他們，介恆是望塵莫及、又愛又恨的對象——他是大家頭頂上亟欲追逐的星光，卻也是那渺遠光點外吞噬一切的黑暗。

當介恆從拉斯維加斯賭場飯店二十三樓墜落，那段交雜嫉妒、慾望、忿恨、曖昧、羞辱、無力的悼亡之旅，才是所有故事真正的開端⋯⋯。`,
		},
		{
			id: '0010960353',
			title: '一袋米要扛幾樓',
			authur: '洪萬達',
			imagePath: 'img/001/096/03/0010960353.jpg',
			introduction: `「感受痛苦吧！痛みを感じろ」（Itami o kanjiro） 

「詩壇培因」洪萬達，以一招神羅天征，終於喚醒在現代詩中沉睡已久的人們

榮獲第六屆周夢蝶詩獎首獎肯定的這部詩集，書中同名詩作〈一袋米要扛幾樓〉也是2022年洪萬達獲得第24屆臺北文學獎現代詩首獎的作品，詩題取自日本知名動漫《火影忍者》中反派角色「培因」的空耳台詞：「痛みを感じろ」（Itami o kanjiro），原文意思是「感受痛苦吧」。

整本詩集以三幕劇「亮相、衝突、懸念出盡」的概念，將詩作重新歸類，分作四輯，講述一名寫詩少年的奮鬥，作出一次驚人的「痛苦的昇華」。`,
		},
		{
			id: '0010955357',
			title: '電擊女孩',
			authur: '徐立妍',
			imagePath: 'img/001/095/53/0010955357.jpg',
			introduction: `電醒全世界的小說當女人突然擁有強大的新力量，世界會發生什麼事？
女孩們身上帶著電，這股力量想要往外擴張。電擊女孩覺醒了，這個世界需要新的刺激。全球各地的少女突然擁有彈指間發出電擊，可擊傷甚至擊斃人的力量。

接著，人們發現，少女可以藉由接觸的方式來喚醒年長女性同樣的能力。於是，全世界所有女性都發展出這種電擊力量。然後，一切都改變了：性侵、暴力、恐懼，乃至社會與政治的各種權力關係，都改變了。`,
		},
		{
			id: '0010964032',
			title: '四維街一號',
			authur: '楊双子',
			imagePath: 'img/001/096/40/0010964032.jpg',
			introduction: `當四名各懷心事的碩士生遇上一名舉止成謎的女房東，五位個性迥異、出身有別的二、三十代當代臺灣女性，她們如何在一座昭和時期留存至今的日式老屋共同生活、彼此扶持，甚至春心萌動！？

而隨著一本百年食譜的出土，芋泥羹、生燒雞、煎春餅⋯⋯一道道賦予新滋味的日治時期臺灣料理，不只刺激著現代人的味蕾，也牽動起她們內心的情感線索，緩緩揭開這棟老屋裝載的歷史祕密。`,
		},
		{
			id: '0010941981',
			title: '少女同志，向敵人開槍吧',
			authur: '逢坂冬馬',
			imagePath: 'img/001/094/19/0010941981.jpg',
			introduction: `失去的生命再也回不來，沒有人能代替任何人活下去－－

德蘇戰爭愈來愈白熱化的一九四二年，住在莫斯科近郊農村的少女謝拉菲瑪原本過著平靜的日子，有一天倏地戛然而止。

母親葉卡捷琳娜和村民們慘死於突襲的德軍手中，險些也死於德軍槍下的謝拉菲瑪幸得蘇聯紅軍女性士兵伊麗娜救下。

面對「妳要選擇戰鬥？還是選擇死亡？」的大哉問，謝拉菲瑪決定進入由伊麗娜擔任教官的訓練學校，成為一流的狙擊兵。

為了向殺害母親的德國狙擊手和焚毀母親遺體的伊麗娜報仇……謝拉菲瑪日復一日與有著相同的遭遇、失去家人、選擇戰鬥的女性狙擊兵們一起訓練，直到被派往史達林格勒攻防戰的前線——德蘇戰爭最關鍵的轉捩戰。

經歷了許多人的死亡之後，謝拉菲瑪「真正的敵人」到底是誰？

「倘若妳站在山丘上，請為我凝視遠方。」`,
		},
		{
			id: '0010956474',
			title: '海風酒店',
			authur: '吳明益',
			imagePath: 'img/001/095/64/0010956474.jpg',
			introduction: `我們到達的是曾經離開的，我們失去的就是我們想追求的。

追逐白狗的太魯閣族少年、不願被父親賣掉而逃家的漢人少女，各自從不同的村落進入了洞穴裡——他們並不知道，自己進入的是巨人的「內底」（lāi-tué）。

一隻遭捕獸夾鉗斷腳掌的食蟹獴，在命懸一線之際躲到了巨人的眼睫毛底下而逐漸痊癒。倖存的三隻腳食蟹獴，穿梭在巨人與部落之時，發現了一些祕密。

位於島嶼東部群山之中的克尼布（Knibu），也叫海豐村，在這個原住民與漢人、祖靈及上帝各自在不同時間移棲至此的小村落，一個女子牽著稚齡的女兒，站在「海風卡拉OK」的門口；而在村落的另一頭山腰，預備把山鑿出豎井，開採水泥的機具已經架好。

在這個兩大板塊、神話與人間、誕生與消亡交界的縱谷村落，因為命運而聚集於此的眾人一隻眼看著山，一隻眼看著海——他們的決定會是什麼呢？`,
		},
		{
			id: '0010876131',
			title: '殖民地之旅（瀟湘神）',
			authur: '瀟湘神',
			imagePath: 'img/001/087/61/0010876131.jpg',
			introduction: `我們到達的是曾經離開的，我們失去的就是我們想追求的。

追逐白狗的太魯閣族少年、不願被父親賣掉而逃家的漢人少女，各自從不同的村落進入了洞穴裡——他們並不知道，自己進入的是巨人的「內底」（lāi-tué）。

一隻遭捕獸夾鉗斷腳掌的食蟹獴，在命懸一線之際躲到了巨人的眼睫毛底下而逐漸痊癒。倖存的三隻腳食蟹獴，穿梭在巨人與部落之時，發現了一些祕密。

位於島嶼東部群山之中的克尼布（Knibu），也叫海豐村，在這個原住民與漢人、祖靈及上帝各自在不同時間移棲至此的小村落，一個女子牽著稚齡的女兒，站在「海風卡拉OK」的門口；而在村落的另一頭山腰，預備把山鑿出豎井，開採水泥的機具已經架好。

在這個兩大板塊、神話與人間、誕生與消亡交界的縱谷村落，因為命運而聚集於此的眾人一隻眼看著山，一隻眼看著海——他們的決定會是什麼呢？`,
		},
		{
			id: '0010886823',
			title: '老派少女購物路線',
			authur: '洪愛珠',
			imagePath: 'img/001/088/68/0010886823.jpg',
			introduction: `她自小看著有頭家娘風範的外婆與母親，進出廚房，起灶架鍋，張羅數十家人員工日常吃食，宴請東南亞與中東等地賓客，哄嚷熱烈，直到滷肉飯、蒸冬瓜肉餅、芋棗甚至一碗煲粥，俱成為她日後的念想。
 
她曾與外婆、母親，三代女子，穿行在大稻埕與永樂市場，買鮑參翅肚、麵龜椪餅、胡椒肉桂蠶豆，見識老鋪的講究，練就一套對古早物什的擇選標準。

「長長的百年的大街上，四顧僅餘我一人。」當至親家人一一遠行，她最終成為一個自擁廚房的女子。然循著吃食滋味，她重回那仿如傳說盛世的親族過往，再現早輩人的心志與作風。
 
她且飛港島，尋覓那一路喝到大的福建茶行鐵觀音；從曼谷買齊各尺寸的猴桃標白藥油；自檳城拎回一口像似外婆「烏鼎」的印度黑鐵鍋……
 
老食、老物、老鋪、老市場，是回返時間的甬道，是追尋記憶的線索。她還以此學會撫慰自己，做人待人，並學會看人間煙火，安身定心的過日子。`,
		},
	],
};
