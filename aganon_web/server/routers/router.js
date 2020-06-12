const express = require('express');
const os = require('os');
const router = express.Router();
const mysql = require('mysql')
const db = require('../dbconnection');

/* GET home page. */
router.get('/api/getUsername', (req, res, next) => {
    res.send({ username: os.userInfo().username });
});

router.post('/ict', (req, res) => {
    var sql = "SELECT ?? ";
    console.log(req.body);
    var nation = [];
    for(var index_n = 1; index_n<=21; index_n++){
        var s_nation = 'checked'+index_n;
        req.body.s_nation ?  nation.push(req.body.s_nation.parseInt): '';
    }

    var qry = [];
    req.body.nation_id ?  qry.push('nation_id'): '';
    req.body.year ?  qry.push('year') :  '';
    req.body.internet_users ?  qry.push('internet_users') :  '';
    req.body.mobile_subscribers ?  qry.push('mobile_subscribers') :  '';
    req.body.main_telephone_lines ?  qry.push('main_telephone_lines') :  '';
    if(nation.length == 0) res.send();
    if(qry.length == 0){
        res.send();
    }else{
        for(var i = 1 ; i< qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + "FROM `ICT`";
    sql = sql + "WHERE";
    for(var j = 0 ; j<nation.length-1; j++){
        sql = sql + "nation_id =" + nation[j] +" OR ";
    }
    sql = sql + "nation_id =" + nation[nation.length-1];

    
    sql = mysql.format(sql, qry);
    console.log(sql);
    
    db.query(sql, (err, rows) => {
    if (!err) {
        res.send(rows);
    } else {
        console.log(`query error : ${err}`);
        res.send(err);
    }
    });
});

module.exports = router;