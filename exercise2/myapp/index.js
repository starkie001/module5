const testRoutes = require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');
const express = require("express");
const app = express();
const port = 3000;

app.use('/mytest', testRoutes);

app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`);
});

app.use('/', express.static('public'))
