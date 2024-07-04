module.exports = {
    page: '/about-us',
    execute: async (req, res, app, config, themeConfig, info) => {
        res.render('ab', {
            req,
            config,
            themeConfig,
            info
        })
    }
}
