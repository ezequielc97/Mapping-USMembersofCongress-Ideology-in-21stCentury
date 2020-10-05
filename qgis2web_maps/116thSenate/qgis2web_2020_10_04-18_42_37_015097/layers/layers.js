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
var format_116th_SenateAvg_cb_2017_us_state_500k_1 = new ol.format.GeoJSON();
var features_116th_SenateAvg_cb_2017_us_state_500k_1 = format_116th_SenateAvg_cb_2017_us_state_500k_1.readFeatures(json_116th_SenateAvg_cb_2017_us_state_500k_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_116th_SenateAvg_cb_2017_us_state_500k_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_116th_SenateAvg_cb_2017_us_state_500k_1.addFeatures(features_116th_SenateAvg_cb_2017_us_state_500k_1);
var lyr_116th_SenateAvg_cb_2017_us_state_500k_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_116th_SenateAvg_cb_2017_us_state_500k_1, 
                style: style_116th_SenateAvg_cb_2017_us_state_500k_1,
                interactive: true,
    title: '116th_SenateAvg_cb_2017_us_state_500k<br />\
    <img src="styles/legend/116th_SenateAvg_cb_2017_us_state_500k_1_0.png" /> -0.64 - -0.48<br />\
    <img src="styles/legend/116th_SenateAvg_cb_2017_us_state_500k_1_1.png" /> -0.48 - -0.32<br />\
    <img src="styles/legend/116th_SenateAvg_cb_2017_us_state_500k_1_2.png" /> -0.32 - -0.16<br />\
    <img src="styles/legend/116th_SenateAvg_cb_2017_us_state_500k_1_3.png" /> -0.16 - 0<br />\
    <img src="styles/legend/116th_SenateAvg_cb_2017_us_state_500k_1_4.png" /> 0 - 0.16<br />\
    <img src="styles/legend/116th_SenateAvg_cb_2017_us_state_500k_1_5.png" /> 0.16 - 0.32<br />\
    <img src="styles/legend/116th_SenateAvg_cb_2017_us_state_500k_1_6.png" /> 0.32 - 0.48<br />\
    <img src="styles/legend/116th_SenateAvg_cb_2017_us_state_500k_1_7.png" /> 0.48 - 0.66<br />'
        });

lyr_EsriGraydark_0.setVisible(true);lyr_116th_SenateAvg_cb_2017_us_state_500k_1.setVisible(true);
var layersList = [lyr_EsriGraydark_0,lyr_116th_SenateAvg_cb_2017_us_state_500k_1];
lyr_116th_SenateAvg_cb_2017_us_state_500k_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'DWN_116thC_avgSenate_National_STUSPS_avg_nom_dim1': 'DWN_116thC_avgSenate_National_STUSPS_avg_nom_dim1', 'ST_nomd1': 'ST_nomd1', });
lyr_116th_SenateAvg_cb_2017_us_state_500k_1.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'DWN_116thC_avgSenate_National_STUSPS_avg_nom_dim1': 'TextEdit', 'ST_nomd1': 'TextEdit', });
lyr_116th_SenateAvg_cb_2017_us_state_500k_1.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'DWN_116thC_avgSenate_National_STUSPS_avg_nom_dim1': 'no label', 'ST_nomd1': 'no label', });
lyr_116th_SenateAvg_cb_2017_us_state_500k_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});