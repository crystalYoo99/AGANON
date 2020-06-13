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
    var string_name;
    req.body.AIM_contack ?  string_name = "AIM_contack": '';
    req.body.AIM_KOREA_M ? string_name = "AIM_KOREA_M": '';
    req.body.Capital ? string_name = "Capital": '';
    req.body.City ? string_name = "City" : '';
    req.body.Climate ? string_name = "Climate": '';
    req.body.Disease ? string_name = "Disease" : '';
    req.body.Economy ? string_name = "Economy": '';
    req.body.Education ? string_name = "Education": '';
    req.body.Emergency_info ? string_name = "Emergency_info": '';
    req.body.Energy ? string_name = "Energy": '';
    req.body.Gorv_type ? string_name = "Gorv._Type" : '';
    req.body.Health ? string_name = "Health" : '';
    req.body.ICT_ ?  string_name = "ICT": '';
    req.body.Infrastructure ?  string_name = "Infrastructure": '';
    req.body.Language ?  string_name = "Language": '';
    req.body.Literacy_rate ? string_name = "Literacy_rate": '';
    req.body.M_church ? string_name = "M_church": '';
    req.body.Missionary ? string_name = "Missionary": '';
    req.body.Mission_School ? string_name =  "Mission_School": '';
    req.body.Nation ? string_name =  "Nation": '';
    req.body.Nation_Capital ? string_name =  "Nation_Capital": '';
    req.body.Nation_Language ? string_name =  "Nation_Language" : '';
    req.body.Nation_Missionary ? string_name =  "Nation_Missionary" : '';
    req.body.Nation_M_School ? string_name =  "Nation_M_School" : '';
    req.body.Population ? string_name =  "Population": '';
    req.body.Religious_ratio ? string_name =  "Religious_ratio": '';
    req.body.Symptom ? string_name =  "Symptom": '';


    console.log(string_name);
 

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
    req.body.nation_name ?  qry.push('nation_name'): '';
    req.body.year ?  qry.push('year') :  '';
    req.body.name ?  qry.push('name') :  '';
//ICT
    req.body.internet_users ?  qry.push('internet_users') :  ''; //ict
    req.body.mobile_subscribers ?  qry.push('mobile_subscribers') :  ''; //ict
    req.body.main_telephone_lines ?  qry.push('main_telephone_lines') :  ''; //ict
//AIM_contack
    req.body.AIM_contack_id ?  qry.push('AIM_contack_id') :  '';
    req.body.contack ?  qry.push('contack') :  '';
//AIM_KOREA_M
    req.body.AIM_K_M_id ?  qry.push('AIM_K_M_id') :  '';
    req.body.start_date ?  qry.push('start_date') :  '';
    req.body.location ?  qry.push('location') :  '';
//Capital
    req.body.capital_id ?  qry.push('capital_id') :  '';
//City
    req.body.city_name ?  qry.push('city_name') :  ''; //+city_id
//Climate
    req.body.temp_high ?  qry.push('temp_high') :  '';
    req.body.temp_low ?  qry.push('temp_low') :  '';
    req.body.month ?  qry.push('month') :  '';
    req.body.type ?  qry.push('type') :  '';
//Disease
    req.body.symptom_id ?  qry.push('symptom_id') :  '';
    req.body.disease_id ?  qry.push('disease_id') :  '';
    req.body.disease_name ?  qry.push('disease_name') :  '';
    req.body.disease_type ?  qry.push('disease_type') :  '';
    req.body.disease_rate ?  qry.push('disease_rate') :  '';
    req.body.incubation_period ?  qry.push('incubation_period') :  '';
//Economy
    req.body.gdp ?  qry.push('gdp') :  '';
    req.body.gdp_rank_world ?  qry.push('gdp_rank_world') :  '';
//Education
    req.body.Children_outSchool ?  qry.push('Children_outSchool') :  '';
    req.body.Secondary_outSchool ?  qry.push('Secondary_outSchool') :  '';
//Emergency_info
    req.body.embassy ?  qry.push('embassy') :  '';
    req.body.emergency_medical_service ?  qry.push('emergency_medical_service') :  '';
    req.body.policy ?  qry.push('policy') :  '';
    req.body.fire_station ?  qry.push('fire_station') :  ''; //+info_id
//Energy
    req.body.consumption ?  qry.push('consumption') :  '';
    req.body.energy_id ?  qry.push('energy_id') :  '';
//Gorv._Type
    req.body.gorv_type_name ?  qry.push('gorv_type_name') :  '';
    req.body.description ?  qry.push('description') :  ''; //+gorv_type_id
//Health
    req.body.disease_id ?  qry.push('disease_id') :  '';
//Infrastructure
    req.body.total_freight ?  qry.push('total_freight') :  '';
    req.body.passenges ?  qry.push('passenges') :  '';
    req.body.total_road_km ?  qry.push('total_road_km') :  '';
//Language
    req.body.language_id ?  qry.push('language_id') :  '';
//Literacy_rate
    req.body.total ?  qry.push('total') :  '';
//M_church
    req.body.church_id ?  qry.push('church_id') :  '';
//Missionary
    req.body.missionary_id ?  qry.push('missionary_id') :  '';
    req.body.name_en ?  qry.push('name_en') :  '';
    req.body.contact_info ?  qry.push('contact_info') :  ''; // + city_id
//Mission_School
    req.body.city_id ?  qry.push('city_id') :  '';
    req.body.mission_school_id ?  qry.push('mission_school_id') :  '';
    req.body.foundation_year ?  qry.push('foundation_year') :  '';
//Nation
    req.body.latitude ?  qry.push('latitude') :  '';
    req.body.longitude ?  qry.push('longitude') :  '';
    req.body.info_id ?  qry.push('info_id') :  '';
    req.body.gorv_type_id ?  qry.push('gorv_type_id') :  '';
//Nation_Capital
    req.body.capital_id ?  qry.push('capital_id') :  '';
//Nation_Language
    req.body.language_id ?  qry.push('language_id') :  '';
//Nation_Missionary
    req.body.missionary_id ?  qry.push('missionary_id') :  '';
//Nation_M_School
    req.body.mission_school_id ?  qry.push('mission_school_id') :  '';
//Population
    req.body.urban ?  qry.push('urban') :  '';
    req.body.rural ?  qry.push('rural') :  '';
    req.body.total ?  qry.push('total') :  '';
//Religious_ratio
    req.body.christianity ?  qry.push('christianity') :  '';
    req.body.islam ?  qry.push('islam') :  '';
    req.body.etc ?  qry.push('etc') :  '';
//Symptom
    req.body.symptom_id ?  qry.push('symptom_id') :  '';
    req.body.discription ?  qry.push('discription') :  '';

    
    if(nation.length == 0) res.send();
    if(qry.length == 0){
        res.send();
    }else{
        for(var i = 1 ; i< qry.length; i++)
            sql = sql + ", ?? "
    }
    sql = sql + "FROM `"+string_name+"`";
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
