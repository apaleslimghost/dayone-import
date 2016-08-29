const {spawnSync} = require('child_process');

const formatNoteBody = ({title, content, tags}) => `**${title}**

${content}

${tags.map(tag => `#${tag}`).join(' ')}`;


function dayone(note) {
	const {stdout, stderr, status, error} = spawnSync('dayone', [
		`-d="${note.created.toLocaleString()}"`,
		'new',
	], {
		input: formatNoteBody(note),
	});

	if(error) throw error;
	if(status !== 0) throw new Error(`Day One status ${status}: ${stdout} ${stderr}`);

	console.log(`${note.title} : ${stdout.toString('utf8').trim()}`);
}

module.exports = notes => notes.forEach(dayone);
