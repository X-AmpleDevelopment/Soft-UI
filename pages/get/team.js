module.exports = {
    page: '/our-team',
    execute: async (req, res, app, config, themeConfig, info) => {
        res.render('team', {
            req,
            config,
            themeConfig,
            info
        })
    }
}
