module.exports = class Song {

	constructor(data) {
		this.track = data.track;
		this.identifier = data.info.identifier;
		this.isSeekable = data.info.isSeekable;
		this.author = data.info.author;
		this.isStream = data.info.isStream;
		this.length = this.isStream ? 0 : data.info.length;
		this.position = data.info.position;
		this.title = data.info.title;
		this.url = data.info.uri;
	}

};
