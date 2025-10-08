var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_counties_1 = new ol.format.GeoJSON();
var features_counties_1 = format_counties_1.readFeatures(json_counties_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_counties_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_counties_1.addFeatures(features_counties_1);
var lyr_counties_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_counties_1, 
                style: style_counties_1,
                popuplayertitle: 'counties',
                interactive: true,
                title: '<img src="styles/legend/counties_1.png" /> counties'
            });
var format_KEN_Roads_2 = new ol.format.GeoJSON();
var features_KEN_Roads_2 = format_KEN_Roads_2.readFeatures(json_KEN_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEN_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEN_Roads_2.addFeatures(features_KEN_Roads_2);
var lyr_KEN_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEN_Roads_2, 
                style: style_KEN_Roads_2,
                popuplayertitle: 'KEN_Roads',
                interactive: true,
                title: '<img src="styles/legend/KEN_Roads_2.png" /> KEN_Roads'
            });
var format_KEN_Rivers_3 = new ol.format.GeoJSON();
var features_KEN_Rivers_3 = format_KEN_Rivers_3.readFeatures(json_KEN_Rivers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEN_Rivers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEN_Rivers_3.addFeatures(features_KEN_Rivers_3);
var lyr_KEN_Rivers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEN_Rivers_3, 
                style: style_KEN_Rivers_3,
                popuplayertitle: 'KEN_Rivers',
                interactive: true,
                title: '<img src="styles/legend/KEN_Rivers_3.png" /> KEN_Rivers'
            });
var format_Mineraldeposit_4 = new ol.format.GeoJSON();
var features_Mineraldeposit_4 = format_Mineraldeposit_4.readFeatures(json_Mineraldeposit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mineraldeposit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mineraldeposit_4.addFeatures(features_Mineraldeposit_4);
cluster_Mineraldeposit_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Mineraldeposit_4
});
var lyr_Mineraldeposit_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Mineraldeposit_4, 
                style: style_Mineraldeposit_4,
                popuplayertitle: 'Mineral deposit',
                interactive: true,
                title: '<img src="styles/legend/Mineraldeposit_4.png" /> Mineral deposit'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_counties_1.setVisible(true);lyr_KEN_Roads_2.setVisible(true);lyr_KEN_Rivers_3.setVisible(true);lyr_Mineraldeposit_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_counties_1,lyr_KEN_Roads_2,lyr_KEN_Rivers_3,lyr_Mineraldeposit_4];
lyr_counties_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_': 'ID_', 'COUNTY_NAM': 'COUNTY_NAM', 'CONST_CODE': 'CONST_CODE', 'CONSTITUEN': 'CONSTITUEN', 'COUNTY_COD': 'COUNTY_COD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KEN_Roads_2.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'KENROAD_': 'KENROAD_', 'KENROAD_ID': 'KENROAD_ID', });
lyr_KEN_Rivers_3.set('fieldAliases', {'NAME': 'NAME', });
lyr_Mineraldeposit_4.set('fieldAliases', {'FID_africa': 'FID_africa', 'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'SOVEREIGN': 'SOVEREIGN', 'POP_CNTRY': 'POP_CNTRY', 'SQKM_CNTRY': 'SQKM_CNTRY', 'SQMI_CNTRY': 'SQMI_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'COLOR_MAP': 'COLOR_MAP', 'FID_deposi': 'FID_deposi', 'gid': 'gid', 'dep_name': 'dep_name', 'country': 'country', 'state': 'state', 'latitude': 'latitude', 'longitude': 'longitude', 'commodity': 'commodity', 'dep_type': 'dep_type', 'type_detai': 'type_detai', 'model_code': 'model_code', 'model_name': 'model_name', 'metallic': 'metallic', 'citation': 'citation', 'x': 'x', });
lyr_counties_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_': 'TextEdit', 'COUNTY_NAM': 'TextEdit', 'CONST_CODE': 'TextEdit', 'CONSTITUEN': 'TextEdit', 'COUNTY_COD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KEN_Roads_2.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'KENROAD_': 'TextEdit', 'KENROAD_ID': 'TextEdit', });
lyr_KEN_Rivers_3.set('fieldImages', {'NAME': 'TextEdit', });
lyr_Mineraldeposit_4.set('fieldImages', {'FID_africa': 'TextEdit', 'FIPS_CNTRY': 'TextEdit', 'GMI_CNTRY': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'POP_CNTRY': 'TextEdit', 'SQKM_CNTRY': 'TextEdit', 'SQMI_CNTRY': 'TextEdit', 'CURR_TYPE': 'TextEdit', 'CURR_CODE': 'TextEdit', 'LANDLOCKED': 'TextEdit', 'COLOR_MAP': 'TextEdit', 'FID_deposi': 'TextEdit', 'gid': 'Range', 'dep_name': 'TextEdit', 'country': 'TextEdit', 'state': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'commodity': 'TextEdit', 'dep_type': 'TextEdit', 'type_detai': 'TextEdit', 'model_code': 'TextEdit', 'model_name': 'TextEdit', 'metallic': 'TextEdit', 'citation': 'TextEdit', 'x': 'TextEdit', });
lyr_counties_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'ID_': 'inline label - always visible', 'COUNTY_NAM': 'inline label - always visible', 'CONST_CODE': 'inline label - always visible', 'CONSTITUEN': 'inline label - always visible', 'COUNTY_COD': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_KEN_Roads_2.set('fieldLabels', {'FNODE_': 'inline label - always visible', 'TNODE_': 'inline label - always visible', 'LPOLY_': 'inline label - always visible', 'RPOLY_': 'inline label - always visible', 'LENGTH': 'inline label - always visible', 'KENROAD_': 'inline label - always visible', 'KENROAD_ID': 'inline label - always visible', });
lyr_KEN_Rivers_3.set('fieldLabels', {'NAME': 'inline label - always visible', });
lyr_Mineraldeposit_4.set('fieldLabels', {'FID_africa': 'inline label - always visible', 'FIPS_CNTRY': 'inline label - always visible', 'GMI_CNTRY': 'inline label - always visible', 'CNTRY_NAME': 'inline label - always visible', 'SOVEREIGN': 'inline label - always visible', 'POP_CNTRY': 'inline label - always visible', 'SQKM_CNTRY': 'inline label - always visible', 'SQMI_CNTRY': 'inline label - always visible', 'CURR_TYPE': 'inline label - always visible', 'CURR_CODE': 'inline label - always visible', 'LANDLOCKED': 'inline label - always visible', 'COLOR_MAP': 'inline label - always visible', 'FID_deposi': 'inline label - always visible', 'gid': 'inline label - always visible', 'dep_name': 'inline label - always visible', 'country': 'inline label - always visible', 'state': 'inline label - always visible', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'commodity': 'inline label - always visible', 'dep_type': 'inline label - always visible', 'type_detai': 'inline label - always visible', 'model_code': 'inline label - always visible', 'model_name': 'inline label - always visible', 'metallic': 'inline label - always visible', 'citation': 'inline label - always visible', 'x': 'inline label - always visible', });
lyr_Mineraldeposit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});