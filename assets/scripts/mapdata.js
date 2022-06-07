function getTypeLabel(type) {
	return $.t(`marker.type.${type}`);
}

function getMarkerLabel(namespace, type, id) {
	const translationPath = `${namespace}:${type}.${Math.trunc(id)}.label`;
	const translation = $.t(translationPath);
	return translation !== translationPath ? translation : "";
}

function getMarkerDescription(namespace, type, id) {
	let translationPath = `${namespace}:${type}.${id}.desc`;
	
	// id 2.1 will expand to 'ns:type.2.desc.1'
	const base = Math.trunc(id);
	if(base !== id) {
		const sub = (id - base).toFixed(1).substring(2);
		translationPath = `${namespace}:${type}.${base}.desc.${sub}`;
	}

	const translation = $.t(translationPath);
	return translation !== translationPath ? translation : "";
}

function composeSearchLabel(typeLabel, id, label) {
	if(!id) return `${typeLabel}`;
	return `${typeLabel} ${id}: ${label}`;
}

function truncateId(type, id) {
	if(app.markerTypes[type]?.showSubIds && Math.trunc(id) !== id) return id.toFixed(1);
	return id.toFixed(0);
}

function composePopupContent(typeLabel, id, label, desc, type, unverified) {
	const prefix = unverified ? `${$.t('marker.unverified')} ` : "";
	if(id === 0) return `<h3>${prefix}${typeLabel}</h3>`;
	if(id === -1) return `<h3>${prefix}${label}</h3>${desc}`;
	
	return `<h3>${prefix}${label} <small>(${typeLabel} ${truncateId(type, id)})</small></h3>${desc}`;
}

function makeMarker(type, id, y, x, unverified = false, label, desc) {
	const group = app.markerTypes[type]?.group ?? type;
	const position = [y ?? 0, x ?? 0];
	const typeLabel = getTypeLabel(type);
	label ??= getMarkerLabel(app.mapData.name, type, id);
	desc ??= getMarkerDescription(app.mapData.name, type, id);
	const searchLabel = composeSearchLabel(typeLabel, id, label);
	const popupContent = composePopupContent(typeLabel, id, label, desc, type, unverified);
	return {position, id, type, group, typeLabel, label, desc, popupContent, searchLabel};
}
