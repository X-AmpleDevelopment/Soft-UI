module.exports = {
    page: '/live-status',
    execute: async (req, res, app, config, themeConfig, info) => {
        res.render('pp', {
            req,
            config,
            themeConfig,
            info
        })
    }
}
