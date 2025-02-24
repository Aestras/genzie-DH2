/**
 * A lot of Gen 1 moves have to be updated due to different mechanics.
 * Some moves have had major changes, such as Bite's typing.
 */

export const Moves: {[k: string]: ModdedMoveData} = {
	brutalswing: {
		inherit: true,
		category: "Special",
		type: "Dark",
		gen: 1,
	},
    gigatonhammer: {
		inherit: true,
		category: "Physical",
		type: "Rock",
		gen: 1,
	},
	bulletpunch: {
		inherit: true,
		category: "Physical",
		type: "Steel",
		gen: 1,
	},
	darkvoid: { // unused
		inherit: true,
		category: "Status",
		type: "Dark",
		gen: 1,
	},
	dazzlinggleam: {
		inherit: true,
		category: "Special",
		type: "Fairy",
		gen: 1,
	},
	drainingkiss: {
		inherit: true,
		category: "Special",
		type: "Fairy",
		gen: 1,
	},
	fairywind: {
		inherit: true,
		category: "Special",
		type: "Fairy",
		gen: 1,
	},
	faketears: {
		inherit: true,
		category: "Status",
		type: "Dark",
		target: "normal",
		gen: 1,
		boosts: {
			spd: -2,
			spa: -2,
		},
	},
	falsesurrender: {
		inherit: true,
		category: "Special",
		type: "Dark",
		gen: 1,
	},
	feintattack: {
		inherit: true,
		category: "Special",
		type: "Dark",
		gen: 1,
	},
	irondefense: {
		inherit: true,
		category: "Status",
		type: "Steel",
		gen: 1,
	},
	ironhead: {
		inherit: true,
		category: "Physical",
		type: "Steel",
		gen: 1,
	},
	kowtowcleave: { // filled in manually
		num: -100,
		inherit: true,
		basePower: 85,
		accuracy: true,
		pp: 10,
		type: "Dark",
		target: "normal",
		secondary: null,
		priority: 0,
		name: "Kowtow Cleave",
	},
	magnetbomb: {
		inherit: true,
		category: "Physical",
		type: "Steel",
		gen: 1,
	},
	metalsound: {
		inherit: true,
		category: "Status",
		type: "Steel",
		gen: 1,
		boosts: {
			spd: -2,
			spa: -2,
		},
	},
	mirrorshot: {
		inherit: true,
		category: "Physical",
		type: "Steel",
		gen: 1,
	},
	naturesmadness: { // unused
		inherit: true,
		category: "Special",
		type: "Fairy",
		gen: 1,
	},
	nastyplot: {
		inherit: true,
		boosts: {
			spd: 2,
			spa: 2,
		},
		category: "Status",
		type: "Dark",
		gen: 1,
	},
	nightslash: {
		inherit: true,
		category: "Special",
		type: "Dark",
		gen: 1,
	},
	playrough: {
		inherit: true,
		category: "Special",
		type: "Fairy",
		gen: 1,
	},
	ruination: { // unused; filled in manually
		num: -101,
		inherit: true,
		ignoreImmunity: true,
		basePower: 1,
		accuracy: 90,
		damageCallback(pokemon, target) {
			return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
		},
		pp: 10,
		type: "Dark",
		target: "normal",
		secondary: null,
		priority: 0,
		name: "Ruination",
	},
	shelter: { // unused; filled in manually
		inherit: true,
		category: "Status",
		type: "Steel",
		gen: 1,
		accuracy: true,
		basePower: 0,
		name: "Shelter",
		pp: 10,
		secondary: null,
		target: "self",
	},
	smartstrike: {
		inherit: true,
		category: "Physical",
		type: "Steel",
		gen: 1,
	},
	charm: {
		inherit: true,
		type: "Fairy",
		gen: 1
	},
	sweetkiss: {
		inherit: true,
		category: "Status",
		type: "Fairy",
		gen: 1,
	},
// Prototype Move restorations begin here.
	powdersnow: { // copypasted from modern
		inherit: true,
		num: 181,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Powder Snow",
		pp: 25,
		priority: 0,
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal", // reduces any chance of fuckery
		type: "Ice",
		gen: 1,
	},
	uppercut: { // copypasted from modern
		inherit: true,
		num: 182,
		accuracy: 80,
		basePower: 55,
		category: "Physical",
		name: "Uppercut",
		pp: 15,
		priority: 0,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fighting",
		gen: 1,
		shortDesc: "No additional effect.",
	},
};
