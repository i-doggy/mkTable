function Table(head, body) {
	var table = document.createElement('TABLE');
	
	if(head) [head].forEach(addLineToBody(table, 'TH'));
	if(body) body.forEach(addLineToBody(table, 'TD'));
		
	if(this.constructor != Table) return table;
	this.element = table;
	
	return this;
}

Table.prototype.addLine = function(items) {
	[items].forEach(addLineToBody(this.element, 'TD'));
}

Table.prototype.insertLineBefore = function(index, items) {
	if(index.inRange(-2, this.element.tBodies[0].children.length))
		[items].forEach(addLineToBody(this.element, 'TD', index));
	else 
		throw new RangeError('Out of range');
}

Table.prototype.removeLine = function(index) {
	if(index.inRange(-1, this.element.tBodies[0].children.length))
		this.element.deleteRow(index);
	else
		throw new RangeError('Out of range');
}

Table.prototype.addCaption = function(newCaption) {
	if(newCaption === undefined) return this.getCaption();
	var captionElement = this.element.createCaption();
	captionElement.innerHTML = newCaption;
	return captionElement;
}

Table.prototype.removeCaption = function() {
	var prevCap = this.getCaption();
	this.element.deleteCaption();
	return prevCap;
}

Table.prototype.getCaption = function() {
	return this.element.caption;
}

function addLineToBody(table, type, index) {
	if(index === undefined) index = -1;
	return function(item) {
		var line = table.insertRow(index);
		item.forEach(addItemToLine(line, type));
	};
}

function addItemToLine(line, type) {
	if(!type || type.toUpperCase() != 'TH' && type.toUpperCase() != 'TD') type = 'TD';
	return function(item) {
		var cell = document.createElement(type);
		cell.innerHTML = item ? item : '';
		line.append(cell);
	};
}

Number.prototype.inRange = function(start, end) {
	if(this > start && this < end) return true;
	else return false;
}