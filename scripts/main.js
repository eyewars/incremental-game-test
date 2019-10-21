var lastUpdate = Date.now();
var TIER_NAMES = [ null, "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth" ];
var DISPLAY_NAMES = [ null, "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth" ];
var player = {
	gold: new Decimal(10),
	
	firstCost: new Decimal(10),
	secondCost: new Decimal(1000),
	thirdCost: new Decimal(1e9),
	fourthCost: new Decimal(1e16),
	fifthCost: new Decimal(1e25),
	sixthCost: new Decimal(1e36),
	seventhCost: new Decimal(1e49),
	eighthCost: new Decimal(1e64),
	
	firstCostAfterInf: new Decimal("1e309"),
	secondCostAfterInf: new Decimal("1e311"),
	thirdCostAfterInf: new Decimal("1e315"),
	fourthCostAfterInf: new Decimal("1e324"),
	fifthCostAfterInf: new Decimal("1e330"),
	sixthCostAfterInf: new Decimal("1e342"),
	seventhCostAfterInf: new Decimal("1e357"),
	eighthCostAfterInf: new Decimal("1e368"),
	
	firstAmount: new Decimal(0),
	secondAmount: new Decimal(0),
	thirdAmount: new Decimal(0),
	fourthAmount: new Decimal(0),
	fifthAmount: new Decimal(0),
	sixthAmount: new Decimal(0),
	seventhAmount: new Decimal(0),
	eighthAmount: new Decimal(0),
	
	firstBought: new Decimal(0),
	secondBought: new Decimal(0),
	thirdBought: new Decimal(0),
	fourthBought: new Decimal(0),
	fifthBought: new Decimal(0),
	sixthBought: new Decimal(0),
	seventhBought: new Decimal(0),
	eighthBought: new Decimal(0),
	
	firstMult: new Decimal(1),
    secondMult: new Decimal(1.5),
    thirdMult: new Decimal(1),
    fourthMult: new Decimal(1),
    fifthMult: new Decimal(1),
    sixthMult: new Decimal(1),
    seventhMult: new Decimal(1),
    eighthMult: new Decimal(1),
	
	firstFinalMult: new Decimal(1),
    secondFinalMult: new Decimal(1),
    thirdFinalMult: new Decimal(1),
    fourthFinalMult: new Decimal(1),
    fifthFinalMult: new Decimal(1),
    sixthFinalMult: new Decimal(1),
    seventhFinalMult: new Decimal(1),
    eighthFinalMult: new Decimal(1),
	
	firstPrestige: new Decimal(0),
	secondPrestige: new Decimal(0),
	thirdPrestige: new Decimal(0),
	fourthPrestige: new Decimal(0),
	fifthPrestige: new Decimal(0),
	sixthPrestige: new Decimal(0),
	seventhPrestige: new Decimal(0),
	eighthPrestige: new Decimal(0),
	
	firstPrestigeCost: new Decimal(3),
	secondPrestigeCost: new Decimal(5),
	thirdPrestigeCost: new Decimal(7),
	fourthPrestigeCost: new Decimal(9),
	fifthPrestigeCost: new Decimal(11),
	sixthPrestigeCost: new Decimal(13),
	seventhPrestigeCost: new Decimal(15),
	eighthPrestigeCost: new Decimal(17),
	
	allMult: new Decimal(1),
	allMultCost: new Decimal(1000),
	allMultFinalCost: new Decimal(1000),
	allMultCostInc: new Decimal(1000),
	allMultGain: new Decimal(1.05),
	allMultGainFinal: new Decimal(1),
	allMultFromPrestige: new Decimal(1),
	allMultBought: new Decimal(0),
	allMultFromFirstExpUp: new Decimal(1),
	allMultGainFromSecondExpUp: new Decimal(1),
	
	multPerBuy: new Decimal(1.6),
	
	maxPrestige: new Decimal(15),
	
	hasUnlockedExpansion: false,
	expansionPoints: new Decimal(0),
	expansionPointMult: new Decimal(1),
	expansionPointMultCost: new Decimal(10),
	expansions: new Decimal(0),
	expansionCost: new Decimal("1e308"),
	
	electricity: new Decimal(0),
	
	firstExpansionGeneratorCost: new Decimal(1),
	secondExpansionGeneratorCost: new Decimal(100),
	thirdExpansionGeneratorCost: new Decimal(1e4),
	fourthExpansionGeneratorCost: new Decimal(1e6),
	fifthExpansionGeneratorCost: new Decimal(1e8),
	sixthExpansionGeneratorCost: new Decimal(1e10),
	seventhExpansionGeneratorCost: new Decimal(1e12),
	eighthExpansionGeneratorCost: new Decimal(1e14),
	
	firstExpansionGeneratorAmount: new Decimal(0),
	secondExpansionGeneratorAmount: new Decimal(0),
	thirdExpansionGeneratorAmount: new Decimal(0),
	fourthExpansionGeneratorAmount: new Decimal(0),
	fifthExpansionGeneratorAmount: new Decimal(0),
	sixthExpansionGeneratorAmount: new Decimal(0),
	seventhExpansionGeneratorAmount: new Decimal(0),
	eighthExpansionGeneratorAmount: new Decimal(0),
	
	firstExpansionGeneratorBought: new Decimal(0),
	secondExpansionGeneratorBought: new Decimal(0),
	thirdExpansionGeneratorBought: new Decimal(0),
	fourthExpansionGeneratorBought: new Decimal(0),
	fifthExpansionGeneratorBought: new Decimal(0),
	sixthExpansionGeneratorBought: new Decimal(0),
	seventhExpansionGeneratorBought: new Decimal(0),
	eighthExpansionGeneratorBought: new Decimal(0),
	
	firstExpansionGeneratorMult: new Decimal(1),
	secondExpansionGeneratorMult: new Decimal(1),
	thirdExpansionGeneratorMult: new Decimal(1),
	fourthExpansionGeneratorMult: new Decimal(1),
	fifthExpansionGeneratorMult: new Decimal(1),
	sixthExpansionGeneratorMult: new Decimal(1),
	seventhExpansionGeneratorMult: new Decimal(1),
	eighthExpansionGeneratorMult: new Decimal(1),
	
	firstExpansionGeneratorFinalMult: new Decimal(1),
	secondExpansionGeneratorFinalMult: new Decimal(1),
	thirdExpansionGeneratorFinalMult: new Decimal(1),
	fourthExpansionGeneratorFinalMult: new Decimal(1),
	fifthExpansionGeneratorFinalMult: new Decimal(1),
	sixthExpansionGeneratorFinalMult: new Decimal(1),
	seventhExpansionGeneratorFinalMult: new Decimal(1),
	eighthExpansionGeneratorFinalMult: new Decimal(1),
	
	expansionUpgrade1: false,
	expansionUpgrade2: false,
	expansionUpgrade3: false,
	expansionUpgrade4: false,
	expansionUpgrade5: false,
	expansionUpgrade6: false,
	expansionUpgrade7: false,
	expansionUpgrade8: false,
	expansionUpgrade9: false,
	expansionUpgrade10: false,
	expansionUpgrade11: false,
	expansionUpgrade12: false,
	expansionUpgrade13: false,
	expansionUpgrade14: false,
	expansionUpgrade15: false,
	
	firstExpansionMultFromUpgrades: new Decimal(1)
};

function test(){
	player.gold = player.gold.pow(10);
	//console.log(player.gold);
}

function save() {
    localStorage.cc = btoa(JSON.stringify(player));
}

function load() {
    if (!localStorage.cc) return;
    player = JSON.parse(atob(localStorage.cc));

    transformToDecimal(player)
}

function transformToDecimal(object) { 
    for (i in object) {
        if (typeof(object[i]) == "string" && !isNaN(new Decimal(object[i]).mag)) object[i] = new Decimal(object[i]); 
        if (typeof(object[i]) == "object") transformToDecimal(object[i]) 
    }
}

load();

function format(amount, i){
	let power = Decimal.floor(Decimal.log10(amount));
	let mantissa = amount.div(Decimal.pow(10, power));
	if (amount == 0) return "0"
	if (power < 4) return amount.toFixed(i);
	return mantissa.toFixed(2) + "e" + power;
}

function buyGenerator(tier){
	var name = TIER_NAMES[tier];
	var buys = new Decimal(Decimal.floor(308/tier));
	
	if (((buys.layer < player[name + "Bought"].layer) || ((buys.layer == player[name + "Bought"].layer) && (buys.mag <= player[name + "Bought"].mag))) && (player.gold.layer > player[name + "Cost"].layer  || ((player.gold.layer == player[name + "Cost"].layer) && player.gold.mag > player[name + "Cost"].mag))){
		player.gold = player.gold.minus(player[name + "Cost"]);
		player[name + "Bought"] = player[name + "Bought"].plus(1);
		player[name + "Amount"] = player[name + "Amount"].plus(1);
		player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuy);
		player[name + "Cost"] = player[name + "Cost"].times(Decimal.pow(Decimal.pow(10, (tier + 10)), (tier + 1)));
	}	
	else if (player.gold.layer > player[name + "Cost"].layer  || ((player.gold.layer == player[name + "Cost"].layer) && player.gold.mag >= player[name + "Cost"].mag)) {
		player.gold = player.gold.minus(player[name + "Cost"]);
		player[name + "Bought"] = player[name + "Bought"].plus(1);
		player[name + "Amount"] = player[name + "Amount"].plus(1);
		player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuy);
		player[name + "Cost"] = player[name + "Cost"].times(Decimal.pow(10, tier));
	}
	else return
}

function buyAllMult(){
	var buys = new Decimal(102);
	getFinalAllMultCost()
	
	if ((buys.lt(player.allMultBought) || buys.eq(player.allMultBought)) && (player.gold.gt(player.allMultFinalCost) || player.gold.eq(player.allMultFinalCost))){
		player.allMultCostInc = new Decimal(1e52);
		player.gold = player.gold.minus(player.allMultFinalCost);
		player.allMult = player.allMult.times(player.allMultGainFinal);
		player.allMultCost = player.allMultCost.times(player.allMultCostInc);
		player.allMultBought = player.allMultBought.plus(1);
		//console.log("1");
	}
	else if (player.gold.gt(player.allMultFinalCost) || player.gold.eq(player.allMultFinalCost)){
		player.gold = player.gold.minus(player.allMultFinalCost);
		player.allMult = player.allMult.times(player.allMultGainFinal);
		player.allMultCost = player.allMultCost.times(player.allMultCostInc);
		player.allMultBought = player.allMultBought.plus(1);
		//console.log("2");
	}
	else return
}

function getFinalGenMult(){
	for (let tier = 1; tier < 9; tier++){
		let name = TIER_NAMES[tier];

		player[name + "FinalMult"] = player[name + "Mult"].times(player.allMult.times(player.allMultFromFirstExpUp));
		if (tier == 1){
			player.firstExpansionGeneratorFinalMult = player.firstExpansionGeneratorMult.times(player.firstExpansionMultFromUpgrades);
		}
		else player[name + "ExpansionGeneratorFinalMult"] = player[name + "ExpansionGeneratorMult"]
	}
	
}

function getFinalAllMultCost(){
	//console.log(player.allMultFinalCost);
	player.allMultFinalCost = player.allMultCost.div(player.electricity.plus(1).pow(5));
}

function getFinalAllMultGain(){
	player.allMultGainFinal = player.allMultGain.times(player.allMultGainFromSecondExpUp);
}

function prestige(tier){
	let name = TIER_NAMES[tier];
	
	if ((player.maxPrestige.layer == player[name + "Prestige"].layer) && (player.maxPrestige.mag == player[name + "Prestige"].mag)) return
	
	if (player[name + "Bought"].layer < player[name + "PrestigeCost"].layer  || ((player[name + "Bought"].layer == player[name + "PrestigeCost"].layer) && player[name + "Bought"].mag < player[name + "PrestigeCost"].mag)) return
	
	player[name + "Prestige"] = player[name + "Prestige"].plus(1);
	player[name + "PrestigeCost"] = player[name + "PrestigeCost"].plus(4 * tier);
	player.allMultFromPrestige = player.allMultFromPrestige.times(2);
	
	player = {
	gold: new Decimal(10),
		
	firstCost: new Decimal(10),
	secondCost: new Decimal(1000),
	thirdCost: new Decimal(1e9),
	fourthCost: new Decimal(1e16),
	fifthCost: new Decimal(1e25),
	sixthCost: new Decimal(1e36),
	seventhCost: new Decimal(1e49),
	eighthCost: new Decimal(1e64),
		
	firstCostAfterInf: new Decimal("1e309"),
	secondCostAfterInf: new Decimal("1e311"),
	thirdCostAfterInf: new Decimal("1e315"),
	fourthCostAfterInf: new Decimal("1e324"),
	fifthCostAfterInf: new Decimal("1e330"),
	sixthCostAfterInf: new Decimal("1e342"),
	seventhCostAfterInf: new Decimal("1e357"),
	eighthCostAfterInf: new Decimal("1e368"),
	
	firstAmount: new Decimal(1),
	secondAmount: new Decimal(0),
	thirdAmount: new Decimal(0),
	fourthAmount: new Decimal(0),
	fifthAmount: new Decimal(0),
	sixthAmount: new Decimal(0),
	seventhAmount: new Decimal(0),
	eighthAmount: new Decimal(0),
	
	firstBought: new Decimal(0),
	secondBought: new Decimal(0),
	thirdBought: new Decimal(0),
	fourthBought: new Decimal(0),
	fifthBought: new Decimal(0),
	sixthBought: new Decimal(0),
	seventhBought: new Decimal(0),
	eighthBought: new Decimal(0),
	
	firstMult: new Decimal(1),
    secondMult: new Decimal(1.5),
    thirdMult: new Decimal(1),
    fourthMult: new Decimal(1),
    fifthMult: new Decimal(1),
    sixthMult: new Decimal(1),
    seventhMult: new Decimal(1),
    eighthMult: new Decimal(1),
		
	firstFinalMult: new Decimal(1),
    secondFinalMult: new Decimal(1),
    thirdFinalMult: new Decimal(1),
    fourthFinalMult: new Decimal(1),
    fifthFinalMult: new Decimal(1),
    sixthFinalMult: new Decimal(1),
    seventhFinalMult: new Decimal(1),
    eighthFinalMult: new Decimal(1),
		
	firstPrestige: new Decimal(player.firstPrestige),
	secondPrestige: new Decimal(player.secondPrestige),
	thirdPrestige: new Decimal(player.thirdPrestige),
	fourthPrestige: new Decimal(player.fourthPrestige),
	fifthPrestige: new Decimal(player.fifthPrestige),
	sixthPrestige: new Decimal(player.sixthPrestige),
	seventhPrestige: new Decimal(player.seventhPrestige),
	eighthPrestige: new Decimal(player.eighthPrestige),
	
	firstPrestigeCost: new Decimal(player.firstPrestigeCost),
	secondPrestigeCost: new Decimal(player.secondPrestigeCost),
	thirdPrestigeCost: new Decimal(player.thirdPrestigeCost),
	fourthPrestigeCost: new Decimal(player.fourthPrestigeCost),
	fifthPrestigeCost: new Decimal(player.fifthPrestigeCost),
	sixthPrestigeCost: new Decimal(player.sixthPrestigeCost),
	seventhPrestigeCost: new Decimal(player.seventhPrestigeCost),
	eighthPrestigeCost: new Decimal(player.eighthPrestigeCost),
		
	allMult: new Decimal(player.allMultFromPrestige),
	allMultCost: new Decimal(1000),
	allMultFinalCost: new Decimal(1000),
	allMultCostInc: new Decimal(1000),
	allMultGain: new Decimal(player.allMultGain),
	allMultGainFinal: new Decimal(player.allMultGainFinal),
	allMultFromPrestige: (player.allMultFromPrestige),
	allMultBought: new Decimal(0),
	allMultFromFirstExpUp: new Decimal(player.allMultFromFirstExpUp),
	allMultGainFromSecondExpUp: new Decimal(player.allMultGainFromSecondExpUp),
		
	multPerBuy: new Decimal(player.multPerBuy),
		
	maxPrestige: new Decimal(player.maxPrestige),
	
	hasUnlockedExpansion: player.hasUnlockedExpansion,
	expansionPoints: new Decimal(player.expansionPoints),
	expansionPointMult: new Decimal(player.expansionPointMult),
	expansionPointMultCost: new Decimal(player.expansionPointMultCost),
	expansions: new Decimal(player.expansions),
	expansionCost: new Decimal(player.expansionCost),
		
	electricity: new Decimal(player.electricity),
	
	firstExpansionGeneratorCost: new Decimal(player.firstExpansionGeneratorCost),
	secondExpansionGeneratorCost: new Decimal(player.secondExpansionGeneratorCost),
	thirdExpansionGeneratorCost: new Decimal(player.thirdExpansionGeneratorCost),
	fourthExpansionGeneratorCost: new Decimal(player.fourthExpansionGeneratorCost),
	fifthExpansionGeneratorCost: new Decimal(player.fifthExpansionGeneratorCost),
	sixthExpansionGeneratorCost: new Decimal(player.sixthExpansionGeneratorCost),
	seventhExpansionGeneratorCost: new Decimal(player.seventhExpansionGeneratorCost),
	eighthExpansionGeneratorCost: new Decimal(player.eighthExpansionGeneratorCost),

	firstExpansionGeneratorAmount: new Decimal(player.firstExpansionGeneratorAmount),
	secondExpansionGeneratorAmount: new Decimal(player.secondExpansionGeneratorAmount),
	thirdExpansionGeneratorAmount: new Decimal(player.thirdExpansionGeneratorAmount),
	fourthExpansionGeneratorAmount: new Decimal(player.fourthExpansionGeneratorAmount),
	fifthExpansionGeneratorAmount: new Decimal(player.fifthExpansionGeneratorAmount),
	sixthExpansionGeneratorAmount: new Decimal(player.sixthExpansionGeneratorAmount),
	seventhExpansionGeneratorAmount: new Decimal(player.seventhExpansionGeneratorAmount),
	eighthExpansionGeneratorAmount: new Decimal(player.eighthExpansionGeneratorAmount),

	firstExpansionGeneratorBought: new Decimal(player.firstExpansionGeneratorBought),
	secondExpansionGeneratorBought: new Decimal(player.secondExpansionGeneratorBought),
	thirdExpansionGeneratorBought: new Decimal(player.thirdExpansionGeneratorBought),
	fourthExpansionGeneratorBought: new Decimal(player.fourthExpansionGeneratorBought),
	fifthExpansionGeneratorBought: new Decimal(player.fifthExpansionGeneratorBought),
	sixthExpansionGeneratorBought: new Decimal(player.sixthExpansionGeneratorBought),
	seventhExpansionGeneratorBought: new Decimal(player.seventhExpansionGeneratorBought),
	eighthExpansionGeneratorBought: new Decimal(player.eighthExpansionGeneratorBought),

	firstExpansionGeneratorMult: new Decimal(player.firstExpansionGeneratorMult),
	secondExpansionGeneratorMult: new Decimal(player.secondExpansionGeneratorMult),
	thirdExpansionGeneratorMult: new Decimal(player.thirdExpansionGeneratorMult),
	fourthExpansionGeneratorMult: new Decimal(player.fourthExpansionGeneratorMult),
	fifthExpansionGeneratorMult: new Decimal(player.fifthExpansionGeneratorMult),
	sixthExpansionGeneratorMult: new Decimal(player.sixthExpansionGeneratorMult),
	seventhExpansionGeneratorMult: new Decimal(player.seventhExpansionGeneratorMult),
	eighthExpansionGeneratorMult: new Decimal(player.eighthExpansionGeneratorMult),
		
	firstExpansionGeneratorFinalMult: new Decimal(player.firstExpansionGeneratorFinalMult),
	secondExpansionGeneratorFinalMult: new Decimal(player.secondExpansionGeneratorFinalMult),
	thirdExpansionGeneratorFinalMult: new Decimal(player.thirdExpansionGeneratorFinalMult),
	fourthExpansionGeneratorFinalMult: new Decimal(player.fourthExpansionGeneratorFinalMult),
	fifthExpansionGeneratorFinalMult: new Decimal(player.fifthExpansionGeneratorFinalMult),
	sixthExpansionGeneratorFinalMult: new Decimal(player.sixthExpansionGeneratorFinalMult),
	seventhExpansionGeneratorFinalMult: new Decimal(player.seventhExpansionGeneratorFinalMult),
	eighthExpansionGeneratorFinalMult: new Decimal(player.eighthExpansionGeneratorFinalMult),
		
	expansionUpgrade1: player.expansionUpgrade1,
	expansionUpgrade2: player.expansionUpgrade2,
	expansionUpgrade3: player.expansionUpgrade3,
	expansionUpgrade4: player.expansionUpgrade4,
	expansionUpgrade5: player.expansionUpgrade5,
	expansionUpgrade6: player.expansionUpgrade6,
	expansionUpgrade7: player.expansionUpgrade7,
	expansionUpgrade8: player.expansionUpgrade8,
	expansionUpgrade9: player.expansionUpgrade9,
	expansionUpgrade10: player.expansionUpgrade10,
	expansionUpgrade11: player.expansionUpgrade11,
	expansionUpgrade12: player.expansionUpgrade12,
	expansionUpgrade13: player.expansionUpgrade13,
	expansionUpgrade14: player.expansionUpgrade14,
	expansionUpgrade15: player.expansionUpgrade15,
		
	firstExpansionMultFromUpgrades: new Decimal(player.firstExpansionMultFromUpgrades)
	};
}

function maxAll(){
	for (let tier = 1; tier < 9; tier++){
		let name = TIER_NAMES[tier];
		var buys = new Decimal(Decimal.floor(308/tier));
		let b = new Decimal.pow((Decimal.pow(10, tier)), tier);
		let r = new Decimal(Decimal.pow(10, tier));
		let k = player[name + "Bought"];
		let c = player.gold;
		let base = player[name + "Cost"];
		let ratio = Decimal.pow(10, tier);
		let count = Decimal.floor(Decimal.log((c.times(r.minus(1)).div(b.times(r.pow(k)))).plus(1), r));
		/*for (let i = 0; i < count; i++){
			buyGenerator(tier);
		}*/
		if (Decimal.lt(buys, player[name + "Bought"]) || Decimal.eq(buys, player[name + "Bought"])){
			let newB = player[name + "CostAfterInf"];
			let newR = Decimal.pow(Decimal.pow(10, (tier + 10)), (tier + 1));
			let newK = player[name + "Bought"].minus(buys);
			let newRatio = Decimal.pow(Decimal.pow(10, (tier + 10)), (tier + 1));
			let newCount = Decimal.floor(Decimal.log((c.times(newR.minus(1)).div(newB.times(newR.pow(newK)))).plus(1), newR));
			
			player.gold = player.gold.minus((base.minus(base.times(Decimal.pow(newRatio, newCount)))).div(new Decimal(1).minus(newRatio)));
			player[name + "Bought"] = player[name + "Bought"].plus(newCount);
			player[name + "Amount"] = player[name + "Amount"].plus(newCount);
			player[name + "Cost"] = player[name + "Cost"].times(newR.pow(newCount));
			player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuy.pow(newCount));
			
			buyGenerator(tier);

		}
		else if (buys.gt(player[name + "Bought"]) && buys.lt(player[name + "Bought"].plus(count))){
			let subCount = buys.minus(player[name + "Bought"]);
			
			player.gold = player.gold.minus((base.minus(base.times(Decimal.pow(ratio, subCount)))).div(1-ratio));
			player[name + "Bought"] = player[name + "Bought"].plus(subCount);
			player[name + "Amount"] = player[name + "Amount"].plus(subCount);
			player[name + "Cost"] = player[name + "Cost"].times(r.pow(subCount));
			player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuy.pow(subCount));
			
			buyGenerator(tier);
		}
		else if ((buys.layer > count.plus(player[name + "Bought"]).layer) || ((buys.layer == count.plus(player[name + "Bought"]).layer) && (buys.mag > count.plus(player[name + "Bought"]).mag))) {
			player.gold = player.gold.minus((base.minus(base.times(Decimal.pow(ratio, count)))).div(1-ratio));
			player[name + "Bought"] = player[name + "Bought"].plus(count);
			player[name + "Amount"] = player[name + "Amount"].plus(count);
			player[name + "Cost"] = player[name + "Cost"].times(r.pow(count));
			player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuy.pow(count));
			
			buyGenerator(tier);
		}
		if (tier == 1){
			for (i = 0; i < 2000; i++){
				buyAllMult();
			}
		}	
	}
}

document.onkeydown = function(e){
	if (e.which == 77){
		maxAll();
	}
}

function expand(){
	if (player.gold.gt(player.expansionCost) || player.gold.eq(player.expansionCost)){
		player.expansions = player.expansions.plus(1);
		player.expansionPoints = player.expansionPoints.plus(Decimal.floor(Decimal.log10(player.gold).div(new Decimal(300).div(player.expansionPointMult))));
		
		player = {
			gold: new Decimal(10),

			firstCost: new Decimal(10),
			secondCost: new Decimal(1000),
			thirdCost: new Decimal(1e9),
			fourthCost: new Decimal(1e16),
			fifthCost: new Decimal(1e25),
			sixthCost: new Decimal(1e36),
			seventhCost: new Decimal(1e49),
			eighthCost: new Decimal(1e64),

			firstCostAfterInf: new Decimal("1e309"),
			secondCostAfterInf: new Decimal("1e311"),
			thirdCostAfterInf: new Decimal("1e315"),
			fourthCostAfterInf: new Decimal("1e324"),
			fifthCostAfterInf: new Decimal("1e330"),
			sixthCostAfterInf: new Decimal("1e342"),
			seventhCostAfterInf: new Decimal("1e357"),
			eighthCostAfterInf: new Decimal("1e368"),

			firstAmount: new Decimal(1),
			secondAmount: new Decimal(0),
			thirdAmount: new Decimal(0),
			fourthAmount: new Decimal(0),
			fifthAmount: new Decimal(0),
			sixthAmount: new Decimal(0),
			seventhAmount: new Decimal(0),
			eighthAmount: new Decimal(0),

			firstBought: new Decimal(0),
			secondBought: new Decimal(0),
			thirdBought: new Decimal(0),
			fourthBought: new Decimal(0),
			fifthBought: new Decimal(0),
			sixthBought: new Decimal(0),
			seventhBought: new Decimal(0),
			eighthBought: new Decimal(0),

			firstMult: new Decimal(1),
			secondMult: new Decimal(1.5),
			thirdMult: new Decimal(1),
			fourthMult: new Decimal(1),
			fifthMult: new Decimal(1),
			sixthMult: new Decimal(1),
			seventhMult: new Decimal(1),
			eighthMult: new Decimal(1),
			
			firstFinalMult: new Decimal(1),
			secondFinalMult: new Decimal(1),
			thirdFinalMult: new Decimal(1),
			fourthFinalMult: new Decimal(1),
			fifthFinalMult: new Decimal(1),
			sixthFinalMult: new Decimal(1),
			seventhFinalMult: new Decimal(1),
			eighthFinalMult: new Decimal(1),

			firstPrestige: new Decimal(0),
			secondPrestige: new Decimal(0),
			thirdPrestige: new Decimal(0),
			fourthPrestige: new Decimal(0),
			fifthPrestige: new Decimal(0),
			sixthPrestige: new Decimal(0),
			seventhPrestige: new Decimal(0),
			eighthPrestige: new Decimal(0),

			firstPrestigeCost: new Decimal(3),
			secondPrestigeCost: new Decimal(5),
			thirdPrestigeCost: new Decimal(7),
			fourthPrestigeCost: new Decimal(9),
			fifthPrestigeCost: new Decimal(11),
			sixthPrestigeCost: new Decimal(13),
			seventhPrestigeCost: new Decimal(15),
			eighthPrestigeCost: new Decimal(17),

			allMult: new Decimal(1),
			allMultCost: new Decimal(1000),
			allMultFinalCost: new Decimal(1000),
			allMultCostInc: new Decimal(1000),
			allMultGain: new Decimal(1.05),
			allMultGainFinal: new Decimal(player.allMultGainFinal),
			allMultFromPrestige: new Decimal(1),
			allMultBought: new Decimal(0),
			allMultFromFirstExpUp: new Decimal(player.allMultFromFirstExpUp),
			allMultGainFromSecondExpUp: new Decimal(player.allMultGainFromSecondExpUp),

			multPerBuy: new Decimal(1.6),

			maxPrestige: new Decimal(player.maxPrestige),
			
			hasUnlockedExpansion: player.hasUnlockedExpansion,
			expansionPoints: new Decimal(player.expansionPoints),
			expansionPointMult: new Decimal(player.expansionPointMult),
			expansionPointMultCost: new Decimal(player.expansionPointMultCost),
			expansions: new Decimal(player.expansions),
			expansionCost: new Decimal(player.expansionCost),
			
			electricity: new Decimal(0),
	
			firstExpansionGeneratorCost: new Decimal(player.firstExpansionGeneratorCost),
			secondExpansionGeneratorCost: new Decimal(player.secondExpansionGeneratorCost),
			thirdExpansionGeneratorCost: new Decimal(player.thirdExpansionGeneratorCost),
			fourthExpansionGeneratorCost: new Decimal(player.fourthExpansionGeneratorCost),
			fifthExpansionGeneratorCost: new Decimal(player.fifthExpansionGeneratorCost),
			sixthExpansionGeneratorCost: new Decimal(player.sixthExpansionGeneratorCost),
			seventhExpansionGeneratorCost: new Decimal(player.seventhExpansionGeneratorCost),
			eighthExpansionGeneratorCost: new Decimal(player.eighthExpansionGeneratorCost),

			firstExpansionGeneratorAmount: new Decimal(player.firstExpansionGeneratorAmount),
			secondExpansionGeneratorAmount: new Decimal(player.secondExpansionGeneratorAmount),
			thirdExpansionGeneratorAmount: new Decimal(player.thirdExpansionGeneratorAmount),
			fourthExpansionGeneratorAmount: new Decimal(player.fourthExpansionGeneratorAmount),
			fifthExpansionGeneratorAmount: new Decimal(player.fifthExpansionGeneratorAmount),
			sixthExpansionGeneratorAmount: new Decimal(player.sixthExpansionGeneratorAmount),
			seventhExpansionGeneratorAmount: new Decimal(player.seventhExpansionGeneratorAmount),
			eighthExpansionGeneratorAmount: new Decimal(player.eighthExpansionGeneratorAmount),

			firstExpansionGeneratorBought: new Decimal(player.firstExpansionGeneratorBought),
			secondExpansionGeneratorBought: new Decimal(player.secondExpansionGeneratorBought),
			thirdExpansionGeneratorBought: new Decimal(player.thirdExpansionGeneratorBought),
			fourthExpansionGeneratorBought: new Decimal(player.fourthExpansionGeneratorBought),
			fifthExpansionGeneratorBought: new Decimal(player.fifthExpansionGeneratorBought),
			sixthExpansionGeneratorBought: new Decimal(player.sixthExpansionGeneratorBought),
			seventhExpansionGeneratorBought: new Decimal(player.seventhExpansionGeneratorBought),
			eighthExpansionGeneratorBought: new Decimal(player.eighthExpansionGeneratorBought),

			firstExpansionGeneratorMult: new Decimal(player.firstExpansionGeneratorMult),
			secondExpansionGeneratorMult: new Decimal(player.secondExpansionGeneratorMult),
			thirdExpansionGeneratorMult: new Decimal(player.thirdExpansionGeneratorMult),
			fourthExpansionGeneratorMult: new Decimal(player.fourthExpansionGeneratorMult),
			fifthExpansionGeneratorMult: new Decimal(player.fifthExpansionGeneratorMult),
			sixthExpansionGeneratorMult: new Decimal(player.sixthExpansionGeneratorMult),
			seventhExpansionGeneratorMult: new Decimal(player.seventhExpansionGeneratorMult),
			eighthExpansionGeneratorMult: new Decimal(player.eighthExpansionGeneratorMult),
			
			firstExpansionGeneratorFinalMult: new Decimal(player.firstExpansionGeneratorFinalMult),
			secondExpansionGeneratorFinalMult: new Decimal(player.secondExpansionGeneratorFinalMult),
			thirdExpansionGeneratorFinalMult: new Decimal(player.thirdExpansionGeneratorFinalMult),
			fourthExpansionGeneratorFinalMult: new Decimal(player.fourthExpansionGeneratorFinalMult),
			fifthExpansionGeneratorFinalMult: new Decimal(player.fifthExpansionGeneratorFinalMult),
			sixthExpansionGeneratorFinalMult: new Decimal(player.sixthExpansionGeneratorFinalMult),
			seventhExpansionGeneratorFinalMult: new Decimal(player.seventhExpansionGeneratorFinalMult),
			eighthExpansionGeneratorFinalMult: new Decimal(player.eighthExpansionGeneratorFinalMult),
			
			expansionUpgrade1: player.expansionUpgrade1,
			expansionUpgrade2: player.expansionUpgrade2,
			expansionUpgrade3: player.expansionUpgrade3,
			expansionUpgrade4: player.expansionUpgrade4,
			expansionUpgrade5: player.expansionUpgrade5,
			expansionUpgrade6: player.expansionUpgrade6,
			expansionUpgrade7: player.expansionUpgrade7,
			expansionUpgrade8: player.expansionUpgrade8,
			expansionUpgrade9: player.expansionUpgrade9,
			expansionUpgrade10: player.expansionUpgrade10,
			expansionUpgrade11: player.expansionUpgrade11,
			expansionUpgrade12: player.expansionUpgrade12,
			expansionUpgrade13: player.expansionUpgrade13,
			expansionUpgrade14: player.expansionUpgrade14,
			expansionUpgrade15: player.expansionUpgrade15,
			
			firstExpansionMultFromUpgrades: new Decimal(player.firstExpansionMultFromUpgrades)
		};
	}
}

function epMult(){
	if (player.expansionPoints.gt(player.expansionPointMultCost) || player.expansionPoints.eq(player.expansionPointMultCost)){
		player.expansionPoints = player.expansionPoints.minus(player.expansionPointMultCost);
		player.expansionPointMultCost = player.expansionPointMultCost.times(10);
		player.expansionPointMult = player.expansionPointMult.times(2);
	}
}

function buyExpansionGenerator(tier){
	var name = TIER_NAMES[tier];
	if (player.expansionPoints.gt(player[name + "ExpansionGeneratorCost"]) || player.expansionPoints.eq(player[name + "ExpansionGeneratorCost"])){
		player.expansionPoints = player.expansionPoints.minus(player[name + "ExpansionGeneratorCost"]);
		player[name + "ExpansionGeneratorCost"] = player[name + "ExpansionGeneratorCost"].times(3 * tier);
		player[name + "ExpansionGeneratorAmount"] = player[name + "ExpansionGeneratorAmount"].plus(1);
		player[name + "ExpansionGeneratorBought"] = player[name + "ExpansionGeneratorBought"].plus(1);
		player[name + "ExpansionGeneratorMult"] = player[name + "ExpansionGeneratorMult"].times(2);
	}
}

function getExpansionUpgradeTrue(){
	for (let i = 0; i < 15; i++){
		if (player.electricity.gt(Math.pow(10, i * 3))){
			player["expansionUpgrade" + (i + 1)] = true;
		}
	}
}

function getExpansionUpgradeText(){
	if (player.expansionUpgrade1 == true){
		document.getElementById("expUp1").innerHTML = "Gain a 20x multiplier<br>to every generator<br>Current: 20x";
	}
	else document.getElementById("expUp1").innerHTML = "Gain a 20x multiplier<br>to every generator<br>Current: 1x";
	
	if (player.expansionUpgrade2 == true){
		document.getElementById("expUp2").innerHTML = "Multiply your all<br>mult gain by 1.1<br>Current: " + format(player.allMultGainFinal, 2) + "x";
	}
	else document.getElementById("expUp2").innerHTML = "Multiply your all<br>mult gain by 1.1<br>Current: " + format(player.allMultGainFinal, 2) + "x";
		
	if (player.expansionUpgrade3 == true){
		document.getElementById("expUp3").innerHTML = "Increase max prestige<br>by 35<br>Current: " + format(player.maxPrestige, 0);
	}
	else document.getElementById("expUp3").innerHTML = "Increase max prestige<br>by 35<br>Current: 15";
}

function getExpansionUpgradeEffect(){
	if (player.expansionUpgrade1 == true){
		player.allMultFromFirstExpUp = new Decimal(20);
		player.firstExpansionMultFromUpgrades = new Decimal(2);
	}
	if (player.expansionUpgrade2 == true){
		player.allMultGainFromSecondExpUp = new Decimal(1.1);
		player.firstExpansionMultFromUpgrades = new Decimal(4);
	}
	if (player.expansionUpgrade3 == true){
		player.maxPrestige = new Decimal(50);
		player.firstExpansionMultFromUpgrades = new Decimal(8);
	}
	if (player.expansionUpgrade4 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(16);
	}
	if (player.expansionUpgrade5 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(32);
	}
	if (player.expansionUpgrade6 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(64);
	}
	if (player.expansionUpgrade7 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(128);
	}
	if (player.expansionUpgrade8 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(256);
	}
	if (player.expansionUpgrade9 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(512);
	}
	if (player.expansionUpgrade10 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(1024);
	}
	if (player.expansionUpgrade11 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(2048);
	}
	if (player.expansionUpgrade12 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(4096);
	}
	if (player.expansionUpgrade13 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(8192);
	}
	if (player.expansionUpgrade14 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(16384);
	}
	if (player.expansionUpgrade15 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(32768);
	}
}

function updateGUI(){
	document.getElementById("gold").textContent = "You have " + format(player.gold, 1) + " Energy";
	document.getElementById("goldPerSec").textContent = "You're getting " + format((player.firstAmount.times(player.firstMult.times(player.allMult))), 1) + " Energy per second";
	document.getElementById("allMultButton").innerHTML = "Multiply all generators by " + format(player.allMultGainFinal, 2) + "<br>Current multiplyer: " + format(player.allMult, 2) + "<br>Cost: " + format(player.allMultFinalCost, 0);
	document.getElementById("electricity").textContent = "You have " + format(player.electricity, 1) + " Electricity";
	document.getElementById("electricityPerSec").textContent = "You're getting " + format(player.firstExpansionGeneratorAmount.times(player.firstExpansionGeneratorMult) , 1) + " Electricity per second";
	document.getElementById("expansionPoints").innerHTML = "You have " + format(player.expansionPoints, 1) + " Expansion Points" + "<br>EP Multiplier: " + format(player.expansionPointMult, 2);
	document.getElementById("expansionPointMult").innerHTML = "Multiply EP gain by 2x<br>Cost: " + format(player.expansionPointMultCost, 0) + " EP";
	getExpansionUpgradeText();
	for (let tier = 1; tier < 9; tier++){
		let name = TIER_NAMES[tier];
		let display = DISPLAY_NAMES[tier];
		let cost = player[name + "Cost"];
		let expCost = player[name + "ExpansionGeneratorCost"];
		let amount = player[name + "Amount"];
		let expAmount = player[name + "ExpansionGeneratorAmount"];
		let mult = player[name + "FinalMult"];
		let expMult = player[name + "ExpansionGeneratorFinalMult"];
		let bought = player[name + "Bought"];
		let expBought = player[name + "ExpansionGeneratorBought"];
		let prestigeAmount = player[name + "Prestige"];
		let prestigeCost = player[name + "PrestigeCost"];
		
		document.getElementById(name + "Generator").innerHTML = display + " Generator" + "<br>Amount: " + format(amount, 0) + "<br>Bought: " + format(bought, 0) + "<br>Mult: " + format(mult, 2) + "x<br>Cost: " + format(cost, 0);
		
		document.getElementById(name + "ExpansionGenerator").innerHTML = display + " Expansion Generator" + "<br>Amount: " + format(expAmount, 0) + "<br>Bought: " + format(expBought, 0) + "<br>Mult: " + format(expMult, 2) + "x<br>Cost: " + format(expCost, 0) + " EP";
		
		
		if (player.gold.layer < player[name + "Cost"].layer  || ((player.gold.layer == player[name + "Cost"].layer) && player.gold.mag < player[name + "Cost"].mag)) {
			document.getElementById(name + "Generator").classList.add("locked");
		}
		else document.getElementById(name + "Generator").classList.remove("locked");
		
		if (player.expansionPoints.lt(player[name + "ExpansionGeneratorCost"])){
			document.getElementById(name + "ExpansionGenerator").classList.add("locked");
		}
		else document.getElementById(name + "ExpansionGenerator").classList.remove("locked");
		
		if (player[name + "Bought"].layer < player[name + "PrestigeCost"].layer  || ((player[name + "Bought"].layer == player[name + "PrestigeCost"].layer) && player[name + "Bought"].mag < player[name + "PrestigeCost"].mag)) {
			document.getElementById(name + "GeneratorPrestige").classList.add("locked");
		}
		else document.getElementById(name + "GeneratorPrestige").classList.remove("locked");
		
		if ((player.maxPrestige.layer == player[name + "Prestige"].layer) && (player.maxPrestige.mag == player[name + "Prestige"].mag)) {
			document.getElementById(name + "GeneratorPrestige").innerHTML = display + " Generator Prestige" + "<br>Amount: " + "MAX" + " (" + format(player[name + "Prestige"], 0) + ")" + "<br>Cost: " + format(prestigeCost, 0) + " " + display + " Generators Bought";
			document.getElementById(name + "GeneratorPrestige").classList.add("locked");
		}
		else document.getElementById(name + "GeneratorPrestige").innerHTML = display + " Generator Prestige" + "<br>Amount: " + format(prestigeAmount, 0) + "<br>Cost: " + format(prestigeCost, 0) + " " + display + " Generators Bought";
	}
	
	if (player.gold.lt(player.allMultFinalCost)){
		document.getElementById("allMultButton").classList.add("locked");
	} 
	else document.getElementById("allMultButton").classList.remove("locked");
	
	if (player.gold.lt(player.expansionCost)){
		document.getElementById("expansionButton").classList.add("hidden");
	}
	else document.getElementById("expansionButton").classList.remove("hidden");
	
	document.getElementById("expansionButtonText").innerHTML = "EXPANSION " + "<br>Expand for " + format(Decimal.floor(Decimal.log10(player.gold).div(new Decimal(300).div(player.expansionPointMult))), 0) + " expansion points";
	
	if (player.gold.gt(player.expansionCost) || player.gold.eq(player.expansionCost)){
		player.hasUnlockedExpansion = true;
	}
	
	if (player.hasUnlockedExpansion == false){
		document.getElementById("expansionGenerators").classList.add("preExpand");
		document.getElementById("preExpansionText").classList.add("preExpand");
	}
	else {document.getElementById("expansionGenerators").classList.remove("preExpand"); document.getElementById("preExpansionText").classList.remove("preExpand");}
	
	if (player.expansionPoints.lt(player.expansionPointMultCost)){
		document.getElementById("expansionPointMult").classList.add("locked");
	}
	else document.getElementById("expansionPointMult").classList.remove("locked");
}

function productionLoop(diff){
	player.gold = player.gold.plus(player.firstAmount.times(player.firstFinalMult.times(diff)));
	player.electricity = player.electricity.plus(player.firstExpansionGeneratorAmount.times(player.firstExpansionGeneratorFinalMult.times(diff)));
	for (tier = 2; tier < 9; tier++){
		player[TIER_NAMES[tier - 1] + "Amount"] = player[TIER_NAMES[tier - 1] + "Amount"].plus(player[TIER_NAMES[tier] + "Amount"].times(player[TIER_NAMES[tier] + "FinalMult"].times((diff / 5))));
		
		player[TIER_NAMES[tier - 1] + "ExpansionGeneratorAmount"] = player[TIER_NAMES[tier - 1] + "ExpansionGeneratorAmount"].plus(player[TIER_NAMES[tier] + "ExpansionGeneratorAmount"].times(player[TIER_NAMES[tier] + "ExpansionGeneratorFinalMult"].times(diff / 5)));
	}
}

var tabButtons = document.querySelectorAll(".buttonContainer button");
var tabPanels = document.querySelectorAll(".tabPanel");

function showPanel(panelIndex, colorCode){
	tabButtons.forEach(function(node){
		node.style.backgroundColor = "";
		node.style.color = "";
	});
	tabButtons[panelIndex].style.backgroundColor=colorCode;
	tabButtons[panelIndex].color = "white";
	tabPanels.forEach(function(node){
		node.style.display = "none";
	});
	tabPanels[panelIndex].style.display="grid";
}

showPanel(1, '#547480');

function mainLoop(){
	var diff = (Date.now() - lastUpdate) / 1000;
	getFinalGenMult();
	getFinalAllMultCost();
	getFinalAllMultGain();
	getExpansionUpgradeTrue();
	getExpansionUpgradeEffect();
	productionLoop(diff);
	updateGUI();
	lastUpdate = Date.now(); 
}

setInterval(mainLoop, 50);

//setInterval(save, 20000);


updateGUI();



/*

IDEAS!!!

1. Noen unlocks kan være automatisk prestige (resetter ikke), høyere max/ingen max, høyere All Mult osv...
2. Fiks alle de kompliserte "if"ene.
3. Lag en "klokke"
4. Lag alle expansion upgradesa
5. Gjør de ganske bra, for det er ganske lenge mellom hver.
6. Kanskje gi en 2x mult på expgen 1 hver gang du får en ny milestone







*/






