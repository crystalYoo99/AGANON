const express = require('express');
const os = require('os');
const router = express.Router();
const mysql = require('mysql')
const db = require('../dbconnection');

/* GET home page. */
router.get('/api/getUsername', (req, res, next) => {
    res.send({ username: os.userInfo().username });
});

//추후 작업 요망 to jisu
router.post('/AIM_contack', (req, res) => {

    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];
    //Language

    req.body.language_id ? qry.push('name') : '';
    req.body.language_id ? qry.push('language_id') : '';
    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 1; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + "FROM (SELECT * FROM Nation INNER JOIN Nation_Language USING(nation_id)) AS na INNER JOIN Language USING(language_id)";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/capital', (req, res) => {
    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];

    //Capital
    req.body.capital_id ? qry.push('capital_id') : '';
    req.body.capital_name ? qry.push('name') : '';

    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 0; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + " FROM (SELECT * FROM Nation INNER JOIN Nation_Capital USING(nation_id)) AS na INNER JOIN Capital USING(capital_id)";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/language', (req, res) => {
    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];
    //Language

    req.body.language_id ? qry.push('name') : '';
    req.body.language_id ? qry.push('language_id') : '';
    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 1; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + "FROM (SELECT * FROM Nation INNER JOIN Nation_Language USING(nation_id)) AS na INNER JOIN Language USING(language_id)";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/Missionary', (req, res) => {
    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];
    //Missionary
    req.body.missionary_id ? qry.push('missionary_id') : '';
    req.body.name_en ? qry.push('name_en') : '';
    req.body.contact_info ? qry.push('contact_info') : '';
    req.body.city_name ? qry.push('city_name') : '';

    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 1; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + " FROM (SELECT * FROM (SELECT * FROM Nation INNER JOIN City USING (nation_id)) AS A INNER JOIN Missionary USING( city_id)) AS B ";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/Emergency_info', (req, res) => {
    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];
    //Emergency_info
    req.body.info_id ? qry.push('info_id') : '';
    req.body.embassy ? qry.push('embassy') : '';
    req.body.emergency_medical_service ? qry.push('emergency_medical_service') : '';
    req.body.policy ? qry.push('policy') : '';
    req.body.fire_station ? qry.push('fire_station') : ''; //+info_id


    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 0; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + " FROM Nation INNER JOIN Emergency_info USING( info_id) ";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/Gorv', (req, res) => {

    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];
    //Gorv._Type
    req.body.gorv_type_id ? qry.push('gorv_type_id') : '';
    req.body.gorv_type_name ? qry.push('gorv_type_name') : '';
    req.body.description ? qry.push('description') : ''; //+gorv_type_id


    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 0; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + " FROM `Gorv._Type` INNER JOIN Nation USING(gorv_type_id) ";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/Disease', (req, res) => {
    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];
    //Disease
    req.body.symptom_id ? qry.push('symptom_id') : '';
    req.body.disease_id ? qry.push('disease_id') : '';
    req.body.disease_name ? qry.push('disease_name') : '';
    req.body.disease_type ? qry.push('disease_type') : '';
    req.body.disease_rate ? qry.push('disease_rate') : '';
    req.body.incubation_period ? qry.push('incubation_period') : '';
    req.body.symptom_id ? qry.push('symptom_id') : '';
    req.body.discription ? qry.push('discription') : '';

    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 0; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + " FROM (SELECT * FROM (SELECT * FROM Health inner join Nation using (nation_id)) AS  A INNER JOIN Disease USING(disease_id)) AS B INNER JOIN Symptom USING(symptom_id) ";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/Mission_School', (req, res) => {
    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];
    //Mission_School
    req.body.city_id ? qry.push('city_id') : '';
    req.body.mission_school_id ? qry.push('mission_school_id') : '';
    req.body.foundation_year ? qry.push('foundation_year') : '';
    req.body.city_name ? qry.push('city_name') : '';
    req.body.mission_school_id ? qry.push('mission_school_id') : '';

    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 0; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + " FROM (SELECT * FROM (SELECT * FROM Nation INNER JOIN City USING (nation_id)) AS A INNER JOIN Mission_School USING( city_id)) AS B ";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/Economy', (req, res) => {

    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];
    //Economy
    req.body.gdp ? qry.push('gdp') : '';
    req.body.gdp_rank_world ? qry.push('gdp_rank_world') : '';


    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 0; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + " FROM `Economy` INNER JOIN Nation USING(nation_id) ";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/Education', (req, res) => {

    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];
    //Education
    
    req.body.year ? qry.push('year') : '';
    req.body.Children_outSchool ? qry.push('Children_outSchool') : '';
    req.body.Secondary_outSchool ? qry.push('Secondary_outSchool') : '';


    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 0; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + " FROM `Education` INNER JOIN Nation USING(nation_id) ";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/Nation', (req, res) => {

    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];

    req.body.latitude ? qry.push('latitude') : '';
    req.body.longitude ? qry.push('longitude') : '';
    req.body.gorv_type ? qry.push('gorv_type_name') : '';


    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 0; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + " FROM `Gorv._Type` INNER JOIN Nation USING(gorv_type_id) ";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/AIM_contact', (req, res) => {

    var sql = "SELECT nation_name "
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';

    var qry = [];

    req.body.contack ? qry.push('contack') : '';
    req.body.nation_name ? qry.push('nation_name') : '';

    if (nation.length == 0) res.send();
    if (qry.length == 0) {
        res.send();
    } else {
        for (var i = 0; i < qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + " FROM `AIM_contack` ";

    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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

router.post('/ict', (req, res) => {
    var sql = "SELECT nation_name, ?? ";
    console.log(req.body);
<<<<<<< Updated upstream
=======
    var string_name;
    req.body.AIM_KOREA_M ? string_name = "AIM_KOREA_M" : '';
    req.body.City ? string_name = "City" : '';
    req.body.Climate ? string_name = "Climate" : '';
    req.body.Economy ? string_name = "Economy" : '';
    req.body.Education ? string_name = "Education" : '';
    req.body.Energy ? string_name = "Energy" : '';
    req.body.Health ? string_name = "Health" : '';
    req.body.ICT_ ? string_name = "ICT" : '';
    req.body.Infrastructure ? string_name = "Infrastructure" : '';
    req.body.Literacy_rate ? string_name = "Literacy_rate" : '';
    req.body.M_church ? string_name = "M_church" : '';
    req.body.Nation ? string_name = "Nation" : '';
    req.body.Nation_Language ? string_name = "Nation_Language" : '';
    req.body.Population ? string_name = "Population" : '';
    req.body.Religious_ratio ? string_name = "Religious_ratio" : '';

    string_name = string_name + " INNER JOIN Nation USING(nation_id) "

>>>>>>> Stashed changes
    var nation = [];
    req.body.checked1 ? nation.push('1') : '';
    req.body.checked2 ? nation.push('2') : '';
    req.body.checked3 ? nation.push('3') : '';
    req.body.checked4 ? nation.push('4') : '';
    req.body.checked5 ? nation.push('5') : '';
    req.body.checked6 ? nation.push('6') : '';
    req.body.checked7 ? nation.push('7') : '';
    req.body.checked8 ? nation.push('8') : '';
    req.body.checked9 ? nation.push('9') : '';
    req.body.checked10 ? nation.push('10') : '';
    req.body.checked11 ? nation.push('11') : '';
    req.body.checked12 ? nation.push('12') : '';
    req.body.checked13 ? nation.push('13') : '';
    req.body.checked14 ? nation.push('14') : '';
    req.body.checked15 ? nation.push('15') : '';
    req.body.checked16 ? nation.push('16') : '';
    req.body.checked17 ? nation.push('17') : '';
    req.body.checked18 ? nation.push('18') : '';
    req.body.checked19 ? nation.push('19') : '';
    req.body.checked20 ? nation.push('20') : '';
    req.body.checked21 ? nation.push('21') : '';


    var qry = [];
<<<<<<< Updated upstream
    req.body.nation_id ?  qry.push('nation_id'): '';
    req.body.year ?  qry.push('year') :  '';
    req.body.internet_users ?  qry.push('internet_users') :  '';
    req.body.mobile_subscribers ?  qry.push('mobile_subscribers') :  '';
    req.body.main_telephone_lines ?  qry.push('main_telephone_lines') :  '';
    if(nation.length == 0) res.send();
    if(qry.length == 0){
=======
    req.body.nation_id ? qry.push('nation_id') : '';
    req.body.nation_name ? qry.push('nation_name') : '';
    req.body.year ? qry.push('year') : '';
    req.body.name ? qry.push('name') : '';
    //ICT
    req.body.internet_users ? qry.push('internet_users') : ''; //ict
    req.body.mobile_subscribers ? qry.push('mobile_subscribers') : ''; //ict
    req.body.main_telephone_lines ? qry.push('main_telephone_lines') : ''; //ict
    //AIM_contack
    req.body.AIM_contack_id ? qry.push('AIM_contack_id') : '';
    req.body.contack ? qry.push('contack') : '';
    //AIM_KOREA_M
    req.body.AIM_K_M_id ? qry.push('AIM_K_M_id') : '';
    req.body.start_date ? qry.push('start_date') : '';
    req.body.location ? qry.push('location') : '';
    //City
    req.body.city_name ? qry.push('city_name') : ''; //+city_id
    //Climate
    req.body.temp_high ? qry.push('temp_high') : '';
    req.body.temp_low ? qry.push('temp_low') : '';
    req.body.month ? qry.push('month') : '';
    req.body.type ? qry.push('type') : '';
    //Energy
    req.body.consumption ? qry.push('consumption') : '';
    req.body.energy_id ? qry.push('energy_id') : '';
    //Infrastructure
    req.body.total_freight ? qry.push('total_freight') : '';
    req.body.passenges ? qry.push('passenges') : '';
    req.body.total_road_km ? qry.push('total_road_km') : '';

    //Literacy_rate
    req.body.total ? qry.push('total') : '';
    //M_church
    req.body.church_id ? qry.push('church_id') : '';
    
    //Nation
    req.body.latitude ? qry.push('latitude') : '';
    req.body.longitude ? qry.push('longitude') : '';
    req.body.info_id ? qry.push('info_id') : '';
    req.body.gorv_type_id ? qry.push('gorv_type_id') : '';
    //Nation_Capital
    req.body.capital_id ? qry.push('capital_id') : '';
    //Nation_Language
    req.body.language_id ? qry.push('language_id') : '';
    //Population
    req.body.urban ? qry.push('urban') : '';
    req.body.rural ? qry.push('rural') : '';
    req.body.total ? qry.push('total') : '';
    //Religious_ratio
    req.body.christianity ? qry.push('christianity') : '';
    req.body.islam ? qry.push('islam') : '';
    req.body.etc ? qry.push('etc') : '';


    if (nation.length == 0) res.send();
    if (qry.length == 0) {
>>>>>>> Stashed changes
        res.send();
    } else {
        for (var i = 1; i < qry.length; i++)
            sql = sql + ", ?? "
    }
<<<<<<< Updated upstream
    sql = sql + "FROM `ICT`";
=======
    sql = sql + "FROM " + string_name;
>>>>>>> Stashed changes
    sql = sql + " WHERE ";
    for (var j = 0; j < nation.length - 1; j++) {
        sql = sql + "nation_id = " + nation[j] + " OR ";
    }
    sql = sql + "nation_id = " + nation[nation.length - 1];
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