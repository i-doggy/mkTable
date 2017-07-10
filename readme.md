# Table function

## Arguments definition
```
head = [header1, header2, header3...];
row = [data1, data2, data3...];
//WARNING: to create an empty cell use null, omitting of dataN will cause dataN+1 be used instead(if any).
body = [row1, row2, row3...];
//WARNING: to create an empty row use [null, null, null...] (or just [null]), omitting rowN will cause rowN+1 be used instead(if any).
//NOTE: previous warnings caused by the realization of Array.forEach method.
```
## Primary using
```javascript
//NOTE: both head and body can be omitted.
//NOTE: head and body both will be added to tBody.
//with 'new' operator(returns custom object):
var s = new Table(head, body);
document.body.append(s.element);
//OR without it(returns Table element):
var s = Table(head, body);
document.body.append(s);
```
## Methods of custom Table object
```
addLine(row) - appends row to the table
insertLineBefor(row, index) - insert row before row with index(throws error if out of range)
removeLine(index) - remove row with index(throws error if out of range)
addCaption(caption) - adds caption element to table and returns it
removeCaption - removes current table's caption element and returns it
getCaption - returns current table's caption element(if is)
```

## Example
```javascript
   var t = new Table(['Username', 'status', 'last seen'],          // Head 
                    [['Skydragon59', 'admin', '08-12-2016'],       // Row1
                     ['dogKeeper17', 'user', '12-12-2016'],        // Row2
                     ['Dogio Majoris', 'moderator', '12-12-2016'], // ...       Body
                     ['Davy Jons', 'PIRATE', '13-06-1716'],        // ...
                     ['spartanCat', 'user', '10-12-2016']]);       // RowN(N=5)
   t.addCaption('Users');                                          // Caption
   document.body.append(t.element);
 ```
 Will append this table to body:
 ```
                Users                    <- Caption
  	Username       status    last seen   <- Head
   Skydragon59    admin     08-12-2016   <- Row1      <-
   dogKeeper17    user      12-12-2016   <- Row2        |
   Dogio Majoris  moderator 12-12-2016   ...            |- Body
   Davy Jons      PIRATE    13-06-1716   ...            |
   spartanCat     user      10-12-2016   <- RowN(N=5) <-
```