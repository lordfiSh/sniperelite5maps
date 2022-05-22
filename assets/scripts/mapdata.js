function getMarkerLabel(namespace, type, id) {
	const typeLabel = $.t(`marker.${type}.label`);
	
	if(!id) return typeLabel;
	
	const translationPath = `${namespace}:${type}.${Math.trunc(id)}.label`;
	const translation = $.t(translationPath);
	const translated = translation !== translationPath;
	
	//console.log(translationPath + " -> " + translation);
	
	if(!translated) return `${typeLabel} ${id}`;
	return `${typeLabel} ${id}: ${translation}`;
}

function getMarkerPopup(namespace, group, id) {
	//const groupFlavorText = $.t(`marker.${group}.desc`);
	
	if(!id) return "";
	
	let translationPath = `${namespace}:${group}.${id}.desc`;
	
	// id 2.1 will expand to 'ns:type.2.desc.1'
	const base = Math.trunc(id);
	if(base !== id) {
		const sub = (id - base).toFixed(1).substring(2);
		translationPath = `${namespace}:${group}.${base}.desc.${sub}`;
	}
	
	const translation = $.t(translationPath);
	const translated = translation !== translationPath;
	
	//console.log(translationPath + " -> " + translation);
	
	if(!translated) return "";
	return translation;
}

function makeMarker(group, id, y, x, label, popup) {
	const position = [y ?? 0, x ?? 0];
	label ??= getMarkerLabel(app.mapData.name, group, id);
	popup ??= getMarkerPopup(app.mapData.name, group, id);
	return {group, position, label, popup};
}
