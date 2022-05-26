function getGroupLabel(group) {
	return $.t(`marker.${group}.label`);
}

function getMarkerLabel(namespace, group, id) {
	const translationPath = `${namespace}:${group}.${Math.trunc(id)}.label`;
	const translation = $.t(translationPath);
	return translation !== translationPath ? translation : "";
}

function getMarkerDescription(namespace, group, id) {
	let translationPath = `${namespace}:${group}.${id}.desc`;
	
	// id 2.1 will expand to 'ns:type.2.desc.1'
	const base = Math.trunc(id);
	if(base !== id) {
		const sub = (id - base).toFixed(1).substring(2);
		translationPath = `${namespace}:${group}.${base}.desc.${sub}`;
	}

	const translation = $.t(translationPath);
	return translation !== translationPath ? translation : "";
}

function composeSearchLabel(groupLabel, id, label) {
	if(!id) return `${groupLabel}`;
	return `${groupLabel} ${id}: ${label}`;
}

function composePopupContent(groupLabel, id, label, desc, unverified) {
	if(!id) return `<h3>${groupLabel}</h3>`;
	label = unverified ? $.t('marker.unverified', {label}) : label;
	return `<h3>${label} <small>(${groupLabel} ${id})</small></h3>${desc}`;
}

function makeMarker(group, id, y, x, unverified = false, label, desc) {
	const position = [y ?? 0, x ?? 0];
	const groupLabel = getGroupLabel(group);
	label ??= getMarkerLabel(app.mapData.name, group, id);
	desc ??= getMarkerDescription(app.mapData.name, group, id);
	const searchLabel = composeSearchLabel(groupLabel, id, label);
	const popupContent = composePopupContent(groupLabel, id, label, desc, unverified);
	return {position, id, group, groupLabel, label, desc, popupContent, searchLabel};
}
