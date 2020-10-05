var wms_layers = [];


        var lyr_EsriGraydark_0 = new ol.layer.Tile({
            'title': 'Esri Gray (dark)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_116th_House_cb_2018_us_cd116_500k_1 = new ol.format.GeoJSON();
var features_116th_House_cb_2018_us_cd116_500k_1 = format_116th_House_cb_2018_us_cd116_500k_1.readFeatures(json_116th_House_cb_2018_us_cd116_500k_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_116th_House_cb_2018_us_cd116_500k_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_116th_House_cb_2018_us_cd116_500k_1.addFeatures(features_116th_House_cb_2018_us_cd116_500k_1);
var lyr_116th_House_cb_2018_us_cd116_500k_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_116th_House_cb_2018_us_cd116_500k_1, 
                style: style_116th_House_cb_2018_us_cd116_500k_1,
                interactive: true,
    title: '116th_House_cb_2018_us_cd116_500k<br />\
    <img src="styles/legend/116th_House_cb_2018_us_cd116_500k_1_0.png" /> -0.73 - -0.55<br />\
    <img src="styles/legend/116th_House_cb_2018_us_cd116_500k_1_1.png" /> -0.55 - -0.37<br />\
    <img src="styles/legend/116th_House_cb_2018_us_cd116_500k_1_2.png" /> -0.37 - -0.18<br />\
    <img src="styles/legend/116th_House_cb_2018_us_cd116_500k_1_3.png" /> -0.18 - 0<br />\
    <img src="styles/legend/116th_House_cb_2018_us_cd116_500k_1_4.png" /> 0 - 0.18<br />\
    <img src="styles/legend/116th_House_cb_2018_us_cd116_500k_1_5.png" /> 0.18 - 0.37<br />\
    <img src="styles/legend/116th_House_cb_2018_us_cd116_500k_1_6.png" /> 0.37 - 0.55<br />\
    <img src="styles/legend/116th_House_cb_2018_us_cd116_500k_1_7.png" /> 0.55 - 0.88<br />'
        });

lyr_EsriGraydark_0.setVisible(true);lyr_116th_House_cb_2018_us_cd116_500k_1.setVisible(true);
var layersList = [lyr_EsriGraydark_0,lyr_116th_House_cb_2018_us_cd116_500k_1];
lyr_116th_House_cb_2018_us_cd116_500k_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'CD116FP': 'CD116FP', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'LSAD': 'LSAD', 'CDSESSN': 'CDSESSN', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'state_abbr': 'state_abbr', 'STCD': 'STCD', 'DWN_116thC_House_UnitedStates_STCD_field_1': 'DWN_116thC_House_UnitedStates_STCD_field_1', 'DWN_116thC_House_UnitedStates_STCD_congress': 'DWN_116thC_House_UnitedStates_STCD_congress', 'DWN_116thC_House_UnitedStates_STCD_chamber': 'DWN_116thC_House_UnitedStates_STCD_chamber', 'DWN_116thC_House_UnitedStates_STCD_icpsr': 'DWN_116thC_House_UnitedStates_STCD_icpsr', 'DWN_116thC_House_UnitedStates_STCD_state_icpsr': 'DWN_116thC_House_UnitedStates_STCD_state_icpsr', 'DWN_116thC_House_UnitedStates_STCD_district_code': 'DWN_116thC_House_UnitedStates_STCD_district_code', 'DWN_116thC_House_UnitedStates_STCD_state_abbrev': 'DWN_116thC_House_UnitedStates_STCD_state_abbrev', 'DWN_116thC_House_UnitedStates_STCD_party_code': 'DWN_116thC_House_UnitedStates_STCD_party_code', 'DWN_116thC_House_UnitedStates_STCD_occupancy': 'DWN_116thC_House_UnitedStates_STCD_occupancy', 'DWN_116thC_House_UnitedStates_STCD_last_means': 'DWN_116thC_House_UnitedStates_STCD_last_means', 'DWN_116thC_House_UnitedStates_STCD_bioname': 'DWN_116thC_House_UnitedStates_STCD_bioname', 'DWN_116thC_House_UnitedStates_STCD_bioguide_id': 'DWN_116thC_House_UnitedStates_STCD_bioguide_id', 'DWN_116thC_House_UnitedStates_STCD_born': 'DWN_116thC_House_UnitedStates_STCD_born', 'DWN_116thC_House_UnitedStates_STCD_died': 'DWN_116thC_House_UnitedStates_STCD_died', 'DWN_116thC_House_UnitedStates_STCD_nominate_dim1': 'DWN_116thC_House_UnitedStates_STCD_nominate_dim1', 'DWN_116thC_House_UnitedStates_STCD_nominate_dim2': 'DWN_116thC_House_UnitedStates_STCD_nominate_dim2', 'DWN_116thC_House_UnitedStates_STCD_nominate_log_likelihood': 'DWN_116thC_House_UnitedStates_STCD_nominate_log_likelihood', 'DWN_116thC_House_UnitedStates_STCD_nominate_geo_mean_probability': 'DWN_116thC_House_UnitedStates_STCD_nominate_geo_mean_probability', 'DWN_116thC_House_UnitedStates_STCD_nominate_number_of_votes': 'DWN_116thC_House_UnitedStates_STCD_nominate_number_of_votes', 'DWN_116thC_House_UnitedStates_STCD_nominate_number_of_errors': 'DWN_116thC_House_UnitedStates_STCD_nominate_number_of_errors', 'DWN_116thC_House_UnitedStates_STCD_conditional': 'DWN_116thC_House_UnitedStates_STCD_conditional', 'DWN_116thC_House_UnitedStates_STCD_nokken_poole_dim1': 'DWN_116thC_House_UnitedStates_STCD_nokken_poole_dim1', 'DWN_116thC_House_UnitedStates_STCD_nokken_poole_dim2': 'DWN_116thC_House_UnitedStates_STCD_nokken_poole_dim2', 'DWN_116thC_House_UnitedStates_STCD_CD116FP': 'DWN_116thC_House_UnitedStates_STCD_CD116FP', 'STCD_nd1': 'STCD_nd1', });
lyr_116th_House_cb_2018_us_cd116_500k_1.set('fieldImages', {'STATEFP': 'TextEdit', 'CD116FP': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'LSAD': 'TextEdit', 'CDSESSN': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'state_abbr': 'TextEdit', 'STCD': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_field_1': 'Range', 'DWN_116thC_House_UnitedStates_STCD_congress': 'Range', 'DWN_116thC_House_UnitedStates_STCD_chamber': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_icpsr': 'Range', 'DWN_116thC_House_UnitedStates_STCD_state_icpsr': 'Range', 'DWN_116thC_House_UnitedStates_STCD_district_code': 'Range', 'DWN_116thC_House_UnitedStates_STCD_state_abbrev': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_party_code': 'Range', 'DWN_116thC_House_UnitedStates_STCD_occupancy': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_last_means': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_bioname': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_bioguide_id': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_born': 'Range', 'DWN_116thC_House_UnitedStates_STCD_died': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_nominate_dim1': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_nominate_dim2': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_nominate_log_likelihood': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_nominate_geo_mean_probability': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_nominate_number_of_votes': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_nominate_number_of_errors': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_conditional': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_nokken_poole_dim1': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_nokken_poole_dim2': 'TextEdit', 'DWN_116thC_House_UnitedStates_STCD_CD116FP': 'Range', 'STCD_nd1': 'TextEdit', });
lyr_116th_House_cb_2018_us_cd116_500k_1.set('fieldLabels', {'STATEFP': 'no label', 'CD116FP': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'LSAD': 'no label', 'CDSESSN': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'state_abbr': 'no label', 'STCD': 'inline label', 'DWN_116thC_House_UnitedStates_STCD_field_1': 'no label', 'DWN_116thC_House_UnitedStates_STCD_congress': 'no label', 'DWN_116thC_House_UnitedStates_STCD_chamber': 'no label', 'DWN_116thC_House_UnitedStates_STCD_icpsr': 'no label', 'DWN_116thC_House_UnitedStates_STCD_state_icpsr': 'no label', 'DWN_116thC_House_UnitedStates_STCD_district_code': 'no label', 'DWN_116thC_House_UnitedStates_STCD_state_abbrev': 'no label', 'DWN_116thC_House_UnitedStates_STCD_party_code': 'no label', 'DWN_116thC_House_UnitedStates_STCD_occupancy': 'no label', 'DWN_116thC_House_UnitedStates_STCD_last_means': 'no label', 'DWN_116thC_House_UnitedStates_STCD_bioname': 'no label', 'DWN_116thC_House_UnitedStates_STCD_bioguide_id': 'no label', 'DWN_116thC_House_UnitedStates_STCD_born': 'no label', 'DWN_116thC_House_UnitedStates_STCD_died': 'no label', 'DWN_116thC_House_UnitedStates_STCD_nominate_dim1': 'no label', 'DWN_116thC_House_UnitedStates_STCD_nominate_dim2': 'no label', 'DWN_116thC_House_UnitedStates_STCD_nominate_log_likelihood': 'no label', 'DWN_116thC_House_UnitedStates_STCD_nominate_geo_mean_probability': 'no label', 'DWN_116thC_House_UnitedStates_STCD_nominate_number_of_votes': 'no label', 'DWN_116thC_House_UnitedStates_STCD_nominate_number_of_errors': 'no label', 'DWN_116thC_House_UnitedStates_STCD_conditional': 'no label', 'DWN_116thC_House_UnitedStates_STCD_nokken_poole_dim1': 'no label', 'DWN_116thC_House_UnitedStates_STCD_nokken_poole_dim2': 'no label', 'DWN_116thC_House_UnitedStates_STCD_CD116FP': 'no label', 'STCD_nd1': 'inline label', });
lyr_116th_House_cb_2018_us_cd116_500k_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});