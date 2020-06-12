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
    req.body.checked1 ?  nation.push('1'): '';
    req.body.checked2 ?  nation.push('2'): '';
    req.body.checked3 ?  nation.push('3'): '';
    req.body.checked4 ?  nation.push('4'): '';
    req.body.checked5 ?  nation.push('5'): '';
    req.body.checked6 ?  nation.push('6'): '';
    req.body.checked7 ?  nation.push('7'): '';
    req.body.checked8 ?  nation.push('8'): '';
    req.body.checked9 ?  nation.push('9'): '';
    req.body.checked10 ?  nation.push('10'): '';
    req.body.checked11 ?  nation.push('11'): '';
    req.body.checked12 ?  nation.push('12'): '';
    req.body.checked13 ?  nation.push('13'): '';
    req.body.checked14 ?  nation.push('14'): '';
    req.body.checked15 ?  nation.push('15'): '';
    req.body.checked16 ?  nation.push('16'): '';
    req.body.checked17 ?  nation.push('17'): '';
    req.body.checked18 ?  nation.push('18'): '';
    req.body.checked19 ?  nation.push('19'): '';
    req.body.checked20 ?  nation.push('20'): '';
    req.body.checked21 ?  nation.push('21'): '';


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
    sql = sql + " WHERE ";
    for(var j = 0 ; j<nation.length-1; j++){
        sql = sql + "nation_id = " +nation[j] +" OR ";
    }
    sql = sql + "nation_id = "+ nation[nation.length-1];
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