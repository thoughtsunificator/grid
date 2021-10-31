# grid

Grid system

## Getting started

### Installing

`npm install @thoughtsunificator/grid`

## Usage

### Static

You can build the grid all at once:

```javascript
import { Grid } from "@thoughtsunificator/grid"

const grid = new Grid()
grid.build(4)
```

### Dynamic

You could also build the grid cell by cell:

```javascript
import { Grid } from "@thoughtsunificator/grid"

const grid = new Grid()
grid.addCell(0, 1)
grid.addCell(0, 2)
```
