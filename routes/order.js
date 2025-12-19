'user strcit';
var fs = require('fs')
module.exports = (app,db) => {
    //https://github.com/BRIKEV/express-jsdoc-swagger
    //Get all the beers available for ordering
    /**
     * GET /v1/order
     * @summary Use to list all available beer(Excessive Data Exposure)(PII Exposure/Oversharing)
     * @tags beer
     * @return {array<Beer>} 200 - success response - application/json
     */
    app.get('/v1/order', (req,res) =>{
        db.beer.findAll({include: "users"})
            .then(beer => {
                res.json(beer);
            });
    });
    /**
     * GET /v1/beer-pic/
     * @summary Get a picture of a beer (Path Traversal)
     * @note http://localhost:5000/v1/beer-pic/?picture=../.env
     * @param {string} picture.query.required picture identifier
     * @tags beer
     */
     const fs = require('fs');
const path = require('path');

app.get('/v1/beer-pic/', (req, res) => {
    const filename = req.query.picture;
     // 🔐 BLOCK PATH TRAVERSAL
    if (!filename) {
        return res.status(403).json({ error: 'Bad ' });
    }

    const uploadsDir = path.resolve(__dirname, '../../../uploads');
    const requestedPath = path.resolve(uploadsDir, filename);

    // 🔐 BLOCK PATH TRAVERSAL
    if (!requestedPath.startsWith(uploadsDir)) {
        return res.status(403).json({ error: 'Access denied' });
    }

    fs.readFile(requestedPath, (err, data) => {
        if (err) {
            return res.status(404).json({ error: 'File not found' });
        }

        // Optional: force image-only response
        res.type(path.extname(filename) || 'image/jpeg');
        res.send(data);
    });
});

        /**
     * GET /v1/search/{filter}/{query}
     * @summary Search for a specific beer (SQL Injection)
     * @description sqlmap -u 'http://localhost:5000/search/id/2*'
     * @tags beer
     * @param {string} query.path - the query to search for
     * @param {string} filter.path - the column
     * @return {array<Beer>} 200 - success response - application/json
     */
         app.get('/v1/search/:filter/:query', (req,res) =>{
            
            // ✅ السطرين دول كانوا ناقصين، وهما اللي بيجيبوا البيانات من الرابط
            const filter = req.params.filter;
            const query = req.params.query;

            // 1. Whitelist Validation
            const allowedFilters = ['name', 'price', 'id', 'currency', 'stock'];
            if (!allowedFilters.includes(filter)) {
                return res.status(400).send("Invalid filter column");
            }

            // 2. Parameterization
            const sql = `SELECT * FROM beers WHERE ${filter} = :queryVal`;

            const beers = db.sequelize.query(sql, { 
                replacements: { queryVal: query }, // Sequelize will handle escaping
                type: db.sequelize.QueryTypes.SELECT 
            }).then(beers => {
                res.status(200).send(beers);

            }).catch(function (err) {
                // Handle error
                console.error(err);
                res.status(500).send("Error executing query");
            });
        });
    };