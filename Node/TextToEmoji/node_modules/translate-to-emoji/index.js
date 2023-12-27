/**
 * @constant {Object} emojiMap
 */
export const emojiMap = {
	alien: '👽',
	art: '🎨✏️🖌️🖼️🎭🎬',
	awesome: '🤩',
	bird: '🐦',
	book: '📚',
	cat: '🐱',
	celebrate: '🎉🎊🎈🥳🎆🎇',
	coding: '💻',
	coffee: '☕️',
	cookie: '🍪',
	cool: '😎🕶️🆒❄️🌬️',
	cry: '😢😭😿😥😔😞',
	dog: '🐶',
	elephant: '🐘',
	fire: '🔥',
	fish: '🐠',
	food: '🍕🍔🍟🌮🍣🥗',
	gaming: '🎮🕹️🎲🃏🔫👾',
	guitar: '🎸',
	happy: '😄',
	heart: '❤️',
	heartEyes: '😍',
	hello: '👋',
	laugh: '😂🤣😆😅🤭😄',
	laughing: '😂',
	lightning: '⚡️',
	love: '❤️🧡💛💚💙💜🖤',
	magic: '🔮',
	monkey: '🐵',
	moon: '🌙',
	movie: '🎥🍿🎞️🎬🎦📽️',
	music: '🎵🎶🎤🎸🎹🎧',
	nature: '🌿🌳🌼🌸🌻🌺',
	panda: '🐼',
	party: '🎉🥳🎈🎊🍾🎂',
	pizza: '🍕',
	rainbow: '🌈',
	relax: '🌴⛱️🍹😌🧘\u200d♀️🛀',
	robot: '🤖',
	rocket: '🚀',
	rose: '🌹',
	sad: '😢',
	shopping: '🛍️💳💰👜👠🛒',
	sleep: '😴🛌💤🌙🌝💫',
	smile: '😊🙂😃😄😁😆',
	snowflake: '❄️',
	sports: '⚽🏀🏈🎾🏐🥊',
	star: '⭐️',
	study: '📚✏️🎓📖🎒🧠',
	success: '🎉🏆✨🌟🙌🥇',
	sun: '☀️',
	sunglasses: '😎',
	thumbsDown: '👎',
	thumbsUp: '👍',
	travel: '✈️🌍🏞️🗺️🚀🚁',
	unicorn: '🦄',
	work: '💼👔👩\u200d💻👨\u200d💼📊📚'
};

/**
 * Translates a text to emoji
 * @param {string} text
 * @returns {string} The emoji-translated text
 */
export function translateToEmoji(text) {
	return text.replace(/\b(\w+)\b/g, (match) => {
		const emoji = emojiMap[match.toLowerCase()];
		return emoji ? emoji : match;
	});
}

export default translateToEmoji;
