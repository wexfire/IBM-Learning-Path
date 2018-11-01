
module.exports = {

    index: (req, res) => {
        res.render('index.html');
    },

    ofertas_mp: (req, res) => {
        res.render('ofertas_mp.html')
    },
    
    ofertas_indev: (req, res) => {
        res.render('ofertas_indev.html')
    },

    ofertas_dba: (req, res) => {
        res.render('ofertas_dba.html')
    },

    was: (req, res) => {
        res.render('was.html')
    },

    icp_cursos: (req, res) => {
        res.render('icp_cursos.html')
    },

    foundation_skill_series: (req, res) => {
        res.render('foundation_skill_series.html')
    },

    cursos_icp_4_app: (req, res) => {
        res.render('cursos_icp_4_app.html')
    },

    cognitive_call_center: (req, res) => {
        res.render('cognitive_call_center.html')
    },
    dba_digital_worker: (req, res) => {
        res.render('dba_digital_worker.html')
    },

    api_connect: (req, res) => {
        res.render('api_connect.html')
    },

    aspera: (req, res) => {
        res.render('aspera.html')
    },

    flex_devops: (req, res) => {
        res.render('flex_devops.html')
    },

    ibm_app_connect: (req, res) => {
        res.render('ibm_app_connect.html')
    },

    digitalize_negocios_na_cloud: (req, res) => {
        res.render('digitalize_negocios_na_cloud.html')
    },

    digital_labor: (req, res) => {
        res.render('digital_labor.html')
    },
}