if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}