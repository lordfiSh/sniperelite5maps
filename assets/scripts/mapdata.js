// display modes:
// - type               Generator
// - type-id            Stone Eagle 1
// - label              Armoury Key
// - label-type         Armoury Key (Key)
// - label-type-id      Orders of the Day (Classified Document 1)
// - label-type-id-sub  Do X (Primary Objective 2.1)

function translateType(type) {
	return $.t(`marker.type.${type}`);
}

function translateLabel(namespace, type, id) {
	return $.t(`${namespace}:${type}.${Math.trunc(id)}.label`, {defaultValue: ""});
}

function translateDescription(namespace, type, id) {
	switch(typeof id) {
		case 'string':
			// String ids refer to the global descriptions table.
			// That way descriptions like "Can be opened with a crowbar."
			// don't have to be repeated.
			return $.t(`marker.description.${type}.${id}`, {defaultValue: ""});
		
		case 'number':
			// Id 2.1 will expand to 'ns:type.2.desc.1'.
			const base = Math.trunc(id);
			if(base !== id) {
				const sub = (id - base).toFixed(1).substring(2);
				return $.t(`${namespace}:${type}.${base}.desc.${sub}`, {defaultValue: ""});
			}
			return $.t(`${namespace}:${type}.${id}.desc`, {defaultValue: ""});
		
		default:
			console.error("Invalid id: " + id);
			return undefined;
	}
}

function getMainLabel(type, id, labelOverride) {
	switch(app.markerTypes[type]?.displayMode) {
		case 'type': return translateType(type);
		case 'type-id': return `${translateType(type)} ${id}`;
		
		case 'label':
		case 'label-type':
		case 'label-type-id':
		case 'label-type-id-sub':
			return labelOverride ?? translateLabel(app.mapData.name, type, id);
			
		default:
			console.error("Invalid display mode");
			return undefined;
	}
}

function getSubLabel(type, id) {
	switch(app.markerTypes[type]?.displayMode) {
		case 'type':
		case 'type-id':
		case 'label': return "";
		
		case 'label-type': return `${translateType(type)}`;
		case 'label-type-id':  return `${translateType(type)} ${typeof id === 'number' ? Math.trunc(id) : id}`;
		case 'label-type-id-sub': return `${translateType(type)} ${id}`;
		
		default:
			return undefined;
	}
}

function getDescription(type, id, descOverride) {
	return descOverride ?? translateDescription(app.mapData.name, type, id);
}

function composePopupContent(mainLabel, subLabel, description, unverified) {
	const prefix = unverified ? `${$.t('marker.unverified')} ` : "";
	const label = subLabel ? `${mainLabel} <small>(${subLabel})</small>` : mainLabel;
	return `<h3>${prefix}${label}</h3>${description}`;
}

function composeSearchLabel(mainLabel, subLabel) {
	return subLabel ? `${subLabel}: ${mainLabel}` : mainLabel;
}

function makeMarker(type, id, y, x, unverified = false, labelOverride, descOverride) {
	const group = app.markerTypes[type]?.group ?? type;
	const position = [y ?? 0, x ?? 0];
	
	const mainLabel = getMainLabel(type, id, labelOverride);
	const subLabel = getSubLabel(type, id);
	const description = getDescription(type, id, descOverride);
	
	const popupContent = composePopupContent(mainLabel, subLabel, description, unverified);
	const searchLabel = composeSearchLabel(mainLabel, subLabel);
	
	return {type, id, group, position, popupContent, searchLabel};
}
